# Pagefind Chinese Segmentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement server-side Chinese word segmentation (using native `Intl.Segmenter` and Zero-Width Spaces) during Eleventy's build process to drastically improve Pagefind's search query precision without increasing runtime costs or adding fragile C++ compilation dependencies.

**Architecture:** We will inject an Eleventy Transform (`eleventyConfig.addTransform`) that parses outgoing HTML files, extracts text nodes inside the main content area, runs Node's built-in `Intl.Segmenter` API to slice Chinese sentences into meaningful dictionary words, and connects them back using Zero-Width Space (`\u200B`). This invisible space forces Pagefind's indexer to recognize grammatical boundaries, significantly improving the precision of search results while remaining invisible to the user.

**Tech Stack:** Node.js (v16+ native `Intl.Segmenter`), Eleventy Transforms, `cheerio` (for safe HTML DOM parsing).

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install required packages**

Run: `npm install cheerio`
Expected: Dependencies installed successfully, `package.json` and `package-lock.json` updated.

- [ ] **Step 2: Commit**

```bash
git add package.json package-lock.json pnpm-lock.yaml
git commit -m "chore: add cheerio for pagefind chinese segmentation"
```

### Task 2: Create the Segmentation Transform

**Files:**
- Create: `src/_11ty/transforms/pagefind-segmentation.js` (Note: we create a module to keep `.eleventy.js` clean)

- [ ] **Step 1: Create the transform logic**

Create step-by-step logic to recursively inject zero-width spaces (`\u200B`) between segmented words purely in text nodes, ignoring code and scripts.

```javascript
// src/_11ty/transforms/pagefind-segmentation.js
const cheerio = require('cheerio');

// Initialize Node.js native Chinese segmenter
const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' });

// Recursive function to process text nodes
function tokenizeTextNodes(node, $) {
  // If text node, segment with Intl.Segmenter
  if (node.type === 'text') {
    const text = node.data;
    // Only process text that contains Chinese characters
    if (/[\u4e00-\u9fa5]/.test(text)) {
      const segments = segmenter.segment(text);
      const words = Array.from(segments).map(s => s.segment);
      // Join words using Zero-Width Space (U+200B)
      node.data = words.join('\u200B');
    }
  } else if (node.type === 'tag') {
    // Skip scripts, styles, and code blocks completely
    if (['script', 'style', 'code', 'pre'].includes(node.name)) return;
    
    // Recursively process children
    $(node).contents().each((i, child) => tokenizeTextNodes(child, $));
  }
}

module.exports = function(content, outputPath) {
  // Only process HTML files
  if (outputPath && outputPath.endsWith(".html")) {
    const $ = cheerio.load(content);
    
    // Attempt to scope to pagefind data body, fallback to main/body
    let targetContainer = $('[data-pagefind-body]');
    if (targetContainer.length === 0) {
      targetContainer = $('main');
    }
    if (targetContainer.length === 0) {
      targetContainer = $('body');
    }
    
    // Process text nodes inside the target container
    targetContainer.each((i, el) => tokenizeTextNodes(el, $));
    
    return $.html();
  }
  return content;
};
```

- [ ] **Step 2: Commit**

```bash
git add src/_11ty/transforms/pagefind-segmentation.js
git commit -m "feat(search): create native Intl.Segmenter html transform"
```

### Task 3: Integrate Transform into Eleventy

**Files:**
- Modify: `.eleventy.js`

- [ ] **Step 1: Hook up the transform locally**

In `.eleventy.js`, require the new transform file and register it. Because `nodejieba` is a heavy dependency and slows down development builds, we will selectively enable it for Production builds or when `OPTIMIZE_SEARCH=true`.

*Add this around line 125, where other filters/transforms go (or near the end of configuration):*

```javascript
  // --- Transforms ---
  // Add Chinese segmentation for Pagefind before HTML is written
  // We enable this for production or explicit builds as cheerio parsing takes some time
  if (process.env.NODE_ENV === 'production' || process.env.OPTIMIZE_SEARCH === 'true') {
    try {
      const pagefindSegmentationTransform = require('./src/_11ty/transforms/pagefind-segmentation.js');
      eleventyConfig.addTransform("pagefind-segmentation", pagefindSegmentationTransform);
      if (DEBUG) console.log("[Transform] Enabled Pagefind Native Intl.Segmenter Chinese Segmentation");
    } catch (e) {
      console.warn("[Transform warning] Could not load pagefind-segmentation script: " + e.message);
    }
  }
```

- [ ] **Step 2: Run test to verify Eleventy builds**

Run: `OPTIMIZE_SEARCH=true npm run build:incremental`
Expected: The build succeeds without throwing cheerio errors. Pagefind index gets built.

- [ ] **Step 3: Commit**

```bash
git add .eleventy.js
git commit -m "feat(search): hook Intl.Segmenter transform into eleventy build"
```

### Task 4: Verify Pagefind Tokenization (Manual Verification)

**Files:**
- N/A

- [ ] **Step 1: Trigger full build with Pagefind**

Run: `OPTIMIZE_SEARCH=true npm run build`
Expected: Eleventy builds all files. Pagefind runs and indexes the `_site` directory successfully.

- [ ] **Step 2: Launch Dev Server**

Run: `npm run dev`
Expected: Server stands up.

- [ ] **Step 3: Test Web UI**

1. Go to http://localhost:8080/
2. Use the search bar to search for a complex Chinese term (e.g. "数据工程" or specific nouns).
3. Observe heavily refined search results (High precision) because Pagefind is boundary-aware now.

- [ ] **Step 4: Commit & Complete**

```bash
git commit --allow-empty -m "chore(search): verified exact matching behavior for chinese keywords"
```
