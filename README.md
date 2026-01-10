# Thought Foundry

Thought Foundry is a personal knowledge base and digital garden built with [Eleventy](https://www.11ty.dev/). It's designed to be a place to cultivate and publish notes, book reviews, and articles on a variety of topics.

## Features

* **Content Organization**: The site is structured into collections for "posts", "books", and "notes", making it easy to manage different types of content.
* **Content Exclusion System**: Posts can be marked with `exclude: true` in frontmatter to create "semi-private" content that generates HTML files but is excluded from all listings, search results, and navigation.
* **Series Grouping**: Content can be organized into series using the `series` field in frontmatter, with automatic related posts display for items in the same series.
* **Related Posts Display**: Posts with the same series value automatically show links to other posts in the series at the bottom of each article.
* **Tagging System**: A robust tagging system allows for easy categorization and discovery of content. The system is case-insensitive and generates a list of all tags used across the site.
* **Speaker System**: A comprehensive speaker/presenter system that automatically extracts speakers from content, creates dedicated speaker pages, and provides clickable speaker links with conflict resolution for duplicate names.
* **Full-Text Search**: Pagefind-powered static search with Chinese language support, allowing users to instantly search through all content with highlighted excerpts and metadata filtering.
* **Table of Contents**: A Table of Contents is automatically generated for each post based on its headings, improving navigation for longer articles.
* **SEO-Friendly Slugs**: The site uses the `pinyin` and `slugify` libraries to automatically generate clean, readable URLs from post titles, even those in Chinese.
* **Book Notes Template**: Specialized template for book reviews with metadata display including author, publisher, rating, cover images, and reading dates.
* **Enhanced Template System**: Improved display logic showing source URLs in channel field instead of raw links, with better metadata presentation.
* **Summary and Insight Display**: Dual-field system displaying content summaries and personal insights with visual distinction on both blog pages and individual posts.
* **Internal Tag System**: Advanced tag filtering system that allows internal tags (like "视频文稿") to exist in content but remain hidden from public display while maintaining organizational functionality.
* **Badge System**: Visual content type indicators using emoji badges (✍️ for posts, 📝 for notes) with compact inline layout for improved information density.
* **Frontmatter Migration Tools**: Automated Python scripts for restructuring frontmatter fields while preserving content and maintaining data integrity.
* **Data Integrity Tools**: Built-in debugging tools to detect and resolve data quality issues like overly long speaker fields or malformed frontmatter.
* **Flat Frontmatter Structure**: Uses industry-standard flat frontmatter structure instead of nested data objects for better maintainability.
* **Automated Deployment**: The project includes a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.
* **Responsive Design**: The CSS is structured to ensure the layout is responsive and works well on different screen sizes.
* **Dark Mode & Theme Switching**: Built-in light and dark theme support with persistent user preferences. Users can toggle between themes with a single click, and their choice is saved in the browser. The system automatically detects system theme preferences on first visit.

## Content Types

### Posts (`/src/posts/`)

General articles and blog posts with support for speakers, guests, sources, and metadata.

### Notes (`/src/notes/`)

Meeting notes, video transcripts, and quick thoughts with speaker tracking and tagging.

### Books (`/src/books/`)

Book reviews and reading notes with specialized metadata including:

* Author and publisher information
* Publication and reading dates
* Personal ratings and descriptions
* Cover image display
* Tag-based categorization

## Performance Highlights

**Build Time**: ~80 seconds (down from 3+ hours)  
**Content**: 3,240+ indexed pages  
**Files Generated**: 35,887  
**Search**: Instant full-text search with Chinese support

### Recent Optimizations (2025-12)
- ✅ **Phase 2 & 3 Complete**: Slug caching system with 91% hit rate
- ✅ **Persistent Pinyin Cache**: 100% hit rate, 46k entries
- ✅ **Pre-computed Collection Slugs**: All collections optimized
- ✅ **Regex Pre-compilation**: Avoided 465k+ object creations
- ✅ **Pagefind Migration**: Distributed search index (previously 101MB JSON)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have [Node.js](https://nodejs.org/) (version 18 or higher is recommended) and npm installed on your machine.

For Python automation scripts, you'll need Python 3.13+ and `uv` for dependency management.

### Installation

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
summary: "Brief content overview"  # Optional: content description
insight: "Personal reflection"     # Optional: your thoughts/takeaways
exclude: true           # Optional: excludes from listings/search
tags:
  - "tag1"
  - "tag2"
---
```

### Series Grouping Feature

The site supports content series organization that allows you to group related content together. By adding a `series` field to your frontmatter, you can:

**What happens when `series` is set:**

* ✅ **Automatic grouping** - Content with the same series value are automatically linked
* ✅ **Related posts display** - Shows other posts in the same series at the bottom of each article
* ✅ **Enhanced navigation** - Users can easily discover related content in a series
* ✅ **Content organization** - Helps organize multi-part articles, lecture series, or thematic content

**Use cases:**

* Multi-part article series (e.g., "深度学习系列", "投资理财基础")
* Lecture or seminar series (e.g., "家庭生活系列讲座")
* Book club discussions or course materials
* Thematic content groupings

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

* ✅ **Post generates HTML file** - Content is still built and accessible via direct URL
* ❌ **Excluded from homepage** - Won't appear in the main blog listing
* ❌ **Excluded from search** - Won't appear in search results
* ❌ **Excluded from tag pages** - Won't appear in tag-based browsing
* ❌ **Excluded from speaker pages** - Won't appear in speaker-based browsing

**Use cases:**

* Draft content that you want to share via direct link but keep out of public navigation
* Private notes that should be accessible but not discoverable
* Content in progress that isn't ready for general browsing
* Testing new content formats or layouts

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

### Summary and Insight Display Feature

The site features a dual-field content preview system that enhances content discovery and organization. Each post can have both a `summary` and an `insight` field in its frontmatter:

**Summary Field (`summary`):**

* 📄 **Content Overview** - Provides a concise description of what the post covers
* **Blog Page Display** - Shows as preview text under each post title on the homepage
* **Post Page Display** - Appears in the metadata section with blue-themed styling
* **Migration Ready** - Automatically populated from legacy `insight` fields during content migration

**Insight Field (`insight`):**

* 💡 **Personal Reflection** - Space for your personal thoughts, takeaways, or why the content is valuable
* **Blog Page Display** - Shows as additional preview text with distinct orange styling
* **Post Page Display** - Appears in the metadata section with orange-themed styling
* **Author Perspective** - Helps readers understand your personal connection to the content

**Visual Design:**

* **Color-Coded Sections** - Blue theme for summaries, orange theme for insights
* **Responsive Layout** - Properly styled for both desktop and mobile viewing
* **Icon Indicators** - 📄 for summaries, 💡 for insights for quick visual recognition
* **Conditional Display** - Fields only appear when they contain content

**Example Frontmatter:**

```yaml
---
title: "投资传奇斯坦·德鲁肯米勒：宏观洞察、美联储的错误与AI趋势"
date: "2024-11-06"
summary: "投资传奇斯坦·德鲁肯米勒分享了他对当前宏观经济的看法，批评美联储过早宣布战胜通胀。他阐述了自己"先买入，后分析"的投资哲学。"
insight: "这是我最想模仿的投资大师，他的宏观投资理念和风险管理方法值得深入学习。"
---

This content will show both summary and insight on the blog page and in the post metadata section.
```

**Migration Tool:**
The project includes a Python script (`rename_insight_to_summary.py`) that automatically:

* Renames existing `insight` fields to `summary`
* Adds new empty `insight` fields
* Preserves all other frontmatter structure
* Processes all content files in batch

### Internal Tag System Feature

The site supports an advanced internal tag system that allows you to use organizational tags that remain hidden from public display while maintaining backend functionality. This is particularly useful for content workflow management and internal categorization.

**How Internal Tags Work:**

* 🔒 **Hidden from Display** - Internal tags are filtered out from blog listings, post pages, tag collections, and search results
* ✅ **Preserved in Data** - Tags remain in frontmatter for backend processing and potential future use
* 🏷️ **Selective Filtering** - Only specified internal tags are hidden; other tags display normally
* 🔄 **Build-Time Processing** - Filtering happens during site generation for optimal performance

**Current Internal Tags:**

* `视频文稿` - Marks content as video transcripts without displaying the tag publicly

**Use Cases:**

* Content workflow states (draft, review, published)
* Internal categorization for content management
* Legacy tag migration without losing organizational data
* Administrative metadata that shouldn't be public

**Implementation:**
The system uses multi-layer filtering across:

* Template displays (blog.njk, post.njk)
* Collection generation (.eleventy.js)
* Tag listing and navigation
* Search result processing

**Example:**

```yaml
---
title: "AI研讨会：探索企业级应用与未来趋势"
date: "2024-06-15"
tags:
  - AI
  - 企业应用
  - 视频文稿  # This tag won't appear in public displays
  - 技术趋势
---

Users will see tags: #AI #企业应用 #技术趋势
Internal tag "视频文稿" remains hidden but preserved in data.
```

### Badge System and Layout Optimization

The site features a modern badge system with visual content type indicators and optimized layout for improved information density and user experience.

**Badge System Features:**

* ✍️ **Post Badge** - Emoji indicator for blog posts and articles
* 📝 **Note Badge** - Emoji indicator for meeting notes and transcripts
* 🎨 **Clean Design** - Icon-only approach for minimal visual clutter
* 📱 **Responsive** - Consistent display across all device sizes

**Layout Optimization:**

* **Inline Metadata** - Title, badge, and date on the same line for compact presentation
* **Information Density** - More content visible without scrolling
* **Visual Hierarchy** - Clear distinction between content types and metadata
* **Consistent Spacing** - Uniform gaps and alignment across all content listings

**Template Structure:**

```html
<a href="/post-url/">Post Title</a>
<span class="badge">✍️</span>
<time datetime="2025-08-02">8/2/2025</time>
```

**Benefits:**

* **Faster Scanning** - Users can quickly identify content types and dates
* **Cleaner Interface** - Reduced visual noise while maintaining functionality
* **Better UX** - More intuitive content browsing and discovery
* **Mobile Friendly** - Optimized for smaller screens with efficient space usage

### Theme System (Dark Mode / Light Mode)

The site features a fully functional theme switching system that allows users to toggle between light and dark modes with a persistent preference system.

**Theme Features:**

* 🌙 **Light Mode (Default)** - Clean white background with dark text for comfortable daytime viewing
* 🌤️ **Dark Mode** - Deep gray background with light text for comfortable nighttime viewing
* 💾 **Persistent Preferences** - User theme choice is saved to browser localStorage and persists across sessions
* 🖥️ **System Detection** - Automatically detects system theme preference on first visit if user hasn't set a preference
* ⚡ **Instant Switching** - Theme changes apply immediately with smooth transitions
* 🎨 **Complete Coverage** - All page elements (backgrounds, text, borders, buttons, metadata blocks, etc.) support both themes

**How It Works:**

1. **CSS Variables System** (`src/css/base/_theme.css`):
   - Defines all theme colors using CSS custom properties
   - Light theme variables are set on `:root` (default)
   - Dark theme variables are set on `[data-theme="dark"]`
   - Includes colors for backgrounds, text, borders, accents, and shadows

2. **Theme Toggle Button**:
   - Located in the header next to the search box
   - Shows 🌙 (moon) icon in light mode
   - Shows ☀️ (sun) icon in dark mode
   - Animated hover and click effects

3. **JavaScript Logic** (`src/js/theme-toggle.js`):
   - Initializes theme on page load based on saved preference or system setting
   - Listens to theme toggle button clicks
   - Saves user preference to localStorage
   - Monitors system theme changes (when user hasn't manually set a preference)

**Color Palettes:**

**Light Theme:**
```
Background: #ffffff
Text Primary: #222222
Text Secondary: #666666
Border: #eeeeee
Accents: Blue (#4a90e2), Orange (#f39c12), Green (#48bb78)
```

**Dark Theme:**
```
Background: #1a1a1a
Text Primary: #e0e0e0
Text Secondary: #b0b0b0
Border: #404040
Accents: Blue (#6ba3ff), Orange (#ffb84d), Green (#5edb7f)
```

**Technical Implementation:**

The theme system uses a multi-file approach for maintainability:

* `src/css/base/_theme.css` - Theme variable definitions
* `src/css/components/_theme-toggle.css` - Button styling and transitions
* `src/js/theme-toggle.js` - Theme logic and persistence
* Modified CSS files use `var(--theme-*)` instead of hardcoded colors

All color-related CSS properties across the site have been refactored to use theme variables, ensuring complete theme support for:
- Main content backgrounds and text
- Navigation and headers
- Tags and badges
- Metadata blocks and sidebars
- Links and interactive elements
- Details and expandable sections

**Usage:**

Users simply click the theme toggle button (🌙 or ☀️) in the header to switch between themes. The preference is automatically saved and will be remembered on future visits.

### File Naming

* Use underscores instead of spaces in filenames for URL-friendly paths
* Files are automatically processed to ensure proper URL generation

## Navigation Structure

* **Home**: Main landing page with recent content
* **笔记** (Notes): All meeting notes and transcripts
* **书架** (Bookshelf): Book reviews and reading notes  
* **标签** (Tags): Browse content by tags
* **演讲者** (Speakers): Browse content by speakers/presenters

## Technologies Used

* **[Eleventy](https://www.11ty.dev/)**: A simpler static site generator.
* **[Nunjucks](https://mozilla.github.io/nunjucks/)**: The templating engine used for layouts.
* **[Markdown](https://www.markdownguide.org/)**: For writing content.
* **[Pagefind](https://pagefind.app/)**: Static site search library with Chinese language support for full-text search functionality.
* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: For client-side functionality like table of contents generation.
* **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the website.
* **[Pinyin](https://www.npmjs.com/package/pinyin)**: For Chinese text to pinyin conversion and URL slugification.
* **[GitHub Actions](https://github.com/features/actions)**: For continuous integration and deployment.

## Development Notes

### Data Quality Tools

The site includes built-in debugging tools that run during build to detect:

* Overly long speaker fields (>100 characters)
* Malformed frontmatter structure
* Duplicate speaker slug conflicts

### Technical Implementation

**Series and Related Posts System:**

* Automatic content grouping based on `series` frontmatter field
* Filtered display excludes current post from related posts list
* Responsive CSS styling with Pico CSS variables for consistent theming
* Template-based rendering with conditional display logic

**Content Exclusion System:**

* Server-side filtering in Eleventy collections
* Maintains SEO benefits while providing content control
* Debug reporting during build process for transparency

**Enhanced Template Features:**

* Source URL display in channel field instead of raw links
* Improved metadata presentation with better spacing and typography
* Table of contents generation for book notes
* Responsive design across all content types

**Build Process Optimizations:**

* Comprehensive conflict detection and reporting
* Automated frontmatter processing capabilities
* Performance monitoring with build time reporting
* Data integrity validation across all content types

### Recent Improvements

* Fixed circular reference issues in layout templates
* Converted from nested to flat frontmatter structure
* Added comprehensive speaker system with dedicated pages
* Implemented data integrity checking and automated fixes
* Added content exclusion system for semi-private posts
* **NEW: Series grouping system** for organizing related content into collections
* **NEW: Related posts display** showing other posts in the same series
* **NEW: Enhanced template system** with improved source URL display in channel field
* **NEW: Summary and Insight Display** dual-field content preview system with visual distinction and color-coded styling
* **NEW: Frontmatter Migration Tools** automated Python scripts for batch processing and field restructuring
* **NEW: Internal Tag System** advanced tag filtering allowing organizational tags to remain hidden from public display while preserving backend functionality
* **NEW: Badge System & Layout Optimization** emoji-based content type indicators with inline metadata layout for improved information density
* **NEW: Tag Management Tools** automated Python scripts for batch tag replacement and frontmatter processing (212 files successfully updated from "视频笔记" to "视频文稿")
* **NEW: Multi-layer filtering system** coordinated tag filtering across templates, collections, and build processes
* **NEW: Batch frontmatter processing** with automated series field addition to all content
* **NEW: Dark Mode & Theme Switching System** complete light/dark theme support with persistent user preferences, system detection, and smooth transitions using CSS variables
* **NEW: Pagefind Search Migration** complete migration from 101MB JSON search file to Pagefind static search system, resolving GitHub file size limits while maintaining full-text search across all 2,691+ articles with Chinese language support
* **NEW: Build Performance Optimization** implemented persistent pinyin cache system (.eleventy-cache.json) for 30-40% faster subsequent builds and added build time monitoring
* Optimized book note layout for better readability
* Added URL-friendly file naming with underscore conversion
* Improved CSS styling for metadata and related content sections
