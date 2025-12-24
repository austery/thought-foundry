import os
import frontmatter
import json
import yaml

# Use a faster dumper if available, or default
try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Loader, Dumper

PLAN_FILE = "final_execution_map.json"
CONTENT_DIRS = ["src/posts", "src/notes", "src/books"]

def load_plan():
    with open(PLAN_FILE, 'r') as f:
        return json.load(f)

def process_file(filepath, plan):
    try:
        post = frontmatter.load(filepath)
        changed = False
        
        # Helper to ensure list
        def ensure_list(data, key):
            if key not in data or data[key] is None:
                data[key] = []
            elif isinstance(data[key], str):
                data[key] = [data[key]]
            return data[key]

        if 'tags' in post.metadata:
            original_tags = ensure_list(post.metadata, 'tags')
            new_tags = []
            
            for tag in original_tags:
                tag_lower = tag # keep casing or lower? taxonomy says lowercase.
                # All our maps are lowercase keys from previous steps? 
                # Actually identifying scripts used raw values but most tags were lower.
                # Let's check map match strictly then try lower.
                
                # Check Move (Entity)
                target_field = None
                if tag in plan["move_to_field"]: target_field = plan["move_to_field"][tag]
                
                if target_field:
                    ensure_list(post.metadata, target_field)
                    if tag not in post.metadata[target_field]:
                        # Use clean tag name? Or keep original?
                        # User wants entities cleaned? 
                        # Usually entities are proper case in map?
                        # The map keys are the tags. The validation logic should probably normalize names later.
                        # For now, just move the value.
                        post.metadata[target_field].append(tag)
                    changed = True
                    continue # Moved, so don't add to new_tags
                
                # Check Merge (Topic)
                if tag in plan["merge_to_tag"]:
                    target_tag = plan["merge_to_tag"][tag]
                    new_tags.append(target_tag)
                    if target_tag != tag: changed = True
                    continue
                    
                # Check Delete
                if tag in plan["delete"]:
                    changed = True
                    continue # Deleted
                
                # Keep original if untouched
                new_tags.append(tag)
            
            if changed:
                # Deduplicate and Sort
                post.metadata['tags'] = sorted(list(set(new_tags)))
                
                # Clean up empty entities if any created
                for field in ["companies", "people", "media_books"]:
                    if field in post.metadata and not post.metadata[field]:
                        del post.metadata[field]
                        
                # Write back
                with open(filepath, 'wb') as f:
                    content = frontmatter.dumps(post, sort_keys=False)
                    f.write(content.encode('utf-8'))
                return True
                
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

    return False

def main():
    plan = load_plan()
    total_files = 0
    modified_files = 0
    
    print("Starting Tag Migration Execution...")
    
    for relative_dir in CONTENT_DIRS:
        root_dir = os.path.join(os.getcwd(), relative_dir)
        if not os.path.exists(root_dir): continue
        
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith(".md"):
                    total_files += 1
                    filepath = os.path.join(root, file)
                    if process_file(filepath, plan):
                        modified_files += 1
                        if modified_files % 100 == 0:
                            print(f"Modified {modified_files} files...")

    print(f"Execution Complete.")
    print(f"Total Files Scanned: {total_files}")
    print(f"Files Modified: {modified_files}")

if __name__ == "__main__":
    main()
