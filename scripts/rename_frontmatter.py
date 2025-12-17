#!/usr/bin/env python3
"""
Front Matter Field Renamer Script

This script renames the 'podcast_program' field to 'channel' in the YAML front matter
of markdown files in the Thought Foundry project.
"""

import os
import sys
import re
from pathlib import Path

def rename_frontmatter_field(content, old_field='podcast_program', new_field='channel'):
    """
    Rename a field in YAML front matter.
    
    Args:
        content (str): The markdown file content
        old_field (str): The field name to rename from
        new_field (str): The field name to rename to
        
    Returns:
        str: Updated content with renamed field
    """
    
    # Pattern to match YAML front matter
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    if not match:
        print("No YAML front matter found")
        return content
    
    frontmatter_content = match.group(1)
    
    # Pattern to match the specific field we want to rename
    # This handles both quoted and unquoted values
    field_pattern = rf'^(\s*){old_field}:\s*(.*)$'
    
    updated_frontmatter = re.sub(
        field_pattern, 
        rf'\1{new_field}: \2', 
        frontmatter_content, 
        flags=re.MULTILINE
    )
    
    # Check if any replacement was made
    if updated_frontmatter == frontmatter_content:
        return content  # No change needed
    
    # Reconstruct the full content
    updated_content = content.replace(frontmatter_content, updated_frontmatter)
    
    return updated_content

def process_file(file_path, old_field='podcast_program', new_field='channel'):
    """
    Process a single markdown file to rename front matter fields.
    
    Args:
        file_path (str): Path to the markdown file
        old_field (str): Field to rename from
        new_field (str): Field to rename to
        
    Returns:
        bool: True if file was modified, False otherwise
    """
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Process the content
        updated_content = rename_frontmatter_field(original_content, old_field, new_field)
        
        # Check if any changes were made
        if original_content == updated_content:
            print(f"No changes needed: {file_path}")
            return False
        
        # Write back the updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✅ Updated: {file_path}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")
        return False

def process_directory(directory_path, pattern="**/*.md", old_field='podcast_program', new_field='channel'):
    """
    Process all markdown files in a directory recursively.
    
    Args:
        directory_path (str): Path to the directory
        pattern (str): Glob pattern for files to process
        old_field (str): Field to rename from
        new_field (str): Field to rename to
    """
    
    directory = Path(directory_path)
    if not directory.exists():
        print(f"Directory not found: {directory_path}")
        return
    
    # Find all markdown files recursively
    markdown_files = list(directory.glob(pattern))
    
    if not markdown_files:
        print(f"No markdown files found in: {directory_path}")
        return
    
    print(f"Found {len(markdown_files)} markdown files to process...")
    print(f"Renaming '{old_field}' to '{new_field}' in front matter\n")
    
    processed_count = 0
    for file_path in markdown_files:
        if process_file(str(file_path), old_field, new_field):
            processed_count += 1
    
    print(f"\n🎉 Processing complete! {processed_count} files were modified.")

def main():
    """Main function to handle command line arguments."""
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  Rename in single file:    python rename_frontmatter.py <file_path> [old_field] [new_field]")
        print("  Rename in directory:      python rename_frontmatter.py <directory_path> [old_field] [new_field]")
        print("")
        print("Examples:")
        print("  python rename_frontmatter.py src/notes/")
        print("  python rename_frontmatter.py src/notes/example.md")
        print("  python rename_frontmatter.py src/notes/ podcast_program channel")
        print("")
        print("Default: Renames 'podcast_program' to 'channel'")
        return
    
    target_path = sys.argv[1]
    old_field = sys.argv[2] if len(sys.argv) > 2 else 'podcast_program'
    new_field = sys.argv[3] if len(sys.argv) > 3 else 'channel'
    
    print(f"🔄 Renaming '{old_field}' to '{new_field}' in YAML front matter...")
    
    if os.path.isfile(target_path):
        # Process single file
        success = process_file(target_path, old_field, new_field)
        if success:
            print("✨ File processing completed successfully!")
        else:
            print("✨ File processing completed with no changes.")
    
    elif os.path.isdir(target_path):
        # Process directory
        process_directory(target_path, "**/*.md", old_field, new_field)
    
    else:
        print(f"Error: '{target_path}' is not a valid file or directory.")

if __name__ == "__main__":
    main()
