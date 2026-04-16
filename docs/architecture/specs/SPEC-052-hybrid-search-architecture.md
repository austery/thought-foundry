---
specId: SPEC-052
title: Hybrid Search Architecture with Pagefind Metadata Indexing and Postgres Vector API
status: 📝 草案 (Draft)
priority: P1 - Core Feature
creationDate: 2026-04-16
lastUpdateDate: 2026-04-16
owner: User (AI-Assisted)
relatedSpecs:
  - SPEC-051
tags:
  - search-architecture
  - pagefind
  - vector-search
  - pgvector
  - api-design
---

# SPEC-052: Hybrid Search Architecture with Pagefind Metadata Indexing and Postgres Vector API

## 1. Goal

Implement a degraded Pagefind indexing strategy focusing strictly on high-density metadata (Title, TOC, Tags, Summary) to eliminate full-text noise, while introducing a toggle to securely delegate complex semantic queries to an external PostgreSQL/pgvector Insight Engine API.

## 2. Background

Currently, adjusting Pagefind to index the full 6000+ article corpus using native `Intl.Segmenter` Chinese boundary injections leads to severe cross-paragraph "False AND" hits due to lexical search lacking Proximity context. Searching a compound technical entity like "向量数据库" (Vector Database) summons every note mentioning "向量" and "数据库" disjointly. 

Rather than adopting expensive SaaS platforms (e.g., Algolia) that drastically increase TCO, this SPEC leverages the inherent speed of WASM indexes for precise, explicit metadata lookup while bridging the gap to the planned overarching Insight Engine for pure conceptual retrieval.

## 3. Design Decision

**Chosen approach**: A Hybrid Architecture downgrading Pagefind to metadata-only indexes and exposing a semantic search mode powered by the external Insight Engine via a REST API.

**Rationale**: 
1. **Pagefind Meta-Only**: By removing `data-pagefind-body` from the raw Markdown `<article>` and applying Pagefind attributes rigidly to `<h1>` - `<h6>` tags, `.tag-list`, and YAML `description/summary` fields, we ensure that if a query matches, the document strongly correlates rather than merely "mentioning" it in passing.
2. **Deep Semantic Engine**: Repurposing the heavy PgVector backend currently under construction gives the blog a natural and free external knowledge API, keeping static TCO 0, yet yielding robust "knowledge-level" answers.

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| Pagefind N-Gram (Status Quo) | Zero backend, works offline | Unusable noise ratio for 6,000+ notes | ❌ Rejected |
| Algolia SaaS | Excellent proximity & typography handling | Highly steep scaling costs | ❌ Rejected |
| **Hybrid (Pagefind Meta + API)** | Eliminates false matches; Zero TCO static host; highly extensible semantic depth | Requires API anti-abuse measures & CORS | ✅ Chosen |

## 4. Implementation Phases

### Phase 1: Downgrade Pagefind to "Meta-Only Indexing" — Target: TBD

- [ ] Modify `src/_includes/layouts/post.njk` and `note.njk`.
- [ ] Remove `data-pagefind-body` from the overarching `<article>` wrapper.
- [ ] Apply `data-pagefind-weight="10"` and `data-pagefind-meta` to the Title (`<h1>`), TOC headings, `tags`, and `summary/description` fields.
- [ ] Rebuild and test. Observe the size of the Pagefind index drop significantly (currently 128MB+), decreasing output bandwidth.

### Phase 2: Knowledge API Gateway Design — Target: TBD

To allow a purely static frontend (11ty) to securely interact with the Insight Engine PostgreSQL backend, the following constraints must be implemented:
- [ ] **Infrastructure**: A lightweight Go or Node.js serverless proxy (e.g., Cloudflare Worker) deployed to mask the direct DB query.
- [ ] **CORS**: Enforce strictly `https://austery.github.io` in the API's Access-Control-Allow-Origin headers.
- [ ] **Rate Limiting**: IP-based rate limiting (e.g., 5-10 requests per minute) managed at the proxy/edge layer (Cloudflare WAF).
- [ ] **Challenge/CAPTCHA**: Integrate Cloudflare Turnstile (invisible) on the frontend for the Semantic Search toggle to block bot scraping against the costly GPU embedding endpoint.

### Phase 3: Frontend "Deep Search" Integration — Target: TBD

- [ ] Add a visual Toggle/Switch to the `/search/` page: "⚡ Deep Semantic Search" (深度知识检索).
- [ ] When activated, overriding the Pagefind UI input interceptor to instead perform an async `fetch()` to `https://api.domain.tld/v1/search/knowledge`.
- [ ] Render the JSON vector results (and optional RAG summary) distinctly below the search bar.

## 5. Acceptance Criteria

- [ ] Pagefind index size reduces by > 50%.
- [ ] A search for "向量数据库" on Pagefind yields < 10 highly relevant results (only those with "向量数据库" in title, tags, or headers), eliminating the 146+ noisy matches from paragraph text.
- [ ] The Semantic Search toggle successfully triggers an external API call without CORS violations on production.
- [ ] Edge-layer WAF strictly drops >10 req/min per IP to protect the Postgres vector database.

## 6. Status History

| Date | Status | Note |
|------|--------|------|
| 2026-04-16 | 📝 草案 (Draft) | Initial draft following Intl.Segmenter limitations analysis |

## 7. Related

- **Specs**: [2026-04-thought-foundry-MOC](../../../../research-notes/03-project/2026-04-thought-foundry-MOC.md)
- **Previous Specs**: [SPEC-051](./SPEC-051-remove-entity-static-pages.md)
