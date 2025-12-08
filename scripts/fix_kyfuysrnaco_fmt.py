#!/usr/bin/env python3
import os
import sys

FILE_PATH = "src/notes/KyfUysrNaco.md"

def main(dry_run=True):
    if not os.path.exists(FILE_PATH):
        print(f"Error: File not found: {FILE_PATH}")
        return

    with open(FILE_PATH, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    i = 0
    n = len(lines)
    
    changes_count = 0
    preview_limit = 3  # Show first 3 changes in dry run

    while i < n:
        line = lines[i].rstrip()
        
        # Check for the pattern
        # Line i: "Details"
        # Line i+1: "View/Hide Original English"
        if line == "Details" and i + 1 < n and lines[i+1].strip() == "View/Hide Original English":
            # Found the start of the block
            english_lines = []
            j = i + 2
            while j < n:
                eng_line = lines[j].rstrip()
                if not eng_line: # Empty line marks end of block
                    break
                english_lines.append(eng_line)
                j += 1
            
            # Construct new block
            english_text = " ".join(english_lines) # Assuming single paragraph, or join with spaces
            
            new_block = [
                "<details>\n",
                "<summary>View/Hide Original English</summary>\n",
                f'<p class="english-text">{english_text}</p>\n',
                "</details>\n"
            ]
            
            if dry_run:
                changes_count += 1
                if changes_count <= preview_limit:
                    print(f"--- Match #{changes_count} ---")
                    print("Original:")
                    print(f"  Details")
                    print(f"  View/Hide Original English")
                    for el in english_lines:
                        print(f"  {el}")
                    print("New:")
                    for nb in new_block:
                        print(f"  {nb.rstrip()}")
                    print("----------------")
            
            new_lines.extend(new_block)
            i = j # Skip to the empty line (or whatever ended the loop)
        else:
            new_lines.append(lines[i])
            i += 1

    if dry_run:
        print(f"\nDry run complete. Total potential replacements: {changes_count}")
        print("Run without --dry-run to apply changes.")
    else:
        with open(FILE_PATH, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Successfully updated {FILE_PATH} with {changes_count} replacements.")

if __name__ == "__main__":
    dry_run = "--dry-run" in sys.argv
    main(dry_run=dry_run)
