#!/usr/bin/env python3
"""
Script to rename 'insight' field to 'summary' and add a new empty 'insight' field
in the frontmatter of markdown files in the notes folder.
"""

import os
import re
import sys
from pathlib import Path
import yaml
from typing import Dict, Any, List, Tuple


def parse_frontmatter(content: str) -> Tuple[Dict[str, Any], str, str]:
    """
    Parse frontmatter from markdown content.
    Returns: (frontmatter_dict, frontmatter_raw, body_content)
    """
    # Check if content starts with frontmatter
    if not content.startswith('---'):
        return {}, '', content
    
    # Find the end of frontmatter
    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, '', content
    
    frontmatter_raw = parts[1]
    body_content = '---' + parts[2] if parts[2] else ''
    
    try:
        # Parse YAML frontmatter
        frontmatter_dict = yaml.safe_load(frontmatter_raw) or {}
        return frontmatter_dict, frontmatter_raw, body_content
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}")
        return {}, frontmatter_raw, body_content


def rebuild_frontmatter(frontmatter_dict: Dict[str, Any]) -> str:
    """
    Rebuild frontmatter from dictionary while preserving order and formatting.
    """
    # Define the desired field order
    field_order = [
        'author', 'channel', 'date', 'guest', 'insight', 'layout', 
        'series', 'source', 'speaker', 'summary', 'tags', 'title', 
        'file_name', 'draft'
    ]
    
    lines = []
    
    # Add fields in the specified order
    for field in field_order:
        if field in frontmatter_dict:
            value = frontmatter_dict[field]
            if value is None or value == '':
                lines.append(f'{field}: ')
            elif isinstance(value, list):
                lines.append(f'{field}:')
                for item in value:
                    lines.append(f'- {item}')
            elif isinstance(value, str) and '\n' in value:
                # Multi-line string
                lines.append(f'{field}: |')
                for line in value.split('\n'):
                    lines.append(f'  {line}')
            else:
                # Quote strings that contain special characters or start with numbers
                if isinstance(value, str) and (
                    value.startswith(('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')) or 
                    any(char in value for char in [':', '@', '#', '&', '*', '!', '|', '>', "'", '"'])
                ):
                    lines.append(f"{field}: '{value}'")
                else:
                    lines.append(f'{field}: {value}')
    
    # Add any remaining fields not in the order list
    for field, value in frontmatter_dict.items():
        if field not in field_order:
            if value is None or value == '':
                lines.append(f'{field}: ')
            elif isinstance(value, list):
                lines.append(f'{field}:')
                for item in value:
                    lines.append(f'- {item}')
            elif isinstance(value, str) and '\n' in value:
                lines.append(f'{field}: |')
                for line in value.split('\n'):
                    lines.append(f'  {line}')
            else:
                if isinstance(value, str) and (
                    value.startswith(('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')) or 
                    any(char in value for char in [':', '@', '#', '&', '*', '!', '|', '>', "'", '"'])
                ):
                    lines.append(f"{field}: '{value}'")
                else:
                    lines.append(f'{field}: {value}')
    
    return '\n'.join(lines)


def process_file(file_path: Path) -> bool:
    """
    Process a single markdown file to rename insight to summary and add new insight field.
    Returns True if file was modified, False otherwise.
    """
    try:
        # Read file content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Parse frontmatter
        frontmatter_dict, frontmatter_raw, body_content = parse_frontmatter(content)
        
        # Skip if no frontmatter
        if not frontmatter_dict:
            print(f"Skipping {file_path.name} - no frontmatter found")
            return False
        
        # Check if 'insight' field exists
        if 'insight' not in frontmatter_dict:
            print(f"Skipping {file_path.name} - no 'insight' field found")
            return False
        
        # Check if 'summary' field already exists
        if 'summary' in frontmatter_dict:
            print(f"Warning: {file_path.name} already has 'summary' field, skipping")
            return False
        
        # Rename insight to summary and add new empty insight
        insight_content = frontmatter_dict['insight']
        frontmatter_dict['summary'] = insight_content
        frontmatter_dict['insight'] = ''
        
        # Rebuild content
        new_frontmatter = rebuild_frontmatter(frontmatter_dict)
        new_content = f"---\n{new_frontmatter}\n{body_content}"
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"✅ Processed {file_path.name}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path.name}: {e}")
        return False


def main():
    """Main function to process all markdown files in the notes folder."""
    # Get the script directory
    script_dir = Path(__file__).parent
    notes_dir = script_dir / 'src' / 'notes'
    
    # Check if notes directory exists
    if not notes_dir.exists():
        print(f"Error: Notes directory not found at {notes_dir}")
        sys.exit(1)
    
    # Find all markdown files
    md_files = list(notes_dir.glob('*.md'))
    
    if not md_files:
        print("No markdown files found in the notes directory")
        return
    
    print(f"Found {len(md_files)} markdown files in {notes_dir}")
    print("=" * 50)
    
    # Process each file
    processed_count = 0
    for md_file in sorted(md_files):
        if process_file(md_file):
            processed_count += 1
    
    print("=" * 50)
    print(f"Processing complete! Modified {processed_count} out of {len(md_files)} files.")


if __name__ == "__main__":
    main()
