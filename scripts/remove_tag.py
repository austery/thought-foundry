# -*- coding: utf-8 -*-
"""
This script finds and removes a specific, redundant tag from the frontmatter of Markdown files.

It traverses a specified directory for .md files, reads their frontmatter, and removes
the specified tag from the 'tags' and 'media_books' lists if found.

It runs in a safe 'dry run' mode by default, and will only modify files if the --fix
flag is provided.
"""

import os
import frontmatter
import argparse
import yaml

# --- CONFIGURATION ---
NOTES_DIR = "src/notes"
TAG_TO_REMOVE = "t-literature-note"

# Get absolute path to the notes directory
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
ABS_NOTES_DIR = os.path.join(ROOT_DIR, NOTES_DIR)

def remove_tag_from_file(filepath, tag_to_remove, fix_mode=False):
    """
    Checks for a specific tag. If fix_mode is True, removes it and saves the file.
    Returns True if the file contained the tag, False otherwise.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
    except Exception as e:
        print(f"- WARNING: Could not read or parse {os.path.basename(filepath)}: {e}")
        return False

    tag_found = False
    
    # Check and remove from 'tags' list
    tags = post.get('tags')
    if isinstance(tags, list) and tag_to_remove in tags:
        tag_found = True
        if fix_mode:
            tags.remove(tag_to_remove)
            post.metadata['tags'] = tags

    # Check and remove from 'media_books' list
    media_books = post.get('media_books')
    if isinstance(media_books, list) and tag_to_remove in media_books:
        tag_found = True
        if fix_mode:
            media_books.remove(tag_to_remove)
            post.metadata['media_books'] = media_books

    if not tag_found:
        return False

    # If we are here, the tag was found. Announce it.
    print(f"  - Found tag in: {os.path.basename(filepath)}")

    if fix_mode:
        try:
            # Manually construct the YAML and file content to ensure safe writing
            metadata_yaml = yaml.dump(post.metadata, allow_unicode=True, default_flow_style=False, sort_keys=False)
            new_content = f"---\n{metadata_yaml}---\n{post.content}"
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"    - FIXED: Removed tag and saved file.")
        except Exception as e:
            print(f"    - ERROR: Failed to save changes for {os.path.basename(filepath)}: {e}")
    
    return True # Indicates that the tag was found

def main():
    """
    Main function to find and optionally fix files with the specified tag.
    """
    parser = argparse.ArgumentParser(
        description=f"Find and optionally remove the '{TAG_TO_REMOVE}' tag from all notes."
    )
    parser.add_argument(
        '--fix',
        action='store_true',
        help="Apply the fix by removing the tag from the files."
    )
    args = parser.parse_args()

    mode = "FIX" if args.fix else "DRY RUN"
    print(f"--- Starting {mode} mode to find/remove '{TAG_TO_REMOVE}' in: {ABS_NOTES_DIR} ---")

    if not os.path.isdir(ABS_NOTES_DIR):
        print(f"Error: Directory not found at {ABS_NOTES_DIR}")
        return

    affected_files_count = 0
    total_files_scanned = 0

    # Walk through the directory
    for root, _, files in os.walk(ABS_NOTES_DIR):
        for file in files:
            if file.endswith('.md'):
                total_files_scanned += 1
                filepath = os.path.join(root, file)
                if remove_tag_from_file(filepath, TAG_TO_REMOVE, fix_mode=args.fix):
                    affected_files_count += 1

    # --- Generate Report ---
    print("\n--- Operation Complete ---")
    if affected_files_count == 0:
        print(f"No files containing the tag '{TAG_TO_REMOVE}' were found.")
    else:
        if args.fix:
            print(f"Successfully found and fixed {affected_files_count} file(s).")
            print("Review the changes using 'git status' and 'git diff'.")
        else:
            print(f"Dry run complete. Found {affected_files_count} file(s) that contain the tag.")
            print("Run the script again with the --fix flag to apply the changes.")
    
    print(f"\nScanned a total of {total_files_scanned} files.")

if __name__ == "__main__":
    main()
