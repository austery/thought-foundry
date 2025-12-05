# Scaling Strategy Analysis for Thought Foundry

**Date**: December 4, 2025

## Current Situation

### Site Metrics

| Metric | Value |
|--------|-------|
| Content files | 3,065+ |
| Generated pages | 29,670 |
| Slug filter calls | 465,255 |
| Local build time | ~3 hours |
| GitHub Actions build | 12-15 minutes |
| Memory usage | ~4GB (crashes at heap limit) |

### Why Memory Crashes Happen

The site is not a typical blog — it's a **large digital archive** with:

- 3,000+ video transcript notes (YouTube IDs as filenames)
- 9 taxonomy systems (areas, categories, tags, speakers, people, companies, products, media-books, projects)
- Rich cross-referencing between entities

Each note file with 5 tags, 2 speakers, 3 people, 2 companies = **12+ entity lookups × slug computations**

3,000 files × 12 entities × multiple template renders = **hundreds of thousands of operations held in memory**

---

## Solution Options

### Option 1: Stay with Eleventy (Optimized)

**Best if**: You want to keep the current stack and workflow.

| Optimization | Effort | Impact |
|--------------|--------|--------|
| Pre-compute all slugs in collections (not templates) | Medium | 30-40% faster |
| Pagination for taxonomy pages (show 50 items per page) | Medium | 50% less memory |
| Use Eleventy's `--ignore-initial` for dev | Low | Faster dev startup |
| Cache `.eleventy-cache.json` in CI/CD | Low | 10-15% faster builds |
| Split into multiple Eleventy projects (notes vs blog) | High | Independent scaling |

**Pros**:
- No migration needed
- Familiar workflow
- Incremental improvements

**Cons**:
- Hitting architectural limits
- Will need ongoing optimization as content grows
- Dev experience remains slow

---

### Option 2: Hybrid Static + Dynamic

**Best if**: You want fast builds AND rich querying.

```
┌─────────────────────────────────────────────────┐
│  Static (Eleventy)     │  Dynamic (API/DB)      │
├─────────────────────────────────────────────────┤
│  • Homepage            │  • Search (Pagefind)   │
│  • About               │  • Tag/Speaker pages   │
│  • Recent 50 posts     │  • Entity lookups      │
│  • Individual posts    │  • Related content     │
└─────────────────────────────────────────────────┘
```

- Build only core pages statically (~500 pages instead of 29,670)
- Use client-side JavaScript + API for taxonomy browsing
- Database options: SQLite, Supabase, or JSON files served via CDN

**Pros**:
- Dramatically faster builds
- Scales to 100K+ content items
- Better search/filter experience

**Cons**:
- More complex architecture
- Requires JavaScript for some pages
- Hosting complexity (need API endpoint)

---

### Option 3: Migrate to a Different Framework

| Framework | Build Speed | Learning Curve | Migration Effort |
|-----------|-------------|----------------|------------------|
| **Hugo** | ⚡ Fastest (Go-based, 10K pages in seconds) | Medium (different templating) | High |
| **Astro** | 🚀 Fast (partial hydration, content collections) | Low (similar to Eleventy) | Medium |
| **Next.js (ISR)** | 🔄 On-demand (Incremental Static Regeneration) | Medium | High |
| **Contentlayer + Next.js** | 🔄 Incremental, type-safe | Medium-High | High |

#### Hugo
- Handles 10,000+ pages easily
- Written in Go, extremely fast
- Different templating language (Go templates)
- Large community, excellent docs

#### Astro
- Similar developer experience to Eleventy
- Content Collections feature designed for large sites
- Partial hydration (islands architecture)
- Growing ecosystem

#### Next.js with ISR
- Build pages on-demand when first requested
- Cache and serve statically afterward
- Good for sites with long-tail content
- More complex hosting (Vercel, or self-hosted)

---

### Option 4: Database-Backed CMS

**Best if**: Content grows beyond 10,000 items or you need real-time updates.

| CMS | Type | Best For |
|-----|------|----------|
| **Payload CMS** | Headless, self-hosted | Full control, React admin |
| **Strapi** | Headless, self-hosted | Popular, large community |
| **Directus** | Database-first | Any SQL backend |
| **Ghost** | Publishing platform | Purpose-built for blogs |
| **Sanity** | Hosted headless | Real-time collaboration |

Content lives in database → API serves pages → Frontend renders

**Pros**:
- Unlimited scalability
- Real-time updates
- Rich querying capabilities
- Admin UI for content management

**Cons**:
- Significant migration effort
- Ongoing hosting costs
- More infrastructure to maintain

---

## Recommendation

### Short-term (Now) ✅
1. ✅ Increase memory + incremental builds (already applied)
2. Pre-compute slugs in collections instead of templates
3. Paginate large taxonomy pages (50 items per page)

### Medium-term (1-3 months)
Two best options based on your priorities:

**If you value simplicity**: Migrate to **Hugo**
- Fastest static site generator
- Handles your scale easily
- One-time migration effort

**If you value flexibility**: Migrate to **Astro**
- Similar DX to Eleventy (Nunjucks → Astro components)
- Content Collections handle large sites better
- Can add interactivity where needed

### Long-term (If content keeps growing past 10K items)
1. Move to a headless CMS with database backend
2. Use static generation only for recent/popular content
3. Serve archive content dynamically

---

## Quick Comparison Matrix

| Criteria | Eleventy (Optimized) | Hugo | Astro | Headless CMS |
|----------|---------------------|------|-------|--------------|
| Migration effort | None | High | Medium | Very High |
| Build speed at 10K pages | Slow | ⚡ Instant | Fast | N/A |
| Memory usage | High | Low | Medium | N/A |
| Dev experience | Familiar | New | Similar | New |
| Future scalability | Limited | Excellent | Good | Unlimited |
| Hosting complexity | Low | Low | Low | Medium-High |

---

## Next Steps

1. Decide on timeline: Quick fixes now vs. migration later?
2. If migrating, prototype with Hugo or Astro on a subset of content
3. Consider content growth trajectory — will you add 1,000+ notes per year?

---

## Files to Review

Before making decisions, review these duplicate files that were flagged:
- `src/notes/5WsaAs_Xfho-duplicate.md`
- `src/notes/8L9g2KRaZRY-duplicate.md`
- `src/notes/Q00ABRDePls-duplicate.md`

These may be contributing to build issues and should be cleaned up regardless of which path you choose.
