#!/usr/bin/env python3
"""
cleanup_projects.py - Clear legacy project values from markdown files

This script clears the project field in markdown files, as projects
are now managed ad-hoc rather than in the taxonomy.

Usage:
    python cleanup_projects.py          # Dry run
    python cleanup_projects.py --apply  # Apply changes
"""

import os
import re
import sys
from pathlib import Path

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

def has_project_value(frontmatter: str) -> bool:
    """Check if frontmatter has a non-empty project field."""
    # Match project: value or project: [array]
    pattern = r'^project:\s*(.+)$'
    match = re.search(pattern, frontmatter, re.MULTILINE)
    if not match:
        return False
    
    value = match.group(1).strip()
    # Check if it's empty
    if value in ('[]', '""', "''", ''):
        return False
    
    return True

def clear_project(frontmatter: str) -> str:
    """Clear the project field value."""
    # Handle array format: project:\n  - value
    frontmatter = re.sub(
        r'^project:\s*\n(?:\s+-\s+.+\n)+',
        'project: []\n',
        frontmatter,
        flags=re.MULTILINE
    )
    
    # Handle single line: project: value
    frontmatter = re.sub(
        r'^project:\s*["\']?[^"\'\[\]\n]+["\']?\s*$',
        'project: []',
        frontmatter,
        flags=re.MULTILINE
    )
    
    return frontmatter

def get_project_value(frontmatter: str) -> str | None:
    """Extract the project value for reporting."""
    # Array format
    array_match = re.search(r'^project:\s*\n((?:\s+-\s+.+\n)+)', frontmatter, re.MULTILINE)
    if array_match:
        items = re.findall(r'^\s+-\s+(.+)$', array_match.group(1), re.MULTILINE)
        return ", ".join(items)
    
    # Single line format
    single_match = re.search(r'^project:\s*["\']?([^"\'\[\]\n]+)["\']?\s*$', frontmatter, re.MULTILINE)
    if single_match:
        return single_match.group(1).strip()
    
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
    
    if not has_project_value(frontmatter):
        return None
    
    project_value = get_project_value(frontmatter)
    
    result = {
        "file": str(filepath),
        "project": project_value
    }
    
    if not dry_run:
        new_frontmatter = clear_project(frontmatter)
        new_content = f"---\n{new_frontmatter}\n---\n{body}"
        filepath.write_text(new_content, encoding="utf-8")
        result["cleared"] = True
    
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
    
    print(f"{'[DRY RUN] ' if dry_run else ''}Cleaning project fields in {src_dir}")
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
    print(f"\n{'Would clear' if dry_run else 'Cleared'} {len(changes)} files with project values:")
    print("-" * 60)
    
    # Group by project value
    project_counts = {}
    for change in changes:
        project = change.get("project", "unknown")
        project_counts[project] = project_counts.get(project, 0) + 1
    
    for project, count in sorted(project_counts.items(), key=lambda x: -x[1])[:20]:
        print(f"  {project}: {count} files")
    
    if len(project_counts) > 20:
        print(f"  ... and {len(project_counts) - 20} more unique projects")
    
    if dry_run:
        print(f"\nRun with --apply to execute changes")
    else:
        print(f"\n✓ Cleanup complete!")

if __name__ == "__main__":
    main()
