#!/usr/bin/env python3
"""
Frontmatter Auto-Filler
Fills missing: area, category (from taxonomy rules), summary, tags (via Claude API).
Skips: date, speaker — those require manual review.

Usage:
  uv run scripts/frontmatter_filler.py [--dry-run] [--dir notes|posts|all] [--limit N]
"""

import json
import re
import sys
import time
import argparse
from pathlib import Path
from collections import Counter

import yaml
import anthropic

# ── Paths ─────────────────────────────────────────────────────────────────────

PROJECT_ROOT = Path(__file__).parent.parent
SRC_ROOT     = PROJECT_ROOT / "src"
TAXONOMY_PATH = Path("/Users/pengl/projects/puresubs/packages/automation-engine-ytdlp/config/taxonomy.json")

DIRS = {
    "notes": SRC_ROOT / "notes",
    "posts": SRC_ROOT / "posts",
}

INTERNAL_TAGS = {"视频文稿", "draft"}

# ── Taxonomy Loading ───────────────────────────────────────────────────────────

def load_taxonomy() -> dict:
    return json.loads(TAXONOMY_PATH.read_text())


def build_tag_to_area_category(taxonomy: dict) -> dict[str, tuple[str, str]]:
    """Returns {tag: (area_id, category_id)} for every match_tag in taxonomy."""
    mapping: dict[str, tuple[str, str]] = {}
    for area_id, area_data in taxonomy["taxonomy"]["areas"].items():
        for cat in area_data["categories"]:
            cat_id = cat["id"]
            for tag in cat.get("match_tags", []):
                mapping[tag.lower()] = (area_id, cat_id)
    return mapping


# ── Frontmatter I/O ───────────────────────────────────────────────────────────

def read_file(path: Path) -> tuple[dict, str]:
    """Returns (frontmatter_dict, body_text)."""
    text = path.read_text(encoding="utf-8")
    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}, text
    fm = yaml.safe_load(parts[1]) or {}
    body = parts[2].strip()
    return fm, body


def write_file(path: Path, fm: dict, body: str) -> None:
    """Writes updated frontmatter back to file, preserving body."""
    # Preserve key order: use yaml.dump with sort_keys=False
    fm_text = yaml.dump(
        fm,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
        width=200,
    )
    new_content = f"---\n{fm_text}---\n\n{body}\n"
    path.write_text(new_content, encoding="utf-8")


# ── Deterministic: area/category from tags ────────────────────────────────────

def infer_area_category(
    tags: list[str],
    tag_map: dict[str, tuple[str, str]],
) -> tuple[str | None, str | None]:
    """Match existing tags against taxonomy; return (area, category) best guess."""
    if not tags:
        return None, None

    vote_counter: Counter = Counter()
    for tag in tags:
        t = tag.lower().strip()
        if t in tag_map:
            vote_counter[tag_map[t]] += 1

    if not vote_counter:
        return None, None

    best = vote_counter.most_common(1)[0][0]  # (area_id, cat_id)
    return best[0], best[1]


# ── AI: summary and tags ───────────────────────────────────────────────────────

def build_ai_prompt(
    title: str,
    body: str,
    existing_tags: list[str],
    taxonomy: dict,
    need_summary: bool = True,
    need_tags: bool = True,
    need_area: bool = False,
    need_category: bool = False,
) -> str:
    # Build flat tag vocabulary from taxonomy
    all_match_tags: list[str] = []
    for area_data in taxonomy["taxonomy"]["areas"].values():
        for cat in area_data["categories"]:
            all_match_tags.extend(cat.get("match_tags", []))
    tag_vocab = ", ".join(sorted(set(all_match_tags)))

    # Build area/category reference
    area_lines: list[str] = []
    for area_id, area_data in taxonomy["taxonomy"]["areas"].items():
        cats = ", ".join(c["id"] for c in area_data["categories"])
        area_lines.append(f'  "{area_id}" → categories: [{cats}]')
    area_ref = "\n".join(area_lines)

    tasks: list[str] = []
    response_fields: list[str] = []

    if need_summary:
        tasks.append("1. Write a concise CHINESE summary (2-3 sentences, 80-150 characters) capturing the core ideas.")
        response_fields.append('  "summary": "中文摘要..."')
    if need_tags:
        n = len(tasks) + 1
        tasks.append(f"{n}. Select 3-8 tags from the tag vocabulary (lowercase, kebab-case, singular). May add 1-2 extra tags if clearly needed.")
        response_fields.append('  "tags": ["tag1", "tag2"]')
    if need_area or need_category:
        n = len(tasks) + 1
        tasks.append(f"{n}. Based on the content and existing tags, pick the best matching area and category from the taxonomy below.")
        response_fields.append('  "area": "area-id"')
        response_fields.append('  "category": "category-id"')

    task_text = "\n".join(tasks)

    # Build XML example output
    xml_fields: list[str] = []
    if need_summary:
        xml_fields.append("<summary>中文摘要</summary>")
    if need_tags:
        xml_fields.append("<tags>tag1, tag2, tag3</tags>")
    if need_area or need_category:
        xml_fields.append("<area>area-id</area>")
        xml_fields.append("<category>category-id</category>")
    xml_example = "\n".join(xml_fields)

    return f"""You are a knowledge management assistant. Analyze the following article and fill in missing metadata.

Article Title: {title}
---
{body[:3000]}
---

Existing tags: {', '.join(existing_tags) if existing_tags else 'none'}

Tasks:
{task_text}

Tag vocabulary: {tag_vocab}

Taxonomy (area → valid categories):
{area_ref}

Respond ONLY using these XML tags, no other text:
{xml_example}"""


def call_claude_for_metadata(
    client: anthropic.Anthropic,
    title: str,
    body: str,
    existing_tags: list[str],
    taxonomy: dict,
    need_summary: bool = True,
    need_tags: bool = True,
    need_area: bool = False,
    need_category: bool = False,
    retries: int = 2,
) -> dict:
    """Returns dict with keys: summary, tags, area, category. Values are None if not requested or failed."""
    prompt = build_ai_prompt(
        title, body, existing_tags, taxonomy,
        need_summary=need_summary, need_tags=need_tags,
        need_area=need_area, need_category=need_category,
    )
    for attempt in range(retries + 1):
        try:
            msg = client.messages.create(
                model="claude-haiku-4-5-20251001",
                max_tokens=512,
                messages=[{"role": "user", "content": prompt}],
            )
            raw = msg.content[0].text.strip()
            result: dict = {}

            def extract_xml(tag: str) -> str | None:
                m = re.search(rf"<{tag}>(.*?)</{tag}>", raw, re.DOTALL)
                return m.group(1).strip() if m else None

            if need_summary:
                result["summary"] = extract_xml("summary") or None
            if need_tags:
                raw_tags = extract_xml("tags")
                if raw_tags:
                    tags = [t.lower().strip() for t in raw_tags.split(",") if t.strip()]
                    result["tags"] = tags or None
                else:
                    result["tags"] = None
            if need_area:
                result["area"] = extract_xml("area") or None
            if need_category:
                result["category"] = extract_xml("category") or None

            # Require at least one field to be populated
            if not any(v for v in result.values()):
                raise ValueError("No fields extracted from response")
            return result
        except Exception as e:
            if attempt < retries:
                time.sleep(0.5)
                continue
            print(f"    [Claude API error] {e}", file=sys.stderr)
            return {}
    return {}


# ── Main ──────────────────────────────────────────────────────────────────────

def is_empty(value: object) -> bool:
    if value is None:
        return True
    if isinstance(value, str):
        return value.strip() == ""
    if isinstance(value, list):
        real = [v for v in value if isinstance(v, str) and v.strip() and v not in INTERNAL_TAGS]
        return len(real) == 0
    return False


def process_file(
    path: Path,
    tag_map: dict,
    taxonomy: dict,
    client: anthropic.Anthropic,
    dry_run: bool,
) -> dict[str, str]:
    """Process one file. Returns dict of {field: action_taken}."""
    fm, body = read_file(path)
    changes: dict[str, str] = {}

    existing_tags: list[str] = [t for t in (fm.get("tags") or [])
                                  if isinstance(t, str) and t not in INTERNAL_TAGS]

    need_area     = is_empty(fm.get("area"))
    need_category = is_empty(fm.get("category"))
    need_summary  = is_empty(fm.get("summary"))
    need_tags     = is_empty(fm.get("tags"))

    # Skip if nothing to do
    if not any([need_area, need_category, need_summary, need_tags]):
        return {}

    # ── Step 1: area/category from existing tags (deterministic) ──────────────
    if (need_area or need_category) and existing_tags:
        area, category = infer_area_category(existing_tags, tag_map)
        if area and need_area:
            changes["area"] = area
            fm["area"] = area
        if category and need_category:
            changes["category"] = category
            fm["category"] = category

    # ── Step 2: AI call for any still-missing fields ──────────────────────────
    still_need_area     = need_area     and "area"     not in changes
    still_need_category = need_category and "category" not in changes
    ai_needed = need_summary or need_tags or still_need_area or still_need_category

    if ai_needed:
        title = fm.get("title") or path.stem
        ai = call_claude_for_metadata(
            client, title, body, existing_tags, taxonomy,
            need_summary=need_summary,
            need_tags=need_tags,
            need_area=still_need_area,
            need_category=still_need_category,
        )

        if need_summary and ai.get("summary"):
            changes["summary"] = f'"{ai["summary"][:60]}..."'
            fm["summary"] = ai["summary"]

        if need_tags and ai.get("tags"):
            internal = [t for t in (fm.get("tags") or []) if t in INTERNAL_TAGS]
            fm["tags"] = internal + ai["tags"]
            changes["tags"] = f"[{', '.join(ai['tags'][:3])}{'...' if len(ai['tags']) > 3 else ''}]"

        if still_need_area and ai.get("area"):
            changes["area"] = ai["area"]
            fm["area"] = ai["area"]

        if still_need_category and ai.get("category"):
            changes["category"] = ai["category"]
            fm["category"] = ai["category"]

    # ── Step 3: Last-resort taxonomy re-check after AI filled new tags ─────────
    if (need_area and "area" not in changes) or (need_category and "category" not in changes):
        new_tags = [t for t in (fm.get("tags") or []) if isinstance(t, str) and t not in INTERNAL_TAGS]
        if new_tags:
            area, category = infer_area_category(new_tags, tag_map)
            if area and need_area and "area" not in changes:
                changes["area"] = area
                fm["area"] = area
            if category and need_category and "category" not in changes:
                changes["category"] = category
                fm["category"] = category

    if not changes:
        return {}

    if not dry_run:
        write_file(path, fm, body)

    return changes


def main() -> None:
    parser = argparse.ArgumentParser(description="Auto-fill missing frontmatter fields")
    parser.add_argument("--dry-run",   action="store_true", help="Preview changes without writing")
    parser.add_argument("--dir",       choices=["notes", "posts", "all"], default="all")
    parser.add_argument("--limit",     type=int, default=0, help="Process at most N files (0 = all)")
    parser.add_argument("--delay",     type=float, default=0.2, help="Seconds between API calls")
    args = parser.parse_args()

    taxonomy = load_taxonomy()
    tag_map  = build_tag_to_area_category(taxonomy)
    client   = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from env

    targets = list(DIRS.values()) if args.dir == "all" else [DIRS[args.dir]]
    all_files: list[Path] = []
    for d in targets:
        all_files.extend(sorted(d.glob("*.md")))

    # Filter to only files with at least one missing target field
    TARGET_FIELDS = {"area", "category", "summary", "tags"}
    def needs_work(path: Path) -> bool:
        try:
            fm, _ = read_file(path)
            return any(is_empty(fm.get(f)) for f in TARGET_FIELDS)
        except Exception:
            return False

    candidates = [f for f in all_files if needs_work(f)]
    if args.limit:
        candidates = candidates[: args.limit]

    mode = "[DRY RUN] " if args.dry_run else ""
    print(f"\n{mode}Processing {len(candidates)} files (out of {len(all_files)} total)...\n")

    total_changes: dict[str, int] = Counter()
    failed: list[str] = []

    for i, path in enumerate(candidates, 1):
        rel = str(path.relative_to(PROJECT_ROOT))
        print(f"  [{i:4d}/{len(candidates)}] {rel}", end="", flush=True)
        try:
            changes = process_file(path, tag_map, taxonomy, client, args.dry_run)
            if changes:
                for field in changes:
                    total_changes[field] += 1
                detail = "  →  " + ", ".join(f"{k}={v}" for k, v in changes.items())
                print(f"\n          {detail}")
            else:
                print("  (skipped — already complete)")
            time.sleep(args.delay)
        except Exception as e:
            print(f"  ERROR: {e}")
            failed.append(rel)

    print(f"\n{'='*60}")
    print(f"  {'[DRY RUN] ' if args.dry_run else ''}完成！")
    for field, count in sorted(total_changes.items()):
        print(f"    {field:12s}: {count} 个文件已补全")
    if failed:
        print(f"\n  失败文件 ({len(failed)}):")
        for f in failed:
            print(f"    {f}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
