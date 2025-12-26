#!/usr/bin/env python3
"""
migrate_areas.py - Migrate Area fields according to taxonomy v6.0

Migration Rules:
- society-systems + category:geopolitics -> area:geopolitics
- society-systems + other categories -> area:society-thinking
- market-analysis -> finance-wealth
- tech-insights -> tech-engineering
- personal-systems -> life-family
- tech-work -> work-career
- personal-growth -> life-family
- digital-garden -> knowledge-meta
- public-thinking -> society-thinking
"""

import os
import re
import sys
from pathlib import Path

# Migration rules
AREA_MIGRATION = {
    # Direct mappings
    "market-analysis": "finance-wealth",
    "tech-insights": "tech-engineering",
    "personal-systems": "life-family",
    "tech-work": "work-career",
    "personal-growth": "life-family",
    "digital-garden": "knowledge-meta",
    "public-thinking": "society-thinking",
}

# Categories that should map to geopolitics area
GEOPOLITICS_CATEGORIES = {
    "geopolitics",
    "macro-economy",
    "macro-economics",
}

def extract_frontmatter(content: str) -> tuple[str | None, str]:
    """Extract YAML frontmatter and body from markdown content."""
    if not content.startswith("---"):
        return None, content
    
    end_match = re.search(r"\n---\s*\n", content[3:])
    if not end_match:
        return None, content
    
    end_pos = end_match.end() + 3
    frontmatter = content[4:end_match.start() + 3]
    body = content[end_pos:]
    return frontmatter, body

def get_field_value(frontmatter: str, field: str) -> str | None:
    """Extract a field value from frontmatter."""
    pattern = rf'^{field}:\s*["\']?([^"\'\n]+)["\']?\s*$'
    match = re.search(pattern, frontmatter, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return None

def update_area(frontmatter: str, old_area: str, new_area: str) -> str:
    """Update the area field in frontmatter."""
    pattern = rf'^(area:\s*)["\']?{re.escape(old_area)}["\']?\s*$'
    replacement = rf'\g<1>"{new_area}"'
    return re.sub(pattern, replacement, frontmatter, flags=re.MULTILINE)

def determine_new_area(current_area: str, category: str | None) -> str | None:
    """Determine the new area based on migration rules."""
    # Direct mapping
    if current_area in AREA_MIGRATION:
        return AREA_MIGRATION[current_area]
    
    # Special case: society-systems
    if current_area == "society-systems":
        if category and category.lower() in GEOPOLITICS_CATEGORIES:
            return "geopolitics"
        else:
            return "society-thinking"
    
    return None

def process_file(filepath: Path, dry_run: bool = True) -> dict | None:
    """Process a single markdown file."""
    try:
        content = filepath.read_text(encoding="utf-8")
    except Exception as e:
        print(f"  Error reading {filepath}: {e}")
        return None
    
    frontmatter, body = extract_frontmatter(content)
    if not frontmatter:
        return None
    
    current_area = get_field_value(frontmatter, "area")
    if not current_area:
        return None
    
    category = get_field_value(frontmatter, "category")
    new_area = determine_new_area(current_area, category)
    
    if not new_area:
        return None
    
    if new_area == current_area:
        return None
    
    result = {
        "file": str(filepath),
        "old_area": current_area,
        "new_area": new_area,
        "category": category
    }
    
    if not dry_run:
        new_frontmatter = update_area(frontmatter, current_area, new_area)
        new_content = f"---\n{new_frontmatter}\n---\n{body}"
        filepath.write_text(new_content, encoding="utf-8")
        result["updated"] = True
    
    return result

def main():
    dry_run = "--apply" not in sys.argv
    
    # Find project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    src_dir = project_root / "src"
    
    if not src_dir.exists():
        print(f"Error: src directory not found at {src_dir}")
        sys.exit(1)
    
    print(f"{'[DRY RUN] ' if dry_run else ''}Migrating areas in {src_dir}")
    print("-" * 60)
    
    # Collect all markdown files
    md_files = list(src_dir.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files")
    
    # Process files
    changes = []
    for filepath in md_files:
        result = process_file(filepath, dry_run)
        if result:
            changes.append(result)
    
    # Report
    print(f"\n{'Would update' if dry_run else 'Updated'} {len(changes)} files:")
    print("-" * 60)
    
    # Group by migration path
    migration_counts = {}
    for change in changes:
        key = f"{change['old_area']} -> {change['new_area']}"
        migration_counts[key] = migration_counts.get(key, 0) + 1
    
    for path, count in sorted(migration_counts.items(), key=lambda x: -x[1]):
        print(f"  {path}: {count} files")
    
    if dry_run:
        print(f"\nRun with --apply to execute changes")
    else:
        print(f"\n✓ Migration complete!")

if __name__ == "__main__":
    main()
