#!/usr/bin/env python3
"""
fix_malformed_yaml.py - Fix YAML files corrupted by the project cleanup

The cleanup script incorrectly left orphaned array items after 'project: []'
when the original project field was a multi-line array.

This script finds and removes those orphaned lines.
"""

import os
import re
import sys
from pathlib import Path

def fix_file(filepath: Path, dry_run: bool = True) -> dict | None:
    """Fix a single markdown file with malformed YAML."""
    try:
        content = filepath.read_text(encoding="utf-8")
    except Exception as e:
        print(f"  Error reading {filepath}: {e}")
        return None
    
    # Pattern: project: [] followed by orphaned array items
    # These items should be removed
    pattern = r'^(project: \[\])\n((?:\s*-\s+[^\n]+\n)+)'
    
    match = re.search(pattern, content, re.MULTILINE)
    if not match:
        return None
    
    orphaned_items = match.group(2).strip().split('\n')
    
    result = {
        "file": str(filepath),
        "orphaned_items": [item.strip() for item in orphaned_items]
    }
    
    if not dry_run:
        # Replace with just "project: []" and remove orphaned items
        new_content = re.sub(pattern, r'project: []\n', content, flags=re.MULTILINE)
        filepath.write_text(new_content, encoding="utf-8")
        result["fixed"] = True
    
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
    
    print(f"{'[DRY RUN] ' if dry_run else ''}Fixing malformed YAML in {src_dir}")
    print("-" * 60)
    
    # Collect all markdown files
    md_files = list(src_dir.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files")
    
    # Process files
    fixes = []
    for filepath in md_files:
        result = fix_file(filepath, dry_run)
        if result:
            fixes.append(result)
    
    # Report
    print(f"\n{'Would fix' if dry_run else 'Fixed'} {len(fixes)} files:")
    print("-" * 60)
    
    for fix in fixes[:10]:
        print(f"  {Path(fix['file']).name}:")
        for item in fix['orphaned_items'][:3]:
            print(f"    - {item}")
        if len(fix['orphaned_items']) > 3:
            print(f"    ... and {len(fix['orphaned_items']) - 3} more")
    
    if len(fixes) > 10:
        print(f"  ... and {len(fixes) - 10} more files")
    
    if dry_run:
        print(f"\nRun with --apply to execute fixes")
    else:
        print(f"\n✓ Fix complete!")

if __name__ == "__main__":
    main()
