import os
import re
import frontmatter
from collections import defaultdict

NOTES_DIR = 'src/notes'
REPORT_FILE = 'docs/video_id_collisions.md'

YOUTUBE_REGEX = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')

def get_video_id_from_url(url):
    if not url:
        return None
    match = YOUTUBE_REGEX.search(url)
    if match:
        return match.group(1)
    return None

def detect_collisions():
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

    # Report collisions
    collisions = {vid: files for vid, files in id_map.items() if len(files) > 1}
    
    report_lines = []
    report_lines.append("# Video ID Collision Report")
    report_lines.append(f"Scan Date: {os.popen('date').read().strip()}\n")
    report_lines.append(f"Found {len(collisions)} groups of files that map to the same Video ID.\n")
    
    if collisions:
        for vid, files in collisions.items():
            report_lines.append(f"## Target ID: `{vid}`")
            for f in files:
                report_lines.append(f"- `{f}`")
            report_lines.append("")
            
    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report_lines))

    print(f"Collision detection complete. Found {len(collisions)} collision groups.")
    print(f"Report written to {REPORT_FILE}")

if __name__ == "__main__":
    detect_collisions()
