import json
import re

INPUT_FILE = "orphan_clusters_advanced.json"
OUTPUT_FILE = "misc_tags_review.json"

def main():
    try:
        with open(INPUT_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"File not found: {INPUT_FILE}")
        return

    clusters = data.get("clusters", {})
    misc_tags = clusters.get("_misc_remaining", [])
    
    print(f"Found {len(misc_tags)} misc tags.")
    
    # Separate English / Chinese
    chinese_misc = []
    english_misc = []
    
    for tag in misc_tags:
        if re.search(r'[\u4e00-\u9fff]', tag):
            chinese_misc.append(tag)
        else:
            english_misc.append(tag)
            
    # Sort for easier review
    chinese_misc.sort()
    english_misc.sort()
    
    output_data = {
        "status": "pending_review",
        "count": len(misc_tags),
        "chinese_tags": chinese_misc,
        "english_tags": english_misc
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print(f"Review file generated: {OUTPUT_FILE}")
    print(f"Chinese: {len(chinese_misc)}")
    print(f"English: {len(english_misc)}")

if __name__ == "__main__":
    main()
