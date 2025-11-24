import os

def find_files_with_unknown_speaker(directory):
    """
    Finds all markdown files in a directory that have "speaker: Unknown" in their content.

    Args:
        directory: The directory to search in.
    """
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    for line in f:
                        if "speaker: Unknown" in line:
                            print(filename)
                            break
            except UnicodeDecodeError:
                print(f"Could not read file: {filename} due to encoding issues.")

if __name__ == "__main__":
    notes_directory = '/Users/leipeng/Documents/Projects/thought-foundry/src/notes'
    print(f"Searching for files with 'speaker: Unknown' in: {notes_directory}")
    find_files_with_unknown_speaker(notes_directory)
