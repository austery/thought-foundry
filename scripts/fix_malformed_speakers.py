import os
import re

def fix_malformed_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract frontmatter
        match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
        if not match:
            return False

        fm_text = match.group(1)
        original_fm_text = fm_text
        
        # Pattern to find broken speaker/guest fields
        # Looks for: key: '' (or "") followed by newline and indented text
        # Group 1: field name (speaker or guest)
        # Group 2: the dangling value (stripped)
        pattern = re.compile(r'^(speaker|guest):\s*[\'\']{2}\s*\n\s+(.+)$', re.MULTILINE)
        
        changes_made = False
        
        # Find all matches first
        matches = list(pattern.finditer(fm_text))
        
        if not matches:
            return False

        # We need to process people list if we find dangling names
        people_match = re.search(r'^people:\s*(\[.*?\]|[\s\S]*?)(?=\n\w+:|$)', fm_text, re.MULTILINE)
        current_people = []
        people_list_style = 'block' # 'inline' or 'block'
        
        if people_match:
            people_raw = people_match.group(1).strip()
            if people_raw.startswith('['):
                people_list_style = 'inline'
                # fast and dirty inline list parse
                inner = people_raw[1:-1]
                if inner.strip():
                    current_people = [p.strip().strip("'\"") for p in inner.split(',')]
            else:
                # Block style
                people_list_style = 'block'
                lines = people_raw.split('\n')
                for line in lines:
                    line = line.strip()
                    if line.startswith('-'):
                        val = line[1:].strip()
                        # remove quotes if present
                        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                            val = val[1:-1]
                        current_people.append(val)

        # Process each broken field
        for m in matches:
            field = m.group(1)
            dangling_name = m.group(2).strip()
            
            print(f"Fixing {filepath}: Found dangling '{dangling_name}' under '{field}'")
            
            # Add to people if not present
            if dangling_name not in current_people:
                current_people.append(dangling_name)
                print(f"  -> Adding '{dangling_name}' to people list")
            else:
                print(f"  -> '{dangling_name}' already in people list")

            # Fix the line in frontmatter
            # We replace the broken pattern with just the field: ''
            # We use regex substitution on the *lines* to ensure we don't mess up offsets if we did multiple
            # But simpler: just replace the exact match string in the text
            broken_str = m.group(0) # e.g. "speaker: ''\n  David"
            fixed_str = f"{field}: ''"
            fm_text = fm_text.replace(broken_str, fixed_str)
            changes_made = True

        # Reconstruct people list if it changed
        if changes_made:
            # Remove old people block
            # This is tricky with regex replacement, let's try a safer approach for the people list
            # We regex replace the WHOLE people block with the new one
            
            new_people_block = ""
            if people_list_style == 'inline':
                # Keep it simple, convert to block if it gets too long, but user seems to use block mostly based on previous files?
                # Actually previous file showed block style:
                # people:
                #   - Ray
                pass
            
            # Always output block style for consistency and safety
            new_people_block = "people:"
            if not current_people:
                new_people_block += " []"
            else:
                for p in current_people:
                    new_people_block += f"\n- {p}"
            
            if people_match:
                # Replace existing people block
                # We need to be careful to match exactly what we captured
                # The capture group 1 was just the content, we need to match "people: content"
                
                # Let's find the span of the people block again
                pm = re.search(r'^(people:\s*(\[.*?\]|[\s\S]*?))(?=\n\w+:|$)', fm_text, re.MULTILINE)
                if pm:
                    fm_text = fm_text.replace(pm.group(1), new_people_block)
            else:
                # People field didn't exist, append it (unlikely given context, but safety)
                fm_text += f"\n{new_people_block}"

        if changes_made:
            # Reconstruct full file
            new_content = content.replace(original_fm_text, fm_text)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True

    except Exception as e:
        print(f"Error processing {filepath}: {e}")
    
    return False

def main():
    directories = ["src/notes", "src/posts"]
    count = 0
    for d in directories:
        if not os.path.exists(d):
            continue
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith(".md"):
                    if fix_malformed_file(os.path.join(root, file)):
                        count += 1
    
    print(f"\nTotal files fixed: {count}")

if __name__ == "__main__":
    main()
