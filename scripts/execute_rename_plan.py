import os
import re
import frontmatter
from collections import defaultdict
import hashlib
from datetime import datetime, date

NOTES_DIR = 'src/notes'
COLLISION_ANALYSIS_FILE = 'docs/collision_analysis.md'

YOUTUBE_REGEX = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')

def get_video_id_from_url(url):
    if not url:
        return None
    match = YOUTUBE_REGEX.search(url)
    if match:
        return match.group(1)
    return None

def simple_slugify(text):
    text = re.sub(r'[^\w\s-]', '', text).strip().lower()
    text = re.sub(r'[\s_]+', '-', text)
    return text

def parse_collision_analysis_report():
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

def execute_renames():
    # 1. Regenerate the plan (to ensure consistency with dry run logic)
    files_by_target_id = defaultdict(list)
    collision_statuses = parse_collision_analysis_report()

    for filename in sorted(os.listdir(NOTES_DIR)):
        if not filename.endswith('.md'):
            continue
            
        filepath = os.path.join(NOTES_DIR, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            post = frontmatter.loads(content)
            source = post.get('source')
            
            if not source: continue
            video_id = get_video_id_from_url(source)
            if not video_id: continue

            meta_date = None
            date_from_fm = post.get('date')
            if isinstance(date_from_fm, datetime):
                meta_date = date_from_fm
            elif isinstance(date_from_fm, date):
                meta_date = datetime(date_from_fm.year, date_from_fm.month, date_from_fm.day)
            elif isinstance(date_from_fm, str):
                date_formats = ['%Y-%m-%d', '%Y-%m-%d %H:%M:%S', '%Y-%m-%dT%H:%M:%S%z', '%Y-%m-%d %H:%M:%S.%f']
                for fmt in date_formats:
                    try:
                        meta_date = datetime.strptime(date_from_fm, fmt)
                        break
                    except ValueError: pass
            
            files_by_target_id[video_id].append({
                'original_filename': filename,
                'filepath': filepath,
                'metadata_date': meta_date
            })
        except Exception as e:
            print(f"Skipping {filename}: {e}")

    # 2. Execute Actions
    renamed_count = 0
    deleted_count = 0
    errors = 0

    # Sort video IDs to process in a stable order
    for video_id in sorted(files_by_target_id.keys()):
        files_in_group = files_by_target_id[video_id]
        
        # Sort logic (must match generate_rename_plan)
        files_in_group.sort(key=lambda x: (
            x['original_filename'] == f"{video_id}.md",
            x['metadata_date'] if x['metadata_date'] else datetime.min,
            len(x['original_filename']),
            x['original_filename']
        ), reverse=True)

        if len(files_in_group) == 1:
            # Single file case
            f_data = files_in_group[0]
            old_path = f_data['filepath']
            new_name = f"{video_id}.md"
            new_path = os.path.join(NOTES_DIR, new_name)
            
            if f_data['original_filename'] != new_name:
                try:
                    os.rename(old_path, new_path)
                    print(f"Renamed: {f_data['original_filename']} -> {new_name}")
                    renamed_count += 1
                except OSError as e:
                    print(f"Error renaming {f_data['original_filename']}: {e}")
                    errors += 1
        
        else:
            # Collision Case
            status = collision_statuses.get(video_id, "Gw Distinct Content")
            
            if status == "✅ Exact Duplicate" or status == "⚠️ Content Match":
                # Primary
                primary = files_in_group[0]
                old_path = primary['filepath']
                new_name = f"{video_id}.md"
                new_path = os.path.join(NOTES_DIR, new_name)
                
                if primary['original_filename'] != new_name:
                    try:
                        os.rename(old_path, new_path)
                        print(f"Renamed Primary: {primary['original_filename']} -> {new_name}")
                        renamed_count += 1
                    except OSError as e:
                        print(f"Error renaming {primary['original_filename']}: {e}")
                        errors += 1
                
                # Delete others
                for f_data in files_in_group[1:]:
                    try:
                        os.remove(f_data['filepath'])
                        print(f"Deleted Duplicate: {f_data['original_filename']}")
                        deleted_count += 1
                    except OSError as e:
                        print(f"Error deleting {f_data['original_filename']}: {e}")
                        errors += 1
            
            else: # Distinct Content
                assigned_new_filenames = set()
                
                # We need to process files carefully to avoid overwriting files that haven't been renamed yet
                # Strategy: Rename all to temporary names first, then to final names? 
                # Or just check for existence.
                # Actually, simpler: Calculate all moves for this group first.
                
                moves = [] # list of (old_path, new_path)
                
                for i, f_data in enumerate(files_in_group):
                    original_filename = f_data['original_filename']
                    descriptive_part = original_filename.replace(video_id, '').replace('.md', '')
                    descriptive_part = descriptive_part.strip('-').strip('_')

                    if original_filename == f"{video_id}.md":
                        proposed = f"{video_id}.md"
                    elif original_filename.startswith(f"{video_id}-") and descriptive_part:
                        proposed = f"{video_id}-{simple_slugify(descriptive_part)}.md"
                    elif descriptive_part:
                        proposed = f"{video_id}-{simple_slugify(descriptive_part)}.md"
                    else:
                        temp_suffix = simple_slugify(original_filename.replace('.md', '').replace(video_id, ''))
                        if temp_suffix:
                             proposed = f"{video_id}-{temp_suffix}.md"
                        else:
                            proposed = f"{video_id}-document-{i}.md"
                    
                    # Uniqueness
                    counter = 0
                    final_new_filename = proposed
                    while final_new_filename in assigned_new_filenames:
                        counter += 1
                        if proposed.endswith('.md'):
                            base = proposed[:-3]
                            final_new_filename = f"{base}-{counter}.md"
                        else:
                            final_new_filename = f"{proposed}-{counter}"
                    
                    assigned_new_filenames.add(final_new_filename)
                    moves.append((f_data['filepath'], os.path.join(NOTES_DIR, final_new_filename)))

                # Check for direct conflicts within the group (e.g., A -> B, but B exists and is also being moved)
                # To be safe, if a target file exists and is NOT the source file, we might have an issue if we don't handle order.
                # Python's os.rename is atomic on POSIX.
                # We should do this in two passes:
                # 1. Rename to temporary unique names if target exists.
                # But actually, since we are calculating unique names based on the *set of new names*,
                # the only conflict is if a file *already exists on disk* that is NOT part of this group (which shouldn't happen if video_id is unique)
                # OR if we are swapping names.
                
                # Let's simple try renaming. If target exists, skip and log? 
                # No, we want to force it. But we should be careful.
                # Since we already handle collisions within the group logic, the distinct names should be unique.
                
                for old_p, new_p in moves:
                    if old_p == new_p: continue
                    
                    if os.path.exists(new_p):
                        # If target exists, it might be one of the files in our group that hasn't moved yet.
                        # Simple workaround: rename to temp, then final.
                        temp_path = new_path + ".tmp"
                        try:
                            os.rename(old_p, temp_path)
                            os.rename(temp_path, new_p)
                            print(f"Renamed (Distinct): {os.path.basename(old_p)} -> {os.path.basename(new_p)}")
                            renamed_count += 1
                        except OSError as e:
                            print(f"Error renaming {os.path.basename(old_p)}: {e}")
                            errors += 1
                    else:
                        try:
                            os.rename(old_p, new_p)
                            print(f"Renamed (Distinct): {os.path.basename(old_p)} -> {os.path.basename(new_p)}")
                            renamed_count += 1
                        except OSError as e:
                            print(f"Error renaming {os.path.basename(old_p)}: {e}")
                            errors += 1

    print(f"\nExecution Complete.")
    print(f"Renamed: {renamed_count}")
    print(f"Deleted: {deleted_count}")
    print(f"Errors: {errors}")

if __name__ == "__main__":
    execute_renames()
