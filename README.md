# Thought Foundry

Thought Foundry is a personal knowledge base and digital garden built with [Eleventy](https://www.11ty.dev/). It's designed to be a place to cultivate and publish notes, book reviews, and articles on a variety of topics.

## Features

* **Content Organization**: The site is structured into collections for "posts", "books", and "notes", making it easy to manage different types of content.
* **Tagging System**: A robust tagging system allows for easy categorization and discovery of content. The system is case-insensitive and generates a list of all tags used across the site.
* **Speaker System**: A comprehensive speaker/presenter system that automatically extracts speakers from content, creates dedicated speaker pages, and provides clickable speaker links with conflict resolution for duplicate names.
* **Client-Side Search**: A vanilla JavaScript search implementation allows users to easily find articles by title or content.
* **Table of Contents**: A Table of Contents is automatically generated for each post based on its headings, improving navigation for longer articles.
* **SEO-Friendly Slugs**: The site uses the `pinyin` and `slugify` libraries to automatically generate clean, readable URLs from post titles, even those in Chinese.
* **Book Notes Template**: Specialized template for book reviews with metadata display including author, publisher, rating, cover images, and reading dates.
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
tags:
  - "tag1"
  - "tag2"
---
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

### Recent Improvements

- Fixed circular reference issues in layout templates
- Converted from nested to flat frontmatter structure
- Added comprehensive speaker system with dedicated pages
- Implemented data integrity checking and automated fixes
- Optimized book note layout for better readability
- Added URL-friendly file naming with underscore conversion
