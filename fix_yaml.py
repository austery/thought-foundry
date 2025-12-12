#!/usr/bin/env python3
"""
YAML Fix Script

This script fixes broken YAML front matter caused by incorrect processing.
"""

import os
import sys
import re
from pathlib import Path

def fix_yaml_formatting(content):
    """
    Fix broken YAML front matter formatting.
    
    Args:
        content (str): The markdown file content
        
    Returns:
        tuple: (updated_content, was_modified)
    """
    
    # Pattern to match YAML front matter
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    if not match:
        return content, False
    
    frontmatter_content = match.group(1)
    
    # Check for lines that start with spaces after guest: ''
    lines = frontmatter_content.split('\n')
    fixed_lines = []
    skip_next = False
    
    for i, line in enumerate(lines):
        if skip_next:
            skip_next = False
            continue
            
        # Check if this line is "guest: ''" and the next line starts with spaces
        if (line.strip() == "guest: ''" and 
            i + 1 < len(lines) and 
            lines[i + 1].startswith('  ')):
            # This is the broken pattern - we need to merge the content
            broken_content = lines[i + 1].strip()
            # Find the speaker line
            speaker_line_idx = -1
            for j in range(i + 2, len(lines)):
                if lines[j].startswith('speaker:'):
                    speaker_line_idx = j
                    break
            
            if speaker_line_idx != -1:
                # Merge the broken content with the speaker line
                current_speakers = lines[speaker_line_idx].replace('speaker:', '').strip()
                if current_speakers:
                    new_speakers = f"{current_speakers},{broken_content}"
                else:
                    new_speakers = broken_content
                lines[speaker_line_idx] = f"speaker: {new_speakers}"
            
            # Add the fixed guest line
            fixed_lines.append(line)
            # Skip the broken line
            skip_next = True
        else:
            fixed_lines.append(line)
    
    new_frontmatter = '\n'.join(fixed_lines)
    
    if new_frontmatter != frontmatter_content:
        new_content = content.replace(frontmatter_content, new_frontmatter)
        return new_content, True
    
    return content, False

def fix_file(file_path):
    """
    Fix a single markdown file.
    
    Args:
        file_path (str): Path to the markdown file
        
    Returns:
        bool: True if file was modified, False otherwise
    """
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Fix the content
        updated_content, was_modified = fix_yaml_formatting(original_content)
        
        if not was_modified:
            return False
        
        # Write back the updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✅ Fixed: {os.path.basename(file_path)}")
        return True
        
    except Exception as e:
        print(f"❌ Error fixing {file_path}: {str(e)}")
        return False

def main():
    """Check all files for YAML issues and fix them."""
    
    directory = Path("src/notes/")
    markdown_files = list(directory.glob("*.md"))
    
    print(f"Checking {len(markdown_files)} files for YAML formatting issues...")
    
    fixed_count = 0
    for file_path in markdown_files:
        if fix_file(str(file_path)):
            fixed_count += 1
    
    print(f"\n🎉 Fixed {fixed_count} files with YAML formatting issues.")

if __name__ == "__main__":
    main()
