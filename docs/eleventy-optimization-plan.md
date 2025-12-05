# Eleventy Performance Optimization Implementation Plan

**Date**: December 4, 2025  
**Status**: Ready to implement

## Summary

This document consolidates the analysis from both Claude and Gemini, providing a complete implementation plan to fix the memory crash issue and improve build performance.

---

## Root Cause Analysis

| Metric | Current Value |
|--------|---------------|
| Content files | 3,065+ |
| Generated pages | 29,670 |
| Slug filter calls | 465,255 |
| Local build time | ~3 hours |
| Memory usage | ~4GB (crashes at heap limit) |

**Core Problem**: The `| slug` filter is called 465,000+ times during template rendering. While there's a cache, the computation still happens at render time, causing memory pressure.

**Solution Principle**: **Storage > Compute** — Pre-compute slugs at collection build time, not at template render time.

---

## Implementation Plan

### Phase 1: Immediate Fixes (Done ✅)

1. ✅ Increase dev server memory: `NODE_OPTIONS="--max-old-space-size=8192"`
2. ✅ Enable incremental builds: `--incremental` flag

### Phase 2: Code Optimizations

#### 2.1 Add `lookupSlug` Filter (O(1) Lookup)

Add this after the existing `slug` filter in `.eleventy.js`:

```javascript
// 🚀 O(1) Lookup Filter - use this in templates instead of | slug
// Prerequisites: The entity must have been processed in a collection first
eleventyConfig.addFilter("lookupSlug", (str) => {
  if (!str) return '';
  const trimmed = str.trim();
  // Direct cache read - no computation
  if (slugCache.has(trimmed)) {
    return slugCache.get(trimmed);
  }
  // Fallback to computed slug if not in cache
  return eleventyConfig.getFilter("slug")(str);
});
```

#### 2.2 Add Pre-compiled Regex Constants

Add at the top of the module (after imports, before DEBUG):

```javascript
// [OPTIMIZATION] Pre-compiled regex patterns
// Avoids creating regex objects 465,000+ times in loops
const REGEX_QUOTES = /^['"]|['"]$/g;
const REGEX_CAPS = /^[A-Z][a-z]/;
const REGEX_MULTI_WORD_CAPS = /^[A-Z].*\s+.*[A-Z]/;
const REGEX_CHINESE = /[\u4e00-\u9fa5]/;
const REGEX_LOWER = /^[a-z]/;
```

Update `ENTITY_NORMALIZATION.selectCanonical` to use these.

#### 2.3 Add `slug` Property to Collections

In each collection that uses conflict resolution, add the pre-computed slug:

```javascript
// Example for speakerList - add after uniqueKey assignment
slugConflictMap.forEach((speakers, slug) => {
  if (speakers.length > 1) {
    speakers.forEach((speakerData, index) => {
      speakerData.uniqueKey = `${speakerData.key}-${index + 1}`;
      speakerData.slug = slugifyFilter(speakerData.uniqueKey); // Pre-compute!
    });
  } else {
    speakers[0].uniqueKey = speakers[0].key;
    speakers[0].slug = slug; // Already computed above
  }
});
```

**Apply to these collections:**
- `speakerList`
- `areaList`
- `peopleList`
- `companiesOrgsList`
- `productsModelsList`
- `mediaBookslist`

For `tagList`, the key IS the slug, so add:
```javascript
tagMap.set(slugKey, {
  name: cleanedTag,
  key: slugKey,
  slug: slugKey,  // Add this line
  posts: [],
  sources: new Set(),
});
```

For `categoryList` and `projectList`, add slug computation:
```javascript
categoryMap.set(category, {
  name: category,
  key: category,
  slug: slugifyFilter(category),  // Add this line
  posts: [],
});
```

### Phase 3: Template Updates

#### 3.1 High-Priority Templates (Tags & Speakers)

**`src/all-tags.njk`** - Change:
```njk
<!-- Before -->
<a href="{{ ('/tags/' + tag.key + '/') | url }}">{{ tag.name }}</a>

<!-- After (if key is already the slug) -->
<a href="{{ ('/tags/' + tag.slug + '/') | url }}">{{ tag.name }}</a>
```

**`src/all-speakers.njk`** - Change:
```njk
<!-- Before -->
<a href="{{ ('/speakers/' + (speaker.uniqueKey | slug) + '/') | url }}">

<!-- After -->
<a href="{{ ('/speakers/' + speaker.slug + '/') | url }}">
```

**`src/speaker-page.njk`** - Change permalink:
```njk
---
permalink: "/speakers/{{ speaker.slug }}/"
---
```

**`src/tag-page.njk`** - Change permalink:
```njk
---
permalink: "/tags/{{ tag.slug }}/"
---
```

#### 3.2 Update `post-meta.njk` Include

This file has 10 `| slug` calls per post render. Replace with `| lookupSlug` or use pre-computed values from collections.

### Phase 4: Pagination (Memory Reduction)

Add pagination to large index pages:

**`src/all-tags.njk`**:
```njk
---
pagination:
  data: collections.tagList
  size: 50
  alias: paginatedTags
permalink: "/all-tags/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}/{% endif %}"
---

{% for tag in paginatedTags %}
  <!-- render tag -->
{% endfor %}

{% if pagination.pages.length > 1 %}
<nav class="pagination">
  {% if pagination.href.previous %}<a href="{{ pagination.href.previous }}">上一页</a>{% endif %}
  <span>第 {{ pagination.pageNumber + 1 }} 页，共 {{ pagination.pages.length }} 页</span>
  {% if pagination.href.next %}<a href="{{ pagination.href.next }}">下一页</a>{% endif %}
</nav>
{% endif %}
```

**Apply same pattern to:**
- `src/all-speakers.njk`
- `src/all-categories.njk` (if large)
- `src/all-projects.njk` (if large)

---

## Files to Clean Up

Delete these duplicate files after review:
- `src/notes/5WsaAs_Xfho-duplicate.md`
- `src/notes/8L9g2KRaZRY-duplicate.md`
- `src/notes/Q00ABRDePls-duplicate.md`

---

## Expected Results

| Metric | Before | After (Estimated) |
|--------|--------|-------------------|
| Slug filter calls | 465,255 | ~3,000 (unique only) |
| Cache hit rate | ~80% | ~99%+ |
| Memory usage | ~4GB (crash) | ~2GB (stable) |
| Local build time | ~3 hours | ~45-90 min |
| Dev server stability | Crashes | Stable |

---

## Implementation Order

1. **Clean up duplicate files** (1 min)
2. **Add `lookupSlug` filter** (5 min)
3. **Add `slug` property to `tagList` and `speakerList`** (15 min)
4. **Update `all-tags.njk` and `all-speakers.njk`** (10 min)
5. **Update `tag-page.njk` and `speaker-page.njk` permalinks** (5 min)
6. **Test build** — verify no broken links
7. **Add pagination to index pages** (20 min)
8. **Extend to remaining collections** (30 min)

---

## Gemini's Optimized `.eleventy.js` (Alternative)

If you want a more aggressive refactor, Gemini provided a complete rewrite with:
- Pre-compiled regex constants
- `createEntityCollection` helper to reduce code duplication
- Cleaner structure

However, it removes DEBUG output. If you want to use it, merge back the DEBUG sections from your current code.

---

## Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Lookup method | Global `slugCache` Map with `lookupSlug` filter | O(1) access, minimal memory overhead |
| Pagination style | Simple prev/next | Lower complexity, fix crash first |
| Rollout strategy | Tags & Speakers first | Highest impact (Pareto 80/20) |
| Framework migration | Not now | Fix current code first, evaluate later |
