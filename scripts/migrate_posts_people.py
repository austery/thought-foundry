#!/usr/bin/env python3
"""
Script to migrate speaker/guest names to the 'people' array in src/posts/

Migration Rules:
1. Trigger: If 'guest' is not empty OR 'speaker' has multiple names (comma-separated).
   (Note: Single speakers are currently PRESERVED in 'speaker' field based on legacy logic, 
    unless you want to change this. The script currently copies them to people if a migration is triggered, 
    but might leave the single speaker in 'speaker' if no migration is triggered. 
    **Update based on prompt:** User wants to move them. 
    Wait, the user said "Like the note folder... see my script content".
    The note script ONLY migrated if `has_multiple_speakers or has_guest`.
    If a file had ONLY `speaker: "Name"`, it was ignored.
    I will maintain this logic for now unless instructed otherwise, but I will implement the formatting fixes requested.)

2. Formatting Changes:
   - 'people' field must be a strict YAML list (数组), never a string.
   - 'guest' and 'speaker' fields, when cleared, should be empty (no quotes), e.g., "guest:" or "guest: ".
"""

import os
from pathlib import Path
from typing import Dict, List
import yaml

# Configuration
TARGET_DIR = Path("/Users/leipeng/Documents/Projects/thought-foundry/src/posts")

def parse_frontmatter(content: str) -> tuple[Dict, str, str]:
    """
    Parses markdown frontmatter.
    Returns: (frontmatter_dict, frontmatter_raw_string, body_content)
    """
    if not content.startswith('---'):
        return {}, '', content

    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, '', content

    frontmatter_raw = parts[1]
    body = parts[2]

    try:
        # Safe load to get values, but we will manipulate lines manually to preserve comments/ordering
        frontmatter = yaml.safe_load(frontmatter_raw)
        if not isinstance(frontmatter, dict):
            frontmatter = {}
    except:
        frontmatter = {}

    return frontmatter, frontmatter_raw, body

def extract_names(value) -> List[str]:
    """Extracts list of names from a string (handling commas) or list."""
    if not value:
        return []
    
    if isinstance(value, list):
        return [str(v).strip() for v in value if v]

    value_str = str(value).strip()
    # Handle empty quotes or None string representations
    if not value_str or value_str == "''" or value_str == '""' or value_str.lower() == 'null':
        return []

    if ',' in value_str:
        names = [name.strip() for name in value_str.split(',')]
        return [name for name in names if name]

    return [value_str]

def should_migrate(frontmatter: Dict) -> tuple[bool, List[str]]:
    """
    Determines if migration is needed and returns the list of people to add.
    
    Logic copied from notes script:
    - Migrates if speaker has commas (multiple) OR guest is present.
    """
    speaker = frontmatter.get('speaker', '')
    guest = frontmatter.get('guest', '')

    speaker_names = extract_names(speaker)
    guest_names = extract_names(guest)

    has_multiple_speakers = ',' in str(speaker)
    # Check if guest is effectively non-empty
    has_guest = False
    if guest:
        g_str = str(guest).strip()
        if g_str and g_str != "''" and g_str != '""' and g_str.lower() != 'null':
            has_guest = True

    # STRICT LOGIC from previous script: 
    # Only migrate if multiple speakers OR has guest.
    # Single speaker files are ignored.
    if not (has_multiple_speakers or has_guest):
        return False, []

    people_to_add = []
    people_to_add.extend(speaker_names)
    people_to_add.extend(guest_names)

    # Deduplicate preserving order
    people_to_add = list(dict.fromkeys(people_to_add))

    return True, people_to_add

def update_frontmatter(frontmatter_raw: str, frontmatter: Dict, people_to_add: List[str]) -> str:
    """
    Updates the frontmatter text.
    - Adds names to 'people' (ensuring array format).
    - Clears 'speaker' and 'guest' to empty (no quotes).
    """
    lines = frontmatter_raw.split('\n')
    new_lines = []

    # Get existing people to merge
    current_people = frontmatter.get('people', [])
    if not isinstance(current_people, list):
        # If it was a string, try to parse it, otherwise start empty
        if current_people:
             current_people = extract_names(current_people)
        else:
            current_people = []

    # Merge and deduplicate
    all_people = list(current_people)
    all_people.extend(people_to_add)
    
    seen = set()
    unique_people = []
    for person in all_people:
        if person not in seen:
            seen.add(person)
            unique_people.append(person)

    # Processing state
    people_updated = False
    i = 0
    
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # 1. Clear Speaker (No quotes, just empty)
        if stripped.startswith('speaker:'):
            new_lines.append("speaker:") 
            i += 1
            continue

        # 2. Clear Guest (No quotes, just empty)
        if stripped.startswith('guest:'):
            new_lines.append("guest:")
            i += 1
            continue

        # 3. Handle People (Ensure Array)
        if stripped.startswith('people:'):
            # We will rewrite the people block entirely
            new_lines.append('people:')
            for person in unique_people:
                new_lines.append(f'  - {person}')
            
            people_updated = True
            i += 1
            
            # Skip existing lines of the people block
            # Logic: skip lines starting with '-' or indented, or '[]' inline
            if stripped.strip() == 'people: []':
                continue
            
            # Determine if next lines are part of the list
            while i < len(lines):
                next_line = lines[i]
                # Simple heuristic: if it starts with space-dash or is empty, it's part of the list
                # Be careful not not to consume the next field
                if next_line.strip().startswith('-'):
                    i += 1
                elif not next_line.strip(): # Empty lines in between list items
                    i += 1
                else:
                    break
            continue

        new_lines.append(line)
        i += 1

    # If people field didn't exist, add it at the end (before closing ---)
    if not people_updated and unique_people:
        # Remove trailing empty lines to keep it clean
        while new_lines and not new_lines[-1].strip():
            new_lines.pop()
            
        new_lines.append('people:')
        for person in unique_people:
            new_lines.append(f'  - {person}')

    return '\n'.join(new_lines)

def scan_only():
    """Scans files and prints what WOULD happen."""
    print(f"Scanning {TARGET_DIR}...")
    md_files = list(TARGET_DIR.glob("*.md"))
    files_to_modify = []

    for md_file in md_files:
        try:
            content = md_file.read_text(encoding='utf-8')
            frontmatter, raw, _ = parse_frontmatter(content)
            needs_migration, people_to_add = should_migrate(frontmatter)

            if needs_migration:
                files_to_modify.append({
                    'file': md_file.name,
                    'people_to_add': people_to_add,
                    'original_people': frontmatter.get('people', []),
                    'speaker': frontmatter.get('speaker'),
                    'guest': frontmatter.get('guest')
                })
        except Exception as e:
            print(f"Error reading {md_file.name}: {e}")

    print(f"\nFound {len(files_to_modify)} files to migrate.\n")
    
    for item in files_to_modify[:5]: # Show top 5
        print(f"File: {item['file']}")
        print(f"  Original Speaker: {item['speaker']}")
        print(f"  Original Guest:   {item['guest']}")
        print(f"  Original People:  {item['original_people']}")
        print(f"  -> WILL ADD:      {item['people_to_add']}")
        print(f"  -> WILL CLEAR:    speaker: / guest: (No quotes)")
        print(f"  -> WILL ENSURE:   people is YAML array")
        print("-" * 40)

if __name__ == "__main__":
    import sys
    # Simple arg parsing
    if len(sys.argv) > 1 and sys.argv[1] == '--run':
        # Execute mode
        print("Running migration...")
        md_files = list(TARGET_DIR.glob("*.md"))
        count = 0
        for md_file in md_files:
            try:
                content = md_file.read_text(encoding='utf-8')
                frontmatter, raw, body = parse_frontmatter(content)
                needs_migration, people_to_add = should_migrate(frontmatter)

                if needs_migration:
                    new_fm = update_frontmatter(raw, frontmatter, people_to_add)
                    new_content = f"---\n{new_fm}\n---\n{body}"
                    md_file.write_text(new_content, encoding='utf-8')
                    print(f"Migrated: {md_file.name}")
                    count += 1
            except Exception as e:
                print(f"Failed to migrate {md_file.name}: {e}")
        print(f"\nCompleted. Migrated {count} files.")
    else:
        # Default to scan
        scan_only()
        print("\nTo execute changes, run: python3 scripts/migrate_posts_people.py --run")
