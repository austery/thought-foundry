#!/usr/bin/env python3
"""
Script to rename "最佳拍档" to "Best Partners TV" in speaker fields in src/notes and src/posts.
"""

import os
from pathlib import Path
import yaml

# Configuration
TARGET_DIRS = [
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/posts"),
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")
]
OLD_NAME = "最佳拍档"
NEW_NAME = "Best Partners TV"

def parse_frontmatter(content: str) -> tuple[str, str, str]:
    """
    Parses markdown frontmatter.
    Returns: (frontmatter_raw, body, delimiter)
    """
    if not content.startswith('---'):
        return '', content, ''

    # Attempt to find the second delimiter
    # We look for the second '---'
    try:
        # Split max 2 times: [empty, frontmatter, body]
        parts = content.split('---', 2)
        if len(parts) < 3:
            return '', content, ''
        
        return parts[1], parts[2], '---'
    except:
        return '', content, ''

def update_frontmatter(frontmatter_raw: str) -> tuple[str, bool]:
    """
    Updates the frontmatter text.
    Returns (new_frontmatter, changed)
    """
    lines = frontmatter_raw.split('\n')
    new_lines = []
    changed = False
    
    for line in lines:
        # We are looking for `speaker: 最佳拍档` (with possible quotes or spaces)
        # We are NOT looking for it in the 'people' list based on user request "for speaker in the front matter"
        # But user query "rename 最佳拍档 to Best Partners TV in the notes or postes folder, for speaker in the front matter"
        # technically could mean the key `speaker`.
        # However, if I see `speaker: "最佳拍档"`, I should replace it.
        
        stripped = line.strip()
        
        # Check for speaker field
        if stripped.startswith("speaker:"):
            # Check if value contains OLD_NAME
            if OLD_NAME in stripped:
                # Replace OLD_NAME with NEW_NAME in this line
                # Be careful not to replace key name if it somehow contained it (unlikely)
                new_line = line.replace(OLD_NAME, NEW_NAME)
                new_lines.append(new_line)
                changed = True
                continue
        
        # Check for author field (often same as speaker in these files)
        if stripped.startswith("author:"):
             if OLD_NAME in stripped:
                new_line = line.replace(OLD_NAME, NEW_NAME)
                new_lines.append(new_line)
                changed = True
                continue

        new_lines.append(line)
        
    return '\n'.join(new_lines), changed

def process_files():
    print(f"Renaming '{OLD_NAME}' to '{NEW_NAME}' in speaker/author fields...")
    count = 0
    
    for target_dir in TARGET_DIRS:
        if not target_dir.exists():
            continue
            
        for md_file in target_dir.glob("*.md"):
            try:
                content = md_file.read_text(encoding='utf-8')
                frontmatter_raw, body, delim = parse_frontmatter(content)
                
                if not frontmatter_raw:
                    continue
                    
                new_frontmatter, changed = update_frontmatter(frontmatter_raw)
                
                if changed:
                    new_content = f"---{new_frontmatter}---{body}"
                    md_file.write_text(new_content, encoding='utf-8')
                    print(f"Updated: {md_file.name}")
                    count += 1
            except Exception as e:
                print(f"Error processing {md_file.name}: {e}")
                
    print(f"\nTotal files updated: {count}")

if __name__ == "__main__":
    process_files()
