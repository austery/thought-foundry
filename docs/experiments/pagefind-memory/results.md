# Pagefind memory and partition experiment results

Date: 2026-11-02. This is an experimental candidate, not a production engine change. Production continues using the accepted Pagefind 1.5.2 swap mitigation.

## Conclusion

Keep one global search index. Combining a CLI-only ownership change with bounded batches of 256 page intermediates completed the fixed 13,300-page corpus without swap. Its first synchronized anonymous-memory peak was 8.44 GiB, versus 18.81 GiB including swap for the same-toolchain baseline: about 55 percent less in this local comparison. The candidate also completed under a 10 GiB hard container limit with swap disabled. These are sampled local observations, not a guarantee for future content.

Do not deploy the four-index browser merge as a transparent memory repair. It passed exact article coverage but changed the matching URL set in 71 of 350 tested queries. The difference exceeds ranking. Pagefind's query expansion and missing-term behavior depend on the vocabulary of each index. Keeping whole articles together did not preserve every query's meaning.

## Fixed corpus and measurement

The site commit is `5bfab2ddfdc8e5612ae901d6e1da2267b746d59f`; content is `ae50e2b7d476a3334bf0c6715d7c3e86448a8ce5`. Hugo 0.165.0 rendered the same historical failed-release snapshot. The experiment selects 13,300 explicit `data-pagefind-body` pages at their original relative paths. Nested URL-hash samples contain 3,286 and 6,601 pages. [Distributions](evidence/corpus-distribution.json)

All native binaries and containers are Linux amd64; the local host emulates amd64 on arm64. Each indexing container has a four-CPU quota. Record process RSS, cgroup resident memory and simultaneously sampled anonymous memory plus swap separately. Do not add independently sampled process and system peaks. [Machine-readable observations and identities](evidence/local-memory.json)

| Run | Pages | Sampled anonymous plus swap peak | Swap used | Outcome |
| --- | ---: | ---: | --- | --- |
| Official 25% sample | 3,286 | 5.45 GiB | No | Passed |
| Official 50% sample | 6,601 | 10.47 GiB | No | Passed |
| Official full, isolated | 13,300 | 18.34 GiB | Yes | Passed |
| Source-built full baseline | 13,300 | 18.81 GiB | Yes | Passed |
| CLI ownership transfer | 13,300 | 12.57 GiB | No | Passed under 14 GiB |
| Ownership plus bounded intermediates | 13,300 | 8.44 GiB | No | Passed; cgroup resident peak 9.32 GiB |

An earlier full run exited 137 while the compiler was active. Its cgroup recorded an OOM kill without a resident-limit event; it is not a clean sizing baseline. The isolated rerun passed. The two smaller samples also overlapped compilation; they did not reach their memory caps, but their elapsed times are not uncontended measurements. Raw evidence is retained rather than hiding these trials.

The published crate, Cargo.lock, toolchain and embedded browser assets are identical for the source baseline and both prototypes. The crate resolves Charabia 0.9.9 through its supplied lockfile. This is distinct from merely reading its semver requirement. The standalone crate's default release profile differs from upstream's workspace profile; production extrapolation therefore depends on output parity and native-runner validation, not identical compiler flags.

## First native runner observation

Run [41424754305](https://github.com/austery/thought-foundry/actions/runs/41424754305), head `80d46f0ed268fe7e52e72331276dcc9438942d88`, completed the full baseline and both candidate builds. Baseline sampled anonymous plus swap peaked at 17.47 GiB. Candidate peaks were 7.57 and 7.55 GiB, with no swap under the 10 GiB hard limit. Both full output comparisons passed. The overall workflow then failed because the query harness attempted to write a Node module marker into a root-owned output directory. The next revision removes that unnecessary write; complete-workflow acceptance remains separate from these successful measurements. [Native substep evidence](evidence/native-first-probe.json)

## Why the second patch helps

The first patch moves parsed pages into language groups for the one-shot CLI instead of retaining an original and a full clone. It preserves the service's retained state and captures UI-warning flags before consumption. [Ownership patch](pagefind-1.5.2-cli-consume.patch)

The second patch keeps global metadata, page numbers, term/filter maps and fragment collision handling. It transforms at most 256 pages into per-page intermediate maps at once, then merges that batch before processing the next batch. It preserves the ordered parallel collection and sequential merge order. [Bounded-intermediate patch](pagefind-1.5.2-bounded-intermediates.patch)

This is not an absolute memory cap. Parsed pages, final postings and fragments still grow with the full corpus. A single very large page can also dominate one batch. A constant-factor improvement must be reassessed against measured content growth.

## Compatibility and failure paths

- All 13,300 decompressed article fragments and canonical URLs match the baseline. Term-index chunks and browser code match exactly; packaged WASM has the same decompressed bytes. The official/source comparison differs in gzip-header timestamps.
- Pagefind 1.5.2 explicitly serializes filters from hash maps and has a TODO for stable filter hashes. Compare the decoded filter contents and verified metadata references after normalizing only filter order/hash references. Do not claim every output filename is deterministic. [Comparator](../../../native/experiments/pagefind-memory/compare.ts)
- Six existing Chinese, phrase, source-filter and zero-result queries, including full filter maps and result excerpts, match the source baseline.
- Service checks cover repeated output, write-then-add, replacement of an existing URL and whole-index deletion. Extra cases cross 255/256/257 pages and introduce metadata and a filter at the boundary. This does not prove durable per-document deletion or cross-process incremental indexing.
- CLI fixtures cover custom bodies, exclusions, missing HTML/language, multiple languages, ordinary-body fallback, the legacy output path, the Default UI warning and an all-excluded nonzero-exit case. Multilingual JSON object order is compared structurally.
- The bounded prototype passed 34 upstream unit tests and one documentation test. The site's type check and all 37 existing native tests also passed locally.

[Official/source parity](evidence/official-source-comparison.json), [ownership parity](evidence/source-patched-comparison.json), [bounded parity](evidence/source-batched-comparison.json).

## Four partitions failed behavior preservation

All four builds passed under 8 GiB without swap. Their 13,300 fragments formed an exact, disjoint union of the baseline. Global source counts also matched. However:

- 71/350 query URL sets differed; six more queries differed only in response facet counts.
- All 99 tested phrase query sets matched. All 32 source-only sets matched, but only two preserved the same first ten results in order.
- Fresh-process counterexamples: `卡什` returned 2,675 versus 3,993; `安大略` returned nine versus three; `AI Sol` returned 94 versus 2,283. Actual result URLs and bodies were checked to rule out fragment-ID mapping errors.
- The same merged query could differ after a long query sequence (`AI Sol`: 2,820), so cache state is part of the reproduction context.
- Six cold query-only asset measurements were 2.15–4.34 times the baseline. Including eager initialization/filter assets gives 1.43–1.75 times. These exclude JavaScript module loading, HTTP headers and result-body downloads; they are not total-page or mobile-memory measurements.

[Full query evidence](evidence/merged-search.json). The fixed upstream search implementation uses per-loaded-vocabulary forward-prefix and reverse-prefix fallback and can omit a term with no expansion. This explains why a smaller vocabulary can change matching rather than merely reorder scores. [Expansion](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web/src/search.rs#L811-L840), [intersection behavior](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web/src/search.rs#L457-L513). This is also a reason not to treat immutable base-plus-delta bundles as a drop-in incremental solution.

## Incremental indexing and repeated work

The current publisher launches a fresh native indexer every time. It does not load a writable search database from the preceding release. Database-style incremental indexing remains possible in principle, but Pagefind's current output is a query bundle, not a persisted build-state store. Updating only a new article's fragment would not update term postings, filters, deletions and ranking statistics correctly. [Current invocation](../../../.github/workflows/deploy.yml#L69), [retained service state](https://pagefind.app/docs/node-api/#indexdeleteindex)

The cheapest independent optimization to investigate next is **whole-bundle reuse when the complete searchable input is unchanged**. Digest ordered eligible paths, actual rendered bytes, extraction settings, binary/tool identities and metadata. Restore only a verified accepted bundle for that exact identity. A miss rebuilds normally. This preserves matching and ranking but does not reduce a changed build's peak.

Source commits alone are an imperfect cache key. A fixed historical 300-commit sample contains subtitle-only changes that staging excludes. It also contains edits. Across 17 active UTC-hour buckets, direct eligible-page changes touched an average 2.35 of four hash shards, so shard caching would not mean rebuilding just one quarter each hour. Shared metadata changes could invalidate more. This is a source-path estimate, not measured production cache hits. [Churn sample](evidence/content-churn-sample.json)

English originals occupy about 27 percent of normalized DOM body-text bytes in the fixed corpus. That is neither a tokenizer allocation measurement nor permission to remove them. Preserve English retrieval unless the owner makes a separate product decision. [Language footprint](evidence/original-language-footprint.json)

## Decision gates

The non-publishing workflow builds the pinned baseline and candidate on a native GitHub runner, compares full outputs and queries, and runs the candidate twice under 10 GiB with no swap. Its PR checks and retained artifacts record remote acceptance; local emulation is not a substitute. [Probe workflow](../../../.github/workflows/probe-pagefind-memory.yml)

A production switch still needs an explicit decision to maintain a source-built Pagefind temporarily or wait for an upstream release. Keep the deployed swap mitigation during that decision. Stop the browser-partition route unless a separate proposal fixes the matching changes. Evaluate a persistent disk-backed search service if future growth exceeds the static builder's measured budget, rather than promising unlimited capacity from this patch.
