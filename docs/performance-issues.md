# Performance Issues and Solutions

## Current Status (2025-11-24)

### Critical Issue: Search Index Size Exceeds GitHub Limit

**Problem Identified:**
- `search.json` file size: **101 MB** (100.75 MB)
- GitHub's file size limit: **100 MB**
- Total content files: **2,691 markdown files**
- Build failing on GitHub Actions with error: `error: File search.json is 100.75 MB; this exceeds GitHub's file size limit of 100.00 MB`

**Root Cause:**
The current search implementation (`src/search.json.njk`) includes the **full HTML content** (`item.templateContent`) of every post in a single JSON file:

```javascript
{
  "url": "/post-url/",
  "title": "Post Title",
  "content": "<!-- FULL HTML CONTENT HERE -->"
}
```

With 2,691 files, this approach is fundamentally unscalable.

---

## Solution Options for Search File Size

### Option 1: Content Truncation (Quick Fix, 80% effort reduction)

**Approach:** Only include a preview/excerpt in the search index instead of full content.

**Implementation:**
- Modify `search.json.njk` to use `item.data.summary` or first 200 characters
- Keep full-text search on title, tags, and summary only
- Users must click through to read full content

**Pros:**
- Simple to implement (modify 1 file)
- Reduces file size by ~80-90%
- Still provides meaningful search results

**Cons:**
- Cannot search within full article content
- May miss relevant results in article body

**Estimated file size:** 10-20 MB

---

### Option 2: Paginated/Chunked Search Index (Moderate complexity)

**Approach:** Split search index into multiple smaller JSON files.

**Implementation:**
- Split content into chunks (e.g., by year, category, or alphabetically)
- Generate multiple JSON files: `search-2024.json`, `search-2023.json`, etc.
- Client-side JavaScript loads and searches across multiple files
- Lazy-load older chunks only when needed

**Pros:**
- Still allows full-text search
- Each file stays under GitHub limit
- Progressive loading improves initial page load

**Cons:**
- More complex client-side search logic
- Multiple HTTP requests (can be slow on initial search)
- Requires significant refactoring of search.js

**Estimated files:** 5-10 JSON files of 10-20 MB each

---

### Option 3: Server-Side Search with External Service (Best UX, high complexity)

**Approach:** Use dedicated search service instead of client-side JSON.

**Options:**
- **Algolia** (free tier: 10k records/month, 100k operations)
- **Meilisearch** (open-source, self-hosted)
- **Pagefind** (static search index, generates binary files)
- **Lunr.js pre-built index** (compressed search index)

**Recommended: Pagefind**
- Specifically designed for static sites
- Generates compressed binary search files
- Significantly smaller than JSON (~90% smaller)
- Zero-config integration with Eleventy
- Works entirely client-side (no backend needed)

**Implementation:**
```bash
npm install -D pagefind
npx pagefind --source _site
```

Add to build process in `package.json`:
```json
"build": "npx @11ty/eleventy && npx pagefind --source _site"
```

**Pros:**
- Professional-grade search experience
- Massive file size reduction
- Fast search performance
- Handles Chinese content well
- Free and open-source

**Cons:**
- Requires dependency addition
- Slight learning curve for configuration
- Need to update search UI

**Estimated total size:** 5-10 MB for entire search index

---

### Option 4: Hybrid Approach (Balanced solution)

**Approach:** Combine truncation with smart indexing.

**Implementation:**
1. **Recent content (last 6 months):** Full-text search with truncated content (first 500 chars)
2. **Older content:** Title + tags + summary only
3. **Separate indices:** `search-recent.json` (small), `search-archive.json` (tiny)

**Pros:**
- Best balance of functionality and file size
- Recent content gets better search
- Simple to implement
- No external dependencies

**Cons:**
- Still uses JSON (not most efficient)
- Search quality decreases for older content

**Estimated total size:** 15-25 MB across 2 files

---

## Recommended Solution: Pagefind (Option 3)

**Why Pagefind:**
1. Built for exactly this use case (static site search)
2. Binary format is 90% smaller than JSON
3. Excellent Chinese/multilingual support
4. No external service dependencies
5. Works offline
6. Industry standard for large static sites

**Migration Path:**
1. Install Pagefind: `npm install -D pagefind`
2. Update build script in `package.json`
3. Add `data-pagefind-body` attribute to article content in templates
4. Replace `src/js/search.js` with Pagefind UI
5. Test search functionality
6. Remove old `search.json.njk`

**Time estimate:** 2-3 hours for complete migration

---

## Build Performance Issues

### Problem: Slow Markdown → HTML Build

**Current observations:**
- Build time increasing with content growth
- 2,691 markdown files to process
- Complex collection processing (13+ collections)
- Entity normalization runs on every build

### Solution 1: Incremental Builds (Built-in)

**Already available:**
```bash
npm run build:incremental
```

Only rebuilds changed files. Recommended for local development.

### Solution 2: Optimize Collection Processing

**Current inefficiencies:**
1. **Pinyin conversion:** No caching between builds
2. **Entity normalization:** Runs on every file, every build
3. **Conflict detection:** Full analysis every time

**Optimization approach:**
```javascript
// Persist cache to disk
const fs = require('fs');
const CACHE_FILE = '.eleventy-cache.json';

// Load cache at startup
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  cache = JSON.parse(fs.readFileSync(CACHE_FILE));
}

// Save cache after build
process.on('beforeExit', () => {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache));
});
```

**Expected improvement:** 30-40% faster builds

### Solution 3: Disable Debug Mode in Production

**Current issue:** DEBUG mode adds significant overhead.

**Fix:**
```yaml
# .github/workflows/deploy.yml
- name: Build with Eleventy
  run: npm run build  # Never use DEBUG=true in CI
```

Ensure local `.env` or scripts don't enable DEBUG in production builds.

### Solution 4: Parallel Collection Processing

**Current:** Collections process sequentially.

**Potential optimization:** Use workers for independent collections (advanced).

For now, not recommended due to complexity vs. gain.

### Solution 5: Reduce Template Complexity

**Review areas:**
- Remove unused filters from templates
- Simplify conditional logic in frequently-rendered templates
- Consider template caching for repeated elements

---

## Immediate Action Items (Priority Order)

### 🔴 Critical: Fix Search File Size (Deploy Blocker)

**Quick Fix (30 minutes):**
1. Modify `search.json.njk` to truncate content to 200 characters
2. Update search UI to indicate "preview only"
3. Deploy to unblock GitHub Actions

**Proper Fix (2-3 hours):**
1. Install Pagefind
2. Migrate search implementation
3. Test thoroughly
4. Deploy

### 🟡 Important: Optimize Build Performance

**Week 1:**
1. Add persistent caching for pinyin conversion
2. Profile build to identify bottlenecks
3. Disable debug logging in production

**Week 2:**
1. Consider reducing collection count if some are unused
2. Audit template performance
3. Document build optimization best practices

---

## Monitoring and Metrics

### Search Index Size Tracking

Add to build process:
```bash
ls -lh _site/search.json
```

Alert if size exceeds 50 MB (50% threshold).

### Build Time Tracking

Track build times in CI logs. Target: <2 minutes for full build.

Current baseline: [Needs measurement]

---

## Future Considerations

### Content Archival Strategy

With 2,691 files and growing:
- Consider moving very old content to archive
- Implement `archive: true` frontmatter flag
- Separate "active" vs "archived" content in navigation

### Database Backend

If content exceeds 5,000 files:
- Consider moving to headless CMS (Contentful, Strapi)
- Keep static generation but fetch from API
- Better scalability for massive content

### CDN Integration

Large JSON files benefit from CDN caching:
- Cloudflare Pages
- Netlify
- Vercel

These platforms handle large static assets better than GitHub Pages.

---

## Additional Resources

- [Pagefind Documentation](https://pagefind.app/)
- [Eleventy Performance Tips](https://www.11ty.dev/docs/performance/)
- [Static Search Comparison](https://github.com/nextapps-de/flexsearch)
- [Git LFS for Large Files](https://git-lfs.github.com/) (Not recommended for this use case)

---

## Change Log

- **2025-11-24:** Initial analysis and solution documentation
- **Status:** Awaiting decision on implementation approach
