import os
import yaml
import re
from pathlib import Path

def check_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return

    if not content.startswith('---'):
        return

    try:
        # Extract frontmatter
        parts = content.split('---', 2)
        if len(parts) < 3:
            return # No frontmatter or broken
        
        frontmatter_str = parts[1]
        
        # Check for specific text patterns that are known to be bad
        # Pattern 1: people: [] followed by - ...
        if re.search(r'people:\s*\[\]\s*\n\s*-', frontmatter_str):
            print(f"[Pattern Match: people: [] + -] {file_path}")
            return

        # Pattern 2: speaker: '' followed by indented text
        # This regex looks for speaker: '' (or "") followed by newline and spaces and then some text
        # Using triple quotes to avoid escaping hell
        if re.search(r"""speaker:\s*['"]{2}\s*\n\s+(\S+)""", frontmatter_str):
             print(f"[Pattern Match: speaker: '' + indented text] {file_path}")
             return

        # Check for general YAML validity
        try:
            yaml.safe_load(frontmatter_str)
        except yaml.YAMLError as e:
            print(f"[YAML Error] {file_path}: {e}")

    except Exception as e:
        print(f"[General Error] {file_path}: {e}")

def main():
    # Get current directory (src/notes)
    base_dir = Path('.')
    
    # verify we are in src/notes or adjust
    if not base_dir.joinpath('NotebookLM_AI_Content_Generation_Future.md').exists():
         # If running from root, adjust
         if Path('src/notes').exists():
             base_dir = Path('src/notes')
         else:
             print("Could not find src/notes directory")
             return

    print(f"Scanning directory: {base_dir.absolute()}")
    
    files = list(base_dir.glob('*.md'))
    print(f"Found {len(files)} markdown files.")

    for file_path in files:
        check_file(file_path)

if __name__ == '__main__':
    main()
