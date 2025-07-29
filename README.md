# Thought Foundry

Thought Foundry is a personal knowledge base and digital garden built with [Eleventy](https://www.11ty.dev/). It's designed to be a place to cultivate and publish notes, book reviews, and articles on a variety of topics.

## Features

* **Content Organization**: The site is structured into collections for "posts", "books", and "notes", making it easy to manage different types of content.
* **Content Exclusion System**: Posts can be marked with `exclude: true` in frontmatter to create "semi-private" content that generates HTML files but is excluded from all listings, search results, and navigation.
* **Series Grouping**: Content can be organized into series using the `series` field in frontmatter, with automatic related posts display for items in the same series.
* **Related Posts Display**: Posts with the same series value automatically show links to other posts in the series at the bottom of each article.
* **Tagging System**: A robust tagging system allows for easy categorization and discovery of content. The system is case-insensitive and generates a list of all tags used across the site.
* **Speaker System**: A comprehensive speaker/presenter system that automatically extracts speakers from content, creates dedicated speaker pages, and provides clickable speaker links with conflict resolution for duplicate names.
* **Client-Side Search**: A vanilla JavaScript search implementation allows users to easily find articles by title or content.
* **Table of Contents**: A Table of Contents is automatically generated for each post based on its headings, improving navigation for longer articles.
* **SEO-Friendly Slugs**: The site uses the `pinyin` and `slugify` libraries to automatically generate clean, readable URLs from post titles, even those in Chinese.
* **Book Notes Template**: Specialized template for book reviews with metadata display including author, publisher, rating, cover images, and reading dates.
* **Enhanced Template System**: Improved display logic showing source URLs in channel field instead of raw links, with better metadata presentation.
* **Summary and Insight Display**: Dual-field system displaying content summaries and personal insights with visual distinction on both blog pages and individual posts.
* **Frontmatter Migration Tools**: Automated Python scripts for restructuring frontmatter fields while preserving content and maintaining data integrity.
* **Data Integrity Tools**: Built-in debugging tools to detect and resolve data quality issues like overly long speaker fields or malformed frontmatter.
* **Flat Frontmatter Structure**: Uses industry-standard flat frontmatter structure instead of nested data objects for better maintainability.
* **Automated Deployment**: The project includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.
* **Responsive Design**: The CSS is structured to ensure the layout is responsive and works well on different screen sizes.

## Content Types

### Posts (`/src/posts/`)
General articles and blog posts with support for speakers, guests, sources, and metadata.

### Notes (`/src/notes/`)
Meeting notes, video transcripts, and quick thoughts with speaker tracking and tagging.

### Books (`/src/books/`)
Book reviews and reading notes with specialized metadata including:
- Author and publisher information
- Publication and reading dates
- Personal ratings and descriptions
- Cover image display
- Tag-based categorization

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/) (version 18 or higher is recommended) and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/austery/thought-foundry.git
   ```
2. Navigate to the project directory:
   ```bash
   cd thought-foundry
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

To start the local development server with hot-reloading, run the following command. This will make the site available at `http://localhost:8080/`.

```bash
npx @11ty/eleventy --serve
```

### Production Build

To generate a production-ready build of the site, run the following command. The output will be generated in the `_site` directory.

```bash
npm run build
```

## Content Structure

### Frontmatter Format

The site uses flat frontmatter structure for all content types:

```yaml
---
title: "Your Title Here"
date: "YYYY-MM-DD"
layout: "post.njk"  # or "book-note.njk" for books
author: "Author Name"
speaker: "Speaker Name"  # For posts/notes
publisher: "Publisher"   # For books
rating: "4/5"           # For books
series: "Series Name"   # Optional: groups related content
exclude: true           # Optional: excludes from listings/search
tags:
  - "tag1"
  - "tag2"
---
```

### Series Grouping Feature

The site supports content series organization that allows you to group related content together. By adding a `series` field to your frontmatter, you can:

**What happens when `series` is set:**
- ✅ **Automatic grouping** - Content with the same series value are automatically linked
- ✅ **Related posts display** - Shows other posts in the same series at the bottom of each article
- ✅ **Enhanced navigation** - Users can easily discover related content in a series
- ✅ **Content organization** - Helps organize multi-part articles, lecture series, or thematic content

**Use cases:**
- Multi-part article series (e.g., "深度学习系列", "投资理财基础")
- Lecture or seminar series (e.g., "家庭生活系列讲座")
- Book club discussions or course materials
- Thematic content groupings

**Example:**
```yaml
---
title: "家庭生活系列讲座-六：婆媳之间"
date: "2025-07-12"
series: "家庭生活系列讲座"
speaker: "林静芝,李秀全"
tags:
  - 视频笔记
  - 婚姻成长
  - 家庭生活
---

This content will automatically show links to other posts in the "家庭生活系列讲座" series.
```

### Content Exclusion Feature

The site supports a powerful content exclusion system that allows you to create "semi-private" content. By adding `exclude: true` to any post's frontmatter, you can:

**What happens when `exclude: true` is set:**
- ✅ **Post generates HTML file** - Content is still built and accessible via direct URL
- ❌ **Excluded from homepage** - Won't appear in the main blog listing
- ❌ **Excluded from search** - Won't appear in search results
- ❌ **Excluded from tag pages** - Won't appear in tag-based browsing
- ❌ **Excluded from speaker pages** - Won't appear in speaker-based browsing

**Use cases:**
- Draft content that you want to share via direct link but keep out of public navigation
- Private notes that should be accessible but not discoverable
- Content in progress that isn't ready for general browsing
- Testing new content formats or layouts

**Example:**
```yaml
---
title: "Private Meeting Notes"
date: "2025-01-21"
exclude: true
tags:
  - internal
  - draft
---

This content will be accessible at `/notes/private-meeting-notes/` but won't appear in any listings.
```

### File Naming

- Use underscores instead of spaces in filenames for URL-friendly paths
- Files are automatically processed to ensure proper URL generation

## Navigation Structure

- **Home**: Main landing page with recent content
- **笔记** (Notes): All meeting notes and transcripts
- **书架** (Bookshelf): Book reviews and reading notes  
- **标签** (Tags): Browse content by tags
- **演讲者** (Speakers): Browse content by speakers/presenters

## Technologies Used

* **[Eleventy](https://www.11ty.dev/)**: A simpler static site generator.
* **[Nunjucks](https://mozilla.github.io/nunjucks/)**: The templating engine used for layouts.
* **[Markdown](https://www.markdownguide.org/)**: For writing content.
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: For client-side functionality like search and table of contents generation.
* **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the website.
* **[Pinyin](https://www.npmjs.com/package/pinyin)**: For Chinese text to pinyin conversion and URL slugification.
* **[GitHub Actions](https://github.com/features/actions)**: For continuous integration and deployment.

## Development Notes

### Data Quality Tools

The site includes built-in debugging tools that run during build to detect:
- Overly long speaker fields (>100 characters)
- Malformed frontmatter structure
- Duplicate speaker slug conflicts

### Technical Implementation

**Series and Related Posts System:**
- Automatic content grouping based on `series` frontmatter field
- Filtered display excludes current post from related posts list
- Responsive CSS styling with Pico CSS variables for consistent theming
- Template-based rendering with conditional display logic

**Content Exclusion System:**
- Server-side filtering in Eleventy collections
- Maintains SEO benefits while providing content control
- Debug reporting during build process for transparency

**Enhanced Template Features:**
- Source URL display in channel field instead of raw links
- Improved metadata presentation with better spacing and typography
- Table of contents generation for book notes
- Responsive design across all content types

**Build Process Optimizations:**
- Comprehensive conflict detection and reporting
- Automated frontmatter processing capabilities
- Performance monitoring with build time reporting
- Data integrity validation across all content types

### Recent Improvements

- Fixed circular reference issues in layout templates
- Converted from nested to flat frontmatter structure
- Added comprehensive speaker system with dedicated pages
- Implemented data integrity checking and automated fixes
- Added content exclusion system for semi-private posts
- **NEW: Series grouping system** for organizing related content into collections
- **NEW: Related posts display** showing other posts in the same series
- **NEW: Enhanced template system** with improved source URL display in channel field
- **NEW: Batch frontmatter processing** with automated series field addition to all content
- Optimized book note layout for better readability
- Added URL-friendly file naming with underscore conversion
- Improved CSS styling for metadata and related content sections
