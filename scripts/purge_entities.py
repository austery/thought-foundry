import csv
import json
import re
import os
import glob
import frontmatter
from collections import Counter

# Configuration
INPUT_INVENTORY = "entity_inventory.csv"
ARCHIVE_FILE = "archived_entities_ph5.json"
THRESHOLD = 2 # Purge if count <= 2

# Fields to target
TARGET_FIELDS = ["companies_orgs", "products_models"]

# Whitelist (Optional)
WHITELIST = {
    # Add any specific keeps here
    "Google", "Apple", "Microsoft", "OpenAI" # Likely high freq anyway
}

def is_mixed_lang(name):
    """Check if name contains both Latin and Chinese characters."""
    if not isinstance(name, str): return False
    has_latin = bool(re.search(r'[a-zA-Z]', name))
    has_chinese = bool(re.search(r'[\u4e00-\u9fff]', name))
    return has_latin and has_chinese

def main():
    print(f"🚀 Starting Entity Purge (Threshold: Count <= {THRESHOLD}) for {TARGET_FIELDS}...")
    
    # 1. Load Inventory
    counts = {field: {} for field in TARGET_FIELDS}
    
    with open(INPUT_INVENTORY, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            rtype = row['type']
            if rtype in TARGET_FIELDS:
                counts[rtype][row['value']] = int(row['count'])

    to_purge = {field: set() for field in TARGET_FIELDS}
    stats = {field: {"total": 0, "purge": 0, "keep": 0} for field in TARGET_FIELDS}

    for field in TARGET_FIELDS:
        field_counts = counts[field]
        stats[field]["total"] = len(field_counts)
        
        for name, count in field_counts.items():
            # Rules
            # 1. Whitelist
            if name in WHITELIST:
                stats[field]["keep"] += 1
                continue
            
            # 2. Mixed Lang
            if is_mixed_lang(name):
                stats[field]["keep"] += 1
                continue
                
            # 3. Threshold
            if count <= THRESHOLD:
                to_purge[field].add(name)
                stats[field]["purge"] += 1
            else:
                stats[field]["keep"] += 1

    print("\n📊 Analysis Result:")
    for field in TARGET_FIELDS:
        s = stats[field]
        print(f"[{field}] Total: {s['total']} | Purge: {s['purge']} | Keep: {s['keep']}")

    # 2. Execute Purge
    scan_dirs = ["src/posts", "src/notes", "src/books"]
    files_modified = 0
    removed_log = []

    for d in scan_dirs:
        if not os.path.exists(d): continue
        search_path = os.path.join(d, "**/*.md")
        files = glob.glob(search_path, recursive=True)
        
        for f_path in files:
            try:
                post = frontmatter.load(f_path)
                changed = False
                
                for field in TARGET_FIELDS:
                    current_items = post.metadata.get(field, [])
                    if not current_items: continue
                    
                    if isinstance(current_items, str): current_items = [current_items]
                    
                    new_items = []
                    for item in current_items:
                        # Check if this exact item is in purge list for this field
                        # Note: inventory checking logic matches exact string.
                        if item in to_purge[field]:
                            removed_log.append({
                                "field": field,
                                "value": item,
                                "source": f_path
                            })
                            changed = True
                        else:
                            new_items.append(item)
                    
                    if changed:
                        post.metadata[field] = new_items
                        if not new_items:
                            del post.metadata[field]

                if changed:
                    with open(f_path, "wb") as f:
                        frontmatter.dump(post, f)
                    files_modified += 1

            except Exception as e:
                print(f"Error processing {f_path}: {e}")

    # 3. Save Graveyard
    with open(ARCHIVE_FILE, 'w', encoding='utf-8') as f:
        json.dump(removed_log, f, indent=2, ensure_ascii=False)
        
    print(f"\n✅ Purge Complete.")
    print(f"   Files Modified: {files_modified}")
    print(f"   Removed Instances: {len(removed_log)}")
    print(f"   Graveyard saved to: {ARCHIVE_FILE}")

if __name__ == "__main__":
    main()
