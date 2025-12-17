#!/usr/bin/env python3
"""
Enhanced Frontmatter Cleaner

This script:
1. Converts ALL empty string fields ('', '""', "''") to empty values (null)
2. Adds 'insight' field to frontmatter if it doesn't exist
3. Reorders frontmatter fields for consistency
"""

import os
import re
import yaml

def clean_and_add_insight_field(file_path):
    """
    1. Convert ALL empty string fields ('') to empty values (null) - not just specific ones
    2. Add 'insight' field to frontmatter if it doesn't exist
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split frontmatter and content
    if not content.startswith('---'):
        return False
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False
    
    frontmatter_str = parts[1]
    content_body = parts[2]
    
    try:
        # Parse YAML
        frontmatter = yaml.safe_load(frontmatter_str)
        if not frontmatter:
            return False
        
        modified = False
        
        # Convert ALL empty string fields to empty values
        cleaned_fields = []
        
        for field_name, field_value in frontmatter.items():
            # Check if the field value is an empty string in any form
            if (isinstance(field_value, str) and 
                (field_value == '' or field_value == "''" or field_value == '""' or field_value.strip() == '')):
                frontmatter[field_name] = None  # This will render as empty value in YAML
                cleaned_fields.append(field_name)
                modified = True
        
        # Add insight field if it doesn't exist
        insight_added = False
        if 'insight' not in frontmatter:
            frontmatter['insight'] = None
            insight_added = True
            modified = True
        
        if not modified:
            return False
        
        # Reconstruct the file with proper field order
        # Define the desired field order (can be extended as needed)
        field_order = [
            'title', 'date', 'author', 'layout', 'speaker', 'guest', 
            'channel', 'source', 'tags', 'insight', 'summary', 'file_name'
        ]
        
        # Create ordered frontmatter
        ordered_frontmatter = {}
        
        # Add fields in the desired order
        for field in field_order:
            if field in frontmatter:
                ordered_frontmatter[field] = frontmatter[field]
        
        # Add any remaining fields that weren't in our order
        for key, value in frontmatter.items():
            if key not in ordered_frontmatter:
                ordered_frontmatter[key] = value
        
        # Convert to YAML with custom formatting
        yaml_str = yaml.dump(ordered_frontmatter, default_flow_style=False, allow_unicode=True)
        
        # Clean up the YAML formatting for empty values
        yaml_str = re.sub(r'^(\w+): null$', r'\1: ', yaml_str, flags=re.MULTILINE)
        
        new_content = f"---\n{yaml_str}---{content_body}"
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        # Build change summary
        changes = []
        if cleaned_fields:
            changes.append(f"cleaned empty strings: {', '.join(cleaned_fields)}")
        if insight_added:
            changes.append("added insight field")
        
        print(f"✅ Updated: {os.path.basename(file_path)}")
        print(f"   Changes: {' | '.join(changes)}")
        return True
        
    except yaml.YAMLError as e:
        print(f"❌ YAML error in {file_path}: {e}")
        return False

def main():
    notes_dir = "src/notes"
    files_processed = 0
    files_modified = 0
    
    print("🧹 Enhanced frontmatter cleaning - checking ALL fields for empty strings...\n")
    
    # Check if directory exists
    if not os.path.exists(notes_dir):
        print(f"❌ Directory not found: {notes_dir}")
        return
    
    for filename in os.listdir(notes_dir):
        if filename.endswith('.md'):
            file_path = os.path.join(notes_dir, filename)
            files_processed += 1
            if clean_and_add_insight_field(file_path):
                files_modified += 1
    
    print(f"\n📊 Summary:")
    print(f"Files processed: {files_processed}")
    print(f"Files modified: {files_modified}")
    print(f"\n✨ Enhanced changes made:")
    print(f"   • ALL empty strings ('', '\"\", \'\') converted to empty values")
    print(f"   • Added 'insight' field to files that didn't have it")
    print(f"   • Reordered frontmatter fields for consistency")
    print(f"   • Now checks every field, not just hardcoded ones")

if __name__ == "__main__":
    main()
