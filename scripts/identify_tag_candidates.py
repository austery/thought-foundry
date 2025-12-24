import csv
import json
import re
import difflib
from typing import List, Dict, Set

INPUT_FILE = "entity_inventory.csv"
OUTPUT_FILE = "full_migration_plan.json"

# Manual Overrides from previous step (Preserve these rules)
MANUAL_MERGES = {
    "婚姻成长": "family-relations",
    "亲子关系": "parenting",
    "家庭教育": "parenting",
    "夫妻关系": "marriage",
    "理财": "wealth-management",
    "财富积累": "wealth-accumulation",
    "风险投资": "venture-capital",
    "风险管理": "risk-management",
    "财报": "earnings-report",
    "房地产投资": "real-estate-investment",
    "自我成长": "personal-growth",
    "个人成长": "personal-growth",
    "自动驾驶": "autonomous-driving",
    "智能驾驶": "autonomous-driving",
    "人工智能": "ai",
    "美国政治": "us-politics",
    "中美关系": "us-china-relations"
}

def is_chinese(text):
    return bool(re.search(r'[\u4e00-\u9fff]', text))

def main():
    tags = []
    
    # Read Inventory
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['type'] == 'tags':
                tags.append({
                    "tag": row['value'],
                    "count": int(row['count'])
                })
    
    # Sort by frequency
    tags.sort(key=lambda x: x['count'], reverse=True)
    
    # Strategy: Top 300 are the "Magnets"
    ANCHOR_COUNT = 300
    top_anchors = [t['tag'] for t in tags[:ANCHOR_COUNT]]
    
    # Tags to process: Count < 2 (Frequency = 1) OR Chinese tags
    candidates_to_process = [t for t in tags if t['count'] < 2 or is_chinese(t['tag'])]
    
    plan = {
        "merges": {},      # tag -> target
        "deletions": [],   # list of tags
        "kept": []         # analysis log
    }
    
    for item in candidates_to_process:
        tag = item['tag']
        
        # 0. Manual Override Check
        if tag in MANUAL_MERGES:
            plan["merges"][tag] = MANUAL_MERGES[tag]
            continue
            
        # 1. Fuzzy Match to Top 300
        # Criteria 1: Direct containment (e.g. "ai-agent-framework" contains "ai-agent")
        # Criteria 2: High difflib ratio
        
        match_found = False
        best_match = None
        best_score = 0.0
        
        for anchor in top_anchors:
            # Containment check (longer into shorter usually for categorization)
            # anchor: "ai-agent" (Freq 53)
            # tag: "ai-agents-framework" (Freq 1) -> Merge to "ai-agent" is decent lossy compression
            if anchor in tag and len(anchor) > 3: 
                # prioritize containment, but maybe too aggressive? 
                # "us-politics" in "us-politics-daily" -> OK.
                # "ai" in "mail" -> NO. hyphens help.
                if anchor == tag: continue
                
                # Verify boundary or hyphen
                # simple check: is anchor a token in the tag?
                tokens = tag.split('-')
                anchor_tokens = anchor.split('-')
                if any(t in tokens for t in anchor_tokens if len(t)>3):
                     best_match = anchor
                     best_score = 1.0 # Virtual max
                     match_found = True
                     break
            
            # Difflib check
            ratio = difflib.SequenceMatcher(None, tag, anchor).ratio()
            if ratio > 0.85: # High similarity
                if ratio > best_score:
                    best_score = ratio
                    best_match = anchor
                    
        if match_found or (best_match and best_score > 0.85):
            plan["merges"][tag] = best_match
        else:
            # If Chinese and no manual merge found -> Delete? Or Keep?
            # User said "If frequency is 1... if found ok, if not delete."
            # He specifically mentioned "Chinese... can be merged".
            # If we delete Chinese tags without translation, we lose info.
            # But script can't translate automatically without an LLM call per tag (too slow/costly here?)
            # Agent already did a batch translation in previous step.
            # For remaining Chinese tags (count 1), if not in manual list, delete?
            # User instruction: "Any freq 1... if not matched... consider delete".
            
            # Let's be aggressive as requested.
            plan["deletions"].append(tag)

    # Output
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(plan, f, indent=2, ensure_ascii=False)

    print(f"Plan generated: {OUTPUT_FILE}")
    print(f"Top Anchors used: {len(top_anchors)}")
    print(f"Tags processed: {len(candidates_to_process)}")
    print(f"  -> Merged: {len(plan['merges'])}")
    print(f"  -> Deleted: {len(plan['deletions'])}")

if __name__ == "__main__":
    main()
