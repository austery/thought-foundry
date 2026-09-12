# Native Hugo validation

Implementation under measurement: `3f5b5eb22447249bfcb0a7c707a3610dd801c4a3`.

## Local evidence

- Original source fingerprint remained `36c5a16c2029b5ad8a67082850cc1cce277076257e9fe80669188f20319cf272` after the native builds; its Git checkout remained clean.
- Complete frozen corpus: 10,314 source documents; 12,101 HTML URLs; 10,307 actual indexed URLs. Full URL coverage and link multisets match the baseline.
- Every page passes title, heading/anchor, image, search-eligibility, code-block text, table-cell structure, and folding-summary comparisons. Candidate navigation is checked even when its order happens to equal the baseline. Series ascending order and exact-URL ties are checked independently.
- There are 472 accepted ordering changes and three hash-pinned presentation differences: one excluded Unicode autolink display and two Pagefind punctuation cases. The historical strict-parity gate remains false; the separately approved native gate passes. See `local-acceptance.json` and `native/compatibility-exceptions.json`.
- The final complete native build succeeded. Final actual fragment URL/text hashes were independently compared with the acceptance inputs and were identical. The exceptional indentation input is SHA-256 guarded and rendered only by Hugo.
- Native TypeScript check and 3 public-behavior tests passed. Benchmark TypeScript check and 17 tests passed, including complete miniature native/hybrid added-article pairs and compatibility failure probes.
- Independent review recalculated all seven remote pairs, checked matching identities and stage totals, and confirmed the distinction between paired percentages and the ratio of medians.
- Independent review found and resolved installation lifecycle execution, a missing CI compatibility gate, unvalidated series order, and unchanged-page tie-order checks. The reviewer reran 5 targeted acceptance/summary tests successfully.
- Browser evidence is in `browser-evidence.json`: Chinese positive and zero-result queries, theme reload persistence, ToC/folding, and 24 baseline/candidate page-width observations. Existing overflow is documented explicitly.

## Remote evidence

[Run 34701335727](https://github.com/austery/thought-foundry/actions/runs/34701335727), attempt 1, completed successfully: all seven jobs passed. The checked identity is recorded in `remote-summary.json`; raw measured stages, priming, source checks, runner identities, and timing breakdowns are retained in `remote-evidence.json`.

| Mode | Eleventy median (s) | Native Hugo median (s) | Difference between medians | Paired savings range |
| --- | ---: | ---: | ---: | ---: |
| Cold, 3 pairs | 608.51 | 240.98 | 367.53 s / 60.40% | 55.24–61.00% |
| Warm, 3 pairs | 714.10 | 254.72 | 459.38 s / 64.33% | 57.97–66.00% |
| Added article, 1 pair | 579.71 | 255.57 | 324.14 s / 55.91% | 55.91% |

The predeclared warm threshold (at least 120 seconds and 30% between engine medians) passed. Every matched pair was faster with native Hugo; cold and warm engine ranges do not overlap. Warm Eleventy ranged from 577.43 to 749.20 seconds and Hugo from 242.67 to 292.34 seconds. The median of the individual warm paired percentage savings is **59.06%**; it differs from the **64.33% ratio-of-medians** reported by the predeclared gate. These are different statistics, not interchangeable estimates.

All normal pairs preserved 12,101 HTML URLs and 10,307 actual indexed URLs. The added-article pair preserved 12,102 and 10,308 respectively, including the fixture in both actual indexes. Every native compatibility gate passed, every original-source fingerprint was unchanged, and every historical strict-parity flag remained false. Normal pairs had 472 permitted ordering changes; the added-input pair had 466. Each retained exactly the three inspected text-hash exceptions.

### Measurement scope and limitations

- Comparable time includes native source setup, metadata adaptation, Hugo rendering, exact-path restoration, and full Pagefind indexing; baseline time includes Eleventy and full Pagefind. No second body renderer is used by the candidate.
- Both engines run sequentially on the same runner for each pair, with order alternated. All runners exposed four CPUs and about 16 GiB RAM on Ubuntu 24.04, but hosted CPU models varied (AMD EPYC and Intel Xeon). Do not interpret differences between cold and warm groups as a controlled estimate of caching benefit.
- Pagefind remains the main candidate cost. Its warm stage median was 228.93 seconds; metadata adaptation was 13.11 seconds and Hugo rendering 9.27 seconds. Individual stage medians do not sum to the median of total build times.
- Measured stage peak RSS remained dominated by Pagefind: baseline 13.93–14.31 GiB, candidate 13.88–14.27 GiB across the seven measured pairs. This is not evidence of a material memory reduction, nor an aggregate sum of sequential stage peaks.
- Normal output size was 936,169,096 bytes for Eleventy and 892,925,119 for Hugo (25,186 files each). Added-input outputs were 936,176,535 and 892,931,515 bytes (25,188 files each).
- Setup plus tool tests took 80–88 seconds per job. Warm priming of both engines took 885.65–969.02 seconds; added-input priming took 889.93 seconds. Post-build validation/report work took 373.23–506.64 seconds, derived from the last measured-stage log timestamp to completion of the comparison step. Source verification after that step, packaging, and uploads are recorded separately. Job totals include other orchestration overhead and are not claimed as deployment savings.
- Cold-1 archive packaging took 34.02 seconds for baseline and 33.77 seconds for candidate. Both archives were actually downloaded; homepage, Pagefind, CSS, and article-script entry points were checked. Their sizes, SHA-256 checksums, and expiry are in `preview-verification.json`. Archives are not hosted previews or durable release backups.
- There were no failed remote jobs or retries in this run. The preserved historical experiment remains a separate checkpoint; none of its measurements are substituted for this native run.

To reproduce the aggregate decision from downloaded report directories:

```sh
pnpm --dir benchmark run run native-summarize /absolute/report-root /absolute/summary.json
```

The command rejects incomplete repetitions, failed stages, mixed experiment identities, different native lock hashes, and failed native gates. The report archive root must contain the seven report directories, without preview archives mixed into them.

## Publication boundary

Root `pnpm build` and the production deployment workflow continue using Eleventy. The native command is `pnpm build:hugo`; its isolated package installs no Eleventy, Nunjucks, or MarkdownIt renderer. The preserved comparison tooling still requires the old engines for evidence.

The follow-up evidence commit changes documentation only; runtime code remains identical to the measured implementation SHA.

The rollout proposal is [release-plan.md](release-plan.md). No hosted preview or production switch has occurred.
