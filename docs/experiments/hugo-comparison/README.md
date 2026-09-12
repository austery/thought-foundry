# Hugo Comparison Experiment

This directory records the complete-content experiment governed by [SPEC-056](../../architecture/specs/SPEC-056-hugo-remote-build-comparison.md). Production remains Eleventy; this branch does not authorize migration.

## Reproduce

The branch-only workflow is `.github/workflows/compare-builds.yml`. Its fixed inputs are in `benchmark/config.json`; the benchmark has its own frozen pnpm lockfile. Run `pnpm install --dir benchmark --frozen-lockfile` after preparing the pinned baseline checkout and dependencies as the workflow does. `pnpm --dir benchmark check` and `pnpm --dir benchmark test` validate the tools, including a real miniature primed Eleventy/Hugo/Pagefind pair.

The remote seven-job matrix uses Ubuntu 24.04, Node 22.19.0, pnpm 10.14.0 and Hugo 0.165.0. Each pair builds both engines sequentially; three cold and three warm pairs alternate engine order. Warm means an explicit full priming build, then reused engine pinyin caches with fresh outputs and a rebuilt Pagefind index. It does not mean incremental generation or a warmed dependency download cache. The added-article job primes the original complete corpus, then adds the same reproducible fixture to the shared temporary source and performs another full build with each engine.

Hugo preparation, adaptation, native rendering, legacy path restoration and full Pagefind all count toward candidate comparable time. The candidate uses the legacy Nunjucks templates and collection functions; one source document uses a measured MarkdownIt fallback. No baseline rendered HTML is consumed. The original content checkout is separately fingerprinted before and after every job.

Download only the seven report artifacts from one run/attempt into a common directory. From the repository root:

```sh
pnpm --dir benchmark run run summarize ../.benchmark/downloaded-run ../.benchmark/result.json
```

The summarizer rejects missing/duplicate rounds, failed stages, mixed run/code/content/tool identities, inconsistent timing totals and source verification failures. A recommendation also requires the warm median thresholds, positive paired savings, nonoverlapping ranges and strict compatibility. Inspect [differences.md](differences.md) even when the workflow succeeds.

The workflow packages one pair of previews as downloadable artifacts. These are not hosted websites. Acquisition, installation, priming, packaging, upload and validation overhead are recorded separately from comparable build time; no production publication time is measured.

## Hosting

Hugo can continue on GitHub Pages; Cloudflare is optional. The [official Hugo deployment guide](https://gohugo.io/host-and-deploy/host-on-github-pages/) and [GitHub custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) support building static output with Actions and deploying a Pages artifact. A future deployment comparison could evaluate artifact deployment against the existing output-repository Git push. It is a separate experiment and does not require a generator or domain change.
