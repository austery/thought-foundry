#!/usr/bin/env python3
"""
Script to change "视频笔记" to "视频文稿" in the frontmatter tags of all markdown files.
"""

import os
import re
import yaml
import glob
from pathlib import Path

def process_file(file_path):
    """Process a single markdown file to update the tag."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Check if file has frontmatter
        if not content.startswith('---'):
            return False, "No frontmatter found"
        
        # Split content into frontmatter and body
        parts = content.split('---', 2)
        if len(parts) < 3:
            return False, "Invalid frontmatter format"
        
        frontmatter_text = parts[1]
        body = parts[2]
        
        # Parse frontmatter
        try:
            frontmatter = yaml.safe_load(frontmatter_text)
        except yaml.YAMLError as e:
            return False, f"YAML parsing error: {e}"
        
        # Check if tags exist and contain "视频笔记"
        if 'tags' not in frontmatter:
            return False, "No tags field found"
        
        tags = frontmatter['tags']
        if not isinstance(tags, list):
            return False, "Tags field is not a list"
        
        # Check if "视频笔记" exists in tags
        if '视频笔记' not in tags:
            return False, "Tag '视频笔记' not found"
        
        # Replace "视频笔记" with "视频文稿"
        updated_tags = []
        for tag in tags:
            if tag == '视频笔记':
                updated_tags.append('视频文稿')
            else:
                updated_tags.append(tag)
        
        frontmatter['tags'] = updated_tags
        
        # Convert back to YAML
        updated_frontmatter = yaml.dump(frontmatter, 
                                      default_flow_style=False, 
                                      allow_unicode=True,
                                      sort_keys=False)
        
        # Reconstruct the file content
        updated_content = f"---\n{updated_frontmatter}---{body}"
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        return True, "Successfully updated"
        
    except Exception as e:
        return False, f"Error processing file: {e}"

def main():
    """Main function to process all markdown files."""
    # Get all markdown files in src directory
    src_path = Path("src")
    markdown_files = list(src_path.glob("**/*.md"))
    
    print(f"Found {len(markdown_files)} markdown files")
    print("=" * 50)
    
    updated_count = 0
    error_count = 0
    skipped_count = 0
    
    for file_path in markdown_files:
        success, message = process_file(file_path)
        
        if success:
            updated_count += 1
            print(f"✅ {file_path.relative_to(src_path)}: {message}")
        elif "not found" in message.lower() or "no tags" in message.lower():
            skipped_count += 1
            # Don't print skipped files to reduce noise
        else:
            error_count += 1
            print(f"❌ {file_path.relative_to(src_path)}: {message}")
    
    print("=" * 50)
    print(f"Summary:")
    print(f"  Successfully updated: {updated_count} files")
    print(f"  Skipped (no 视频笔记 tag): {skipped_count} files")
    print(f"  Errors: {error_count} files")
    print(f"  Total processed: {len(markdown_files)} files")

if __name__ == "__main__":
    main()
