import os
import re

def find_broken_yaml(directory):
    print(f"Scanning {directory} for broken YAML (people: [] followed by list item)...")
    broken_files = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Check for the specific pattern
                    # Match "people: []" followed immediately by a newline and then "-"
                    # We need to be careful about regex across newlines
                    if re.search(r'people:\s*\[\]\s*\n\s*-', content):
                        print(f"Found broken file: {filepath}")
                        broken_files.append(filepath)
                        
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")

    return broken_files

if __name__ == "__main__":
    broken = find_broken_yaml("src/notes")
    broken += find_broken_yaml("src/posts")
    
    print(f"\nTotal broken files found: {len(broken)}")
    if broken:
        print("Files:")
        for f in broken:
            print(f"  {f}")

