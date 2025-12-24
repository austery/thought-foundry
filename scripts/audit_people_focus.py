import csv
import json
import re

INPUT_FILE = "entity_inventory.csv"
OUTPUT_FILE = "people_audit_report.json"

# Known People Keywords (re-using from advanced cluster script logic conceptually)
# to help flag potential people in 'tags'
PEOPLE_KEYWORDS = [
    "musk", "jobs", "gates", "bezos", "zuckerberg", "altman", "huang", 
    "buffett", "munger", "dalio", "soros", "ackman", "cathie-wood", 
    "thiel", "graham", "navai", "taleb", "yuval", "harari", "trump", "biden", 
    "obama", "clinton", "putin", "zelensky", "macron", "trudeau", 
    "netanyahu", "modi", "merkel", "xi-jinping", "mao", "deng", 
    "socrates", "plato", "aristotle", "nietzsche", "kant", "marx", 
    "freud", "jung", "adler", "lacan", "feynman", "einstein",
    "hawking", "turing", "newton", "darwin", "curie", "oppenheimer", 
    "peter-mandelson", "ko-wen-je", "macron", "trudeau", "zelensky", 
    "mr-beast", "lex-fridman", "rogan", 
    "张修修", "李小加", "漫士", "高市早苗", "段永平", "王阳明", "吉姆·查诺斯",
    "gu-zhun", "hulk-hogan", "avi-loeb", "rich-sutton", "barry-diller"
]

def main():
    people_entries = []
    potential_people_tags = []
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            val = row['value']
            count = int(row['count'])
            
            # 1. Existing People Field
            if row['type'] == 'people':
                people_entries.append({"name": val, "count": count})
                
            # 2. Tag Analysis for Potential Candidates
            elif row['type'] == 'tags':
                # Check if it looks like a person from our keyword list
                # or match pattern (e.g. 2-3 words, no numbers, not standard stop words)
                # Simple check: matches keyword list substring
                is_candidate = False
                val_lower = val.lower()
                for k in PEOPLE_KEYWORDS:
                    if k in val_lower:
                        is_candidate = True
                        break
                
                if is_candidate:
                    potential_people_tags.append({"tag": val, "count": count})

    # Sort
    people_entries.sort(key=lambda x: x['count'], reverse=True)
    potential_people_tags.sort(key=lambda x: x['count'], reverse=True)
    
    # Filter stats
    low_freq_people = [p for p in people_entries if p['count'] < 5]
    
    report = {
        "stats": {
            "total_people_entities": len(people_entries),
            "low_freq_people_entities (<5)": len(low_freq_people),
            "potential_people_orphans_in_tags": len(potential_people_tags)
        },
        "people_by_frequency": people_entries[:100], # Top 100
        "low_frequency_people": low_freq_people,
        "potential_people_tags_remaining": potential_people_tags
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
        
    print(f"Report generated: {OUTPUT_FILE}")
    print(f"Low Freq People Count: {len(low_freq_people)}")

if __name__ == "__main__":
    main()
