# -*- coding: utf-8 -*-
"""
This script finds Markdown files that contain empty or invalid tags in their frontmatter.

It traverses a specified directory for .md files, reads their frontmatter, and checks
if the 'tags' list contains any empty strings, None (null) values, or strings
composed solely of whitespace.

Finally, it prints a list of all files that contain such empty tags.
"""

import os
import frontmatter
import argparse
import yaml

# --- CONFIGURATION ---
NOTES_DIR = "src/notes"

# Get absolute path to the notes directory
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
ABS_NOTES_DIR = os.path.join(ROOT_DIR, NOTES_DIR)

def clean_tags_in_file(filepath, fix_mode=False):
    """
    Checks for empty tags. If fix_mode is True, removes them and saves the file.
    Returns True if a file contains empty tags, False otherwise.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
    except Exception as e:
        print(f"- WARNING: Could not read or parse {os.path.basename(filepath)}: {e}")
        return False

    original_tags = post.get('tags')
    if not isinstance(original_tags, list):
        return False

    # Filter out None, empty strings, and whitespace-only strings
    cleaned_tags = [tag for tag in original_tags if isinstance(tag, str) and tag.strip()]

    # If the list length has changed, it means we found and removed empty tags
    if len(cleaned_tags) == len(original_tags):
        return False # No empty tags found

    print(f"  - Found empty tags in: {os.path.basename(filepath)}")

    if fix_mode:
        post.metadata['tags'] = cleaned_tags
        try:
            # Manually construct the YAML and file content to ensure safe writing
            metadata_yaml = yaml.dump(post.metadata, allow_unicode=True, default_flow_style=False, sort_keys=False)
            new_content = f"---\n{metadata_yaml}---\n{post.content}"
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"    - FIXED: Removed empty tags and saved file.")
        except Exception as e:
            print(f"    - ERROR: Failed to save changes for {os.path.basename(filepath)}: {e}")
    
    return True # Indicates that empty tags were found

def main():
    """
    Main function to find and optionally fix files with empty tags.
    """
    parser = argparse.ArgumentParser(
        description="Find and optionally fix empty tags in Markdown frontmatter."
    )
    parser.add_argument(
        '--fix',
        action='store_true',
        help="Apply the fix by removing empty tags from the files."
    )
    args = parser.parse_args()

    mode = "FIX" if args.fix else "DRY RUN"
    print(f"--- Starting {mode} mode to find/fix empty tags in: {ABS_NOTES_DIR} ---")

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
                if clean_tags_in_file(filepath, fix_mode=args.fix):
                    affected_files_count += 1

    # --- Generate Report ---
    print("\n--- Operation Complete ---")
    if affected_files_count == 0:
        print("No files with empty tags were found.")
    else:
        if args.fix:
            print(f"Successfully found and fixed {affected_files_count} file(s).")
            print("Review the changes using 'git status' and 'git diff'.")
        else:
            print(f"Dry run complete. Found {affected_files_count} file(s) that need fixing.")
            print("Run the script again with the --fix flag to apply the changes.")
    
    print(f"\nScanned a total of {total_files_scanned} files.")

if __name__ == "__main__":
    main()
