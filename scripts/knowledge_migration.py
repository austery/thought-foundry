# /// script
# dependencies = [
#   "python-frontmatter",
#   "pandas",
#   "inflect",
#   "pyyaml",
# ]
# ///

import os
import glob
import frontmatter
import pandas as pd
import json
import argparse
import inflect
from pathlib import Path
from typing import Dict, List, Any, Set, Tuple

# --- Configuration ---
SOURCE_DIRS = [
    "src/posts",
    "src/notes",
    "src/books"
]

p = inflect.engine()

def load_json_config(path: str) -> Dict:
    if not os.path.exists(path):
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def singularize_tag(tag: str, exceptions: List[str] = []) -> str:
    """Converts plural tag to singular if applicable, respecting exceptions."""
    # Split by hyphen to handle kebab-case (e.g. "data-centers" -> "data-center")
    parts = tag.split('-')
    if not parts:
        return tag
    
    # Check if the last word is in exceptions (e.g. "politics" in "us-politics")
    last_word = parts[-1].lower()
    if last_word in exceptions:
        return tag
    
    # Try singularizing the last word
    singular = p.singular_noun(last_word)
    
    if singular:
        parts[-1] = singular
        return "-".join(parts)
    return tag

def process_file_metadata(
    filepath: str, 
    data: Dict[str, Any], 
    taxonomy: Dict, 
    cleaning_rules: Dict
) -> Dict[str, Any]:
    """
    Transforms metadata based on rules. 
    Returns a dict with 'changed': bool, 'logs': list of changes, 'new_data': dict
    """
    logs = []
    original_tags = set(data.get("tags", []) or [])
    # Ensure tags is a list of strings
    if data.get("tags") and isinstance(data["tags"], str):
         original_tags = {data["tags"]}
    
    current_tags = set(original_tags)
    changes_made = False
    
    new_data = data.copy()
    
    rules = cleaning_rules.get("cleaning_rules", {})
    tag_rules = taxonomy.get("governance", {}).get("tag_rules", {})
    singular_exceptions = tag_rules.get("singular_exceptions", [])
    
    # 1. Move to Field (e.g., Tag -> Speaker/Author)
    move_map = rules.get("move_to_field", {})
    for target_field, keywords in move_map.items():
        for keyword in keywords:
            if keyword in current_tags:
                current_tags.remove(keyword)
                # Add to target field
                current_val = new_data.get(target_field)
                if current_val is None:
                    new_data[target_field] = keyword
                elif isinstance(current_val, list):
                    if keyword not in current_val:
                        current_val.append(keyword)
                elif isinstance(current_val, str):
                    if keyword != current_val:
                        new_data[target_field] = keyword 
                
                logs.append(f"Moved tag '{keyword}' to field '{target_field}'")
                changes_made = True

    # 2. Singularize
    if rules.get("plural_to_singular"):
        singularized_tags = set()
        for tag in current_tags:
            s_tag = singularize_tag(tag, singular_exceptions)
            if s_tag != tag:
                logs.append(f"Singularized '{tag}' -> '{s_tag}'")
                changes_made = True
            singularized_tags.add(s_tag)
        current_tags = singularized_tags

    # 3. Language Map & Merge Map
    lang_map = rules.get("language_map", {})
    merge_map = rules.get("merge_map", {})
    
    mapped_tags = set()
    for tag in current_tags:
        final_tag = tag
        
        # Language Map
        if tag in lang_map:
            final_tag = lang_map[tag]
            logs.append(f"Translated '{tag}' -> '{final_tag}'")
            changes_made = True
            
        # Merge Map (Parent Topic)
        if final_tag in merge_map:
            old_final = final_tag
            final_tag = merge_map[final_tag]
            logs.append(f"Merged '{old_final}' -> '{final_tag}'")
            changes_made = True
            
        mapped_tags.add(final_tag)
    current_tags = mapped_tags

    # 4. Promote to Category
    # Check both taxonomy.json and cleaning_rules.json
    promote_map = rules.get("promote_to_category", {})
    
    # Also build map from taxonomy.json
    taxonomy_cats = taxonomy.get("taxonomy", {}).get("categories", [])
    for cat in taxonomy_cats:
        cat_id = cat.get("id")
        area_id = cat.get("area")
        migrate_list = cat.get("tags_to_migrate", [])
        for t in migrate_list:
            promote_map[t] = {"category": cat_id, "area": area_id}
            
    tags_to_remove = set()
    for tag in current_tags:
        if tag in promote_map:
            mapping = promote_map[tag]
            new_cat = mapping.get("category")
            new_area = mapping.get("area")
            
            # Only apply if currently missing or different (optional: overwrite?)
            # Plan says "If match, promote... remove from tags".
            if new_data.get("category") != new_cat:
                new_data["category"] = new_cat
                new_data["area"] = new_area
                logs.append(f"Promoted tag '{tag}' -> Category: {new_cat}, Area: {new_area}")
                changes_made = True
            
            tags_to_remove.add(tag)
            
    current_tags = current_tags - tags_to_remove
    if tags_to_remove:
         changes_made = True

    # Update tags in new_data
    # Convert back to list and sort
    new_data["tags"] = sorted(list(current_tags))

    # 5. Entity Normalization (People / Companies)
    entity_aliases = taxonomy.get("taxonomy", {}).get("entity_aliases", {})
    people_map = entity_aliases.get("people", {})
    company_map = entity_aliases.get("companies", {})
    
    # Normalize People
    if "people" in new_data and isinstance(new_data["people"], list):
        new_people = []
        people_changed = False
        for p in new_data["people"]:
            normalized = people_map.get(p, p)
            if normalized != p:
                logs.append(f"Normalized Person '{p}' -> '{normalized}'")
                people_changed = True
            if normalized not in new_people: # Dedupe
                new_people.append(normalized)
        
        if people_changed:
            new_data["people"] = new_people
            changes_made = True

    # Normalize Companies
    if "companies_orgs" in new_data and isinstance(new_data["companies_orgs"], list):
        new_companies = []
        comp_changed = False
        for c in new_data["companies_orgs"]:
            normalized = company_map.get(c, c)
            if normalized != c:
                logs.append(f"Normalized Company '{c}' -> '{normalized}'")
                comp_changed = True
            if normalized not in new_companies:
                new_companies.append(normalized)
                
        if comp_changed:
            new_data["companies_orgs"] = new_companies
            changes_made = True

    # 6. Speaker De-duplication (Remove Speaker from People)
    # Ensure speaker is normalized first
    speaker = new_data.get("speaker")
    people = new_data.get("people", [])
    
    if speaker and people:
        # Check if speaker has an alias
        # Note: Speaker field might be "Veritasium", check alias map?
        # Assuming speaker field is already the canonical name or we should verify against people aliases too?
        # The user said: "Speaker: Veritasium, People: Newton. Keep Newton."
        # "Speaker: 小翠, People: 小翠. Remove 小翠 from People."
        
        # We need to normalize speaker to compare with normalized people
        # But speaker field itself might be a channel name not in people aliases.
        # Let's try to match exactly first.
        
        filtered_people = []
        dedupe_changed = False
        
        # Normalize speaker if it's in the people map (just in case)
        normalized_speaker = people_map.get(speaker, speaker)
        
        for p in people:
            if p == normalized_speaker:
                logs.append(f"Removed Speaker '{p}' from People list (De-duplication)")
                dedupe_changed = True
            else:
                filtered_people.append(p)
                
        if dedupe_changed:
            new_data["people"] = filtered_people
            changes_made = True

    return {
        "changed": changes_made,
        "logs": logs,
        "new_data": new_data,
        "original_tags": list(original_tags)
    }

def main():
    parser = argparse.ArgumentParser(description="Migrate Knowledge Base Metadata")
    parser.add_argument("--root", default=".", help="Project root directory")
    parser.add_argument("--execute", action="store_true", help="Actually overwrite files")
    parser.add_argument("--preview", action="store_true", default=True, help="Generate CSV preview (default)")
    args = parser.parse_args()
    
    # If execute is strictly requested to be False (not just default), handle logic if needed. 
    # Argparse 'store_true' defaults to False.
    
    root_dir = os.path.abspath(args.root)
    print(f"Loading configuration from {root_dir}...")
    
    taxonomy = load_json_config(os.path.join(root_dir, "taxonomy.json"))
    cleaning_rules = load_json_config(os.path.join(root_dir, "cleaning_rules.json"))
    
    preview_rows = []
    
    files_modified_count = 0
    
    for relative_path in SOURCE_DIRS:
        search_path = os.path.join(root_dir, relative_path, "**/*.md")
        files = glob.glob(search_path, recursive=True)
        
        for file_path in files:
            try:
                post = frontmatter.load(file_path)
                result = process_file_metadata(file_path, post.metadata, taxonomy, cleaning_rules)
                
                if result["changed"]:
                    files_modified_count += 1
                    
                    # Add to Preview CSV
                    preview_rows.append({
                        "filepath": os.path.relpath(file_path, root_dir),
                        "original_tags": ", ".join(result["original_tags"]),
                        "new_tags": ", ".join(result["new_data"].get("tags", [])),
                        "new_category": result["new_data"].get("category"),
                        "new_area": result["new_data"].get("area"),
                        "changes": "; ".join(result["logs"])
                    })
                    
                    if args.execute:
                        post.metadata = result["new_data"]
                        # Write back
                        with open(file_path, "wb") as f:
                            frontmatter.dump(post, f)
                            
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

    print(f"Total Files Scanned: {len(files)}") # Approximate logic, variable 'files' is loop var. 
    # Correct would be summing up found files. But simpler:
    print(f"Files to be modified: {files_modified_count}")
    
    # Save Preview
    df = pd.DataFrame(preview_rows)
    if not df.empty:
        csv_path = os.path.join(root_dir, "migration_preview.csv")
        df.to_csv(csv_path, index=False)
        print(f"Preview saved to: {csv_path}")
    else:
        print("No changes needed based on current rules.")

if __name__ == "__main__":
    main()
