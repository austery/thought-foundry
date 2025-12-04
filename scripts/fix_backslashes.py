#!/usr/bin/env python3
"""
Script to fix malformed frontmatter delimiters (removing trailing backslashes).
Detects:
---\n---
And replaces with:
---
"""

import os
from pathlib import Path

# Configuration
TARGET_DIRS = [
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/posts"),
    Path("/Users/leipeng/Documents/Projects/thought-foundry/src/notes")
]

def fix_file(file_path: Path) -> bool:
    try:
        content = file_path.read_text(encoding='utf-8')
        
        # Check for the specific issue at the start of the file
        # The issue is likely: "---\" or "--- \"
        
        # We want to replace the FIRST instance of "---\" or "--- \" with "---"
        # And the SECOND instance (closing delimiter) as well.
        
        # Naive replace might be dangerous if "---" appears in content, but backslash version is rare in content.
        # However, specifically targeting the delimiters is safer.
        
        modified = False
        lines = content.splitlines()
        new_lines = []
        
        # We expect the first line to be the opening delimiter
        if lines:
            if lines[0].strip() == '---' + '\\' or lines[0].strip() == '--- ' + '\\':
                lines[0] = '---'
                modified = True
        
        # Look for the closing delimiter. 
        for i in range(1, len(lines)):
            line = lines[i].strip()
            if line == '---' + '\\' or line == '--- ' + '\\':
                lines[i] = '---'
                modified = True
                # usually only 2 delimiters matter for frontmatter, but let's fix any that look like this just in case
                # or should we stop after the second one? 
                # frontmatter parser stops at second one. 
                # Let's just fix all lines that look exactly like the broken delimiter.
            elif line == '---':
                # Valid delimiter, keep going
                pass
                
        if modified:
            # Reassemble
            # Note: splitlines() removes line endings, so we join with \n
            # But we should be careful about original line endings. 
            # Usually \n is fine for these MD files.
            new_content = '\n'.join(lines)
            # Ensure trailing newline if it had one? 
            if content.endswith('\n'):
                new_content += '\n'
                
            file_path.write_text(new_content, encoding='utf-8')
            return True
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    
    return False

def main():
    print("Scanning for backslash issues in frontmatter delimiters...")
    count = 0
    for target_dir in TARGET_DIRS:
        if not target_dir.exists():
            continue
            
        for md_file in target_dir.glob("*.md"):
            if fix_file(md_file):
                print(f"Fixed: {md_file.name}")
                count += 1
    
    print(f"\nTotal files fixed: {count}")

if __name__ == "__main__":
    main()
