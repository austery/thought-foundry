import os
import re
import shutil

# Configuration
AUDIT_FILE = "docs/non_video_files_audit.md"
SOURCE_DIR = "src/notes"
DEST_DIR = "src/posts"

def main():
    # Ensure destination exists
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)
        print(f"Created directory: {DEST_DIR}")

    if not os.path.exists(AUDIT_FILE):
        print(f"Audit file not found: {AUDIT_FILE}")
        return

    print(f"Reading from {AUDIT_FILE}...")
    
    files_to_move = []
    
    # Regex to extract filename from markdown table row: | `filename.md` | Title |
    # Matches: pipe, space, backtick, capture group, backtick
    pattern = re.compile(r"\|\s*`([^`]+)`\s*\|")

    with open(AUDIT_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            match = pattern.search(line)
            if match:
                filename = match.group(1)
                if filename.endswith('.md'):
                    files_to_move.append(filename)

    print(f"Found {len(files_to_move)} files to move.")
    
    moved_count = 0
    missing_count = 0
    
    for filename in files_to_move:
        src_path = os.path.join(SOURCE_DIR, filename)
        dest_path = os.path.join(DEST_DIR, filename)
        
        if os.path.exists(src_path):
            try:
                shutil.move(src_path, dest_path)
                # print(f"Moved: {filename}")
                moved_count += 1
            except Exception as e:
                print(f"Error moving {filename}: {e}")
        else:
            # Check if it's already in destination (idempotency)
            if os.path.exists(dest_path):
                print(f"Skipping {filename} (already in dest)")
            else:
                print(f"Warning: Source file not found: {filename}")
                missing_count += 1

    print("-" * 30)
    print(f"Migration Complete.")
    print(f"Successfully moved: {moved_count}")
    print(f"Missing/Skipped: {missing_count}")
    print(f"Total processed: {len(files_to_move)}")

if __name__ == "__main__":
    main()
