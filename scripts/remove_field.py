#!/usr/bin/env python3
"""
Script to remove a specific field from frontmatter in src/posts/ and src/notes/

Target Field: "file_name"
"""

import os
from pathlib import Path
from typing import Dict, List
import yaml
import argparse

# Configuration
TARGET_DIRS = [
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/posts"),
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")
]
DEFAULT_FIELD = "file_name"

def parse_frontmatter(content: str) -> tuple[Dict, str, str]:
    """
    Parses markdown frontmatter.
    Returns: (frontmatter_dict, frontmatter_raw_string, body_content)
    """
    if not content.startswith('---'):
        return {}, '', content

    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, '', content

    frontmatter_raw = parts[1]
    body = parts[2]

    try:
        frontmatter = yaml.safe_load(frontmatter_raw)
        if not isinstance(frontmatter, dict):
            frontmatter = {}
    except:
        frontmatter = {}

    return frontmatter, frontmatter_raw, body

def update_frontmatter(frontmatter_raw: str, field_to_remove: str) -> str:
    """
    Updates the frontmatter text to remove the specific field line(s).
    """
    lines = frontmatter_raw.split('\n')
    new_lines = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # Check if line starts with the field name
        if stripped.startswith(f"{field_to_remove}:"):
            # Skip this line
            i += 1
            # Also skip any subsequent lines that might be part of a multiline value (indented)
            while i < len(lines):
                next_line = lines[i]
                if not next_line.strip(): # Empty lines, maybe keep? let's skip for safety if attached
                     i += 1
                     continue
                
                # If next line is indented, it's likely part of the previous key's value
                if next_line.startswith(' ') or next_line.startswith('\t'):
                    i += 1
                else:
                    # Not indented, so it's a new key or something else
                    break
            continue
            
        new_lines.append(line)
        i += 1
        
    return '\n'.join(new_lines)

def scan_and_fix(field_to_remove, run_mode=False):
    print(f"Target Field: '{field_to_remove}'")
    print(f"Mode: {'EXECUTE' if run_mode else 'SCAN (Dry Run)'}")
    print("-" * 40)

    files_found = 0
    files_modified = 0

    for target_dir in TARGET_DIRS:
        if not target_dir.exists():
            print(f"Directory not found: {target_dir}")
            continue
            
        print(f"Scanning {target_dir}...")
        md_files = list(target_dir.glob("*.md"))
        
        for md_file in md_files:
            try:
                content = md_file.read_text(encoding='utf-8')
                frontmatter, raw, body = parse_frontmatter(content)
                
                if field_to_remove in frontmatter:
                    files_found += 1
                    if not run_mode:
                        print(f"[FOUND] {md_file.name}")
                    else:
                        new_fm = update_frontmatter(raw, field_to_remove)
                        new_content = f"---{new_fm}---{body}"
                        md_file.write_text(new_content, encoding='utf-8')
                        print(f"[FIXED] {md_file.name}")
                        files_modified += 1
                        
            except Exception as e:
                print(f"Error processing {md_file.name}: {e}")

    print("-" * 40)
    if run_mode:
        print(f"Completed. Removed field '{field_to_remove}' from {files_modified} files.")
    else:
        print(f"Found {files_found} files containing field '{field_to_remove}'.")
        print("To remove them, run with --fix")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Remove a specific field from frontmatter.")
    parser.add_argument('--field', type=str, default=DEFAULT_FIELD, help="Field key to remove")
    parser.add_argument('--fix', action='store_true', help="Execute changes")
    args = parser.parse_args()

    scan_and_fix(args.field, args.fix)
