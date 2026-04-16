---
specId: SPEC-051
title: Remove Entity Static Pages and Transition to Search-Based Navigation
status: ✅ 已完成 (Completed)
priority: P1 - Core Feature
creationDate: 2026-04-06
lastUpdateDate: 2026-04-16
owner: User (AI-Assisted)
relatedSpecs:
  - SPEC-050
  - SPEC-052
tags:
  - performance-optimization
  - build-system
  - eleventy
  - pagefind
---

# SPEC-051: Remove Entity Static Pages and Transition to Search-Based Navigation

## 1. Goal

Reduce build time from ~256s to ~80s and drastically decrease the number of output HTML files by eliminating ~17,000 unnecessary entity listing pages for people, companies, products, and media.

## 2. Background

Thought Foundry was generating static HTML pages for every unique entity extracted from frontmatter. At approximately 17,000 entity pages vs 6,000 actual content pages, the entity pages dominated build times (6.8ms per file). Furthermore, these pages had poor AI-generated content quality, high deduplication overhead, and were explicitly ignored by search indexing (`data-pagefind-ignore`).

## 3. Design Decision

**Chosen approach**: Remove static pages for four entity types (people, companies-orgs, products-models, media-books) and redirect entity links in posts to a site-wide search query (`/?q=EntityName`).

**Rationale**: 
1. **Build Efficiency**: Removing thousands of files yields the most immediate and significant build speedup.
2. **Contextual Discovery**: Search results provide better context for entities than simple, often sparse, listing pages.
3. **Zero SEO Impact**: These pages were already hidden from search engines and internal search.

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| Keep Static Pages | Familiarity | Huge build overhead; low information value | ❌ Rejected |
| Client-side Rendering only | No build cost | Complexity in templates; poor fallback | ❌ Rejected |
| **Search-Based Redirection** | Instant "pages"; zero build cost; high relevance | Requires JS for auto-search | ✅ Chosen |

## 4. Implementation Phases

### Phase 1: Template and Filter Cleanup — ✅ Completed

- [x] Delete `src/person-page.njk`, `src/company-org-page.njk`, `src/product-model-page.njk`, `src/media-book-page.njk`.
- [x] Remove collection builders and slug filters for the four entity types from `.eleventy.js`.

### Phase 2: Link Redirection — ✅ Completed

- [x] Update `src/_includes/post.njk` to change entity links from entity slugs to search queries (e.g., `<a href="/?q={{ person }}">`).

### Phase 3: Search Auto-trigger — ✅ Completed

- [x] Implement a small JS snippet in `src/_includes/base.njk` to read the `q` URL parameter and automatically trigger the PagefindUI search.

## 5. Acceptance Criteria

- [x] Output HTML files reduced from 25,734 to ~8,363.
- [x] Total build time (Eleventy + Pagefind) reduced from ~256s to ~80s.
- [x] Clicking an entity name correctly opens the search page with results pre-populated.

## 6. Status History

| Date | Status | Note |
|------|--------|------|
| 2026-04-06 | 📝 草案 (Draft) | Initial proposal to fix build performance |
| 2026-04-08 | ✅ 已完成 (Completed) | Implementation merged and verified |
| 2026-04-16 | ✅ 已完成 (Completed) | Formalized as SPEC-051 under new architecture docs |

## 7. Related

- **Code**: `.eleventy.js`
- **Specs**: [SPEC-050（Submodule Separation）](../../../../research-notes/03-project/2026-04-thought-foundry-MOC.md)
- **Next Specs**: [SPEC-052](./SPEC-052-hybrid-search-architecture.md)
