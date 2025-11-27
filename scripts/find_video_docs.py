import os
import re
import frontmatter
import sys

# Ensure the script runs from project root context if possible, or handle paths relative to script
# But typically we run `python scripts/script.py` from root.
NOTES_DIR = "src/notes"

# Regex for files that ARE videos (ID-based filenames)
# 11 characters of alphanumeric, -, _
VIDEO_FILENAME_REGEX = re.compile(r"^[-_a-zA-Z0-9]{11}\.md$")

def extract_youtube_id(url):
    if not url:
        return None
    # Standard watch URL
    match = re.search(r'[?&]v=([-_a-zA-Z0-9]{11})', url)
    if match:
        return match.group(1)
    # Short URL
    match = re.search(r'youtu\.be/([-_a-zA-Z0-9]{11})', url)
    if match:
        return match.group(1)
    return None

def main():
    if not os.path.exists(NOTES_DIR):
        print(f"Error: {NOTES_DIR} does not exist.")
        return

    # print(f"Scanning {NOTES_DIR} for document files with video metadata...")
    # Header for output
    # print(f"{'Filename':<50} | {'Video ID':<15} | {'Title'}")
    # print("-" * 120)
    
    matches = []
    video_files_ids = set()

    # First pass: Identify all "Video Files" (strict ID filenames)
    for root, dirs, files in os.walk(NOTES_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
            if VIDEO_FILENAME_REGEX.match(file):
                # Extract ID from filename (remove .md)
                video_files_ids.add(file[:-3])

    # Second pass: Find documents
    for root, dirs, files in os.walk(NOTES_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
            
            # 1. Exclude "Video Files" (ID-based filenames)
            if VIDEO_FILENAME_REGEX.match(file):
                continue
                
            filepath = os.path.join(root, file)
            try:
                # Use simpler reading if frontmatter fails (though it shouldn't)
                post = frontmatter.load(filepath)
            except Exception as e:
                # print(f"Error reading {file}: {e}", file=sys.stderr)
                continue
            
            title = post.get("title", "")
            
            # 2. Exclude "YouTube Video" titles
            # "not videos, nor files with YouTube video as title"
            if "youtube video" in str(title).lower():
                continue
            
            # 3. Check for Video ID in metadata
            video_id = None
            
            # Check 'source' field
            source = post.get("source")
            if source:
                video_id = extract_youtube_id(str(source))
                
            # Check other potential fields if source failed
            if not video_id:
                # Sometimes people use youtube_id: ...
                if post.get("youtube_id"):
                    video_id = str(post.get("youtube_id")).strip()
                elif post.get("video_id"):
                    video_id = str(post.get("video_id")).strip()
                elif post.get("id"): # Rare but possible
                    candidate = str(post.get("id")).strip()
                    if re.match(r"^[-_a-zA-Z0-9]{11}$", candidate):
                        video_id = candidate
            
            if video_id:
                matches.append({
                    "file": file,
                    "path": filepath,
                    "id": video_id,
                    "title": title,
                    "has_video_file": video_id in video_files_ids
                })

    # Sort by filename for consistency
    matches.sort(key=lambda x: x['file'])

    # Output content
    output_lines = []
    output_lines.append(f"Found {len(matches)} documents that contain video IDs.")
    output_lines.append("-" * 140)
    output_lines.append(f"{'Filename':<60} | {'Video ID':<15} | {'Dup?':<5} | {'Title'}")
    output_lines.append("-" * 140)
    for m in matches:
        # Truncate title if too long
        display_title = (m['title'][:40] + '...') if len(str(m['title'])) > 40 else m['title']
        dup_mark = "YES" if m['has_video_file'] else "NO"
        output_lines.append(f"{m['file']:<60} | {m['id']:<15} | {dup_mark:<5} | {display_title}")

    # Print to console
    print("\n".join(output_lines))

    # Save to file
    output_path = "docs/video_documents_audit.md"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(output_lines))
    print(f"\nReport saved to {output_path}")

if __name__ == "__main__":
    main()
