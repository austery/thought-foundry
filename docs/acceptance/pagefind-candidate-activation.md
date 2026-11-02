# Pagefind candidate activation

Status: implementation and acceptance pending. Owner authorized production activation, two remote runs, and rollback on failure on 2026-11-02.

## Decision

Use the accepted Pagefind1.5.2 ownership and 256-page batch patches as the default production CLI. Keep all content, URLs, Chinese segmentation and browser assets. Build from the checksum-pinned crate and locked Rust toolchain using the existing experiment builder. Cache only the built binaries and their checksums under an exact source-script/patch/toolchain identity. This cache is not search-index reuse. A cache miss builds and tests normally. Keep the existing8GiB swap mitigation.

## Acceptance

Before merge, render the complete production public directory from fixed content12320ea9c6698826e14ef7c576f9b22838b2f13b. Compare official, matched source baseline and candidate on that identical input, including non-body HTML. Require exact normalized index parity and existing query behavior. Run native CI with an official-binary comparison and two candidates under10GiB with no swap. Prior body-only experiment numbers are not full-production capacity proof.

After merge, complete two candidate production runs, pinning the second run to the first run's content SHA. Verify effective engine, binary checksum, full indexed-page count, cleanup, publication manifest, Pages completion and live search. Record actual outcomes here or in the PR receipts. No passing result is assumed.

## Rollback

Before publication, a candidate failure stops the workflow and preserves the last successful site. No automatic engine fallback hides the failure. For a failure after publication, dispatch deploy.yml with search_engine=official and content_ref set to the accepted content SHA. That bypasses candidate download/build/cache and runs the previously accepted official1.5.2 engine with swap. It rebuilds and republishes; rollback is not instant. If required, revert this activation PR through a normal task PR. The last official acceptance is deployment41435528547, code dcc9a182c4a2a4530852c8e0489fdac137f58b3e, content12320ea9c6698826e14ef7c576f9b22838b2f13b.

## Limits

The patch reduces overlapping allocations. Parsed pages and final maps still grow. We maintain a small source patch until an upstream release meets the same acceptance. Explicit cache keys prevent reuse across patch/build changes; checksum verification detects corrupted cached files. Search-input read failures refuse publication even when the pinned indexer returns zero.

## Observed local acceptance

The complete16,803HTML/11,811static-file input produced13,311search pages in both binaries. All13,311fragments and16,552stable payloads matched; the two filters and metadata matched under the existing documented ordering normalization. Six query snapshots matched exactly. Candidate completed under10GiB with zero swap and no OOM. Its sampled anonymous-plus-swap peak was8.53GiB (resident cgroup peak9.53GiB); official sampled18.59GiB including swap. Localamd64 emulation is not native-runner acceptance. The site type check and37native tests passed; workflow lint passed. [Raw local measurements](../experiments/pagefind-memory/evidence/full-public-local.json).
