# Further architecture challenge: Pagefind growth and repeated work

Date: 2026-11-02. Scope: read-only source/history analysis plus the separately delivered bounded-intermediate prototype. This note proposes local experiments; it does not authorize a search-scope or production change.

## Conclusion

Treat **cold-build capacity** and **repeated-build frequency** as separate problems. Whole-bundle reuse can remove unnecessary work without changing search. Bounded intermediate processing may reduce the work that remains. Partition reuse can provide partial incremental builds, but it needs measured invalidation and query costs. None of these makes a growing archive free to index.

## 1. Reuse an unchanged complete bundle before designing document deltas

**Observed:** the hourly workflow renders HTML and always invokes Pagefind. It has no search-input digest gate. It retains source/output identities and an output manifest, but the retained artifact does not contain the search bundle itself. [Workflow](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/.github/workflows/deploy.yml#L3-L85)

**Proposal:** after rendering, hash the complete ordered set of eligible HTML paths and bytes together with the Pagefind binary/version, index options and extraction contract. On an exact match, restore a previously accepted complete bundle and verify its output manifest. On a miss, perform the full build. This changes neither corpus statistics nor ranking. It still requires storage and transfer of the actual bundle; a hash manifest cannot recreate its bytes.

Start conservatively with complete candidate HTML, including document language and metadata outside the article body. Hashing only visible article text can miss filters, title metadata, anchors or inclusion rules. Hashing whole HTML can produce harmless extra cache misses when ignored navigation changes. Measure those misses before inventing a separate extraction format. [Current extraction and metadata preparation](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/native/src/prepare.ts#L42-L114)

Do not use only the content commit SHA as an exact search key. Subtitle work can change that SHA without changing staged input; staging excludes `raw_subtitles` and `cleaned_subtitles`. Conversely, templates, Pagefind settings or other site inputs can change search without a content commit. [Staging](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/native/src/release.ts#L8-L10)

**Next decisive test:** render two consecutive content snapshots with the same site/toolchain and count unchanged whole-index and per-partition input digests. Compare bundle restore time/bytes with indexing time. Never use a partial cache match as proof that the index is current. An evicted or missing cache must lead to a valid full rebuild. [GitHub cache matching and immutable entries](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#cache-key-matching)

This can reduce hourly cost. It cannot solve the worst-case changed build's memory requirement.

## 2. Source churn supports partial reuse, but not a promise of one-quarter work

The local fixed content snapshot is `ae50e2b7d476a3334bf0c6715d7c3e86448a8ce5`. Its last 300 reachable commits span 2026-10-31 07:17:53 -04:00 through 2026-11-01 18:29:16 -05:00. Of these, 49 change only working subtitle files. Another 123 directly touch a page eligible in the final fixed HTML corpus; each of those individual commits touches one of the current four hash groups. [Local measurement](evidence/content-churn-sample.json)

The workflow runs hourly, not after each individual content commit. When the same source-path changes are grouped into active UTC hours, 17 buckets have dirty-group counts of one:5, two:4, three:5, four:3. The mean is 2.35 dirty groups per active hour. First/last buckets may be partial. These are not exact production execution windows. Shared metadata and rendering can dirty more HTML than this direct-path estimate, and deleted historical pages absent from the final eligible set are not counted.

Therefore the data supports testing shard reuse but does not establish a 75 percent routine saving. Measure actual rendered input hashes. A page addition must affect its owner shard; edits, exclusion changes and deletion must invalidate that shard too. Changing the number of modulo-hash shards can move many existing pages and erase reuse.

The last 1,000 reachable commits also contain 300 Markdown additions and 219 Markdown modifications outside working subtitle directories, with 17 paths changed more than once. This is broader than exact index eligibility, but it disproves an assumption that all repository Markdown is append-only. [Measurement scope](evidence/content-churn-sample.json)

## 3. Immutable base plus delta is not a cheap database substitute

**Observed:** `mergeIndex` concatenates independently scored results and adds filter counts. It does not apply document versions or tombstones. Result handles expose an index-local ID; canonical URLs are obtained from the lazy fragment loader. [Merge path](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L895-L969), [result handle](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L733-L738)

An updated article in a delta leaves its old version searchable in the base. Deletion has the same problem. UI deduplication is insufficient: it can keep a stale version, display wrong totals and leave facets counting removed records. Fetching every matching fragment just to discover its URL defeats lazy loading. A separate ID-to-current-URL/version map can avoid that fetch, but adds a custom state and query layer. [Current UI](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/src/js/search.js#L107-L118)

Keeping each entire updated article together preserves within-document phrases and distant-word AND matches. It does not repair stale versions or global ranking statistics. Base/delta is worth considering only if append-only behavior is a product constraint or this extra version/count layer is explicitly accepted. Whole-shard replacement is simpler for current edits.

## 4. There is a second allocation experiment before a larger architecture change

**Observed:** the original index builder computes every `PageProcessingResult`, including each page's term map and encoded fragment, and collects them all before merging into global maps. Page IDs, sorts and metadata-field order are already assigned before this step. [Global setup](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L76-L146), [collect then merge](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L149-L398)

The delivered prototype keeps the same mapper and sequential merge, but applies them to consecutive batches of 256 whole pages. The global word/filter/fragment maps stay outside the loop. The input iterator preserves the original preassigned page order; indexed parallel collection preserves each batch's order. Therefore collision handling receives the same sequence. This is a source-level equivalence argument, not a benchmark result.

It affects the service builder too, but does not consume the service's retained `SearchState` pages. It adds no new thread trait bound: the original parallel operation already owns `FossickedData` values. The separate CLI ownership patch remains necessary to avoid its whole-corpus clone. The delivered implementation is the committed [bounded-intermediate patch](pagefind-1.5.2-bounded-intermediates.patch).

**Limits:** 256 pages bounds the number of per-page intermediate maps, not their bytes. One very long page can still be large. Parsed input and the final global index remain proportional to corpus size. Test the combined ownership/batch patch against ownership-only, including full output parity and service operations across 255/256/257-page boundaries. No savings estimate is established here.

Do not give every visible `clone` equal priority. The chunk-building clone is a short-lived chunk operation, whereas collecting all per-page maps is corpus-wide. Profile before assigning either an exact byte share. [Chunk construction](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L588-L617)

## 5. Full-text scope has a measurable product cost

A DOM audit of the fixed 13,300 eligible HTML pages found 3,998 pages with English-original sections. Ignored descendants were removed, whitespace normalized and original-section summary labels removed. English original text accounted for 121,536,099 of 449,125,691 normalized body-text bytes, about 27.06 percent. [Local measurement](evidence/original-language-footprint.json)

These are DOM text bytes, not Pagefind token positions, stored segmented fragments or a RAM prediction. English originals are currently inside the indexed body. Removing or separating them would change English retrieval and requires a product decision. No such change is proposed as an automatic capacity fix. [Original rendering](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/native/layouts/partials/reading-body.html#L1-L17)

## 6. Shard ownership affects both reuse and relevance

A URL hash distributes topics and dates statistically. That may keep local corpus statistics closer to the complete index than grouping by topic/source/year. This is a relevance hypothesis to test, not a guaranteed property.

Source-owned shards could route a source-filtered query to fewer bundles using a filter-to-shard manifest. They also create content skew, require splitting large sources and can amplify differences in local relevance statistics. Current multi-source metadata must still map a filter to every relevant shard. A date split has similar distribution changes. Do not choose either purely because its folders are intuitive. [Current per-index score merge](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind_web_js/lib/coupled_search.ts#L942-L969)

Four fixed shards provide a constant-factor increase in cold-build capacity. Every shard still grows with the archive, and browser fan-out grows if shards are added. Define a growth horizon and measure the largest shard before treating the design as durable. If safe splits, browser budgets and ranking cannot meet that horizon, a persistent disk-backed index becomes a different operating model to benchmark, not a failure of Hugo.

## Suggested order

1. Completed: ownership and bounded-intermediate measurements with exact search compatibility. See [results](results.md).
2. Completed: four-shard testing rejected transparent browser merging because matching URL sets changed. See [results](results.md).
3. Measure actual rendered-input reuse across recent releases; implement an exact whole-bundle cache gate before a custom delta engine if its benefit is material.
4. Choose between a bounded source patch, shard replacement/reuse and a persistent service using measured cold capacity, edit cost, reader cost and maintenance cost. Keep the currently accepted publication available until that choice passes release checks.
