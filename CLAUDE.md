# CLAUDE.md

This is a Polyglot project (Node.js + Python).

Content Rule: All Markdown content lives in src/notes/. DO NOT put code files here.

Python Rule: All Python automation scripts must live in scripts/. Use uv for dependency management.


This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Thought Foundry is a personal knowledge base and digital garden built with Eleventy (11ty). It's a static site generator that converts Markdown content into HTML pages with support for Chinese content, advanced tagging, speaker tracking, and entity management.

**Search System:** Uses Pagefind for static site search with full-text indexing and Chinese language support.

## Development Commands

### Start Development Server
```bash
npx @11ty/eleventy --serve
# or
npm run dev
```
Starts local server at `http://localhost:8080/` with hot-reloading.

### Build for Production
```bash
npm run build
```
Generates production build in `_site` directory and creates Pagefind search index.

### Debug Build
```bash
npm run build:debug
# or
DEBUG=true npx @11ty/eleventy && npx pagefind --site _site
```
Enables verbose logging including conflict detection reports for tags, speakers, and entities. Also generates Pagefind search index.

### Incremental Build
```bash
npm run build:incremental
```
Only rebuilds changed files (faster for large sites) and regenerates Pagefind index.

## Architecture Overview

### Core Build System (.eleventy.js)

The Eleventy configuration file is the heart of the site. Key architectural components:

**Pinyin Slugification System**: Converts Chinese text to URL-friendly slugs using persistent cached pinyin conversion. All slugs are generated through the `slug` filter which combines pinyin conversion with @sindresorhus/slugify. Cache is saved to `.eleventy-cache.json` for 30-40% faster subsequent builds.

**Entity Normalization Engine**: Automatically merges similar entity names (e.g., "Donald Trump" and "donald-trump") using a sophisticated scoring system that prefers properly capitalized names over slug-like variants.

**Conflict Resolution System**: Detects and resolves slug conflicts across all entity types by adding unique identifiers when multiple entities generate the same slug.

**Content Exclusion Architecture**: Posts with `exclude: true` in frontmatter generate HTML but are filtered from all collections, listings, and search indices.

**Internal Tag Filtering**: Tags like "视频文稿" are preserved in frontmatter but hidden from public display through multi-layer filtering.

### Collection System

Eleventy uses collections to organize content. All collections automatically exclude items with `exclude: true`:

- **posts**: All content in `src/posts/`
- **books**: All content in `src/books/`
- **notes**: All content in `src/notes/`
- **tagList**: Aggregates all tags with slug-based deduplication
- **speakerList**: Extracts speakers from `speaker` and `guest` fields
- **categoryList**: Groups by `category` field (single value)
- **projectList**: Groups by `project` field (array)
- **areaList**: Groups by `area` field
- **peopleList**: Groups by `people` array with entity normalization
- **companiesOrgsList**: Groups by `companies_orgs` array with normalization
- **productsModelsList**: Groups by `products_models` array with normalization
- **mediaBookslist**: Groups by `media_books` array with normalization
- **allItems**: Complete collection including excluded items (internal use)
- **excludedItems**: Only excluded items (debugging)

### Content Directory Structure

```
src/
├── posts/         # General articles and blog posts
├── notes/         # Meeting notes, video transcripts
├── books/         # Book reviews with specialized metadata
├── _includes/     # Nunjucks templates
│   ├── base.njk   # Base layout with header, theme toggle, search
│   ├── post.njk   # Post template with metadata, ToC, series links
│   ├── book-note.njk  # Book review template
│   └── default.njk    # Simple page template
├── css/
│   ├── base/      # Theme variables, resets
│   ├── components/ # Theme toggle, search, badges
│   └── layouts/   # Page-specific styles
└── js/
    ├── theme-toggle.js  # Dark/light mode with localStorage
    └── toc.js          # Table of contents generator
```

### Template Architecture

Templates use Nunjucks with a clear hierarchy:
- `base.njk` → provides site-wide structure (header, search, theme toggle)
- `post.njk` → extends base for articles/notes with metadata display
- `book-note.njk` → extends base for book reviews with specialized layout

Key template features:
- Conditional metadata blocks (only show if data exists)
- Series-aware related posts display
- Speaker/entity links with conflict-resolved slugs
- Theme-variable CSS integration
- Summary/insight dual-field display system

### Frontmatter Structure

The site uses **flat frontmatter** (not nested objects):

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
layout: "post.njk"
speaker: "Speaker Name"  # Comma-separated for multiple
guest: "Guest Name"      # Comma-separated
author: "Author Name"    # For books
publisher: "Publisher"   # For books
rating: "4/5"           # For books
series: "Series Name"   # Groups related content
category: "Category"    # Single category
area: "Area"           # Single area
project:               # Array of projects
  - "Project 1"
  - "Project 2"
people:                # Array of people
  - "Person Name"
companies_orgs:        # Array of companies/orgs
  - "Company Name"
products_models:       # Array of products
  - "Product Name"
media_books:           # Array of media/books
  - "Media Name"
summary: "Content description"  # Displayed with 📄 icon
insight: "Personal reflection"  # Displayed with 💡 icon
exclude: true          # Optional: excludes from listings
tags:
  - "tag1"
  - "tag2"
  - "视频文稿"  # Internal tag (hidden from display)
---
```

### Theme System

The site supports light/dark mode through:
- CSS variables defined in `src/css/base/_theme.css`
- JavaScript persistence in `src/js/theme-toggle.js`
- `data-theme` attribute on `<html>` element
- System preference detection on first visit
- All colors reference `var(--theme-*)` variables

### Search System

Pagefind static site search with full-text indexing:
- Automatically generates search index during build (`npx pagefind --site _site`)
- Index files stored in `_site/pagefind/` (split across many small files)
- Respects `exclude: true` via `data-pagefind-ignore` attribute
- Listing pages excluded from search with `data-pagefind-ignore`
- Content pages marked with `data-pagefind-body` for indexing
- Chinese language support configured in PagefindUI
- Searches full content with highlighted excerpts and metadata filtering
- No single index file exceeds GitHub's 100MB limit

## Python Utility Scripts

The repository includes batch processing tools for frontmatter manipulation:

- **batch_processor.py**: Generic frontmatter field updates
- **tag_processor.py**: Tag replacement and consolidation
- **consolidate_tags.py**: Merges similar tags across files
- **remove_tag.py**: Removes specific tags from all files
- **find_empty_tags.py**: Detects files with empty tag arrays
- **analyze_unmapped.py**: Identifies content without proper categorization
- **update_speaker_author.py**: Updates `speaker` and `author` fields.
    - Usage: `python3 scripts/update_speaker_author.py "Old Name" "New Name" [--dry-run]`
- **find_unknown_speaker_files.py**: Finds files missing speaker metadata

These scripts preserve frontmatter structure while safely updating specific fields.

## Key Implementation Details

### Slug Generation Process
1. Extract text (title, name, etc.)
2. Convert Chinese characters to pinyin using cached function
3. Apply @sindresorhus/slugify for URL-safe formatting
4. Check for conflicts and add suffixes if needed

### Entity Normalization Process
1. Extract entity name from frontmatter array
2. Generate normalized key (lowercase, remove special chars, unify accents)
3. Track all variants under same normalized key
4. Select canonical display name using scoring system:
   - Prefer proper capitalization (e.g., "Donald Trump")
   - Penalize slug-like formats (e.g., "donald-trump")
   - Penalize all-lowercase names
5. Use canonical name for display across site

### Content Exclusion Flow
1. Content with `exclude: true` still generates HTML file
2. Filtered out in collection definitions (`.filter(item => !item.data.exclude)`)
3. Not included in search index
4. Not linked from navigation, tags, speakers, or entity pages

### Series Grouping
Posts with matching `series` values automatically show related posts at the bottom. The template filters out the current post and displays others in the same series.

## Common Patterns

### Adding New Entity Type
1. Add collection in `.eleventy.js` following existing entity pattern
2. Create page template (e.g., `entity-page.njk`)
3. Add `getEntityUniqueKey` filter for slug resolution
4. Create listing page (e.g., `all-entities.njk`)
5. Update templates to display entity links

### Adding New Frontmatter Field
1. Update relevant collection processing in `.eleventy.js`
2. Update template files to display the field
3. Consider adding metadata tags for Pagefind search (e.g., `<span data-pagefind-meta="field">value</span>`)
4. Update this documentation

### Debugging Build Issues
1. Run `DEBUG=true npm run build` to see verbose logging
2. Check conflict reports for tags, speakers, and entities
3. Look for "longSpeakerDetector" warnings about malformed data
4. Verify frontmatter YAML syntax in problematic files

## Deployment

GitHub Actions automatically builds and deploys the site:
- Scheduled builds: Every hour at :05 minutes
- Manual trigger via workflow_dispatch
- Builds with Node 18
- Deploys `_site` directory to public repo (austery/austery.github.io)
- Uses SSH deploy key stored in repository secrets

### 8. 会话结束：知识捕捉 (End-of-Session: Knowledge Capture)
在每次开发会话结束时，你必须将我们的对话（包括关键决策、代码片段和未解决的问题）进行总结。

在 /docs/scratchpad/ 目录下创建一个新的 Markdown 文件。
使用文件名格式: YYYY-MM-DD_session-summary-brief-description.md。
这将捕捉我们知识提纯过程的原始输入，并确保没有见解被遗忘。