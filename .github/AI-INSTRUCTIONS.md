# AI Assistant Instructions for Thought Foundry

**Project Type**: Polyglot (Node.js + Python)  
**Last Updated**: 2025-12-05

---

## 📋 Quick Reference

### Critical Rules
1. **Content Location**: All Markdown content lives in `src/notes/`, `src/posts/`, or `src/books/`. DO NOT put code files here.
2. **Python Scripts**: All Python automation scripts must live in `scripts/`. Use `uv` for dependency management.
3. **Frontmatter Structure**: ALWAYS use **flat structure** (no nested objects).

### Development Commands

```bash
# Development server with hot-reload
npm run dev
# or
npx @11ty/eleventy --serve

# Production build (includes Pagefind indexing)
npm run build

# Debug build (verbose logging + conflict detection)
npm run build:debug
# or
DEBUG=true npx @11ty/eleventy && npx pagefind --site _site

# Incremental build (faster for large sites)
npm run build:incremental
```

---

## 🏗️ Project Overview

### What is Thought Foundry?

Thought Foundry is a personal knowledge base and digital garden built with Eleventy (11ty). It's a static site generator that converts Markdown content into HTML pages with support for:
- Chinese content (pinyin slugification)
- Advanced tagging and categorization
- Speaker/presenter tracking
- Entity management (people, companies, products, media)
- Full-text search (Pagefind with Chinese support)
- Series grouping for related content
- Content exclusion system (semi-private posts)

### Technology Stack

| Component | Technology |
|-----------|-----------|
| **Static Generator** | Eleventy v3.1.2 (Node.js) |
| **Templating** | Nunjucks (`.njk`) |
| **Content** | Markdown with YAML frontmatter |
| **Search** | Pagefind (static indexing) |
| **Styles** | CSS Variables (Light/Dark theme) |
| **Automation** | Python 3.13+ with `uv` |
| **Deployment** | GitHub Actions → GitHub Pages |

---

## 📁 Directory Structure

```
thought-foundry/
├── .eleventy.js              # Core build configuration (HEAVILY OPTIMIZED)
├── .eleventy-cache.json      # Pinyin cache (DO NOT EDIT, auto-generated)
├── package.json              # Node.js dependencies
├── pyproject.toml            # Python dependencies (uv)
│
├── src/
│   ├── posts/                # ✍️ General articles and blog posts
│   ├── notes/                # 📝 Meeting notes, video transcripts, PKM imports
│   ├── books/                # 📚 Book reviews with specialized metadata
│   │
│   ├── _includes/            # Nunjucks templates
│   │   ├── base.njk          # Base layout (header, search, theme toggle)
│   │   ├── post.njk          # Post template (metadata, ToC, series)
│   │   ├── book-note.njk     # Book review template
│   │   └── default.njk       # Simple page template
│   │
│   ├── css/
│   │   ├── base/             # Theme variables, resets
│   │   ├── components/       # Theme toggle, search, badges
│   │   └── layouts/          # Page-specific styles
│   │
│   ├── js/
│   │   ├── theme-toggle.js   # Dark/light mode with localStorage
│   │   └── toc.js            # Table of contents generator
│   │
│   ├── *.njk                 # Page templates (blog, bookshelf, all-tags, etc.)
│   └── index.njk             # Homepage
│
├── scripts/                  # 🐍 Python automation scripts (uv managed)
│   ├── batch_processor.py
│   ├── tag_processor.py
│   ├── consolidate_tags.py
│   └── ...                   # See Python Utility Scripts section
│
├── docs/                     # 📄 Project documentation
│   ├── optimization-implementation-log.md
│   ├── OPTIMIZATION_WHITEBOARD.md
│   ├── eleventy-optimization-plan.md
│   └── scratchpad/           # Session notes and analysis
│
├── _site/                    # 🚀 Generated output (DO NOT EDIT)
│   └── pagefind/             # Search index (auto-generated)
│
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   ├── prompts/              # Copilot custom instructions
│   └── AI-INSTRUCTIONS.md    # This file
│
├── CLAUDE.md                 # Legacy Claude-specific instructions
├── GEMINI.md                 # Legacy Gemini-specific instructions
└── README.md                 # Public-facing project description
```

---

## 🎨 Architecture Deep Dive

### Core Build System (`.eleventy.js`)

**IMPORTANT**: The `.eleventy.js` file has been heavily optimized. Key architectural components:

#### 1. Pinyin Slugification System
- Converts Chinese text to URL-friendly slugs
- Uses persistent cache (`.eleventy-cache.json`) for 30-40% faster builds
- All slugs generated through the `slug` filter combining:
  - Cached pinyin conversion
  - `@sindresorhus/slugify` for URL formatting
- **Cache Size**: ~46,000 entries
- **Cache Hit Rate**: ~100%

#### 2. Slug Caching System (Optimized)
- **O(1) lookup** via `Map<string, string>`
- Pre-compiled regex constants to avoid 465,000+ regex object creations
- Current performance:
  - Total slug calls: ~511,000
  - Cache hits: ~466,000 (91% hit rate)
  - Cache misses: ~45,000 (unique slugs)

#### 3. Entity Normalization Engine
- Automatically merges similar entity names (e.g., "Donald Trump" and "donald-trump")
- Sophisticated scoring system prefers:
  - Properly capitalized names (e.g., "Donald Trump")
  - Over slug-like variants (e.g., "donald-trump")
  - Over all-lowercase names
- Applies to: People, Companies/Orgs, Products/Models, Media/Books

#### 4. Conflict Resolution System
- Detects slug conflicts across all entity types
- Adds unique identifiers when multiple entities generate same slug
- **DEBUG mode**: Set `DEBUG=true` to see conflict reports

#### 5. Content Exclusion Architecture
- Posts with `exclude: true` in frontmatter:
  - ✅ Generate HTML file (accessible via direct URL)
  - ❌ Excluded from all collections, listings, and search indices
  - ❌ Not linked from navigation, tags, speakers, or entity pages

#### 6. Internal Tag Filtering
- Tags like "视频文稿" preserved in frontmatter
- Hidden from public display through multi-layer filtering:
  - Template level (blog.njk, post.njk)
  - Collection level (.eleventy.js)
  - Search index level (Pagefind)

---

### Collection System

Eleventy uses collections to organize content. **All collections automatically exclude items with `exclude: true`**:

| Collection | Source | Key Features |
|------------|--------|--------------|
| **posts** | `src/posts/` | General articles |
| **books** | `src/books/` | Book reviews |
| **notes** | `src/notes/` | Meeting notes, transcripts |
| **tagList** | All content | Slug-based deduplication |
| **speakerList** | `speaker`, `guest` fields | Conflict resolution |
| **categoryList** | `category` field | Single value per post |
| **projectList** | `project` field | Array of projects |
| **areaList** | `area` field | Conflict resolution |
| **peopleList** | `people` array | Entity normalization |
| **companiesOrgsList** | `companies_orgs` array | Entity normalization |
| **productsModelsList** | `products_models` array | Entity normalization |
| **mediaBookslist** | `media_books` array | Entity normalization |
| **allItems** | All content | Includes excluded items (debug) |
| **excludedItems** | Excluded content | Only excluded items (debug) |

**Pre-computed Properties**: All collections have pre-computed `slug` properties for O(1) lookups in templates.

---

### Template Architecture

Templates use Nunjucks with a clear hierarchy:
- **base.njk** → Site-wide structure (header, search, theme toggle)
- **post.njk** → Extends base for articles/notes with metadata
- **book-note.njk** → Extends base for book reviews

**Key Features**:
- Conditional metadata blocks (only show if data exists)
- Series-aware related posts display
- Speaker/entity links with conflict-resolved slugs
- Theme-variable CSS integration
- Summary/insight dual-field display system
- Helper filters for slug lookups (e.g., `getSpeakerSlug`, `getTagSlug`)

---

## 📝 Frontmatter Structure

**CRITICAL**: The site uses **flat frontmatter** (not nested objects).

### Standard Frontmatter

```yaml
---
# Required Fields
title: "Post Title"
date: "YYYY-MM-DD"
layout: "post.njk"  # or "book-note.njk" for books

# Content Classification
category: "Category Name"    # Single category
area: "Area Name"            # Single area
project:                     # Array of projects
  - "Project 1"
  - "Project 2"
tags:                        # Array of tags
  - "tag1"
  - "tag2"
  - "视频文稿"  # Internal tag (hidden from display)

# People & Attribution
speaker: "Speaker Name"      # Comma-separated for multiple
guest: "Guest Name"          # Comma-separated for multiple
author: "Author Name"        # For books

# Entity Extraction
people:                      # Array of people mentioned
  - "Person Name"
companies_orgs:              # Array of companies/organizations
  - "Company Name"
products_models:             # Array of products/models
  - "Product Name"
media_books:                 # Array of media/books
  - "Media Name"

# Book-Specific Fields
publisher: "Publisher Name"  # For books
rating: "4/5"               # For books

# Content Organization
series: "Series Name"        # Groups related content
summary: "Content description"  # Displayed with 📄 icon
insight: "Personal reflection"  # Displayed with 💡 icon

# Visibility Control
exclude: true                # Optional: excludes from listings/search
---
```

### Field Descriptions

**Required Fields**:
- `title`: Post title (supports Chinese)
- `date`: Publication date (YYYY-MM-DD format)
- `layout`: Template to use (post.njk, book-note.njk, default.njk)

**Classification Fields**:
- `category`: Single category (e.g., "技术", "投资")
- `area`: Domain/topic area
- `project`: Array of related projects
- `tags`: Array of tags (internal tags like "视频文稿" are hidden from display)

**People Fields**:
- `speaker`: Main speaker(s) - comma-separated
- `guest`: Guest speaker(s) - comma-separated
- `author`: Book author (for book reviews)
- `people`: Array of people mentioned in content (entity extraction)

**Entity Fields** (for entity extraction):
- `companies_orgs`: Organizations mentioned
- `products_models`: Products/AI models mentioned
- `media_books`: Media sources/books mentioned

**Content Fields**:
- `summary`: Brief content description (📄 blue-themed display)
- `insight`: Personal reflection/takeaway (💡 orange-themed display)
- `series`: Groups related posts together (shows related posts at bottom)

**Visibility Control**:
- `exclude: true`: Generates HTML but excludes from all listings and search

---

## 🎨 Theme System

The site supports light/dark mode through:
- CSS variables defined in `src/css/base/_theme.css`
- JavaScript persistence in `src/js/theme-toggle.js`
- `data-theme` attribute on `<html>` element
- System preference detection on first visit
- All colors reference `var(--theme-*)` variables

**User Experience**:
- Toggle button in header (🌙/☀️ icons)
- Instant theme switching
- Persistent across sessions (localStorage)
- Smooth transitions

---

## 🔍 Search System

**Pagefind** static site search with full-text indexing:

- Automatically generates search index during build (`npx pagefind --site _site`)
- Index files stored in `_site/pagefind/` (split across many small files)
- Respects `exclude: true` via `data-pagefind-ignore` attribute
- Listing pages excluded from search with `data-pagefind-ignore`
- Content pages marked with `data-pagefind-body` for indexing
- Chinese language support configured in PagefindUI
- Searches full content with highlighted excerpts and metadata filtering
- No single index file exceeds GitHub's 100MB limit

**Migration**: Previously used 101MB JSON file, now uses distributed Pagefind indexes (~10MB total).

---

## 🐍 Python Utility Scripts

The repository includes batch processing tools in `scripts/` for frontmatter manipulation:

| Script | Purpose |
|--------|---------|
| `batch_processor.py` | Generic frontmatter field updates |
| `tag_processor.py` | Tag replacement and consolidation |
| `consolidate_tags.py` | Merges similar tags across files |
| `remove_tag.py` | Removes specific tags from all files |
| `find_empty_tags.py` | Detects files with empty tag arrays |
| `analyze_unmapped.py` | Identifies content without proper categorization |
| `update_speaker_author.py` | Updates speaker/author fields |
| `find_unknown_speaker_files.py` | Finds files missing speaker metadata |

**Usage Pattern**:
```bash
cd scripts/
uv run python script_name.py
```

These scripts preserve frontmatter structure while safely updating specific fields.

---

## 🚀 Performance Optimization (Phase 2 & 3 Complete)

### Current Performance (as of 2025-12-05)

```
✨ Build Time: 80 seconds
   - Eleventy: 54s (68%)
   - Pagefind: 26s (32%)

🚀 Slug Filter Performance:
   - Total calls: 511,244
   - Cache hits: 465,786 (91% hit rate)
   - Cache misses: 45,458 (only unique slugs computed)
   - Unique slugs: 45,458

📊 Output:
   - Generated files: 35,887
   - Indexed pages: 3,240
   - Pinyin cache: 45,999 entries (100% hit rate)
```

### Optimization History

| Phase | Build Time | Slug Calls | Key Changes |
|-------|-----------|------------|-------------|
| **Baseline** | ~3 hours | Unknown | Original code |
| **Phase 1** | Unknown | Unknown | Gemini initial optimizations |
| **Phase 2** | 74s | 585,279 | Pre-computed slugs in collections |
| **Phase 3** | 80s | 511,244 | Helper filters for templates |

### Key Optimizations Implemented

1. **Regex Pre-compilation**: Avoided creating 465,000+ regex objects
2. **Pinyin Cache Persistence**: 100% hit rate, 46k entries
3. **Slug Cache System**: 91% hit rate with O(1) lookups
4. **Pre-computed Collection Slugs**: All 9 collections have `slug` property
5. **Helper Filters**: 9 slug lookup filters for cleaner templates

### Known Trade-offs

- **Phase 3 slowdown**: Helper filters add 6 seconds due to O(n) collection lookups
- **Mitigation options**:
  - Rollback to Phase 2 (74s)
  - Implement Map-based caching for O(1) lookups
  - Use memoization for repeated lookups

**See**: `docs/OPTIMIZATION_WHITEBOARD.md` for strategic analysis and next steps.

---

## 🔑 Key Implementation Details

### Slug Generation Process
1. Extract text (title, name, etc.)
2. Convert Chinese characters to pinyin using cached function
3. Apply `@sindresorhus/slugify` for URL-safe formatting
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
3. Not included in search index via `data-pagefind-ignore`
4. Not linked from navigation, tags, speakers, or entity pages

### Series Grouping
Posts with matching `series` values automatically show related posts at the bottom. The template filters out the current post and displays others in the same series.

---

## 📚 Common Patterns & How-Tos

### Adding New Entity Type

1. **Add collection** in `.eleventy.js` following existing entity pattern
2. **Create page template** (e.g., `entity-page.njk`)
3. **Add helper filter** for slug resolution (e.g., `getEntitySlug`)
4. **Create listing page** (e.g., `all-entities.njk`)
5. **Update templates** to display entity links

### Adding New Frontmatter Field

1. **Update collection processing** in `.eleventy.js`
2. **Update template files** to display the field
3. **Consider adding metadata tags** for Pagefind search:
   ```html
   <span data-pagefind-meta="field">value</span>
   ```
4. **Update this documentation**

### Debugging Build Issues

1. Run `DEBUG=true npm run build` to see verbose logging
2. Check conflict reports for tags, speakers, and entities
3. Look for "longSpeakerDetector" warnings about malformed data
4. Verify frontmatter YAML syntax in problematic files
5. Check `.eleventy-cache.json` if pinyin conversion seems stuck

### Batch Processing Content

1. Navigate to `scripts/` directory
2. Run script with `uv run python script_name.py`
3. Scripts automatically:
   - Parse YAML frontmatter
   - Preserve structure and formatting
   - Update specified fields
   - Report changes made

---

## 🚀 Deployment

GitHub Actions automatically builds and deploys the site:
- **Schedule**: Every hour at :05 minutes
- **Trigger**: Manual via workflow_dispatch
- **Environment**: Node 18
- **Target**: Deploys `_site` directory to public repo (austery/austery.github.io)
- **Authentication**: SSH deploy key stored in repository secrets

**Workflow File**: `.github/workflows/deploy.yml`

---

## 🐛 Troubleshooting

### Build Fails with Slug Errors
- Check for duplicate entity names generating same slug
- Run with `DEBUG=true` to see conflict resolution logs
- Look for overly long speaker names (>100 chars)

### Search Not Working
- Verify Pagefind ran after Eleventy build
- Check `_site/pagefind/` directory exists
- Ensure content pages have `data-pagefind-body` attribute

### Slow Build Times
- Check if pinyin cache is loading (should see ~46k entries)
- Verify slug cache hit rate (should be >90%)
- Consider using incremental build: `npm run build:incremental`

### Theme Not Persisting
- Check browser localStorage is enabled
- Verify `theme-toggle.js` is loaded
- Check for JavaScript console errors

---

## 📖 Documentation References

### Core Documentation
- `README.md` - Public-facing project description
- `.github/AI-INSTRUCTIONS.md` - This file (AI assistant guide)
- `docs/optimization-implementation-log.md` - Detailed optimization log
- `docs/OPTIMIZATION_WHITEBOARD.md` - Strategic thinking and next steps

### Technical Analysis
- `docs/eleventy-optimization-plan.md` - Original optimization plan
- `docs/performance-optimization-analysis.md` - Performance analysis
- `docs/scaling-strategy-analysis.md` - Scaling strategies

### Content Audits
- `docs/metadata_quality_report.md` - Metadata quality audit
- `docs/v3_compliance_audit.md` - V3 compliance check
- `docs/video_documents_audit.md` - Video content audit

### Session Notes
- `docs/scratchpad/` - Session summaries and analyses

---

## 🎯 AI Assistant Best Practices

### When Working with This Codebase

1. **Always preserve frontmatter structure** - Use flat structure, never nested
2. **Run builds before and after changes** - Verify no regressions
3. **Check DEBUG logs** - Use `DEBUG=true` to see conflict resolution
4. **Respect content directories** - Code in scripts/, content in src/
5. **Test slug generation** - Verify Chinese characters convert correctly
6. **Preserve cache files** - Don't delete `.eleventy-cache.json`
7. **Update documentation** - Keep this file and README.md current

### Performance Considerations

1. **Regex patterns** - Use pre-compiled constants, avoid creating in loops
2. **Collection lookups** - Consider caching results, avoid repeated `.find()`
3. **Template complexity** - Simpler templates = faster builds
4. **Cache invalidation** - Delete `.eleventy-cache.json` only when necessary

### Code Style

1. **Comments** - Add only when necessary to explain complex logic
2. **Libraries** - Use existing libraries, avoid adding new ones unless critical
3. **Minimal changes** - Make smallest possible changes to achieve goal
4. **Test coverage** - Run full build after changes

---

## 📞 Contact & Resources

**Repository**: https://github.com/austery/thought-foundry  
**Live Site**: https://austery.github.io/  
**Eleventy Docs**: https://www.11ty.dev/docs/  
**Pagefind Docs**: https://pagefind.app/docs/

---

**Last Updated**: 2025-12-05  
**Maintained By**: Lei Peng  
**AI Assistants**: Claude (Anthropic), Gemini (Google), GitHub Copilot
