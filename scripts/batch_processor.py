
# -*- coding: utf-8 -*-
"""
This script batch-processes Markdown files in a specified directory. It uses the
tag_processor module to apply a v3.0 PKM classification system based on file tags.

Key functionalities:
1.  Traverses a directory to find all Markdown (.md) files.
2.  Reads the YAML frontmatter of each file.
3.  Extracts existing 'tags' and an optional 'speaker' field.
4.  Filters out speaker names from the tags to be processed.
5.  Uses `tag_processor.process_tags` to generate new structured metadata (area, category, etc.)
    and a cleaned list of concept tags.
6.  Updates the file's frontmatter with the new data, overwriting the old 'tags' field.
7.  Saves the changes back to the original file.

This script requires the 'python-frontmatter' library.
Install it using: pip install python-frontmatter
"""

import os
import frontmatter
import argparse
import difflib
import yaml
from tag_processor import process_tags

# --- CONFIGURATION ---
NOTES_DIR = "src/notes"
# Convert to absolute path
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
abs_notes_dir = os.path.join(ROOT_DIR, NOTES_DIR)

def clean_and_process_file(filepath, dry_run=False):
    """
    Reads a Markdown file, processes its tags, updates its frontmatter.
    In dry_run mode, it prints a diff instead of saving.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()
            post = frontmatter.loads(original_content)
    except Exception as e:
        print(f"Error reading or parsing {filepath}: {e}")
        return

    # NON-DESTRUCTIVE CHECK: If the file already has an area, skip it.
    if post.get('area') and str(post.get('area')).strip():
        return

    # --- 1. Extract existing metadata ---
    original_tags = post.get('tags', [])
    speaker = post.get('speaker') # This can be None

    if not original_tags:
        # No need to print skipping message in dry run unless verbose
        if not dry_run:
            print(f"Skipping {os.path.basename(filepath)}: No tags found.")
        return

    # --- 2. Clean tags before processing ---
    ignore_list = set()
    if speaker:
        ignore_list.add(str(speaker).lower().strip())

    tags_to_process = [
        tag for tag in original_tags
        if str(tag).lower().strip() not in ignore_list
    ]

    # --- 3. Process tags using the core processor ---
    if not tags_to_process:
        if not dry_run:
            print(f"Skipping {os.path.basename(filepath)}: No tags left after cleaning.")
        return

    processed_data = process_tags(tags_to_process)

    # --- 4. Update frontmatter with new data ---
    post['area'] = processed_data.get('area')
    post['category'] = processed_data.get('category')
    post['project'] = processed_data.get('project', [])
    post['tags'] = processed_data.get('tags', [])

    for entity_type in ['people', 'companies_orgs', 'products_models', 'media_books']:
        existing_entities = set(post.get(entity_type, []))
        new_entities = set(processed_data.get(entity_type, []))
        post[entity_type] = sorted(list(existing_entities.union(new_entities)))

    # --- 5. Save the updated file or print diff ---
    try:
        # --- Bypass frontmatter.dumps() by manually building the file ---
        # Sort keys alphabetically, but bring major keys to the front for readability.
        sorted_meta = dict(sorted(post.metadata.items()))
        order = ['title', 'summary', 'area', 'category', 'project', 'tags', 'people', 'companies_orgs', 'products_models', 'media_books', 'date', 'author', 'speaker']
        ordered_metadata = {k: sorted_meta[k] for k in order if k in sorted_meta}
        ordered_metadata.update(sorted_meta) # Add remaining keys

        # Convert metadata to a YAML string
        metadata_yaml = yaml.dump(ordered_metadata, allow_unicode=True, default_flow_style=False, sort_keys=False)

        # Reconstruct the full file content
        new_content = f"---\n{metadata_yaml}---\n{post.content}"
        # ----------------------------------------------------------------

        if dry_run:
            diff = difflib.unified_diff(
                original_content.splitlines(keepends=True),
                new_content.splitlines(keepends=True),
                fromfile=f"a/{os.path.basename(filepath)}",
                tofile=f"b/{os.path.basename(filepath)}",
            )
            print(f"--- DIFF for {os.path.basename(filepath)} ---")
            print(''.join(diff))
        else:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Successfully processed and updated {os.path.basename(filepath)}")

    except Exception as e:
        print(f"Error writing updates or generating diff for {filepath}: {e}")


def main():
    """
    Main function to traverse the directory and process each file.
    Handles command-line arguments for dry run and limits.
    """
    parser = argparse.ArgumentParser(
        description="Batch process Markdown files to update PKM metadata."
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help="Perform a dry run without modifying files. Shows a diff of changes."
    )
    parser.add_argument(
        '--limit',
        type=int,
        default=-1,  # -1 means no limit
        help="Limit the number of files to process. Processes all files by default."
    )
    parser.add_argument(
        '--file',
        type=str,
        default=None,
        help="Process a single specific file by its name (e.g., '-_SNHtZfu3BU.md')."
    )
    args = parser.parse_args()

    limit = args.limit
    # If doing a dry run and no limit was specified by the user, default to 2.
    if args.dry_run and limit == -1:
        limit = 2

    if args.dry_run:
        print("--- Starting DRY RUN mode. No files will be modified. ---")
        print(f"--- Showing changes for up to {limit} file(s). ---")
        print()
    else:
        print(f"--- Starting REAL run. Files in {abs_notes_dir} will be modified. ---")
        if limit != -1:
            print(f"--- Processing a maximum of {limit} file(s). ---")
        print("---")
        print()

    if not os.path.isdir(abs_notes_dir):
        print(f"Error: Directory not found at {abs_notes_dir}")
        return

    processed_count = 0

    # If a specific file is requested, just process that one
    if args.file:
        filepath = os.path.join(abs_notes_dir, args.file)
        if os.path.exists(filepath):
            clean_and_process_file(filepath, dry_run=args.dry_run)
        else:
            print(f"Error: Specified file not found: {filepath}")
        print("\n--- Processing complete. ---")
        return

    # Walk through the directory
    for root, _, files in os.walk(abs_notes_dir):
        for file in files:
            if file.endswith('.md'):
                if limit != -1 and processed_count >= limit:
                    break
                filepath = os.path.join(root, file)
                clean_and_process_file(filepath, dry_run=args.dry_run)
                processed_count += 1
        if limit != -1 and processed_count >= limit:
            break

    print()
    if args.dry_run:
        print("--- Dry run complete. ---")
    else:
        print("--- Batch processing complete. ---")
        print("IMPORTANT: Review the changes using a version control system (like 'git status' and 'git diff') before committing.")


if __name__ == "__main__":
    main()
