# Tag Rendering Threshold — Design Document

**Date**: 2026-02-28
**Status**: Approved
**Project**: thought-foundry
**Scope**: Phase 1 of a 3-phase scaling improvement plan

---

## Problem

Tag data analysis (2000-file sample, Feb 2026):

| Metric | Value |
|--------|-------|
| Unique tags | ~1,960 per 2,000 files (extrapolates to ~5,000+ total) |
| Singleton tags (appear once) | **84%** |
| Low-frequency tags (≤3 occurrences) | **95%** |
| Unique slug computations | 26,299 |
| Total slug filter calls per build | 705,686 |

AI generates 3–5 highly specific free-form tags per article. Each unique tag produces one dedicated page in thought-foundry. With 5,367 content files and 10–20 new articles/day, this creates ~5,000+ tag pages — nearly all with only one article. This drives slug computation costs and build time.

## Decision

**Filter tag pages by occurrence count.** Only render a `/tags/<slug>/` page for tags that appear in **5 or more** articles.

### What changes

- `tagList` collection in `.eleventy.js`: filter out tags with `count < 5`
- `all-tags.njk` listing page: automatically benefits (fewer items = fewer pages)
- Individual `tag-page.njk` pages: only generated for qualifying tags

### What does NOT change

- Tag frontmatter in markdown files — tags remain exactly as written
- Obsidian compatibility — tags still present in all frontmatter
- Vector search in puresubs — embedding pipeline reads `area`/`category`/`tags` from frontmatter, not from built pages
- `suggested_tags` field — unaffected
- `area` and `category` pages — unaffected (controlled vocabulary, always rendered)

## Threshold Choice: 5

| Threshold | Est. qualifying tags | Coverage |
|-----------|---------------------|----------|
| ≥ 2 | ~320 | 16% of unique tags |
| ≥ 5 | ~100 | 5% of unique tags |
| ≥ 10 | ~30 | 1.5% of unique tags |

Threshold of 5 balances navigation usefulness (a tag page with 5+ articles is browsable) against build efficiency. Can be tuned after observing results.

## Expected Impact

- Tag pages: ~5,000 → ~100 (95% reduction)
- Slug computations: proportional drop in unique slug misses
- Build time: expect 20–40% reduction (tag page rendering is a major share of build cost)
- GitHub Actions minutes: corresponding reduction per build

## Implementation

Single change in `.eleventy.js`:

```js
// In the tagList collection, add a minimum occurrence filter
eleventyConfig.addCollection("tagList", function(collectionApi) {
  // ... existing collection logic ...
  // Add before return:
  .filter(tag => tag.count >= 5)
});
```

The exact implementation depends on how `tagList` is currently structured (may be an array of `{name, slug, count}` objects or a Map).

## Future Phases (not in scope here)

- **Phase 2**: Smart build triggering — replace hourly GitHub Actions schedule with webhook-triggered builds from puresubs (target: 2–4 builds/day instead of 24)
- **Phase 3**: Content/site repo separation (SPEC-134) — `git subtree split` content into `thought-foundry-content` repo; puresubs writes to content repo; site repo uses submodule

---

## Open Questions

- After applying threshold, verify that top navigation and tag cloud (if any) still render correctly
- Confirm whether `all-tags.njk` pagination is still needed at ~100 tags (was added for memory relief at 5,000+ tags; may simplify back to a single page)
