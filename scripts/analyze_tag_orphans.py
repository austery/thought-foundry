import csv
import json
import difflib
import re

INPUT_FILE = "entity_inventory.csv"
OUTPUT_FILE = "tag_analysis_report.json"

# Explicit Deletions requested by user
DELETIONS = {"视频笔记", "视频文稿"}

# Manual Semantic Map (from previous step, keeping valid ones)
SEMANTIC_MAP = {
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
    "中美关系": "us-china-relations",
    "副业": "side-hustle",
    "社群": "community"
}

def main():
    tags = []
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['type'] == 'tags':
                tags.append({"tag": row['value'], "count": int(row['count'])})
    
    tags.sort(key=lambda x: x['count'], reverse=True)
    
    # 1. Establish Anchors (Top 300)
    anchors = [t['tag'] for t in tags[:300]]
    # Add mapped targets to anchors if not present
    for target in SEMANTIC_MAP.values():
        if target not in anchors:
            anchors.append(target)
            
    # 2. Process Tail
    # Tail = anything not in Top 300 AND count < 3 (User focused on low freq)
    # Actually user said "read the whole file", but let's focus on the actionable low freq ones.
    # Let's check everything with count < 5 to be safe.
    
    tail_tags = [t for t in tags if t['count'] < 5 and t['tag'] not in anchors]
    
    analysis = {
        "explicit_deletions": list(DELETIONS),
        "proposed_merges": {},      # tag -> anchor
        "orphans": []               # list of tags
    }
    
    for item in tail_tags:
        tag = item['tag']
        
        # Check Deletion
        if tag in DELETIONS:
            continue # Already tracked
            
        # Check Semantic Map
        if tag in SEMANTIC_MAP:
            analysis["proposed_merges"][tag] = SEMANTIC_MAP[tag]
            continue
            
        # Check Anchor Matching
        match_found = False
        
        # A. Substring Match (e.g. "us-politics-analysis" matches "us-politics")
        for anchor in anchors:
            if anchor in tag and len(anchor) > 3:
                # Validate hyphen boundary or full containment
                if f"{anchor}-" in tag or f"-{anchor}" in tag or anchor == tag:
                    analysis["proposed_merges"][tag] = anchor
                    match_found = True
                    break
        
        if match_found: continue
        
        # B. Fuzzy Match
        matches = difflib.get_close_matches(tag, anchors, n=1, cutoff=0.85)
        if matches:
            analysis["proposed_merges"][tag] = matches[0]
            continue
            
        # If no match -> Orphan
        analysis["orphans"].append(tag)
        
    # Output
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(analysis, f, indent=2, ensure_ascii=False)
        
    print(f"Analysis Complete.")
    print(f"Anchors: {len(anchors)}")
    print(f"Tail Tags Processed: {len(tail_tags)}")
    print(f"  -> Proposed Merges: {len(analysis['proposed_merges'])}")
    print(f"  -> Orphans (No match): {len(analysis['orphans'])}")

if __name__ == "__main__":
    main()
