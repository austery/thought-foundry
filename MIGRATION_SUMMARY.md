# Frontmatter Migration Script - Summary

## Script Purpose
This Python script (`rename_insight_to_summary.py`) was created to restructure the frontmatter in markdown files located in the `src/notes/` directory.

## What the Script Does
1. **Renames existing field**: Changes `insight` field to `summary`
2. **Adds new field**: Creates a new empty `insight` field
3. **Preserves structure**: Maintains all other frontmatter fields and formatting
4. **Handles edge cases**: Skips files that already have a `summary` field to avoid conflicts

## Execution Results
- **Total files found**: 198 markdown files
- **Successfully processed**: 195 files
- **Skipped files**: 3 files (already had `summary` field)
  - `Kenneth_Rogoff_Global_Economy_1970s_Challenges.md`
  - `borge_brende_navigating_fragmented_world_global_economy.md`
  - `vas_narasimhan_novartis_ceo_innovation_ai.md`

## Before and After Example

### Before:
```yaml
---
author: Lei
date: 2024-11-06
insight: 这是我最想模仿的投资大师，另外还有像彼得林奇...
layout: post.njk
tags:
- 视频笔记
- 投资
title: 投资传奇斯坦·德鲁肯米勒
---
```

### After:
```yaml
---
author: Lei
date: 2024-11-06
insight: 
layout: post.njk
summary: 这是我最想模仿的投资大师，另外还有像彼得林奇...
tags:
- 视频笔记
- 投资
title: 投资传奇斯坦·德鲁肯米勒
---
```

## Technical Details
- **Language**: Python 3
- **Dependencies**: PyYAML library
- **File Processing**: YAML frontmatter parsing and reconstruction
- **Safety Features**: 
  - Backup-friendly (non-destructive for files without `insight` field)
  - Conflict detection (skips files with existing `summary` field)
  - Error handling for malformed YAML

## Field Order Preservation
The script maintains the following field order in frontmatter:
1. author
2. channel  
3. date
4. guest
5. insight (new empty field)
6. layout
7. series
8. source
9. speaker
10. summary (renamed from insight)
11. tags
12. title
13. file_name
14. draft

## Usage
```bash
cd /Users/pengl/projects/thought-foundry
python3 rename_insight_to_summary.py
```

## Date
Executed on: January 2025
