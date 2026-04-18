---
specId: SPEC-055
title: Minimalist Personal Blog (Inspired by yage.ai/share)
status: 📝 草案 (Draft)
priority: P1 - Core Feature
creationDate: 2026-04-17
lastUpdateDate: 2026-04-17
owner: Lei Peng (AI-Assisted)
relatedSpecs:
  - SPEC-050
  - ADR-001
tags:
  - personal-blog
  - static-site
  - minimalist
  - hugo
  - pagefind
  - content-separation
---

# SPEC-055: Minimalist Personal Blog (Inspired by yage.ai/share)

## 1. Goal

> Decouple personal writing from the research-heavy Thought Foundry repo by building a standalone, minimalist blog with sub-second builds and a clean reading experience, using yage.ai/share as the design reference point.

## 2. Background

### Current Pain Points

1. **Build Performance**: Thought Foundry (Eleventy) hosts 6,000+ articles — build times are unacceptable for a lightweight personal blog (see [ADR-001](../decisions/ADR-001-framework-scaling-strategy.md), conversation `793bb885`).
2. **Scope Creep**: Personal notes, diary entries, and casual tech writing are entangled with structured research content. Different audiences, different publishing cadence, different design needs.
3. **Over-Engineering**: Thought Foundry's design system (CSS variables, multi-component architecture, 364-line search CSS) is overkill for personal writing.

### Reference Implementation: yage.ai/share

[yage.ai/share](https://yage.ai/share/) is a sub-site of grapeot's blog that demonstrates an effective minimalist approach:

| Dimension | yage.ai/share Implementation |
|-----------|------------------------------|
| **SSG** | Pelican (Python), but the `/share/` sub-site is essentially flat static HTML |
| **Search** | Pure client-side JS text filtering — `input` event → iterate all `.card` elements → `indexOf` match on title + summary → toggle `display` |
| **Layout** | Featured hero card (full-width) + 2-column grid for remaining articles |
| **Card info density** | Date + Title + Summary excerpt + Tag pills — no click needed to triage |
| **Dark mode** | Toggle via icon, CSS custom properties |
| **i18n** | `?lang=zh` / `?lang=en` URL query param switching |
| **Tags** | Display-only pill badges on each card (not clickable filters) |
| **RSS** | Standard feed |
| **Source** | [github.com/grapeot/blog](https://github.com/grapeot/blog) (Pelican + Gumby Framework + jQuery) |

**Key insight**: The Share sub-site works because it is **deliberately constrained** — ~200 articles, no complex taxonomy, no full-text search index, no build-time processing beyond Pelican's default. This makes it fast, maintainable, and visually clean.

### Why Not Just Fork yage.ai?

- Pelican (Python) is not in our toolchain; we prefer Node/Go.  
- Gumby Framework + jQuery is dated — we want modern CSS (no framework) + no jQuery.  
- yage.ai's main-site search is server-side (Cloudflare Worker or API) — we want a pure static solution.  
- We want Pagefind as the search backstop once content exceeds 500 articles.

## 3. Design Decision

**Chosen approach**: Build a new standalone Hugo site with yage.ai/share-inspired design, pure CSS (no framework), and a tiered search strategy that starts with client-side filtering and graduates to Pagefind when needed.

**Rationale**: Hugo provides sub-second builds for thousands of pages (Go-based), has first-class Pagefind integration, and is the SSG we evaluated in conversation `793bb885` for exactly this use case.

| Alternative | Pros | Cons | Decision |
|-------------|------|------|----------|
| **Hugo + custom theme** | Sub-second builds, Go template maturity, Pagefind ecosystem | New template language (Go templates) | ✅ Chosen |
| **Eleventy (reuse Thought Foundry)** | Familiar, existing CSS/design system | Build perf problem persists, scope stays entangled | ❌ Rejected |
| **Pelican (clone yage.ai)** | Proven reference impl | Python-only, dated frontend deps, Jinja templates | ❌ Rejected |
| **Pure static HTML (no SSG)** | Zero build overhead | Unmanageable beyond 50 pages, no templating | ❌ Rejected |
| **Astro** | Modern, island architecture | Over-engineered for a text blog, unfamiliar | ❌ Rejected |

## 4. Implementation Phases

### Phase 1: Scaffold & Core Design — Target: TBD

- [ ] Initialize Hugo project with `hugo new site` in a new repo (e.g., `lei-blog` or `pengrx-blog`)
- [ ] Create custom theme skeleton: `layouts/`, `static/css/`, `static/js/`
- [ ] Implement core CSS design system (no frameworks):
  - [ ] CSS custom properties for color tokens (light/dark)
  - [ ] Typography scale using Google Fonts (Inter or similar)
  - [ ] Card component styles
  - [ ] Responsive grid: 1-col mobile → 2-col desktop
- [ ] Implement base layouts:
  - [ ] `baseof.html` — HTML skeleton, meta tags, dark mode toggle
  - [ ] `list.html` — Article index page with Featured hero card + grid
  - [ ] `single.html` — Article reading page (clean typography)
- [ ] Dark mode toggle (CSS custom properties + JS `data-theme` attribute)
- [ ] RSS feed template

**Acceptance**: `hugo serve` renders an index page with sample posts in < 100ms, dark mode toggles correctly, responsive on mobile.

### Phase 2: Search & Filtering — Target: TBD

- [ ] Implement client-side text filter (Phase 2a — yage.ai/share approach):
  - [ ] Search input inline above article grid
  - [ ] JS: `input` event → iterate article cards → match title + summary text → toggle visibility
  - [ ] Debounce input (150ms)
  - [ ] Display match count
- [ ] Integrate Pagefind (Phase 2b — for when content > 500 articles):
  - [ ] Add Pagefind to build pipeline (`npx pagefind --site public`)
  - [ ] Create `/search/` dedicated page with Pagefind UI
  - [ ] Style Pagefind UI to match blog design tokens
- [ ] Both search modes coexist: inline filter on index, Pagefind on `/search/`

**Acceptance**: Inline filter works with < 16ms per keystroke for 200 articles. Pagefind search returns results for Chinese and English queries.

### Phase 3: Content & i18n — Target: TBD

- [ ] Define content archetypes (`archetypes/default.md`):
  - [ ] Frontmatter: `title`, `date`, `summary`, `tags`, `featured`, `lang`
  - [ ] Bilingual support: `?lang=zh` / `?lang=en` query param OR separate `/en/` path prefix
- [ ] Tag pill display on cards (display-only, not clickable filter initially)
- [ ] Featured article support: frontmatter `featured: true` → renders as hero card
- [ ] Migrate initial seed content (10-20 articles) from personal notes

**Acceptance**: Index page shows Chinese articles by default, with a language toggle switching to English versions. Featured articles render as full-width hero cards.

### Phase 4: Deployment & CI — Target: TBD

- [ ] GitHub Actions CI: `hugo build` → deploy to Cloudflare Pages (or Vercel/Netlify)
- [ ] Custom domain setup
- [ ] Lighthouse audit: Performance 95+, Accessibility 95+
- [ ] Canonical URLs and Open Graph meta tags
- [ ] Sitemap generation

**Acceptance**: Push to `main` triggers auto-deploy. Full build + deploy < 30s for 200 articles.

### Phase 5: Polish & Optional Enhancements — Target: TBD

- [ ] Disqus or Giscus comments integration
- [ ] Reading time estimate on cards
- [ ] Tag filtering UI (clickable tag pills → filter cards)
- [ ] Table of Contents on `single.html` for long articles
- [ ] Analytics (Umami / Plausible / GA4)
- [ ] Social sharing meta (Twitter card, OG image)

## 5. Acceptance Criteria

- [ ] New repo with Hugo, fully independent from Thought Foundry
- [ ] `hugo build` completes in < 1 second for 200 articles
- [ ] Index page renders Featured hero + 2-column grid, visually comparable to yage.ai/share quality
- [ ] Inline search filters articles in real-time with < 16ms latency per keystroke
- [ ] Dark mode toggle works, persists preference in localStorage
- [ ] Responsive: mobile (1-col) / tablet (2-col) / desktop (2-col with max-width)
- [ ] RSS feed validates
- [ ] Pagefind search available on dedicated `/search/` page
- [ ] Chinese + English content supported with language toggle

## 6. Status History

| Date | Status | Note |
|------|--------|------|
| 2026-04-17 | 📝 草案 (Draft) | Initial draft based on yage.ai/share analysis |

## 7. Related

- **Analysis**: [yage.ai analysis artifact](../../../.gemini/antigravity/brain/d3c37078-8d87-48b4-b737-0835dd4ff5e8/yage_ai_analysis.md)
- **Specs**: [SPEC-050: Content Repo Separation](./SPEC-050-content-repo-separation.md)
- **ADRs**: [ADR-001: Framework Scaling Strategy](../decisions/ADR-001-framework-scaling-strategy.md)
- **Reference**: [github.com/grapeot/blog](https://github.com/grapeot/blog) (yage.ai source)
- **Conversation**: `793bb885` — Hugo migration evaluation

---

## Appendix A: yage.ai/share Design Reference

### Visual Structure

```
┌─────────────────────────────────────────────┐
│  Share                                      │
│  调研报告与技术文章 · 100% AI 生成             │
│  ← Blog   [中] [EN]  [RSS]           🌙    │
├─────────────────────────────────────────────┤
│  🔍 搜索文章...                              │
├─────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────┐ │
│ │  FEATURED                               │ │
│ │  2026-04-17                             │ │
│ │  ## Article Title (Hero)                │ │
│ │  Summary excerpt paragraph...           │ │
│ │  [tag1] [tag2]                          │ │
│ └─────────────────────────────────────────┘ │
│ ┌──────────────────┐ ┌──────────────────┐   │
│ │ 2026-04-17       │ │ 2026-04-16       │   │
│ │ ## Title         │ │ ## Title         │   │
│ │ Summary...       │ │ Summary...       │   │
│ │ [tag1] [tag2]    │ │ [tag1] [tag2]    │   │
│ └──────────────────┘ └──────────────────┘   │
│ ┌──────────────────┐ ┌──────────────────┐   │
│ │ ...              │ │ ...              │   │
│ └──────────────────┘ └──────────────────┘   │
└─────────────────────────────────────────────┘
```

### Color Palette (Light Mode, extracted from yage.ai/share)

| Element | Value |
|---------|-------|
| Page background | `#f0f0f0` (warm grey) |
| Card background | `#ffffff` |
| Card border-radius | `12px` |
| Card shadow | `0 1px 3px rgba(0,0,0,0.08)` |
| Date text | `#888` muted |
| Title text | `#1a1a1a` |
| Summary text | `#444` |
| Tag pill bg | `#f5f5f5` |
| Tag pill border | `1px solid #e0e0e0` |
| Tag pill text | `#666` |
| Featured badge | `FEATURED` — uppercase, small, muted |

### Search JS Pseudocode

```javascript
const input = document.getElementById('search-input');
const cards = document.querySelectorAll('.article-card');

input.addEventListener('input', debounce(() => {
  const query = input.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const summary = card.querySelector('.card-summary').textContent.toLowerCase();
    const tags = card.dataset.tags?.toLowerCase() || '';
    const match = !query || title.includes(query) || summary.includes(query) || tags.includes(query);
    card.style.display = match ? '' : 'none';
  });
}, 150));
```
