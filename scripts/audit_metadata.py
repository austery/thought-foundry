import os
import re
import frontmatter
import sys

NOTES_DIR = "src/notes"
REPORT_DIR = "docs"
NON_VIDEO_REPORT = os.path.join(REPORT_DIR, "non_video_files_audit.md")
METADATA_REPORT = os.path.join(REPORT_DIR, "metadata_quality_report.md")

# Regex for files that ARE videos (ID-based filenames)
# 11 characters of alphanumeric, -, _
VIDEO_FILENAME_REGEX = re.compile(r"^[-_a-zA-Z0-9]{11}\.md$")

def extract_youtube_id(url):
    if not url:
        return None
    match = re.search(r'[?&]v=([-_a-zA-Z0-9]{11})', url)
    if match:
        return match.group(1)
    match = re.search(r'youtu\.be/([-_a-zA-Z0-9]{11})', url)
    if match:
        return match.group(1)
    return None

def get_video_id_from_post(post):
    # Check 'source' field
    source = post.get("source")
    video_id = extract_youtube_id(str(source))
    
    # Check other potential fields
    if not video_id:
        if post.get("youtube_id"):
            video_id = str(post.get("youtube_id")).strip()
        elif post.get("video_id"):
            video_id = str(post.get("video_id")).strip()
        elif post.get("id"):
            candidate = str(post.get("id")).strip()
            if re.match(r"^[-_a-zA-Z0-9]{11}$", candidate):
                video_id = candidate
    return video_id

def main():
    if not os.path.exists(NOTES_DIR):
        print(f"Error: {NOTES_DIR} does not exist.")
        return

    os.makedirs(REPORT_DIR, exist_ok=True)

    all_files_data = []
    non_video_files = []

    # Audit Counters
    total_files = 0
    id_filenames = 0
    text_filenames = 0
    missing_summary = 0
    missing_speaker = 0
    
    print(f"Scanning {NOTES_DIR}...")

    for root, dirs, files in os.walk(NOTES_DIR):
        for file in files:
            if not file.endswith(".md"):
                continue
            
            total_files += 1
            filepath = os.path.join(root, file)
            
            try:
                post = frontmatter.load(filepath)
            except Exception as e:
                print(f"Error reading {file}: {e}")
                continue

            # 1. Analyze Filename
            is_id_filename = bool(VIDEO_FILENAME_REGEX.match(file))
            if is_id_filename:
                id_filenames += 1
            else:
                text_filenames += 1

            # 2. Analyze Metadata
            video_id = get_video_id_from_post(post)
            has_summary = bool(post.get("summary") and str(post.get("summary")).strip())
            has_speaker = bool(post.get("speaker") and str(post.get("speaker")).strip())
            title = post.get("title", "No Title")
            
            # Stats
            if not has_summary: missing_summary += 1
            if not has_speaker: missing_speaker += 1

            # Data Collection
            file_data = {
                "filename": file,
                "path": filepath,
                "is_id_filename": is_id_filename,
                "video_id": video_id,
                "has_summary": has_summary,
                "has_speaker": has_speaker,
                "title": title
            }
            all_files_data.append(file_data)

            # Identify "Non-Standard Filename AND No Video ID"
            if not is_id_filename and not video_id:
                non_video_files.append(file_data)

    # --- Report 1: Non-Video / Pure Text Files ---
    with open(NON_VIDEO_REPORT, "w", encoding="utf-8") as f:
        f.write("# Non-Video / Pure Text Files Audit\n\n")
        f.write(f"Generated on: {os.popen('date').read().strip()}\n\n")
        f.write("These files have **text-based filenames** and **NO detected Video ID** in their metadata.\n")
        f.write("They are likely pure notes, essays, or content not linked to a specific YouTube video.\n\n")
        f.write(f"**Total Count:** {len(non_video_files)}\n\n")
        
        f.write("| Filename | Title |\n")
        f.write("| :--- | :--- |\n")
        for item in sorted(non_video_files, key=lambda x: x['filename']):
            # Escape pipes in title
            safe_title = str(item['title']).replace("|", "\|")
            f.write(f"| `{item['filename']}` | {safe_title} |\n")
    
    print(f"Report 1 generated: {NON_VIDEO_REPORT} ({len(non_video_files)} files)")

    # --- Report 2: Metadata Quality Matrix ---
    # We will group this report for better readability
    
    with open(METADATA_REPORT, "w", encoding="utf-8") as f:
        f.write("# Metadata Quality Audit Report\n\n")
        f.write(f"**Total Files Scanned:** {total_files}\n")
        f.write(f"**ID-Format Filenames:** {id_filenames}\n")
        f.write(f"**Text-Format Filenames:** {text_filenames}\n")
        f.write(f"**Files Missing Summary:** {missing_summary}\n")
        f.write(f"**Files Missing Speaker:** {missing_speaker}\n\n")
        
        # Group A: Text-Based Filenames WITH Video IDs (The ones from previous step)
        group_a = [x for x in all_files_data if not x['is_id_filename'] and x['video_id']]
        f.write(f"## Group A: Text-Based Filenames WITH Video IDs ({len(group_a)})\n")
        f.write("*Action: Likely need renaming to ID format or merging.* \n\n")
        write_table(f, group_a)
        
        # Group B: ID-Based Filenames (Standard) - Quality Check
        group_b = [x for x in all_files_data if x['is_id_filename']]
        f.write(f"\n## Group B: Standard ID-Based Filenames ({len(group_b)})\n")
        f.write("*Action: Check for missing metadata (marked with ❌).* \n\n")
        write_table(f, group_b)

        # Group C: Non-Video Files (Already listed in other report, but summary here)
        # group_c = non_video_files
        # f.write(f"\n## Group C: Non-Video Files ({len(group_c)})\n")
        # f.write("*Action: Review if these are valid standalone notes.* \n\n")
        # write_table(f, group_c)

    print(f"Report 2 generated: {METADATA_REPORT}")

def write_table(f, data_list):
    f.write("| Filename | Video ID | Summary? | Speaker? | Title |\n")
    f.write("| :--- | :--- | :---: | :---: | :--- |\n")
    
    for item in sorted(data_list, key=lambda x: x['filename']):
        # Icons for boolean
        sum_icon = "✅" if item['has_summary'] else "❌"
        spk_icon = "✅" if item['has_speaker'] else "❌"
        
        vid = item['video_id'] if item['video_id'] else "N/A"
        safe_title = str(item['title']).replace("|", "\|")
        
        # Truncate title
        if len(safe_title) > 50:
            safe_title = safe_title[:47] + "..."

        f.write(f"| `{item['filename']}` | `{vid}` | {sum_icon} | {spk_icon} | {safe_title} |\n")

if __name__ == "__main__":
    main()
