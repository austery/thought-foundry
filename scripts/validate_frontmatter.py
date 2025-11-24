import os
import yaml
import frontmatter

def validate_frontmatter(directory):
    print(f"Scanning {directory} for YAML frontmatter errors...")
    error_files = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                filepath = os.path.join(root, file)
                try:
                    post = frontmatter.load(filepath)
                except Exception as e:
                    print(f"❌ Error in {filepath}: {e}")
                    error_files.append(filepath)

    return error_files

if __name__ == "__main__":
    errors = []
    errors.extend(validate_frontmatter("src/notes"))
    errors.extend(validate_frontmatter("src/posts"))
    errors.extend(validate_frontmatter("src/books"))
    
    print(f"\nTotal files with YAML errors: {len(errors)}")
