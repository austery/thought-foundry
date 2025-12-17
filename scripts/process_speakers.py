#!/usr/bin/env python3
"""
Speaker and Guest Field Processor

This script processes markdown files to:
1. Extract speakers from both 'speaker' and 'guest' fields
2. Combine them into a unified 'speaker' field
3. Remove duplicates within the same post
4. Clean up empty guest fields
"""

import os
import sys
import re
from pathlib import Path

def extract_speakers_from_fields(speaker_field, guest_field):
    """
    Extract and combine speakers from speaker and guest fields.
    
    Args:
        speaker_field (str): Content of speaker field
        guest_field (str): Content of guest field
        
    Returns:
        list: Unique list of speaker names
    """
    
    all_speakers = []
    
    # Process speaker field
    if speaker_field and speaker_field.strip() and speaker_field.strip() != "''":
        # Handle comma-separated speakers
        speakers = [s.strip().strip("'\"") for s in speaker_field.split(",")]
        all_speakers.extend([s for s in speakers if s])
    
    # Process guest field  
    if guest_field and guest_field.strip() and guest_field.strip() != "''":
        # Handle comma-separated guests
        guests = [g.strip().strip("'\"") for g in guest_field.split(",")]
        all_speakers.extend([g for g in guests if g])
    
    # Remove duplicates while preserving order
    unique_speakers = []
    seen = set()
    for speaker in all_speakers:
        if speaker and speaker.lower() not in seen:
            unique_speakers.append(speaker)
            seen.add(speaker.lower())
    
    return unique_speakers

def process_frontmatter(content):
    """
    Process the YAML frontmatter to combine speaker and guest fields.
    
    Args:
        content (str): The markdown file content
        
    Returns:
        str: Updated content with processed speaker fields
    """
    
    # Pattern to match YAML front matter
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    if not match:
        return content, False
    
    frontmatter_content = match.group(1)
    
    # Extract speaker and guest fields
    speaker_match = re.search(r'^speaker:\s*(.*)$', frontmatter_content, re.MULTILINE)
    guest_match = re.search(r'^guest:\s*(.*)$', frontmatter_content, re.MULTILINE)
    
    speaker_field = speaker_match.group(1).strip() if speaker_match else ""
    guest_field = guest_match.group(1).strip() if guest_match else ""
    
    # Extract unique speakers
    unique_speakers = extract_speakers_from_fields(speaker_field, guest_field)
    
    # Check if any changes are needed
    current_speaker_list = []
    if speaker_field and speaker_field.strip() and speaker_field.strip() != "''":
        current_speaker_list = [s.strip().strip("'\"") for s in speaker_field.split(",") if s.strip()]
    
    # If no changes needed, return original content
    if (set(unique_speakers) == set(current_speaker_list) and 
        (not guest_field or guest_field.strip() == "" or guest_field.strip() == "''")):
        return content, False
    
    # Build the new frontmatter
    new_frontmatter = frontmatter_content
    
    # Update speaker field
    if unique_speakers:
        new_speaker_value = ",".join(unique_speakers)
        if speaker_match:
            # Replace existing speaker field
            new_frontmatter = re.sub(
                r'^speaker:\s*.*$',
                f'speaker: {new_speaker_value}',
                new_frontmatter,
                flags=re.MULTILINE
            )
        else:
            # Add speaker field after other fields
            new_frontmatter = new_frontmatter + f'\nspeaker: {new_speaker_value}'
    else:
        # Set speaker to empty if no speakers found
        if speaker_match:
            new_frontmatter = re.sub(
                r'^speaker:\s*.*$',
                'speaker: \'\'',
                new_frontmatter,
                flags=re.MULTILINE
            )
    
    # Clear guest field (set to empty)
    if guest_match:
        new_frontmatter = re.sub(
            r'^guest:\s*.*$',
            'guest: \'\'',
            new_frontmatter,
            flags=re.MULTILINE
        )
    
    # Reconstruct the full content
    updated_content = content.replace(frontmatter_content, new_frontmatter)
    
    return updated_content, True

def process_file(file_path):
    """
    Process a single markdown file.
    
    Args:
        file_path (str): Path to the markdown file
        
    Returns:
        bool: True if file was modified, False otherwise
    """
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Process the content
        updated_content, was_modified = process_frontmatter(original_content)
        
        if not was_modified:
            print(f"No changes needed: {os.path.basename(file_path)}")
            return False
        
        # Write back the updated content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"✅ Updated: {os.path.basename(file_path)}")
        return True
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")
        return False

def process_directory(directory_path, pattern="**/*.md"):
    """
    Process all markdown files in a directory recursively.
    
    Args:
        directory_path (str): Path to the directory
        pattern (str): Glob pattern for files to process
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
    print("Combining speaker and guest fields, removing duplicates...\n")
    
    processed_count = 0
    for file_path in markdown_files:
        if process_file(str(file_path)):
            processed_count += 1
    
    print(f"\n🎉 Processing complete! {processed_count} files were modified.")

def main():
    """Main function to handle command line arguments."""
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  Process single file:      python process_speakers.py <file_path>")
        print("  Process directory:        python process_speakers.py <directory_path>")
        print("")
        print("Examples:")
        print("  python process_speakers.py src/notes/")
        print("  python process_speakers.py src/notes/example.md")
        print("")
        print("This script will:")
        print("  - Combine speakers from 'speaker' and 'guest' fields")
        print("  - Remove duplicates within the same post")
        print("  - Clear the 'guest' field after processing")
        return
    
    target_path = sys.argv[1]
    
    print("🔄 Processing speaker and guest fields...")
    
    if os.path.isfile(target_path):
        # Process single file
        success = process_file(target_path)
        if success:
            print("✨ File processing completed successfully!")
        else:
            print("✨ File processing completed with no changes.")
    
    elif os.path.isdir(target_path):
        # Process directory
        process_directory(target_path, "**/*.md")
    
    else:
        print(f"Error: '{target_path}' is not a valid file or directory.")

if __name__ == "__main__":
    main()
