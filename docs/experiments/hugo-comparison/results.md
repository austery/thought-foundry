# Complete-Content Hugo Comparison Results

Date: 2026-09-12. Experiment completed; production migration gate not met.

Hugo plus the compatibility adapter reduces the warm median comparable build from **612.07 seconds to 266.64 seconds**, saving **345.43 seconds (56.44%)**. Every paired measurement is faster and the observed engine ranges do not overlap. The performance threshold passes. Navigation order and two smaller rendering/index differences remain, so the experiment does **not** recommend a production cutover yet.

## Result

Comparable build means all required candidate preparation, adaptation, generation, path restoration and full Pagefind indexing. Shared setup, evidence inspection, priming and publication are not included.

| Scenario | Samples | Eleventy median | Hugo + adapter median | Median difference | Observed ranges: Eleventy / Hugo |
| --- | ---: | ---: | ---: | ---: | --- |
| Cold engine cache | 3 pairs | 679.96 s | 230.45 s | 449.51 s (66.11%) | 604.44–749.00 / 229.64–240.15 s |
| Warm engine cache | 3 pairs | 612.07 s | 266.64 s | 345.43 s (56.44%) | 571.43–640.28 / 254.10–268.70 s |
| One added article, full rebuild | 1 pair | 721.93 s | 284.62 s | 437.31 s (60.57%) | Single observation; not an incremental benchmark |

| Pair | Order | Eleventy | Hugo + adapter | Paired saving |
| --- | --- | ---: | ---: | ---: |
| cold-1 | Eleventy, Hugo | 679.96 s | 230.45 s | 66.11% |
| cold-2 | Hugo, Eleventy | 749.00 s | 229.64 s | 69.34% |
| cold-3 | Eleventy, Hugo | 604.44 s | 240.15 s | 60.27% |
| warm-1 | Hugo, Eleventy | 640.28 s | 266.64 s | 58.36% |
| warm-2 | Eleventy, Hugo | 571.43 s | 268.70 s | 52.98% |
| warm-3 | Hugo, Eleventy | 612.07 s | 254.10 s | 58.49% |
| added-1 | Eleventy, Hugo | 721.93 s | 284.62 s | 60.57% |

The difference of medians is not the median paired difference. Both the individual pairs and the specified median gate are retained in [machine-readable results](evidence/remote-summary.json).

## Where the time goes

| Stage | Cold median | Warm median |
| --- | ---: | ---: |
| Eleventy generation | 487.61 s | 379.47 s |
| Eleventy output Pagefind | 195.99 s | 219.12 s |
| Candidate preparation | 0.86 s | 0.71 s |
| Candidate adapter | 30.22 s | 29.30 s |
| Native Hugo generation | 6.75 s | 6.64 s |
| Exact legacy path restoration | 3.01 s | 2.91 s |
| Candidate output Pagefind | 190.77 s | 227.32 s |

Stage medians need not add to the median total. The warm candidate's required preparation and page-generation stages take about 40 seconds per run, not merely the six-second native Hugo stage. Pagefind accounts for about 84–85% of warm candidate comparable time and is the dominant remaining cost. The higher warm Pagefind times demonstrate that warm engine caches do not guarantee a faster search index; no cause for this variation is established by these samples.

Peak measured Pagefind memory across the seven measured pairs is approximately 14.0–14.3 GiB on runners with about 15.6 GiB RAM. Native Hugo peaks at approximately 3.4–4.1 GiB and Eleventy at 3.4–3.5 GiB. Peak RSS is measured per command via GNU time, not a whole-machine memory profile.

## Compatibility and content repository

All six unchanged-corpus pairs produce **12,101 HTML pages and 10,307 actual indexed pages** with exactly matching output and indexed URL sets. All titles, headings, images and normalized indexed DOM text match. Full output including the index is 936,169,096 bytes for Eleventy and 936,181,764 for the candidate. The added-article pair produces **12,102 HTML pages and 10,308 indexed pages** on both engines; the fixture is confirmed in both actual indexes.

The separate content repository remains the source of truth. Every remote job verifies its original fingerprint unchanged. No Markdown documents, content branches or content commits were modified. The test fixture exists only in staged input. Candidate adaptation preserves the legacy frontmatter contract, casing, draft/exclude behavior and URL paths; no documentation migration is needed for the experiment.

The candidate is explicitly hybrid: existing Nunjucks templates and collection functions run in a typed Node adapter; Hugo renders 10,313 of 10,314 Markdown documents. One document with legacy indented-code semantics uses pinned MarkdownIt in the measured adapter. Liquid preprocessing and all routing work are included. No fresh Eleventy output is read by the candidate.

Remaining compatibility differences:

- **522–524 navigation pages differ in link order**, depending on the baseline run. Full remote link-multiset audits show zero per-page membership changes. Ordering still fails the approved contract.
- **One excluded article displays percent-encoded Unicode autolink text** instead of decoded Chinese characters. Its link targets match.
- **Two Pagefind fragments differ by punctuation**, despite matching normalized indexed DOM text. They remain explicit index differences.

The [difference ledger](differences.md) records paths, initial parser fixes, original missing-layout/scalar-array defects, complete structural audits and browser evidence. Local full-page audits found zero normalized code-block, table or details-text differences. Browser checks cover phone/tablet/desktop, books, long articles, folding, persistent theme, ToC and real Chinese search/zero-result UI. Existing overflow on two representative pages is preserved, not corrected or hidden.

## Reproducibility and overhead

- [Seven-pair remote run](https://github.com/austery/thought-foundry/actions/runs/34674766444), attempt 1: **all seven jobs succeeded**.
- Candidate code: `80b1b82ece280c20c968435586219fb85ed1644b`.
- Baseline site: `8acbf0d1ef8652fb5153341e6a47f9f73204a4b4`.
- Content: `f8a8939248be4c1d4af6072381c06a4a79d00223`.
- Original source fingerprint: `36c5a16c2029b5ad8a67082850cc1cce277076257e9fe80669188f20319cf272`.
- Eleventy 3.1.5, Pagefind 1.5.2, Hugo 0.165.0 extended, Node 22.19.0, pnpm 10.14.0. Both lock hashes and the complete Hugo build string are retained in `evidence/remote-summary.json`.
- Runner image `ubuntu24`, `20260907.300.1`, four vCPUs. CPUs vary across jobs: AMD EPYC 9V74/7763 and Intel Xeon Platinum 8370C. Each pair uses the same runner instance for both engines; cross-pair hardware is not identical.

The cold-1 preview packaging measurements are retained separately. Content checkout takes 27–32 seconds, source preparation 9–11 seconds, and the dependency-install step 2–3 seconds across the matrix. The real miniature validation step takes 13 seconds per job. Full post-build inventory/fingerprint/comparison work contributes roughly 261–308 seconds per pair, measured as the paired step duration minus build and priming measurements; this remainder also includes orchestration overhead. These verification costs are not production build costs.

The two preview packaging steps take 34 and 35 seconds at GitHub step granularity. Report upload steps take about two seconds; the preview upload step reports less than one second at API timestamp granularity, not a reliable zero-cost transfer measurement. Raw command measurements and GitHub step timestamps remain separate in [overhead evidence](evidence/overhead.json).

Warm priming totals for both engines are 929.99, 835.45 and 826.45 seconds for rounds 1–3; the added-article job primes for 1,008.31 seconds. Priming is disclosed and excluded from measured warm/added totals. Both engines use independent pinyin caches, fresh output directories and rebuilt search indexes. No production cache key is read or written.

All seven remote pairs succeeded on their first matrix attempt. The earlier [ticket-01 baseline](https://github.com/austery/thought-foundry/actions/runs/34672325021) also succeeded: Eleventy 440.86 seconds and Pagefind 194.40 seconds. It is retained as baseline verification and is not mixed into the paired statistics. Local development failures include the colon-URL Hugo panic, an incomplete staging race in a manual run, and the HTML fallback security configuration rejection; their logs are retained in `evidence/local-failed-attempts/`. Diagnostic bisection/fixture runs and earlier candidate development timings are excluded from all remote performance claims.

Compact timing, identity, fallback, comparison and source-verification evidence is committed under `evidence/remote/`. Each `artifact-files.json` records hashes and sizes of every downloaded file, including the larger URL/hash/link inventories. The complete reports remain in local `.benchmark/remote-comparison/` and the remote report artifacts (14-day retention); downloadable previews have three-day retention. The compact committed evidence outlives Actions artifact expiry.

## Decision and next scope

**Performance: pass. Compatibility: not yet passed. Experiment: complete. Production: unchanged.**

The measured reduction justifies a focused follow-up to preserve navigation ordering and resolve the Unicode/index differences, followed by a cutover and rollback plan. This report does not accept changed behavior on the user's behalf and does not merge or deploy the experiment branch.

GitHub Pages can continue hosting Hugo output; Cloudflare is optional, as documented in the [official Hugo GitHub Pages guide](https://gohugo.io/host-and-deploy/host-on-github-pages/) and [GitHub custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). There is no need to change the content repository or domain to adopt Hugo. A separate deployment experiment could compare Pages artifact deployment with the current generated-output Git push. This experiment measured neither production publication nor Cloudflare deployment, so the 56.44% saving is a comparable-build result, not a promised end-to-end publishing reduction.
