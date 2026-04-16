---
specId: SPEC-054
title: Collection Caching Strategy (Map-Based O(1) Lookups)
status: ✅ 已完成 (Completed)
priority: P1 - Core Feature
creationDate: 2025-12-05
lastUpdateDate: 2026-04-16
owner: User (AI-Assisted)
relatedSpecs:
  - SPEC-053
tags:
  - performance-optimization
  - caching
  - eleventy
  - javascript-performance
---

# SPEC-054: Collection Caching Strategy (Map-Based O(1) Lookups)

## 1. Goal

Eliminate the $O(n)$ search bottleneck in Eleventy templates when cross-referencing speakers, areas, and categories, reducing total build time by preventing hundreds of thousands of linear collection scans.

## 2. Background

By late 2025, Thought Foundry's build time had ballooned due to the site's rich cross-referencing model (6,000+ posts, each referencing multiple entities). In the initial optimization phase (Phase 3), we introduced "Helper Filters" to keep templates clean, but these used `collections.xxxList.find()`. In a build with 3,000+ posts and 9 taxonomy systems, this resulted in ~50,000 linear searches per build, adding significant overhead (~6-10 seconds of pure search time).

## 3. Design Decision

**Chosen approach**: Implement a pre-computed `Map` for each collection during the initialization phase. Helper filters now perform $O(1)$ lookups against these Maps instead of $O(n)$ scans against collection arrays.

**Rationale**: 
1. **Algorithmic Efficiency**: Replacing `Array.find()` ($O(n)$) with `Map.get()` ($O(1)$) provides a constant lookup time regardless of the number of tags or posts.
2. **Memory Trade-off**: While holding multiple Maps in memory increases the Node.js heap footprint by a few megabytes, the trade-off is worth the significant CPU time savings.
3. **Template Cleanliness**: Allows templates to use simple filters like `{{ speaker | getSpeakerSlug(collections) }}` without worrying about the underlying lookup complexity.

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| `Array.find()` (Standard) | Simple, native Eleventy | Performance degrades exponentially with content growth | ❌ Rejected |
| Template Local Caching | No global state | Redundant computation per template file | ❌ Rejected |
| **Global Map Caching** | Absolute fastest lookup speed; single source of truth | Slight increase in memory usage | ✅ Chosen |

## 4. Implementation Details

### Map Generation Pattern

During the collection setup in `.eleventy.js`, we generate lookup tables:

```javascript
// Example helper for Speaker lookup
const speakerSlugMap = new Map();
collections.speakerList.forEach(s => {
  speakerSlugMap.set(s.name.toLowerCase().trim(), s.slug);
  speakerSlugMap.set(s.uniqueKey, s.slug);
});
```

### O(1) Filter Implementation

```javascript
getSpeakerSlug(name, collections) {
  if (!name) return "";
  const key = name.toLowerCase().trim();
  return speakerSlugMap.get(key) || slugify(name);
}
```

## 5. Acceptance Criteria

- [x] All high-frequency entity lookups (Speaker, Guest, Category, Area) converted to Map-based caching.
- [x] Build time remains stable or decreases as content grows (preventing linear scaling of search costs).
- [x] Zero regressions in slug generation accuracy.

## 6. Status History

| Date | Status | Note |
|------|--------|------|
| 2025-12-05 | 📝 草案 (Draft) | Identified linear search bottleneck in Phase 3 telemetry |
| 2025-12-10 | ✅ 已完成 (Completed) | Map caching implemented across all 9 taxonomy systems |
| 2026-04-16 | ✅ 已完成 (Completed) | Formalized as SPEC-054 in architecture docs |

## 7. Related

- **Code**: `src/_11ty/collections/*.js`, `.eleventy.js`
- **Manual**: [OPTIMIZATION_WHITEBOARD](../../archive/2025-12-optimization-whiteboard.md)
