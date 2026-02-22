#!/usr/bin/env python3
"""
Frontmatter Audit Tool
Scans all notes and posts for missing or empty critical frontmatter fields.
Usage: uv run scripts/frontmatter_audit.py [--json] [--dir notes|posts|all]
"""

import sys
import json
import argparse
from pathlib import Path

import yaml

# ── Config ────────────────────────────────────────────────────────────────────

SRC_ROOT = Path(__file__).parent.parent / "src"

DIRS = {
    "notes": SRC_ROOT / "notes",
    "posts": SRC_ROOT / "posts",
}

# Fields to audit: (field_name, severity, description)
# severity: "error" = must have a real value, "warn" = empty is suspicious
CRITICAL_FIELDS: list[tuple[str, str, str]] = [
    ("title",    "error", "文章标题"),
    ("date",     "error", "发布日期"),
    ("area",     "error", "知识领域 (area)"),
    ("tags",     "error", "标签列表 (tags)"),
    ("summary",  "error", "内容摘要 (summary)"),
    ("category", "error", "分类 (category)"),
    ("speaker",  "error", "主讲人 (speaker)"),
    ("insight",  "warn",  "个人洞察 (insight)"),
]

# Tags that count as "real" tags (not just internal markers)
INTERNAL_TAGS = {"视频文稿", "draft"}


# ── Helpers ───────────────────────────────────────────────────────────────────

def parse_frontmatter(path: Path) -> dict | None:
    """Return parsed frontmatter dict, or None if unparseable."""
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return None
    parts = text.split("---", 2)
    if len(parts) < 3:
        return None
    try:
        return yaml.safe_load(parts[1]) or {}
    except yaml.YAMLError:
        return None


def is_empty(value: object) -> bool:
    """True when a frontmatter value is effectively absent."""
    if value is None:
        return True
    if isinstance(value, str):
        return value.strip() == ""
    if isinstance(value, list):
        real = [v for v in value if isinstance(v, str) and v.strip() and v not in INTERNAL_TAGS]
        return len(real) == 0
    return False


def audit_file(path: Path) -> dict:
    """Audit one file; returns a result dict."""
    fm = parse_frontmatter(path)
    issues: list[dict[str, str]] = []

    if fm is None:
        return {
            "file": str(path.relative_to(SRC_ROOT.parent)),
            "parse_error": True,
            "issues": [{"field": "—", "severity": "error", "desc": "无法解析 frontmatter"}],
        }

    for field, severity, desc in CRITICAL_FIELDS:
        val = fm.get(field)
        if is_empty(val):
            # speaker/insight/category: only warn, not always required
            issues.append({"field": field, "severity": severity, "desc": desc})

    return {
        "file": str(path.relative_to(SRC_ROOT.parent)),
        "parse_error": False,
        "issues": issues,
    }


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="Frontmatter completeness audit")
    parser.add_argument("--json", action="store_true", help="Output raw JSON")
    parser.add_argument("--dir", choices=["notes", "posts", "all"], default="all",
                        help="Which directory to scan (default: all)")
    parser.add_argument("--errors-only", action="store_true",
                        help="Only show files with ERROR-level issues")
    parser.add_argument("--stats", action="store_true",
                        help="Show field-level breakdown statistics only")
    args = parser.parse_args()

    targets = list(DIRS.values()) if args.dir == "all" else [DIRS[args.dir]]

    all_files: list[Path] = []
    for d in targets:
        all_files.extend(sorted(d.glob("*.md")))

    all_results = [audit_file(f) for f in all_files]
    total_files = len(all_files)

    # ── Stats output ──
    if args.stats:
        from collections import Counter
        field_counter: Counter = Counter()
        for r in all_results:
            for issue in r["issues"]:
                field_counter[issue["field"]] += 1
        error_count = sum(1 for r in all_results if any(i["severity"] == "error" for i in r["issues"]))
        warn_count  = sum(1 for r in all_results if r["issues"]) - error_count
        print(f"\n{'='*55}")
        print(f"  字段缺失统计 (共 {total_files} 个文件，ERROR: {error_count}，WARN-only: {warn_count})")
        print(f"{'='*55}")
        for field, count in field_counter.most_common():
            pct = count / total_files * 100
            bar = "█" * int(pct / 2)
            print(f"  {field:14s}  {count:4d} 个  ({pct:5.1f}%)  {bar}")
        print(f"{'='*55}\n")
        return

    # Filter for human/json display
    results = all_results
    if args.errors_only:
        results = [r for r in results if any(i["severity"] == "error" for i in r["issues"])]
    else:
        results = [r for r in results if r["issues"]]

    # ── JSON output ──
    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
        return

    # ── Human-readable output ──
    total_files = len(all_files)  # noqa: F841 (used above in stats branch too)
    problem_files = len(results)
    error_files = sum(1 for r in results if any(i["severity"] == "error" for i in r["issues"]))
    warn_files = problem_files - error_files

    print(f"\n{'='*72}")
    print(f"  Frontmatter Audit Report")
    print(f"{'='*72}")
    print(f"  扫描文件: {total_files}  |  有问题: {problem_files}  |  ERROR: {error_files}  |  WARN-only: {warn_files}")
    print(f"{'='*72}\n")

    if not results:
        print("  ✅ 所有文件 frontmatter 完整，无问题！")
        return

    # Group by severity: errors first
    errors = [r for r in results if any(i["severity"] == "error" for i in r["issues"])]
    warns  = [r for r in results if r not in errors]

    def print_group(group: list[dict], label: str, icon: str) -> None:
        if not group:
            return
        print(f"{'─'*72}")
        print(f"  {icon}  {label} ({len(group)} 个文件)")
        print(f"{'─'*72}")
        for r in group:
            print(f"\n  📄 {r['file']}")
            for issue in r["issues"]:
                marker = "❌" if issue["severity"] == "error" else "⚠️ "
                print(f"      {marker} [{issue['field']:12s}] {issue['desc']}")

    print_group(errors, "ERROR — 缺少必填字段", "❌")
    print_group(warns,  "WARN  — 建议补全字段", "⚠️ ")

    print(f"\n{'='*72}")
    print(f"  共 {problem_files} 个文件需要关注")
    print(f"{'='*72}\n")


if __name__ == "__main__":
    main()
