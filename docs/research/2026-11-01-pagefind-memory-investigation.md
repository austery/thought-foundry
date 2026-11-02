# Pagefind indexing memory investigation

Date: 2026-11-01. Scope: investigate the repeated build cancellations. This note does not authorize deployment or a search architecture change.

## Conclusion

The leading explanation is that the full-text corpus has outgrown the memory margin of the existing all-in-memory index build. Pagefind 1.5.2 keeps several large corpus representations alive at once. The failure occurs while it builds those structures. This is a stronger explanation than a Hugo rendering failure, a Node heap limit, or a fixed Pagefind page-count limit. It remains an inference for the remote runner: its logs contain a shutdown signal, not kernel OOM evidence. [Pinned index lifecycle](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L133-L248), [failed run](https://github.com/austery/thought-foundry/actions/runs/41364163693).

Do not conclude that buying a larger runner is the only solution. First run an architecture-matched, non-publishing memory comparison. Test fewer Rayon workers and the new Pagefind release separately. If these do not create enough headroom, test more memory or swap. A streaming or partitioned index is a later design choice.

## Evidence and its limits

- The Hugo migration already measured Pagefind at about 14.0–14.3 GiB peak RSS on runners with about 15.6 GiB RAM. Search indexing consumed 84–85% of the warm candidate build time. The migration improved rendering; it did not remove the indexing bottleneck. That corpus had 10,307 indexed pages. [Recorded results](../experiments/hugo-comparison/results.md#where-the-time-goes), [one measurement](../experiments/hugo-comparison/evidence/remote/comparison-cold-1-34674766444-1/measured-hugo-pagefind.json), [measurement implementation using GNU time `%M`](https://github.com/austery/thought-foundry/blob/119818d41/benchmark/src/evidence.ts#L28-L49).
- The latest failed content commit is `ae50e2b7d476a3334bf0c6715d7c3e86448a8ce5`. Local pinned Hugo generated 16,788 HTML pages. Pagefind 1.5.2 completed on macOS and indexed 13,300 pages in 78.998 seconds. That is about 29% more indexed pages than the migration corpus. Page count alone cannot predict memory: article lengths, terms, positions and metadata also matter. Local evidence is retained in `.native-build/pagefind-debug-20261101/`.
- The 8 GiB and 14 GiB local Linux limits both produced exit 137, `oom_kill=1`, and Docker `OOMKilled=true`. These are real cgroup OOM events. They are not process RSS measurements. `memory.peak` includes memory charged to the group, including page cache. [Kernel cgroup memory documentation](https://docs.kernel.org/admin-guide/cgroup-v2.html#memory).
- The local test used an arm64 Pagefind musl binary on an arm64 Docker host, but an amd64 container image. That mixed architecture makes it an imperfect comparison with the remote amd64 runner. No successful higher-memory Linux control was run. The experiments therefore do not establish the unrestricted peak or an exact runner-size requirement.
- This repository is public. GitHub documents the standard public `ubuntu-24.04` runner as four CPUs and 16 GB RAM. The 8 GB private-repository tier must not be assumed here. Actual RAM, swap and cgroup limits still need to be captured in the affected job. [GitHub runner specifications](https://docs.github.com/en/actions/reference/runners/github-hosted-runners#standard-github-hosted-runners-for-public-repositories), [workflow](../../.github/workflows/deploy.yml#L19-L21).

The migration and current build both used Pagefind 1.5.2. There is no version-change evidence for a newly introduced Pagefind regression. Corpus growth and runner conditions changed; a version regression must not be inferred from the new failures alone. [Migration versions](../experiments/hugo-comparison/results.md), [pinned dependency](../../native/package.json).

## What the pinned source actually does

### Full-corpus retention and copying

`SearchState` retains `fossicked_pages`. Each page contains a text fragment, a map from terms to occurrence vectors, metadata occurrence vectors and other metadata. When indexing starts, `build_indexes` clones each eligible page into a language-specific vector while retaining the original vector. This creates overlapping corpus representations before the final index is built. It is not a streaming index. [State and collection](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L34-L113), [page fields](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L35-L64), [full-page clones](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L165-L180).

The index builder then processes pages in parallel. It constructs a separate term map and encoded fragment per page, collects all `PageProcessingResult` values, and only then merges them into the global term map. The original parsed pages remain owned by `SearchState`. These overlapping allocations are a concrete reason for a large peak at `Building search indexes`. This source analysis does not quantify which allocation dominates this corpus. [Parallel collection](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L143-L322), [global merge](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L324-L398).

The reported 265,802 indexed words are unique term keys: the code takes `word_map.len()`. Each term can have many page and occurrence records. Therefore that printed count is not the total token count and cannot be used to estimate memory as 265,802 small strings. [Statistics](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L462-L465), [occurrence storage](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L497-L513).

### Chinese segmentation and allocator differences

The extended build segments `zh`, `ja` and `th` content with Charabia in 1.5.2. It stores each resulting indexed occurrence with a position and weight. Long Chinese articles can therefore contribute many records even when they share a small vocabulary. Disabling extended mode is not a compatible memory fix: it changes segmentation and search behavior. No profile yet proves that the segmenter itself, rather than the retained occurrence maps, is the dominant allocator. [Segmentation](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L367-L390), [term recording](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L473-L539), [extended dependencies](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/Cargo.toml#L59-L63).

Linux musl 64-bit builds use jemalloc; macOS does not use that conditional allocator. The 1.5.2 changelog says jemalloc fixed allocator thrashing after the 1.5 parallelization change. This explains why macOS success is not a Linux peak-memory measurement. It does not prove a jemalloc leak or a new regression. [Allocator selection](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/main.rs#L1-L3), [release explanation](https://github.com/Pagefind/pagefind/blob/v1.5.2/CHANGELOG.md#L12-L16).

The maintainer has confirmed that the indexer stores the index in memory and runs as native Rust, not WebAssembly. Its scale depends on the corpus and available system memory. Increasing `NODE_OPTIONS=--max-old-space-size` does not enlarge the native indexer's memory budget. [Maintainer discussion](https://github.com/Pagefind/pagefind/issues/842), [Node wrapper invokes native binary](https://github.com/Pagefind/pagefind/blob/v1.5.2/wrappers/node/lib/runner/bin.cjs).

## New release: relevant, but not a proven memory fix

Pagefind 1.6.0 was published on 2026-11-01. It replaces Charabia with ICU4X for Chinese, Japanese and Thai segmentation. Its stated aim is better agreement with browser `Intl.Segmenter`, and a smaller binary. The pinned source confirms that replacement. It also confirms that full-page cloning and the collected per-page intermediate maps remain. Do not label 1.6.0 an OOM fix without an A/B measurement. It changes token boundaries and includes additional segmented-term handling, so Chinese relevance and excerpt positions need validation. [Release](https://github.com/Pagefind/pagefind/releases/tag/v1.6.0), [segmentation PR](https://github.com/Pagefind/pagefind/pull/1383), [new segmenter](https://github.com/Pagefind/pagefind/blob/v1.6.0/pagefind/src/fossick/mod.rs#L68-L90), [retained page cloning](https://github.com/Pagefind/pagefind/blob/v1.6.0/pagefind/src/lib.rs#L166-L181), [retained intermediate collection](https://github.com/Pagefind/pagefind/blob/v1.6.0/pagefind/src/index/mod.rs#L149-L326).

A recent runner-images issue reports the same shutdown message under memory pressure on the same image family. It has no maintainer-confirmed platform root cause. It supports collecting resource telemetry; it does not prove a runner-image regression in this repository. [Runner report #15202](https://github.com/actions/runner-images/issues/15202).

## Recommended experiments, in order

Keep the same prepared HTML, exact binary version, CPU allocation and memory limit for each comparison. Record binary architecture and hash, image digest, process RSS, cgroup anonymous/file memory, available RAM, swap, memory pressure and OOM counters. Capture periodic samples because a terminated runner may never execute a final diagnostic step.

| Experiment | Prediction and decision rule |
| --- | --- |
| Baseline 1.5.2 on matched Linux amd64 | Confirm whether memory approaches the runner budget before shutdown. Distinguish process RSS from whole-group memory. No publication. |
| Set `RAYON_NUM_THREADS=1`, then 2 | Rayon honors this environment variable. Fewer workers may reduce concurrent temporary allocation. They do not remove the full-corpus clones or accumulated results. Accept only after measured headroom and unchanged search behavior. |
| Test 1.6.0 with the same inputs and worker count | Determine whether the new segmenter changes peak memory. Validate Chinese queries, phrases, filters, result URLs, subresults and excerpts. Do not silently upgrade in the deployment workflow. |
| Increase memory or add bounded swap | Check whether the unchanged index completes with a safe measured margin. More memory is a mitigation, not proof that the indexer is efficient. The current tests do not justify a precise recommended size. |
| If still needed, prototype bounded batches or independent index partitions | Batching the intermediate maps targets a proven allocation path. Partitions can use Pagefind's documented browser-side `mergeIndex`, but require URL, filter, ranking and duplicate validation. This is a separate design decision. |

Rayon's default global pool uses `RAYON_NUM_THREADS` when set. The pinned Pagefind code uses the global parallel iterators and does not configure a separate pool. This is a source-supported experiment, not a documented Pagefind memory-limit option. [Rayon configuration](https://docs.rs/rayon/1.11.0/rayon/struct.ThreadPoolBuilder.html#method.num_threads), [Pagefind parsing](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L71-L94).

Pagefind can merge independently built search bundles in the browser. Building partitions sequentially could bound each build's live corpus. That is an inference from the API, not a tested solution for this site. A summary-only index would reduce search coverage and is not equivalent to preserving full-text search. [Multisite API](https://pagefind.app/docs/multisite/), [existing search tradeoffs](2026-09-13-static-search-options.md).

## Work completed and remaining uncertainty

This research read the pinned 1.5.2 and 1.6.0 source, official releases, the maintainer's scale discussion, the local experiment logs and the migration measurements. No implementation, new benchmark, CI dispatch, dependency update or deployment was performed during this research. The report identifies likely allocation mechanisms. A profile and matched Linux comparison are still needed to assign their exact share of the peak or establish the remote root cause.
