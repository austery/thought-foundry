import json
import collections
import re

INPUT_FILE = "tag_analysis_report.json"
OUTPUT_FILE = "orphan_clusters.json"

STOP_WORDS = {
    "the", "and", "of", "in", "to", "for", "a", "an", "on", "my", "how", "what", "is", "vs", "or",
    "part", "guide", "tips", "top", "best", "new", "1", "2", "3", "2023", "2024", "2025"
}

def tokenize(tag):
    # Split by hyphen or underscore
    tokens = re.split(r'[-_]', tag)
    return [t.lower() for t in tokens if t and t.lower() not in STOP_WORDS and not t.isdigit()]

def main():
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {INPUT_FILE} not found. Run analyze_tag_orphans.py first.")
        return

    orphans = data.get("orphans", [])
    print(f"Processing {len(orphans)} orphans...")
    
    # 1. Frequency Analysis of Tokens
    token_counts = collections.Counter()
    tag_tokens_map = {}
    
    for tag in orphans:
        tokens = tokenize(tag)
        tag_tokens_map[tag] = tokens
        for t in tokens:
            if len(t) > 2: # Ignore short chars
                token_counts[t] += 1
                
    # 2. Identify Top Themes (Clusters)
    # We take top N most frequent words as cluster centers
    # Strategy: Iterative assignment.
    # Top word -> Assign all tags containing it -> Remove those tags -> Next top word.
    
    clusters = {}
    remaining_tags = set(orphans)
    
    # Filter keywords that appear at least X times
    sorted_keywords = [word for word, count in token_counts.most_common(200) if count >= 5]
    
    print(f"Identified {len(sorted_keywords)} potential cluster themes (freq >= 5).")
    
    for keyword in sorted_keywords:
        cluster_tags = []
        to_remove = []
        
        for tag in remaining_tags:
            tokens = tag_tokens_map[tag]
            if keyword in tokens:
                cluster_tags.append(tag)
                to_remove.append(tag)
        
        if cluster_tags:
            clusters[keyword] = cluster_tags
            for t in to_remove:
                remaining_tags.remove(t)
                
    # 3. Group Remaining by Chinese vs English
    chinese_misc = []
    english_misc = []
    
    for tag in remaining_tags:
        if re.search(r'[\u4e00-\u9fff]', tag):
            chinese_misc.append(tag)
        else:
            english_misc.append(tag)
            
    clusters["_misc_chinese"] = chinese_misc
    clusters["_misc_english"] = english_misc
    
    # Output Stats
    cluster_summary = {k: len(v) for k, v in clusters.items()}
    sorted_summary = dict(sorted(cluster_summary.items(), key=lambda item: item[1], reverse=True))
    
    output_data = {
        "stats": sorted_summary,
        "clusters": clusters
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print(f"Clusters generated: {OUTPUT_FILE}")
    print(f"Top Clusters: {list(sorted_summary.keys())[:10]}")
    print(f"Misc Chinese: {len(chinese_misc)}")
    print(f"Misc English: {len(english_misc)}")

if __name__ == "__main__":
    main()
