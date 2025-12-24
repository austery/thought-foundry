# /// script
# dependencies = [
#   "python-frontmatter",
# ]
# ///

import frontmatter
import os
import glob

scan_dirs = ["src/posts", "src/notes", "src/books"]

print("Scanning for malformed products_models...")

for d in scan_dirs:
    files = glob.glob(os.path.join(d, "**/*.md"), recursive=True)
    for f in files:
        try:
            post = frontmatter.load(f)
            pm = post.metadata.get("products_models")
            
            if pm:
                if isinstance(pm, list):
                    for i, item in enumerate(pm):
                        if item is None:
                             print(f"[CRASH CANDIDATE] {f}: Item {i} is None")
                        elif not isinstance(item, str):
                            print(f"[CRASH CANDIDATE] {f}: Item {i} is {type(item)}: {item}")
                # else: ignore non-lists for now as they don't crash the loop
                            
        except Exception as e:
            print(f"Error reading {f}: {e}")
