import os
import glob
import frontmatter
import json
import argparse
import shutil
from collections import Counter
from typing import Dict, List, Any

# --- Configuration ---
SOURCE_DIRS = [
    "src/posts",
    "src/notes",
    "src/books"
]

ARCHIVE_DIR = "_archive/low_freq_sources"

# Hardcoded Rules from User
TAGS_TO_DELETE = {
    "video", "youtube", "review", "summary", 
    "2024", "2025"
}

# Semantic Merge Map: Target <- [List of source tags]
# Or Regex-like logic can be handled in code.
# For now, explicit mapping based on user request.
TAG_MERGE_GROUPS = {
    "nvidia": ["nvidia-h100", "nvidia-gpu", "a100"],
    "politics": ["us-politics", "trump", "biden", "white-house"], # Keep us-election if exists? Logic below.
    "gpu": [] # Example placeholder
}

# Move to field
TAG_TO_SPEAKER = {
    "veritasium", "all-in-podcast", "ted"
}

def load_files(root_dir: str) -> List[Dict]:
    files_data = []
    for relative_path in SOURCE_DIRS:
        search_path = os.path.join(root_dir, relative_path, "**/*.md")
        files = glob.glob(search_path, recursive=True)
        for f in files:
            try:
                post = frontmatter.load(f)
                files_data.append({
                    "path": f,
                    "rel_path": os.path.relpath(f, root_dir),
                    "metadata": post.metadata,
                    "content": post.content
                })
            except Exception as e:
                print(f"Error loading {f}: {e}")
    return files_data

def get_speaker_counts(files_data: List[Dict]) -> Counter:
    speakers = []
    for f in files_data:
        sp = f["metadata"].get("speaker")
        if sp:
            speakers.append(sp)
    return Counter(speakers)

def generate_plan(root_dir: str, execute: bool = False):
    files_data = load_files(root_dir)
    speaker_counts = get_speaker_counts(files_data)
    
    plan = {
        "tags_to_remove": {},
        "tags_to_merge": {},
        "tags_to_move_to_speaker": {},
        "files_to_archive": [],
        "authors_to_clear": []
    }
    
    # Analyze Files
    for f in files_data:
        meta = f["metadata"]
        f_path = f["path"]
        rel_path = f["rel_path"]
        
        # 1. Archive Rule
        speaker = meta.get("speaker")
        is_evergreen = "evergreen" in (meta.get("tags") or [])
        rating = meta.get("rating")
        
        # Check if should archive
        if speaker and speaker_counts[speaker] < 3:
            # Check exemptions
            is_high_rated = False
            try:
                if rating and float(str(rating).split('/')[0]) >= 5:
                    is_high_rated = True
            except:
                pass
            
            if not is_evergreen and not is_high_rated:
                plan["files_to_archive"].append({
                    "path": rel_path,
                    "reason": f"Speaker '{speaker}' freq: {speaker_counts[speaker]}"
                })
                
        # 2. Author Dedupe
        author = meta.get("author")
        if speaker and author and speaker.lower() == author.lower():
             plan["authors_to_clear"].append(rel_path)

        # 3. Tag Actions
        tags = meta.get("tags", [])
        if tags and isinstance(tags, list):
            new_tags = []
            file_tag_changes = []
            
            for t in tags:
                # Delete?
                if t in TAGS_TO_DELETE:
                    file_tag_changes.append(f"Remove '{t}'")
                    continue
                
                # Move to Speaker?
                if t in TAG_TO_SPEAKER:
                    file_tag_changes.append(f"Move '{t}' to Speaker")
                    # In execute phase, we would verify if speaker field is empty or append?
                    # User said: "Move tags containing creator names... to the speaker field."
                    # Assuming replace or append logic. 
                    continue
                
                # Merge?
                merged = False
                for target, sources in TAG_MERGE_GROUPS.items():
                    if t in sources:
                        file_tag_changes.append(f"Merge '{t}' -> '{target}'")
                        merged = True
                        break
                
                # Politics special logic logic check
                # User said: "us-politics, trump, biden, white-house -> 统一归类到 Category politics，Tag 只留 us-election 这种大事件。"
                # This implies checking if it SHOULD be mapped to category vs just merged tag.
                # For this script, simplicity: Merge to generic tag or category?
                # User said: "Unified to Category politics". This implies creating a category?
                # But migration script handles Categories.
                # Let's assume for this specific consolidation, we treat them as merges to a generic tag if Category is not the focus of THIS script,
                # BUT the user said "Unified to Category politics", which implies we might need to set category if not set.
                
                if not merged:
                    pass # Keep tag
            
            if file_tag_changes:
                plan["tags_to_remove"][rel_path] = file_tag_changes

    return plan

def execute_plan(root_dir: str, plan: Dict):
    # 1. Archive Files
    if plan["files_to_archive"]:
        archive_path = os.path.join(root_dir, ARCHIVE_DIR)
        os.makedirs(archive_path, exist_ok=True)
        
        for item in plan["files_to_archive"]:
            src = os.path.join(root_dir, item["path"])
            dst = os.path.join(archive_path, os.path.basename(src))
            if os.path.exists(src):
                print(f"Archiving {item['path']} -> {ARCHIVE_DIR}")
                shutil.move(src, dst)
    
    # 2. Update Metadata (Tags, Authors)
    # Re-loading to apply changes safely (or use logic from plan directly if granular enough)
    # Since plan stored "what to do" per file, we can iterate files again or store actions better.
    # For MVP, let's re-process the logic in a write loop or structure the plan to include all data.
    
    # To keep this safe, let's just use the plan for ARCHIVING first as that's physical.
    # Metadata updates require reading/writing MD.
    
    files_to_update = set(plan["authors_to_clear"]) | set(plan["tags_to_remove"].keys())
    
    for rel_path in files_to_update:
        if any(a["path"] == rel_path for a in plan["files_to_archive"]):
             continue # Skip if archived (or maybe update then archive? archiving already moved it)
             # If archived, it's gone from source location.
        
        full_path = os.path.join(root_dir, rel_path)
        if not os.path.exists(full_path):
            continue
            
        post = frontmatter.load(full_path)
        tags = post.metadata.get("tags", [])
        
        # Apply Tag Cleanups
        new_tags = []
        author_cleared = False
        
        # Author Dedupe
        if rel_path in plan["authors_to_clear"]:
            post.metadata["author"] = None # Or remove key?
            del post.metadata["author"]
            author_cleared = True
            
        # Tag Logic (Duplicate logic from generate for safety or use planned changes)
        # Re-running logic is safer than parsing string logs
        if isinstance(tags, list):
            for t in tags:
                if t in TAGS_TO_DELETE:
                    continue
                if t in TAG_TO_SPEAKER:
                    # Check if speaker is set?
                    if not post.metadata.get("speaker"):
                        post.metadata["speaker"] = t # Naive.
                    # If matches current speaker, just drop tag.
                    continue
                
                # Merge
                merged_target = None
                for target, sources in TAG_MERGE_GROUPS.items():
                    if t in sources:
                        merged_target = target
                        break
                
                if merged_target:
                    # Special handling for politics:
                    # "us-politics, trump, biden, white-house -> Unified to Category politics"
                    if merged_target == "politics":
                        post.metadata["category"] = "politics-society" # Force category?
                        # Don't add to tags? User said "Tag only keep us-election"
                        # So if we merge to 'politics', maybe we ADD 'politics' tag or just rely on category?
                        # User said "Unified to Category politics". Let's Promote to Category and Drop Tag.
                        pass 
                    elif merged_target == "nvidia":
                        # Merge to nvidia
                        if "nvidia" not in new_tags:
                            new_tags.append("nvidia")
                    else:
                        if merged_target not in new_tags:
                            new_tags.append(merged_target)
                else:
                    new_tags.append(t)
        
        post.metadata["tags"] = sorted(list(set(new_tags)))
        
        # Write back
        with open(full_path, "wb") as f:
            frontmatter.dump(post, f)
        print(f"Updated metadata for {rel_path}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default=".")
    parser.add_argument("--execute", action="store_true")
    args = parser.parse_args()
    
    root_dir = os.path.abspath(args.root)
    plan = generate_plan(root_dir)
    
    # Save Plan
    with open(os.path.join(root_dir, "refinement_plan.json"), "w", encoding="utf-8") as f:
        json.dump(plan, f, indent=2, ensure_ascii=False)
    
    print(f"Plan generated: refinement_plan.json")
    print(f"Files to archive: {len(plan['files_to_archive'])}")
    print(f"Files with tag changes: {len(plan['tags_to_remove'])}")
    
    if args.execute:
        print("Executing plan...")
        execute_plan(root_dir, plan)

if __name__ == "__main__":
    main()
