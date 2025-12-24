import json
import os

FILES = {
    "clusters": "orphan_clusters_folded.json",
    "manual": "suggested_merges.json",
    "fuzzy": "comprehensive_migration_plan.json"
}

OUTPUT_FILE = "final_execution_map.json"

ENTITY_FIELD_MAP = {
    "Company": "companies",   
    "People": "people",
    "Media_Book": "media_books"
}

def main():
    execution_plan = {
        "move_to_field": {},      
        "merge_to_tag": {},       
        "delete": set()          
    }

    # 1. Process Clusters (The Folded Analysis)
    if os.path.exists(FILES["clusters"]):
        with open(FILES["clusters"], 'r') as f:
            data = json.load(f)
            clusters = data.get("clusters", {})
            
            for category, tags in clusters.items():
                
                # A. Entities -> Move to Field
                if category in ENTITY_FIELD_MAP:
                    target_field = ENTITY_FIELD_MAP[category]
                    for tag in tags:
                        execution_plan["move_to_field"][tag] = target_field

                # B. Explicit Deletes (from Fold script)
                elif category == "_to_delete":
                    for tag in tags:
                        execution_plan["delete"].add(tag)

                # C. Misc Remaining -> KEEP (Fold strategy)
                elif category == "_misc_remaining" or category.startswith("_misc"):
                     pass 
                        
                # D. Special Handling for New Categories
                elif category == "Location":
                    target_anchor = "geopolitics" 
                    for tag in tags:
                        execution_plan["merge_to_tag"][tag] = target_anchor

                elif category == "China_Context":
                    target_anchor = "china"
                    for tag in tags:
                        execution_plan["merge_to_tag"][tag] = target_anchor
                
                elif category == "Mental_Model":
                    target_anchor = "psychology"
                    for tag in tags:
                        execution_plan["merge_to_tag"][tag] = target_anchor

                # E. Topics -> Merge to Anchor (Standard)
                else:
                    target_anchor = category.lower()
                    for tag in tags:
                        if tag.lower() != target_anchor:
                            execution_plan["merge_to_tag"][tag] = target_anchor

    # 2. Process Manual Merges (High Priority Override)
    if os.path.exists(FILES["manual"]):
        with open(FILES["manual"], 'r') as f:
            data = json.load(f)
            for tag, target in data.get("tag_merges", {}).items():
                execution_plan["merge_to_tag"][tag] = target
                if tag in execution_plan["delete"]: execution_plan["delete"].remove(tag)
                if tag in execution_plan["move_to_field"]: del execution_plan["move_to_field"][tag]

            for tag, target in data.get("fuzzy_merges", {}).items():
                execution_plan["merge_to_tag"][tag] = target
                if tag in execution_plan["delete"]: execution_plan["delete"].remove(tag)

    # 3. Process Fuzzy Plan (Lower Priority)
    if os.path.exists(FILES["fuzzy"]):
        with open(FILES["fuzzy"], 'r') as f:
            data = json.load(f)
            for tag, target in data.get("merges", {}).items():
                # Only if not already handled by manual or cluster
                if tag not in execution_plan["merge_to_tag"] and tag not in execution_plan["move_to_field"]:
                    execution_plan["merge_to_tag"][tag] = target
                    if tag in execution_plan["delete"]: execution_plan["delete"].remove(tag)
            
            # "orphans_to_delete" -> explicitly requested deletes
            # BUT user said "Only delete true noise".
            # The comprehensive plan had broad deletes. Let's ignore them in favor of the new Fold strategy.
            # Only assume cluster deletes are authoritative now.
            pass


    # Convert set to list for JSON
    execution_plan["delete"] = list(execution_plan["delete"])
    
    # Stats
    print(f"Plan Compiled: {OUTPUT_FILE}")
    print(f"  -> Tags to MOVE to Fields: {len(execution_plan['move_to_field'])}")
    print(f"  -> Tags to MERGE to Topics: {len(execution_plan['merge_to_tag'])}")
    print(f"  -> Tags to DELETE: {len(execution_plan['delete'])}")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(execution_plan, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    main()
