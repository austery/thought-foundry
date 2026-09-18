# Search controls validation

Implementation: `cee4a5d43`, followed by failure recovery correction `ed7da2183`.
Baseline: `e90912f9f`. Content checkout: `b1ad569c14c893e7d1d98f99ae4458131ac710a3`.
Environment: Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0, Pagefind 1.5.2, local Chrome via Playwright.

## Behavior

The header form navigates to `/search/?q=...`. The search page submits a full-text query, optionally quotes it for exact phrases, and intersects it with the selected speaker filter. Query, phrase mode, and speaker persist in URL parameters. Article cards load ten at a time, display existing speaker/date metadata, and collapse additional matches. Content and ranking are unchanged.

When heading anchors are unavailable, a small adapter uses the pinned Pagefind version's `raw_content` token boundaries and match locations to display up to three additional non-overlapping windows. It does not invent heading anchors. Chinese zero-width delimiters and ordinary whitespace are tested separately. This adapter must be revalidated when Pagefind is upgraded. Additional passages appear only when the engine supplies additional match locations or sections.

## Evidence

- `pnpm check`: strict typing includes the browser controller and its imported passage adapter.
- `pnpm test`: 11 tests passed, including independent speaker filter values, Chinese snippets, escaped text, nearby matches, and missing data.
- Full corpus: 12,134 HTML pages; Pagefind indexed 10,337 pages.
- A second rendering and Pagefind index used the same staged content with baseline templates. All 10,337 indexed URLs, exact indexed text, metadata, and anchors match. Speaker filter data is the intended addition. All 143 speaker navigation pages match.
- Real browser: `家庭关系` returned 2,080 pages; phrase mode returned 78; phrase plus `一席YiXi` returned 6. Education returned 2,690. These counts describe this snapshot, not a permanent production count.
- Browser: URL state survives reload; every filtered card has the selected speaker; pagination displays 20 distinct article links; additional snippets expand; header Enter navigates to search; 390px viewport has no horizontal overflow; no page errors.
- Injected API failures: recovery, newest-query precedence, zero/empty results, literal metadata rendering, and mark-only excerpt rendering passed. These tests alone do not prove recovery from Pagefind's cached rejected requests.
- Real module failure: abort the initial `/pagefind/pagefind.js` request, restore network, click Reload Search. A second module request succeeds, preserving query and phrase mode, yielding 78 matches and ten cards.
- Independent reviewer also aborted a real `.pf_fragment` request and verified reload recovery to ten cards and 2,690 education matches.

Compact machine-readable results are in `evidence/search-controls/`. Local reproduction scripts and screenshots are in `.native-build/search-investigation/` (not required for production).

## Independent review

Standards review found one P2 in the initial commit: retrying cached rejected Pagefind promises in place could never recover. Spec review independently found the same problem at module loading. Both are fixed by a reload action that restores the URL state; each reviewer reran a real failing request and confirmed recovery. No remaining actionable findings were reported.

No merge or deployment is part of this validation. The content repository was not edited. This change does not claim indexing speed improvements or semantic retrieval.
