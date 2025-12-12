import os
import re
import frontmatter

NOTES_DIR = 'src/notes'
REPORT_FILE = 'docs/video_id_audit_report.md'

# Regex to extract YouTube Video ID
# Covers:
# - https://www.youtube.com/watch?v=VIDEO_ID
# - https://youtu.be/VIDEO_ID
# - https://www.youtube.com/live/VIDEO_ID
# - plain ID (fallback)
YOUTUBE_REGEX = re.compile(r'(?:v=|/)([0-9A-Za-z_-]{11}).*')

def get_video_id_from_url(url):
    if not url:
        return None
    match = YOUTUBE_REGEX.search(url)
    if match:
        return match.group(1)
    return None

def audit_notes():
    report_lines = []
    report_lines.append("# Video ID Filename Audit Report\n")
    report_lines.append(f"Scan Date: {os.popen('date').read().strip()}\n")
    report_lines.append("| Status | Filename | Video ID (from Source) | Source URL | Proposed Rename |")
    report_lines.append("|---|---|---|---|---|")

    mismatch_count = 0
    missing_source_count = 0
    total_files = 0
    
    files_to_rename = []

    for filename in sorted(os.listdir(NOTES_DIR)):
        if not filename.endswith('.md'):
            continue
            
        total_files += 1
        filepath = os.path.join(NOTES_DIR, filename)
        
        try:
            post = frontmatter.load(filepath)
            source = post.get('source')
            
            current_name_no_ext = filename[:-3] # remove .md
            
            if not source:
                report_lines.append(f"| ⚑ No Source | `{filename}` | N/A | N/A | Manual Check |")
                missing_source_count += 1
                continue

            video_id = get_video_id_from_url(source)

            if not video_id:
                report_lines.append(f"| ❓ Invalid Source | `{filename}` | N/A | `{source}` | Manual Check |")
                continue

            if current_name_no_ext != video_id:
                # Mismatch found
                proposed_name = f"{video_id}.md"
                report_lines.append(f"| ↗ Mismatch | `{filename}` | `{video_id}` | `{source}` | `{proposed_name}` |")
                mismatch_count += 1
                files_to_rename.append((filename, proposed_name))
            else:
                # Match - strictly speaking we don't need to list these if we only want "issues"
                # but for debug let's ignore them to keep report clean
                pass

        except Exception as e:
            report_lines.append(f"| ❌ Error | `{filename}` | Error | {str(e)} | N/A |")

    report_lines.append(f"\n## Summary")
    report_lines.append(f"- Total Files Scanned: {total_files}")
    report_lines.append(f"- Mismatches Found: {mismatch_count}")
    report_lines.append(f"- Missing/Invalid Source: {missing_source_count}")
    
    # Write report
    with open(REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report_lines))
    
    print(f"Audit complete. Report generated at {REPORT_FILE}")
    print(f"Found {mismatch_count} files to rename.")

if __name__ == "__main__":
    audit_notes()
