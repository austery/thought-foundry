#!/usr/bin/env python3
"""
Script to update 'AI' tag to '人工智能' in frontmatter of markdown files.
Only updates the exact tag 'AI', not variations like 'AI-related' or within other words.
"""

import os
import re
import yaml
from pathlib import Path

def process_file(file_path):
    """Process a single markdown file to update AI tag in frontmatter."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has frontmatter
        if not content.startswith('---'):
            return False
        
        # Split frontmatter and content
        parts = content.split('---', 2)
        if len(parts) < 3:
            return False
        
        frontmatter_str = parts[1]
        main_content = parts[2]
        
        # Parse YAML frontmatter
        try:
            frontmatter = yaml.safe_load(frontmatter_str)
        except yaml.YAMLError as e:
            print(f"⚠️  YAML parsing error in {file_path}: {e}")
            return False
        
        if not frontmatter:
            return False
        
        # Check if tags exist and update AI tag
        changed = False
        if 'tags' in frontmatter and isinstance(frontmatter['tags'], list):
            for i, tag in enumerate(frontmatter['tags']):
                if tag == 'AI':  # Exact match only
                    frontmatter['tags'][i] = '人工智能'
                    changed = True
        
        if not changed:
            return False
        
        # Convert back to YAML with proper formatting
        yaml_str = yaml.dump(frontmatter, 
                           default_flow_style=False, 
                           allow_unicode=True, 
                           sort_keys=False,
                           width=1000)
        
        # Reconstruct the file
        new_content = f"---\n{yaml_str}---{main_content}"
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all markdown files."""
    print("🔄 Updating 'AI' tags to '人工智能' in frontmatter...")
    
    # Find all markdown files in src directory
    src_dir = Path('src')
    markdown_files = list(src_dir.rglob('*.md'))
    
    updated_files = []
    total_files = len(markdown_files)
    
    for file_path in markdown_files:
        if process_file(file_path):
            updated_files.append(file_path)
            print(f"✅ Updated: {file_path}")
    
    print(f"\n📊 Summary:")
    print(f"Files processed: {total_files}")
    print(f"Files updated: {len(updated_files)}")
    
    if updated_files:
        print(f"\n✨ Updated files:")
        for file_path in updated_files:
            print(f"   • {file_path}")
    else:
        print("\n💡 No files had 'AI' tags to update.")

if __name__ == "__main__":
    main()
