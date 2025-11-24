# Thought Foundry - Project Context

## Project Overview
Thought Foundry is a "digital garden" and personal knowledge base built using **Eleventy (11ty)**. It serves as a platform for publishing blog posts, meeting notes, book reviews, and transcripts. The project is polyglot, utilizing **Node.js** for the core site generation and **Python** for content automation and batch processing scripts.

### Key Technologies
*   **Static Site Generator:** Eleventy (Node.js)
*   **Templating:** Nunjucks (`.njk`)
*   **Content:** Markdown (`.md`) with YAML Frontmatter
*   **Search:** Pagefind (indexing) + Client-side JS
*   **Styles:** CSS with Variables (Light/Dark mode support)
*   **Automation:** Python 3.13+ (scripts located in `scripts/`)
*   **Deployment:** GitHub Actions (to GitHub Pages)

## Architecture & Conventions

### Directory Structure
*   `src/`: Source code and content.
    *   `posts/`: Blog articles.
    *   `notes/`: Meeting notes, video transcripts, quick thoughts. **All new Markdown content should likely go here unless specified otherwise.**
    *   `books/`: Book reviews.
    *   `_includes/`: Nunjucks layouts and partials (`base.njk`, `post.njk`, `book-note.njk`).
    *   `css/` & `js/`: Assets.
*   `scripts/`: **All Python automation scripts must reside here.**
*   `_site/`: Generated static output (created by `npm run build`).

### Development Rules
1.  **Content Location:** All Markdown content generally lives in `src/notes/`, `src/posts/`, or `src/books/`. Do NOT mix code files into content directories.
2.  **Python Scripts:** All Python scripts must be placed in `scripts/`. Use `uv` for dependency management if applicable.
3.  **Frontmatter:** Use a **flat structure** (no nested objects).
    *   Required: `title`, `date`, `layout`.
    *   Optional: `speaker`, `guest`, `author`, `series`, `exclude`, `tags`, `summary`, `insight`.
4.  **Filenames:** Use underscores (`_`) instead of spaces for URL-friendly paths.
5.  **Internal Tags:** Tags like `视频文稿` are used for internal organization and are hidden from public display.

### Key Features
*   **Content Exclusion:** `exclude: true` in frontmatter hides posts from listings/search but generates the page.
*   **Series Grouping:** `series: "Name"` automatically links related posts.
*   **Entity Normalization:** The system normalizes speaker and entity names (e.g., handling "Donald Trump" vs "donald-trump") to avoid duplicates.
*   **Pinyin Slugs:** Chinese titles are automatically converted to pinyin slugs for URLs.

## Building and Running

### Prerequisites
*   Node.js (v18+)
*   Python (v3.13+)

### Commands
| Action | Command | Description |
| :--- | :--- | :--- |
| **Start Dev Server** | `npm run dev` | Starts local server at `http://localhost:8080` with hot-reload. |
| **Build Production** | `npm run build` | Generates site in `_site/` and runs Pagefind indexing. |
| **Debug Build** | `npm run build:debug` | Verbose logging, useful for debugging tag/entity conflicts. |
| **Incremental** | `npm run build:incremental` | Faster rebuilds for large sites. |

## Common Tasks

### Adding Content
Create a new Markdown file in the appropriate `src/` subdirectory. Ensure it has valid YAML frontmatter.

```yaml
---
title: "My New Note"
date: "2025-11-24"
layout: "post.njk"
tags:
  - "Tag1"
---
```

### Running Python Scripts
Navigate to the root or `scripts/` directory and execute using Python.
```bash
python scripts/your_script_name.py
```

### Debugging
If the build fails or content isn't showing up:
1.  Check for `exclude: true` in frontmatter.
2.  Run `npm run build:debug` to see conflict reports.
3.  Check `docs/performance-issues.md` if facing slow builds or search index limits.
