# Native Hugo candidate

Hugo owns all page templates and Markdown rendering. TypeScript stages unchanged source metadata, resolves legacy taxonomy slugs and URLs, and restores exact output paths after Hugo renders internal numeric routes. The candidate never loads `.eleventy.js`, Nunjucks, or MarkdownIt. CSS, browser JavaScript, and full-text Pagefind retain their existing responsibilities.

## Build and preview

Use Hugo extended 0.165.0, Node 22.19.0, and pnpm 10.14.0 to reproduce the comparison environment. Install dependencies with `pnpm install --dir native --frozen-lockfile`, then run `pnpm build:hugo` from the repository root. The separate content checkout must be available at `src/content/`.

Each build prints a unique output directory under `.native-build/`; earlier outputs are retained. To build another prepared site source, run `pnpm --dir native build /absolute/site/root`. Preview the printed output using `pnpm --dir native preview /absolute/output/directory 8098`. This listens only on `127.0.0.1` and does not publish a hosted website.

`pnpm --dir native check` and `pnpm --dir native test` check types and exercise real Hugo output. `pnpm --dir native prepare-site SOURCE NEW_STAGING` and `pnpm --dir native restore STAGING OUTPUT` expose the measured stages. Staging must not already exist; restoration rejects duplicate or escaping routes before moving files.

The existing root `build` command and production deployment workflow remain Eleventy until a separately approved cutover. `build:hugo` is the independently runnable replacement candidate, not an implicit production switch.

## Compatibility rules

- Source Markdown remains unchanged. Layout/draft/exclusion data is interpreted as legacy data, rather than allowing Hugo defaults to change publication scope.
- Reverse-chronological article lists use date descending and exact URL ascending. Series retain ascending dates. Directory label ordering, repeated taxonomy membership, tag thresholds, and book-specific tag behavior remain compatible.
- Explicit Markdown `permalink` is rejected pending an implemented compatibility rule. Unknown standalone templates and layouts also fail instead of silently disappearing.
- Four missing-layout documents in the pinned corpus retain bare HTML output and remain outside Pagefind's existing indexing scope. Scalar metadata is not silently repaired.
- One legacy indentation document is rendered by Hugo's `RenderString` with narrowly scoped whitespace adaptation in `layouts/partials/body.html`. A content hash prevents the rule from silently affecting a changed document. No secondary Markdown renderer is retained.
- HTML whitespace at metadata/list boundaries is intentional: Pagefind can otherwise introduce extra punctuation even when normalized DOM text is identical.
- `compatibility-exceptions.json` records inspected text-hash pairs for the Unicode autolink display and two existing Pagefind punctuation differences. A URL match alone cannot waive changed content.

## Remote acceptance

`.github/workflows/validate-native-hugo.yml` builds three cold pairs, three warm pairs, and one added-article full-rebuild pair. Every required candidate stage is timed, including full Pagefind indexing. The workflow has read-only repository permissions, separate concurrency, and no production credentials or publication steps.

The benchmark reports strict historical comparison independently of native migration acceptance. Native acceptance rejects output/index coverage changes, link-multiset changes, unapproved ordering, structural metadata changes, and uninspected reading/index text differences. Original source fingerprints are checked even after failure. The full performance decision additionally requires all seven completed pairs and the approved median/consistency checks.

Preview archives use a non-hidden artifact directory, verify their entry points, and make missing uploads an error. An archive is not a hosted preview. Availability must be checked on the actual run before offering it to the user.

The legacy optional Chinese segmentation mode (`NODE_ENV=production` or `OPTIMIZE_SEARCH=true`) is rejected explicitly. The pinned deployment and comparison use unsegmented output.
