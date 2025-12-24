import csv
import json
import re
import os
import glob
import frontmatter
from collections import Counter

# Configuration
INPUT_INVENTORY = "entity_inventory.csv"
ARCHIVE_FILE = "archived_people.json"
THRESHOLD = 2 # Delete people with count <= 2 (i.e. < 3)
WHITELIST = {
    "Justin", "Coco", "MyWife", "Gu Zhun", "顾准", "Zhang Xiuxiu", "张修修"
}

def is_mixed_lang(name):
    """Check if name contains both Latin and Chinese characters."""
    has_latin = bool(re.search(r'[a-zA-Z]', name))
    has_chinese = bool(re.search(r'[\u4e00-\u9fff]', name))
    return has_latin and has_chinese

def main():
    print(f"🚀 Starting People Purge (Threshold: Count <= {THRESHOLD})...")
    
    # 1. Load Inventory & Identify Candidates
    people_counts = {}
    with open(INPUT_INVENTORY, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['type'] == 'people':
                people_counts[row['value']] = int(row['count'])

    to_purge = set()
    kept_count = 0
    
    for person, count in people_counts.items():
        # Rule 1: Whitelist
        if person in WHITELIST:
            kept_count += 1
            continue
            
        # Rule 2: Mixed Language (e.g. "Elon Musk (马斯克)")
        if is_mixed_lang(person):
            kept_count += 1
            continue
            
        # Rule 3: Threshold
        if count <= THRESHOLD:
            to_purge.add(person)
        else:
            kept_count += 1
            
    print(f"📊 Analysis Result:")
    print(f"   Total People: {len(people_counts)}")
    print(f"   To Purge: {len(to_purge)}")
    print(f"   To Keep: {kept_count}")
    
    # 2. Execute Purge on Markdown Files
    scan_dirs = ["src/posts", "src/notes", "src/books"]
    files_modified = 0
    removed_log = []

    for d in scan_dirs:
        search_path = os.path.join(d, "**/*.md")
        files = glob.glob(search_path, recursive=True)
        
        for f_path in files:
            try:
                post = frontmatter.load(f_path)
                changed = False
                
                current_people = post.metadata.get("people", [])
                if not current_people: continue
                if isinstance(current_people, str): current_people = [current_people]
                
                new_people = []
                for p in current_people:
                    if p in to_purge:
                        # Purge this person
                        removed_log.append({"name": p, "source": f_path})
                        changed = True
                    else:
                        new_people.append(p)
                
                if changed:
                    post.metadata["people"] = new_people
                    # Remove field if empty?
                    if not new_people:
                        del post.metadata["people"]
                        
                    with open(f_path, "wb") as f:
                        frontmatter.dump(post, f)
                    files_modified += 1
                    
            except Exception as e:
                print(f"Error processing {f_path}: {e}")

    # 3. Save Graveyard
    with open(ARCHIVE_FILE, 'w', encoding='utf-8') as f:
        json.dump(removed_log, f, indent=2, ensure_ascii=False)
        
    print(f"✅ Purge Complete.")
    print(f"   Files Modified: {files_modified}")
    print(f"   Removed Instances: {len(removed_log)}")
    print(f"   Graveyard saved to: {ARCHIVE_FILE}")

if __name__ == "__main__":
    main()
