# Design: Remove Entity Static Pages

**Date:** 2026-04-06  
**Status:** Approved  
**Goal:** Reduce build time from ~256s to ~80s by eliminating ~17,000 unnecessary entity listing pages.

---

## Problem

Thought Foundry generates static HTML pages for every unique entity extracted from frontmatter:

| Entity Type | Pages Generated |
|-------------|----------------|
| media-books | 5,519 |
| companies-orgs | 4,347 |
| people | 3,765 |
| products-models | 3,415 |
| **Total entity pages** | **~17,046** |
| Actual content pages | 6,342 |
| **Total output** | **25,734** |

At 6.8ms per file, this dominates build time. These entity pages were originally split out from tags because tags grew too large, and their content is AI-generated with poor deduplication quality. They also have `data-pagefind-ignore` — they were never indexed by Pagefind anyway.

---

## Decision

**Remove static pages for 4 entity types: people, companies-orgs, products-models, media-books.**

Keep: tags (1,512 pages), speakers (460 pages), categories (43), areas (10), projects (1).

Entity names in `post.njk` change from links to entity pages → links to homepage search (`/?q=EntityName`).

---

## Architecture

### Files to Delete

```
src/person-page.njk
src/company-org-page.njk
src/product-model-page.njk
src/media-book-page.njk
```

### `.eleventy.js` — Remove ~394 lines

Remove 4 collection builders (each ~97-102 lines):
- `peopleList` (~line 838)
- `companiesOrgsList` (~line 937)
- `productsModelsList` (~line 1037)
- `mediaBookslist` (~line 1141)

Remove 4 slug filters:
- `getPersonSlug`
- `getCompanySlug`
- `getProductSlug`
- `getMediaSlug`

### `src/_includes/post.njk` — Entity link change

Replace `getXxxSlug(collections)` filter calls with direct `/?q=` links:

```njk
{# Before #}
<a href="{{ ('/people/' + (person | getPersonSlug(collections)) + '/') | url }}">{{ person }}</a>

{# After #}
<a href="{{ ('/?q=' + person) | url }}" class="entity-link person-link">{{ person }}</a>
```

Apply to all 4 entity types (people, companies_orgs, products_models, media_books).

### `src/_includes/base.njk` — Auto-trigger search from URL param

Add ~10 lines of JS after PagefindUI initialization to read `?q=` param and auto-fill search:

```js
const params = new URLSearchParams(window.location.search);
const q = params.get('q');
if (q) {
  setTimeout(() => {
    const input = document.querySelector('.pagefind-ui__search-input');
    if (input) {
      input.value = q;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }, 100);
}
```

The 100ms delay is needed because PagefindUI renders asynchronously.

---

## Data Flow After Change

```
User clicks entity name in post
  → GET /?q=EntityName
  → Homepage loads with PagefindUI
  → JS reads ?q param, fills search input, dispatches input event
  → Pagefind searches full-text index
  → Results show all posts mentioning that entity
```

---

## Search Quality Notes

- Entity pages had `data-pagefind-ignore` — removing them has zero impact on Pagefind index
- Entity names appear in article body text (especially video transcripts) → searchable
- Pagefind index size: 244MB → ~80MB estimated (67% reduction)
- Chinese names search without stemming — exact match works fine for proper nouns

---

## Expected Outcomes

| Metric | Before | After |
|--------|--------|-------|
| Output HTML files | 25,734 | ~8,363 |
| Eleventy build time | ~166s | ~50s |
| Pagefind indexing | ~90s | ~29s |
| **Total build** | **~256s** | **~80s** |
| `.eleventy.js` lines | 1,391 | ~950 |

---

## Out of Scope

- Tags, speakers, categories, areas, projects pages: unchanged
- Frontmatter data (`people: [...]` etc.): preserved as-is, still rendered in post HTML
- No changes to content submodule
