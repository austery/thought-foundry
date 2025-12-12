import os
import re
import frontmatter
from collections import defaultdict
import hashlib
from datetime import datetime, date # Import date for type checking

NOTES_DIR = 'src/notes'
RENAME_REPORT_FILE = 'docs/rename_plan_dry_run.md'
COLLISION_ANALYSIS_FILE = 'docs/collision_analysis.md' # To read collision types

YOUTUBE_REGEX = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')

def get_video_id_from_url(url):
    if not url:
        return None
    match = YOUTUBE_REGEX.search(url)
    if match:
        return match.group(1)
    return None

def simple_slugify(text):
    # Converts text to a URL-friendly slug, removing non-alphanumeric and replacing spaces/underscores with hyphens.
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    text = re.sub(r'[\s_]+', '-', text)
    return text

def parse_collision_analysis_report():
    # Read the collision_analysis.md to get collision types
    # Returns a dict: {video_id: "Status", ...}
    collision_status = {}
    if not os.path.exists(COLLISION_ANALYSIS_FILE):
        return collision_status

    with open(COLLISION_ANALYSIS_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line in lines:
        match = re.match(r'\| `([0-9A-Za-z_-]{11})` \| (.*?) \|', line)
        if match:
            vid = match.group(1)
            status = match.group(2).strip()
            collision_status[vid] = status
    return collision_status

def generate_rename_plan():
    # Stores proposed renames
    # key: (original_dir, original_filename) -> (new_dir, new_filename, action, notes)
    rename_plan = {}
    
    # Stores files grouped by target video ID
    # {video_id: [file_data_dict, ...]}}
    files_by_target_id = defaultdict(list)

    collision_statuses = parse_collision_analysis_report()

    # First pass: Collect all files and group by target video ID
    for filename in sorted(os.listdir(NOTES_DIR)):
        if not filename.endswith('.md'):
            continue
            
        filepath = os.path.join(NOTES_DIR, filename)
        try:
            # Load frontmatter without actually reading the full file yet
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Use frontmatter.loads to avoid full file path issues
            post = frontmatter.loads(content)
            
            source = post.get('source')
            
            if not source:
                rename_plan[(NOTES_DIR, filename)] = (NOTES_DIR, filename, "No Action", "Missing source field")
                continue
                
            video_id = get_video_id_from_url(source)
            if not video_id:
                rename_plan[(NOTES_DIR, filename)] = (NOTES_DIR, filename, "No Action", f"Could not extract video ID from source: {source}")
                continue

            # Get metadata date for sorting primary file
            meta_date = None
            date_from_fm = post.get('date')
            
            if isinstance(date_from_fm, datetime):
                meta_date = date_from_fm
            elif isinstance(date_from_fm, date): # Convert date to datetime
                meta_date = datetime(date_from_fm.year, date_from_fm.month, date_from_fm.day)
            elif isinstance(date_from_fm, str):
                date_formats = [
                    '%Y-%m-%d',
                    '%Y-%m-%d %H:%M:%S',
                    '%Y-%m-%dT%H:%M:%S%z', # ISO format with timezone
                    '%Y-%m-%d %H:%M:%S.%f', # with microseconds
                ]
                for fmt in date_formats:
                    try:
                        meta_date = datetime.strptime(date_from_fm, fmt)
                        break
                    except ValueError:
                        pass # Try next format
            
            files_by_target_id[video_id].append({
                'original_filename': filename,
                'filepath': filepath,
                'content_hash': hashlib.md5(post.content.encode('utf-8')).hexdigest(),
                'metadata_date': meta_date,
                'original_full_text_hash': hashlib.md5(content.encode('utf-8')).hexdigest()
            })
                
        except Exception as e:
            rename_plan[(NOTES_DIR, filename)] = (NOTES_DIR, filename, "Error", f"Error processing file: {e}")

    # Second pass: Process groups based on collision status
    for video_id, files_in_group in files_by_target_id.items():
        if len(files_in_group) == 1:
            # No collision for this video_id, simple rename
            file_data = files_in_group[0]
            original_filename = file_data['original_filename']
            new_filename = f"{video_id}.md"
            rename_plan[(NOTES_DIR, original_filename)] = (NOTES_DIR, new_filename, "Rename", "No collision")
        else:
            # Collision detected
            status = collision_statuses.get(video_id, "Gw Distinct Content") # Default to distinct if not in report
            
            # Sort files in group for consistent primary selection and suffix assignment
            files_in_group.sort(key=lambda x: (
                x['original_filename'] == f"{video_id}.md", # Prioritize already named ID
                x['metadata_date'] if x['metadata_date'] else datetime.min, # Newest date
                len(x['original_filename']), # Shorter filename
                x['original_filename'] # Alphabetical
            ), reverse=True) # Reverse for bool to prioritize True, date for newest

            if status == "✅ Exact Duplicate" or status == "⚠️ Content Match":
                # For exact duplicates or content match (metadata differs), keep one, mark others for deletion
                primary_file = files_in_group[0]
                primary_original_filename = primary_file['original_filename']
                new_filename = f"{video_id}.md"
                rename_plan[(NOTES_DIR, primary_original_filename)] = (NOTES_DIR, new_filename, "Rename", f"{status.split(' ')[1]} (Primary)")

                for file_data in files_in_group[1:]:
                    original_filename = file_data['original_filename']
                    rename_plan[(NOTES_DIR, original_filename)] = (NOTES_DIR, None, "Delete (Backup)", f"{status.split(' ')[1]} (Duplicate)")
            
            else: # "Gw Distinct Content" - Content differs, need to keep all with unique descriptive suffixes
                assigned_new_filenames = set()
                for i, file_data in enumerate(files_in_group):
                    original_filename = file_data['original_filename']
                    
                    # Try to derive a meaningful suffix
                    descriptive_part = original_filename.replace(video_id, '').replace('.md', '')
                    # Remove common prefixes/suffixes like '-'
                    descriptive_part = descriptive_part.strip('-').strip('_')

                    # If original filename is already exactly the video_id, and it's chosen as primary, keep it simple
                    if original_filename == f"{video_id}.md":
                        proposed_new_filename = f"{video_id}.md"
                    elif original_filename.startswith(f"{video_id}-") and descriptive_part:
                        # If it already starts with video_id-, use the descriptive part
                        proposed_new_filename = f"{video_id}-{simple_slugify(descriptive_part)}.md"
                    elif descriptive_part:
                        # Otherwise, prepend video_id to a slugified version of the descriptive part
                        proposed_new_filename = f"{video_id}-{simple_slugify(descriptive_part)}.md"
                    else:
                        # Fallback for very short or non-descriptive original filenames
                        # Or if slugify results in an empty string from the descriptive part
                        temp_suffix = simple_slugify(original_filename.replace('.md', '').replace(video_id, ''))
                        if temp_suffix:
                             proposed_new_filename = f"{video_id}-{temp_suffix}.md"
                        else:
                            # Use a generic counter if no descriptive part can be made
                            proposed_new_filename = f"{video_id}-document-{i}.md" 
                    
                    # Ensure uniqueness for the proposed name within the group by adding a counter if needed
                    counter = 0
                    final_new_filename = proposed_new_filename
                    while final_new_filename in assigned_new_filenames:
                        counter += 1
                        # If a counter is needed, add it before .md and after any existing dash.
                        if proposed_new_filename.endswith('.md'):
                            base = proposed_new_filename[:-3] # Remove .md
                            final_new_filename = f"{base}-{counter}.md"
                        else: # Should not happen with .md files, but defensive
                            final_new_filename = f"{proposed_new_filename}-{counter}"
                        
                    assigned_new_filenames.add(final_new_filename)
                    rename_plan[(NOTES_DIR, original_filename)] = (NOTES_DIR, final_new_filename, "Rename", "Distinct Content Collision")


    # Generate report
    report_lines = []
    report_lines.append("# File Renaming Plan Dry Run\n")
    report_lines.append(f"Generated On: {os.popen('date').read().strip()}\n")
    report_lines.append("This report outlines the proposed renaming actions for your review.")
    report_lines.append("Please review carefully before approving the actual execution.")
    report_lines.append("\n## Proposed Actions Summary\n")
    report_lines.append("| Original Filename | Proposed New Filename | Action | Notes |")
    report_lines.append("|---|---|---|---|")

    # Sort report by original filename for readability
    for (old_dir, old_name), (new_dir, new_name, action, notes) in sorted(rename_plan.items(), key=lambda x: x[0][1]):
        if action == "Rename":
            report_lines.append(f"| `{old_name}` | `{new_name}` | {action} | {notes} |")
        elif action == "Delete (Backup)":
            report_lines.append(f"| `{old_name}` | N/A | {action} | {notes} |")
        else: # No Action (missing source, etc.)
            report_lines.append(f"| `{old_name}` | N/A | {action} | {notes} |")

    with open(RENAME_REPORT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report_lines))

    print(f"Rename plan dry run generated: {RENAME_REPORT_FILE}")
    print("Please review the plan carefully before proceeding with actual renaming.")

if __name__ == "__main__":
    generate_rename_plan()
