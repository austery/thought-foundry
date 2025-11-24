import os
import re

def audit_speakers(directory):
    print(f"Auditing {directory} for potential speaker/guest formatting issues...")
    
    suspicious_count = 0
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
                    if match:
                        fm = match.group(1)
                        # Look for speaker/guest followed by indentation
                        # We capture the line and the next line
                        lines = fm.split('\n')
                        for i, line in enumerate(lines):
                            if re.match(r'^(speaker|guest):', line):
                                # check next line
                                if i + 1 < len(lines):
                                    next_line = lines[i+1]
                                    # if next line is indented
                                    if next_line.startswith(' ') or next_line.startswith('\t'):
                                        # if it's NOT a list item
                                        if not next_line.strip().startswith('-'):
                                            print(f"Suspicious in {file}:")
                                            print(f"  L{i}: {line}")
                                            print(f"  L{i+1}: {next_line}")
                                            suspicious_count += 1
                                            
                except Exception:
                    pass
    
    print(f"Found {suspicious_count} suspicious files.")

if __name__ == "__main__":
    audit_speakers("src/notes")
    audit_speakers("src/posts")

