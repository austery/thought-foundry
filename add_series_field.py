#!/usr/bin/env python3
"""
Script to add 'series' field to front matter of all markdown files in the notes directory.
The series field will be added after the 'layout' field.
"""

import os
import re
from pathlib import Path

def process_frontmatter(content):
    """
    Add 'series' field to the frontmatter if it doesn't exist.
    Places it after the 'layout' field.
    """
    # Check if file has frontmatter
    if not content.startswith('---'):
        print("  No frontmatter found, skipping")
        return content
    
    # Find the end of frontmatter
    frontmatter_end = content.find('---', 3)
    if frontmatter_end == -1:
        print("  Malformed frontmatter, skipping")
        return content
    
    frontmatter = content[3:frontmatter_end].strip()
    rest_of_content = content[frontmatter_end:]
    
    # Check if 'series' already exists
    if re.search(r'^series:', frontmatter, re.MULTILINE):
        print("  'series' field already exists, skipping")
        return content
    
    # Split frontmatter into lines
    lines = frontmatter.split('\n')
    new_lines = []
    series_added = False
    
    for line in lines:
        new_lines.append(line)
        # Add 'series' field after 'layout' field
        if line.strip().startswith('layout:') and not series_added:
            new_lines.append('series:')
            series_added = True
    
    # If no layout field was found, add series at the end
    if not series_added:
        new_lines.append('series:')
    
    # Reconstruct the content
    new_frontmatter = '\n'.join(new_lines)
    new_content = f"---\n{new_frontmatter}\n{rest_of_content}"
    
    return new_content

def main():
    notes_dir = Path("src/notes")
    
    if not notes_dir.exists():
        print(f"Directory {notes_dir} does not exist!")
        return
    
    # Find all markdown files
    md_files = list(notes_dir.glob("*.md"))
    
    if not md_files:
        print("No markdown files found in the notes directory!")
        return
    
    print(f"Found {len(md_files)} markdown files in {notes_dir}")
    
    processed_count = 0
    skipped_count = 0
    
    for md_file in md_files:
        print(f"\nProcessing: {md_file.name}")
        
        try:
            # Read the file
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Process the frontmatter
            new_content = process_frontmatter(content)
            
            # Write back only if content changed
            if new_content != content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"  ✓ Added 'series' field")
                processed_count += 1
            else:
                print(f"  - No changes needed")
                skipped_count += 1
                
        except Exception as e:
            print(f"  ✗ Error processing {md_file.name}: {e}")
            skipped_count += 1
    
    print(f"\n--- Summary ---")
    print(f"Processed: {processed_count} files")
    print(f"Skipped: {skipped_count} files")
    print(f"Total: {len(md_files)} files")

if __name__ == "__main__":
    main()
