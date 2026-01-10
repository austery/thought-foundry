# Python Utility Scripts

This directory contains Python scripts for maintenance and automation of the Thought Foundry knowledge base.

## Scripts Overview

### Metadata Management

#### `update_speaker_author.py`
Batch updates `speaker` and `author` fields in Markdown frontmatter.

**Usage:**
```bash
python3 scripts/update_speaker_author.py "Old Name" "New Name"
```

**Options:**
- `--dry-run`: Preview changes without modifying files.
- `--dirs DIRS [DIRS ...]`: Specify directories to scan (default: `src/notes src/posts`).

---

#### `batch_processor.py`
Generic tool for batch frontmatter field updates. Use this for more complex or one-off frontmatter transformations.

---

### Tag Management

#### `tag_processor.py`
Standard tool for replacing or consolidating tags across multiple files.

#### `consolidate_tags.py`
Analyzes and merges similar tags based on usage patterns and name similarity.

#### `remove_tag.py`
Removes specific tags from all Markdown files in the project.

---

### Knowledge Audit & Migration

#### `knowledge_audit.py`
Analyzes the current state of metadata and identifies inconsistencies or gaps.

#### `migrate_areas.py`
Handles transitions between different organizational area taxonomies.

#### `knowledge_migration.py`
Script for migrating content between different sections or formats.

---

## Development
These scripts typically use Python 3.13+ and `pathlib` for file manipulation. Some scripts may require additional dependencies manageable via `uv`.
