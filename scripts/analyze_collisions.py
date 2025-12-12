import os
import re
import frontmatter
from collections import defaultdict
import hashlib

NOTES_DIR = 'src/notes'
REPORT_FILE = 'docs/collision_analysis.md'

YOUTUBE_REGEX = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')

def get_video_id_from_url(url):
    if not url:
        return None
    match = YOUTUBE_REGEX.search(url)
    if match:
        return match.group(1)
    return None

def get_file_hash(content):
    return hashlib.md5(content.encode('utf-8')).hexdigest()

def analyze_collisions():
    # Map target_video_id -> list of current_filenames
    id_map = defaultdict(list)
    
    # scan files
    for filename in sorted(os.listdir(NOTES_DIR)):
        if not filename.endswith('.md'):
            continue
            
        filepath = os.path.join(NOTES_DIR, filename)
        try:
            post = frontmatter.load(filepath)
            source = post.get('source')
            if not source:
                continue
                
            video_id = get_video_id_from_url(source)
            if video_id:
                id_map[video_id].append(filename)
                
        except Exception as e:
            print(f"Error reading {filename}: {e}")

    # Analyze collisions
    collisions = {vid: files for vid, files in id_map.items() if len(files) > 1}
    
    report_lines = []
    report_lines.append("# Video ID Collision Analysis")
    report_lines.append(f"Scan Date: {os.popen('date').read().strip()}\n")
    report_lines.append("| Target ID | Status | Files | Notes |")
    report_lines.append("|---|---|---|---|")

    identical_count = 0
    content_match_count = 0
    different_count = 0

    for vid, files in collisions.items():
        file_data = []
        for f in files:
            path = os.path.join(NOTES_DIR, f)
            post = frontmatter.load(path)
            file_data.append({
                'name': f,
                'content': post.content,
                'metadata': post.metadata,
                'full_text': open(path, 'r').read()
            })
        
        # Check exact match (full text)
        first_full = file_data[0]['full_text']
        is_exact = all(d['full_text'] == first_full for d in file_data)
        
        # Check content match (body only)
        first_content = file_data[0]['content']
        is_content_match = all(d['content'] == first_content for d in file_data)

        file_list_str = "<br>".join([f'`{f}`' for f in files])

        if is_exact:
            status = "✅ Exact Duplicate"
            identical_count += 1
            notes = "Safe to keep one and delete others."
        elif is_content_match:
            status = "⚠️ Content Match"
            content_match_count += 1
            notes = "Frontmatter differs. Merge metadata?"
        else:
            status = "Gw Distinct Content"
            different_count += 1
            notes = "Files differ in body content. Manual review needed."

        report_lines.append(f"| `{vid}` | {status} | {file_list_str} | {notes} |")

    report_lines.append(f"\n## Summary")
    report_lines.append(f"- Exact Duplicates groups: {identical_count}")
    report_lines.append(f"- Content Match (diff metadata) groups: {content_match_count}")
    report_lines.append(f"- Distinct Content groups: {different_count}")

    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report_lines))

    print(f"Analysis complete. Report written to {REPORT_FILE}")

if __name__ == "__main__":
    analyze_collisions()
