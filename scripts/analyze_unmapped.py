# -*- coding: utf-8 -*-
"""
This script analyzes all Markdown files to find those with unmapped metadata.
It collects all tags from these unmapped files and presents a summary report,
counted and sorted by frequency, to help diagnose missing keyword rules.
"""

import os
import frontmatter
from collections import Counter

# --- CONFIGURATION ---
NOTES_DIR = "src/notes"

# Get absolute path to the notes directory
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
ABS_NOTES_DIR = os.path.join(ROOT_DIR, NOTES_DIR)

def is_empty(value):
    """Check if a metadata value is considered empty (None, empty string, or empty list)."""
    if value is None:
        return True
    if isinstance(value, str) and not value.strip():
        return True
    if isinstance(value, list) and not value:
        return True
    return False

def analyze_unmapped_tags():
    """
    Traverses the notes directory, finds unmapped files, and collects all tags
    from them for a summary report.
    """
    if not os.path.isdir(ABS_NOTES_DIR):
        print(f"Error: Directory not found at {ABS_NOTES_DIR}")
        return

    print(f"--- Searching for unmapped files and collecting their tags in: {ABS_NOTES_DIR} ---")
    all_unmapped_tags = []
    unmapped_file_count = 0
    total_files_scanned = 0

    # Walk through the directory
    for root, _, files in os.walk(ABS_NOTES_DIR):
        for file in files:
            if not file.endswith('.md'):
                continue
            
            total_files_scanned += 1
            filepath = os.path.join(root, file)

            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    post = frontmatter.load(f)
            except Exception as e:
                print(f"\n- WARNING: Could not read or parse {file}: {e}")
                continue

            # Check if all key fields are empty
            area_is_empty = is_empty(post.get('area'))
            category_is_empty = is_empty(post.get('category'))
            project_is_empty = is_empty(post.get('project'))

            if area_is_empty and category_is_empty and project_is_empty:
                unmapped_file_count += 1
                tags = post.get('tags', [])
                if tags and isinstance(tags, list):
                    # Add all valid tags from this file to the master list
                    all_unmapped_tags.extend([tag for tag in tags if isinstance(tag, str) and tag.strip()])

    # --- Generate Report ---
    print("\n--- Analysis Complete ---")
    print(f"Scanned {total_files_scanned} files and found {unmapped_file_count} unmapped files.")

    if not all_unmapped_tags:
        print("No unmapped tags to report.")
        return

    # Count and sort the collected tags
    tag_counts = Counter(all_unmapped_tags)
    sorted_tags = tag_counts.most_common()

    print(f"\nFound {len(sorted_tags)} unique unmapped tags. Sorted by frequency:")
    print("--------------------------------------------------")
    print("Count | Tag")
    print("--------------------------------------------------")
    for tag, count in sorted_tags:
        print(f"{count:<5} | {tag}")
    print("--------------------------------------------------")
    print("\nUse this list to update the KEYWORD_TO_PKM dictionary in tag_processor.py.")

if __name__ == "__main__":
    analyze_unmapped_tags()
