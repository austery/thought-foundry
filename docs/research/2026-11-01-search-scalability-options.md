# Search scalability options for Thought Foundry

Date: 2026-11-01. Status: research and proposed experiments, not a migration decision. Scope: preserve Chinese full-body search, exact public URLs, phrase search, source filters, exclusions and useful excerpts as the corpus grows. No alternative engine or partitioned build was benchmarked in this research. Production configuration was not changed.

> **Historical proposal.** PR 20 tested both approaches. Four browser-merged partitions changed query membership and ordering, so the project stopped that route. PR 21 activated the bounded-memory single index with a rollback to the official engine. See the [experiment results](../experiments/pagefind-memory/results.md) and [activation record](../acceptance/pagefind-candidate-activation.md). Service alternatives below were not benchmarked.

## Original recommendation

Test **sequential Pagefind partitions with browser-side merging first**. This is the smallest candidate that can reduce the corpus held by each indexing process while retaining static hosting and the existing tokenizer. Treat it as a compatibility experiment, not a configuration toggle: partition-local ranking, browser fan-out and publication consistency need acceptance tests.

Keep two tracks separate. The static-hosting track should test partitions first, then consider a scoped upstream memory optimization. The service track should compare **Typesense** for simpler incremental integration against **OpenSearch/Lucene** for disk-backed indexing. **Meilisearch** also offers disk-backed storage and indexing memory controls, but its documented per-attribute position limit is a material risk for long transcripts. A service replaces the build-time bottleneck with an operated search system. Do not select one from advertised document counts.

Keep the deployed swap mitigation while these experiments run. It restored delivery without changing search coverage. It does not bound memory as content grows. The preceding [memory investigation](2026-11-01-pagefind-memory-investigation.md) explains Pagefind's retained corpus representations; the [production acceptance receipt](https://github.com/austery/thought-foundry/pull/19#issuecomment-6566702444) records two successful remote full builds after the mitigation.

## Why 10,000–20,000 pages is the wrong capacity unit

Pagefind's stated goal includes sites with tens of thousands of pages. Its small browser payload examples describe query delivery, not the memory needed to construct an index. They do not promise that every corpus of that page count builds within a fixed RAM budget. [Pagefind overview](https://pagefind.app/)

The site's current search includes full article bodies. The source filter list loads from the index, the interface supports a quoted phrase mode, and existing links encode source selections. These are actual application contracts, not optional migration extras. [Search implementation](../../src/js/search.js#L130-L194), [post body and source filters](../../native/layouts/partials/post.html#L5-L10), [X article body and author filters](../../native/layouts/partials/x-reading.html#L2-L7)

Capacity measurements should include eligible body bytes, indexed token positions, length percentiles, largest documents, unique terms and total term occurrences. A long transcript may cost much more than a short documentation page. The current evidence identifies memory pressure and overlapping allocations; it does not assign an exact percentage to tokenization, retained positions or allocator overhead. [Pinned Pagefind investigation](2026-11-01-pagefind-memory-investigation.md#what-the-pinned-source-actually-does)

A new local audit of a **retained historical index**, not the current 13,301-page production corpus, found 10,526 indexed pages with 622,153,253 bytes of indexed UTF-8 text (593.33 MiB) and 82,968,013 Pagefind words. The stored text includes 82,957,487 U+200B zero-width segmentation markers, which occupy 248,872,461 bytes. Removing only those markers for measurement gives 373,280,792 bytes (355.99 MiB) and 204,300,281 Unicode characters. This is normalized index text, not original Markdown. Do not strip these markers from production as a memory fix; they carry segmentation information that the existing search contract preserves. Median page length was 5,181 Pagefind words; p95 was 23,114 and the maximum was 233,870. The largest unmarked body was 1,067,133 bytes and 711,992 Unicode characters. The longest one percent contributed 7.33 percent of words, so this is not explained by one exceptional article. These statistics establish substantial text and representation overhead; they do not predict current production memory or another tokenizer's positions. [Measured historical corpus](evidence/2026-11-01-search-corpus-size.json), [segmented text construction](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs)

The completed recovery experiments supersede pending experiments in the earlier investigation: at the same 14 GiB no-swap Linux limit, Pagefind 1.5.2 with four threads, 1.5.2 with one thread and 1.6.0 with one thread all hit OOM. Allowing swap completed the index; the final production build measured 15,136,580 KiB peak process RSS and 3,627,528 KiB sampled system swap. This is evidence against choosing a single-thread flag or 1.6.0 upgrade as the established solution. [Recovery acceptance](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/docs/acceptance/pagefind-memory-recovery.md), [production receipt](https://github.com/austery/thought-foundry/pull/19#issuecomment-6566702444)

## Candidate A: sequential static partitions

### Supported mechanisms

Pagefind documents merging independently generated bundles through `mergeIndex`. The browser combines results and filters, supports per-index weights and can attach an index-level filter. Same-origin bundle directories avoid cross-origin configuration. This is a query-time combination, not an on-disk merge into a single global index. [Multisite API](https://pagefind.app/docs/multisite/)

The pinned 1.5.2 implementation creates a separate instance and metadata state for each merged bundle while sharing the main WebAssembly module. It searches all instances with `Promise.all`, concatenates results, sorts their weighted scores and adds filter counts. It does not deduplicate URLs in that path. Each instance caches loaded term, filter and fragment data. Calling `filters()` requests all filter indexes. Different bundle versions produce a warning. These facts imply that more partitions can increase browser requests and retained state. They do not establish the size of that increase. [Pinned implementation, initialization](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L238-L304), [loading](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L359-L544), [merging](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L867-L978)

The API exposes per-result ranking diagnostics, including average page length and total pages. Independent indexes have independent corpus statistics. Therefore a merged result order cannot be assumed equal to a monolithic build. An `indexWeight` cannot generally reconstruct all global term statistics. [Ranking API](https://pagefind.app/docs/ranking/), [pinned score fields](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L733-L764)

Pagefind also documents a multisite limitation for explicit sort fields: it interlaces already sorted indexes instead of applying one correct global sort. The current interface does not expose such a sort, but a future date-sorted search must not assume that adding a sort option is sufficient. [Sorting limitation](https://pagefind.app/docs/sort/), [current search call](../../src/js/search.js#L145-L157)

### Proposed design to test

1. Assign each whole eligible page to exactly one partition. Preserve its full HTML, original relative path and Pagefind attributes. Do not split individual articles in this experiment; keeping the article together preserves phrases across paragraphs and AND matches whose words occur far apart.
2. Start with four deterministic partitions, then eight only if measured capacity requires them. These are experiment values, not established capacity recommendations. Select the partition count from measured body-byte or estimated-position distribution, not page count alone. A fixed URL hash gives stable assignment but only statistical balance; it does not enforce a byte cap. Measure every partition and its largest page before choosing four or eight. Changing the partition count can move many pages, so version this rule and measure the rebuild cost. A deterministic byte-balanced assignment is a different strategy with its own movement costs.
3. Build one partition per native Pagefind process, sequentially. Wait for exit before starting the next process. Merely adding documents in batches to one long-lived index does not prove that its retained state is bounded.
4. Put each completed bundle in its own directory under a generation identifier. Set the search result base URL explicitly to `/`. Validate every URL rather than trusting a folder convention.
5. Publish only after all partitions pass coverage and query checks. A generation manifest must list every bundle and its source identity. Keep the previous generation reachable through the cache transition so an already open page cannot fetch deleted chunks. This is a proposed release contract, not a built-in Pagefind transaction.
6. Cache unchanged partition outputs only after the complete input identity is defined: ordered paths and content hashes, Pagefind binary version, index options and extraction rules. Apply deletes and exclusions. Include extraction metadata and tokenization settings in that identity. A cache hit must not resurrect content removed from the current corpus. A missing or invalid cache entry requires a full rebuild of that partition.

A four-way split can plausibly reduce each process's live corpus, but it does not guarantee one quarter of the peak: fixed overhead, skew, longest-page size and final structures still matter. Sequential execution is essential to the memory hypothesis. Building four partitions at once could recreate or exceed the original peak. This is a design inference to measure.

### Main trade-off

This approach keeps the operating model static. It moves part of the complexity into the build manifest and browser adapter. Full-body membership and phrase matching should remain testable without changing the tokenizer. Relevance order may change because statistics are local to a partition. If exact existing ranking is a hard requirement, this approach is not accepted until the comparison demonstrates it or the owner accepts a documented ranking change.

### Upstream memory optimization is a separate static option

The pinned indexer clones parsed pages into language groups and collects per-page intermediate results before the global merge. A profile-guided prototype can test borrowed data or bounded intermediate reduction. A consuming CLI-only path is another candidate. Do not make a naive global `drain` or `mem::take` patch: the Node API explicitly retains an index after `writeFiles` or `getFiles`, allowing later modifications. A memory fix must preserve that API contract or be isolated to a consuming CLI path. No such patch has been tested here. [Pinned ownership and merge analysis](2026-11-01-pagefind-memory-investigation.md#full-corpus-retention-and-copying), [Node API lifecycle](https://pagefind.app/docs/node-api/#indexdeleteindex)

A further profiling target is the per-occurrence `FossickedWord` structure: it stores a position, weight and optional original string. A compact common representation with exceptional variants stored separately could reduce overhead, but neither its actual layout nor its contribution to this corpus was measured. Do not multiply Pagefind `word_count` by a guessed structure size; it is not an audited allocation count. [Pinned occurrence structure](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L36-L41)

Also, `max_fragments` controls output fragment file counts. It is not a documented RAM cap or bounded indexing batch size. Do not present it as the missing memory-limit switch. [CLI options](https://pagefind.app/docs/config-options/#max-fragments)

## Candidate B: persistent Typesense service

Typesense supports document upserts and bulk imports, so changed articles can update a persistent index without rebuilding every article each hour. Deletes must be synchronized separately. IDs can be stable hashes of canonical URLs while the original URL remains a returned field; this is a proposed mapping. Collection aliases allow a new collection to be populated before switching the search name to it. [Documents API](https://typesense.org/docs/30.2/api/documents.html), [collection aliases](https://typesense.org/docs/30.2/api/collection-alias.html)

The official locale guide supports locale-specific ICU processing, including the `zh` language code. The search API provides quoted phrase search, filters, facets and highlights. These capabilities meet a feature checklist, but do not prove equivalent Chinese segmentation or relevance for this corpus. Test mixed Chinese/English text and long-body tail matches. [Locales](https://typesense.org/docs/guide/locale.html), [search API](https://typesense.org/docs/30.2/api/search.html)

Typesense keeps the entire search index in memory and raw data on disk. Its general keyword-search estimate is RAM of about two to three times the bytes of indexed field values. That estimate is workload-dependent; it is not a measured cost for this site. Unindexed display fields can remain on disk. Typesense recommends monitoring RAM below 85 percent of capacity. [System requirements](https://typesense.org/docs/guide/system-requirements.html), [production monitoring](https://typesense.org/docs/guide/running-in-production.html)

This removes full rebuilds from routine site publication, but introduces a search service with its own availability, backups, upgrades and recurring host or managed-service cost. Browser access should use a collection-scoped search-only key; indexing credentials remain server-side. Search and HTML are now two releases, so a source revision must be reconciled and tested before advancing the public search generation. [API key scopes](https://typesense.org/docs/30.2/api/api-keys.html)

**Assessment:** A simpler service candidate to benchmark alongside a disk-backed option if static partitions are insufficient. Prefer its incremental update model over a claim that it is memory-free. Initial population, restarts and a blue/green reindex still need capacity tests. Hosting prices were not used to rank candidates because workload size, availability requirements and query traffic have not yet been measured.

## Candidate C: persistent Meilisearch service

Meilisearch uses LMDB memory-mapped storage and can operate with data larger than RAM, with workload- and disk-dependent performance. It exposes an indexing memory budget and an indexing thread limit. The memory budget is not a hard process limit; documentation permits overshoot. This is a more direct memory-management lever than the Pagefind CLI currently offers, but still requires a bounded workload test. [Storage design](https://www.meilisearch.com/docs/resources/internals/storage), [configuration reference](https://www.meilisearch.com/docs/resources/self_hosting/configuration/reference#max-indexing-memory)

Its update API modifies a persistent index, and its atomic index-swap API supports staging a replacement before activation. Asynchronous task acceptance is not task completion; the deployment adapter must wait for success. Chinese tokenization and explicit language configuration are supported. These are documented capabilities, not a compatibility result. [Document updates](https://www.meilisearch.com/docs/reference/api/documents/add-or-update-documents), [atomic swaps](https://www.meilisearch.com/docs/reference/api/indexes/swap-indexes), [Chinese tokenizer changes](https://www.meilisearch.com/blog/meilisearch-1-15)

The decisive caveat is a documented maximum of **65,535 positions per attribute**. Words beyond it are silently ignored. Search queries also consider only the first ten terms. Both constraints can conflict with long transcript retrieval or pasted quotations. A position is not a character or byte, so a file-size check alone is insufficient. [Known limitations](https://www.meilisearch.com/docs/resources/help/known_limitations)

Splitting long bodies into separate records can avoid per-attribute truncation, but creates additional requirements: stable chunk IDs, full article coverage, one canonical result per article, correct counts, source filtering, context excerpts and phrases spanning chunk boundaries. Record-level AND matching can also lose an article when one query word occurs in one chunk and another word in a distant chunk; restoring this needs parent-level query logic. An overlap window only protects phrases up to a chosen bound; it is not an unrestricted equivalence proof. Reject a migration that silently drops long-body tails. This is our compatibility analysis, not a vendor claim.

**Assessment:** Worth benchmarking if disk-backed operation is a priority, but not a safer drop-in choice solely because indexing memory can be configured. First prove that actual longest documents and boundary queries remain searchable. Configure searchable and filterable attributes before import; changing these settings can cause a full reindex. [Indexing guidance](https://www.meilisearch.com/blog/indexing-optimization-guide)

The historical local corpus already has eleven pages above 65,535 **Pagefind words**. That is a warning to test the longest documents, not proof that exactly eleven pages exceed Meilisearch's limit: the two engines' token/position units differ. [Historical length audit](evidence/2026-11-01-search-corpus-size.json)

## Candidate D: disk-backed search with OpenSearch/Lucene

OpenSearch shards are Lucene indexes composed of disk segment files. Its filesystem storage supports memory-mapped or Java NIO reads, rather than requiring the whole index to be represented as an in-memory datastore. Background segment merges handle index maintenance. This targets a different capacity model from Typesense, although indexing buffers, caches, heap and concurrent queries still require RAM. [Lucene segments](https://docs.opensearch.org/latest/api-reference/index-apis/force-merge/), [on-disk index storage](https://docs.opensearch.org/latest/install-and-configure/configuring-opensearch/index-settings/#static-index-level-index-settings)

Its built-in CJK analyzer uses overlapping bigrams; the official docs also suggest testing the ICU analyzer. `match_phrase` supports ordered term sequences. Chinese behavior will therefore need relevance and phrase tests rather than an assumption of Pagefind equivalence. [CJK analyzer](https://docs.opensearch.org/latest/analyzers/language-analyzers/cjk/), [phrase query](https://docs.opensearch.org/latest/query-dsl/full-text/match-phrase/)

The cost is a larger operating surface: JVM sizing, host settings, TLS/authentication, snapshots and availability planning. Official production guidance covers these requirements and recommends leaving RAM outside the JVM heap. **Assessment:** retain this as the serious long-term disk-backed benchmark if the archive is expected to grow continuously; do not deploy a cluster merely because 13,000 pages sounds large. The current evidence does not prove its resource use or relevance for this corpus. [Production setup](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/)

### Smaller disk-backed alternative: SQLite FTS5

FTS5 supports updates, deletes, phrases, Boolean operators, BM25, highlights and snippets through SQLite tables and on-disk index structures. Its default Unicode tokenizer treats contiguous letter/number runs as tokens; this is not Chinese word segmentation. Its trigram tokenizer cannot match full-text queries shorter than three Unicode characters, so it is not a transparent replacement for terms such as 教育. Custom tokenizers are supported. **Assessment:** plausible for a small operated query service with a tested Chinese tokenizer, but more application work than adopting a search API. Shipping a database to every browser would require a separate download/cache experiment; disk-backed on a server does not imply cheap client-side loading. [FTS5 reference](https://www.sqlite.org/fts5.html)

## Comparison for this site

| Candidate | Static hosting | Routine updates | Capacity risk | Compatibility work | Evidence here |
| --- | --- | --- | --- | --- | --- |
| Current Pagefind plus swap | Yes | Full build | Whole corpus still grows | Existing behavior preserved | Local comparisons and two remote full builds passed |
| Sequential Pagefind partitions | Yes | Initially full partition builds; selective reuse possible | Largest partition plus browser fan-out | Ranking, exact coverage, filters, generation consistency | API and pinned source reviewed; no benchmark |
| Typesense | Site static; search service required | Per-document upsert/delete | Entire search index resident in RAM | Chinese behavior, excerpts, response adapter, synchronization | Official capabilities reviewed; no benchmark |
| Meilisearch | Site static; search service required | Per-document task updates/deletes | Indexing budget, disk I/O and long-field limit | Chinese behavior, tail coverage, chunk boundaries, task completion | Official capabilities reviewed; no benchmark |
| OpenSearch/Lucene | Site static; search service required | Persistent segment-based index | Heap, cache, disk I/O and merge pressure | Analyzer/relevance adapter, operations, synchronization | Official capabilities reviewed; no benchmark |
| SQLite FTS5 | Requires query service or new browser delivery design | SQL updates/deletes | Disk/cache and chosen tokenizer | Chinese tokenizer, API, facets, release handling | Official capabilities reviewed; no benchmark |

Increasing runner RAM alone remains a valid capacity purchase but retains the all-corpus build. A summary-only index, browser vector search or a renderer change does not satisfy this investigation's full-body lexical-search contract by itself. The earlier [static-search research](2026-09-13-static-search-options.md) covers those relevance-oriented alternatives; this report focuses on the memory failure.

## Proposed acceptance experiment (historical)

These are proposed pass/fail targets for a future proof of concept, not measured results or approved production policy.

| Gate | Measurement and proposed target |
| --- | --- |
| Fixed inputs | Record site SHA, content SHA, binary digest, native architecture, CPU, memory and swap limits. Use the same eligible HTML corpus for all candidates. |
| Memory | Finish three runs under an 8 GiB container limit with no swap and no OOM. Record process RSS and cgroup peak separately. If this target is infeasible, report the measured minimum and trade-off instead of silently relaxing it. |
| Growth | Run the current corpus and a separately labeled two-times stress corpus with remapped unique IDs/URLs. Synthetic duplication tests resource behavior, not real future relevance. |
| Coverage | Zero missing or duplicate eligible canonical URLs; zero excluded pages; searchable probes from the start, middle and end of every selected long-document fixture. |
| Query semantics | At least 50 frozen queries: Chinese compounds, phrases, mixed language, source-only filters, source plus phrase, absent terms, tail terms and chunk-boundary phrases if applicable. Preserve Boolean/phrase intent and counts where tokenization is unchanged. |
| Relevance | For Pagefind partitions, compare full result membership and top-10 ordering to monolithic Pagefind. Report all differences. For a new engine, obtain human relevance judgments; do not treat different counts as automatic improvement. |
| Browser cost | Measure cold and warm p50/p95 time to first ten results, transferred bytes, request count, JavaScript heap and WebAssembly memory on desktop and a mobile-class device. Initial candidate target: cold p95 under 2 seconds, warm p95 under 500 ms, and no more than twice baseline transfer or peak browser memory. Fix network/device conditions first. |
| Incremental behavior | Add, edit, delete, exclude and rename one article. Verify all old IDs/chunks disappear where required, unchanged records stay unchanged, and filters/counts converge to the new source revision. |
| Failure recovery | Interrupt indexing halfway. Keep the prior accepted index searchable. Prove rollback and prevent mixed-generation bundles or a partially applied service migration from being labeled current. |
| Operations | For a service, measure cold-start, backup/restore, full reindex alongside queries, and cost for measured corpus bytes plus expected traffic. Never expose write/admin keys to the browser. |

Proceed with static partitions only if all coverage and release gates pass and the owner accepts any ranking difference. Move to a service benchmark if browser fan-out or partition ranking cannot meet the site's needs. Keep the current accepted build available throughout; this report does not authorize a production migration.

## Review lessons for future experiments

Measure the largest suspected allocation before building an adapter. Pinned source showed Pagefind retaining the original pages while cloning them into language groups. That justified a CLI-only prototype, but it did not quantify the memory used by the clone. The service must still retain its input for later builds. Use synchronized cgroup measurements for anonymous memory and swap; do not add a process RSS peak to a separately sampled system swap peak. Linux /proc values labeled kB represent KiB.

Use subsets first to trace how memory scales. For any new partition proposal, check exact eligible URLs, phrase and source-only queries, result membership, ordering and counts before testing cache or release machinery. UI deduplication can hide duplicate handles while leaving the count wrong. Measure browser transfer and memory on real queries rather than assuming a fixed cost per partition. Pagefind word counts also cannot establish a lower bound on truncation in another engine.
