import os
import re

def detect_broken_speaker(directory):
    print(f"Scanning {directory} for broken 'speaker' or 'guest' fields...")
    # Regex explanation:
    # Matches speaker: '' followed by newline and indentation
    # We use a triple quoted string to avoid quote escaping hell
    pattern = re.compile(r"""^(speaker|guest):.*?['"]{{2}}\s*\n\s+(.+)$""", re.MULTILINE)
    
    broken_files = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Check frontmatter only
                    match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
                    if match:
                        fm_content = match.group(1)
                        for line_match in pattern.finditer(fm_content):
                            field = line_match.group(1)
                            dangling_value = line_match.group(2).strip()
                            
                            in_people = dangling_value in fm_content
                            
                            print(f"Found issue in: {file}")
                            print(f"  Field: {field}")
                            print(f"  Dangling value: '{dangling_value}'")
                            print(f"  Is value mentioned elsewhere? {in_people}")
                            print("-" * 20)
                            
                            broken_files.append({
                                'path': filepath,
                                'field': field,
                                'value': dangling_value
                            })
                            
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")

    return broken_files

if __name__ == "__main__":
    all_broken = []
    all_broken.extend(detect_broken_speaker("src/notes"))
    all_broken.extend(detect_broken_speaker("src/posts"))
    
    print(f"\nTotal broken files found: {len(all_broken)}")
