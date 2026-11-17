# Pagefind capacity follow-up

Date: 2026-11-02. Scope: fixed-corpus measurements and two small failure probes against Pagefind 1.5.2. These findings refine the next steps. They do not change production.

> **Historical follow-up.** PR 21 activated the single-index candidate and added a [read-error guard](../../native/experiments/pagefind-memory/check-read-errors.sh). See the [activation record](../acceptance/pagefind-candidate-activation.md) for production and rollback, and the [experiment results](../experiments/pagefind-memory/results.md) for measured comparisons. This note preserves corpus measurements and two failure probes. The probes do not identify the cause of the historical runner shutdown.

## 1. Page count hides the actual work

The fixed 13,300 fragments contain a total `word_count` of **99,562,922**. The indexer reports **265,802 distinct terms**. These are different measures: the parser advances a position counter through segmented text, while the index builder reports the size of its term map. Fragment position counts are neither an exact postings count nor allocated bytes. Compound terms, metadata and variants prevent that substitution. [Position counter](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/fossick/mod.rs#L497-L539), [distinct-term count](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L462-L465).

The largest one percent of pages accounts for 7.95 percent of positions. The largest ten percent accounts for 37.25 percent. The median is 4,878 positions; the 95th percentile is 23,135; the maximum is 233,870. The workload is uneven, but one exceptional article does not account for most of it.

Track positions, text bytes, distinct terms and peak memory alongside page count. Do not treat the candidate's improvement as an absolute cap. It shortens the overlap between corpus representations, but retained parsed pages and final global maps still grow. Changing output chunk size starts after the global term map exists, so it cannot bound that earlier allocation. A profile must identify the next large allocation before another patch claims a benefit. [Retained parser results](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L85-L113), [global maps](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L76-L79), [chunking stage](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/index/mod.rs#L462-L468).

## 2. A zero exit status can hide an unreadable article

The read-error probe supplied two HTML files. One was readable. The other had mode `000`. The container ran as user `65534:65534`, so root privileges could not bypass the fixture's permissions. Pagefind reported `Permission denied`, warned that one file failed to index, indexed one page and exited **0**. The decoded output contains only `/good.html`. This confirms a partial-input success path.

This matches the owning code: `fossick_many` collects read errors, logs warnings, retains successful pages and returns `Ok`. The publication check at the time confirmed several entry-point files exist; it did not establish complete search coverage. [Read-error handling](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L85-L113), [publication check](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/native/src/release.ts#L31-L38).

Before caching or publishing an accepted index, require zero input-read failures and an exact expected searchable URL set. Derive that set from the actual extraction and inclusion rules, including body markers, exclusions, empty content and HTML contracts. Do not count every `.html` file or use a raw marker regex as the eligibility rule. The fixed 13,300-page experiment has exact baseline coverage; the probe did not establish production coverage. [Current eligibility rule](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/lib.rs#L133-L178).

Reproduction: run Pagefind 1.5.2 with two HTML fixtures as a non-root user. Set one fixture to mode `000` and give the user write access to the output directory. Check both the exit status and the decoded fragment URLs.

## 3. Output creation has an independent retry trap

Pagefind retries **every** `File::create` error forever, at fixed 100 ms intervals. It does not select transient errors or impose a deadline. Directory creation and actual writes instead use `unwrap` and can panic. [Owning write path](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/output/mod.rs#L408-L453).

The second output probe pre-created the required output subdirectories, then exposed the target through a read-only mount. Its writable control exited **0**. The read-only run did not finish before the external eight-second timeout and exited **124**. The first attempt omitted nested parents and panicked with exit **101** at directory creation. Both attempts are retained because they exercise different branches.

The writer also creates all file futures before `join_all`. They borrow the existing output structures; they do not immediately copy every payload. Each gzip task creates a complete compressed buffer and retains it through the asynchronous write. Bounded write concurrency could reduce file-handle and temporary-buffer pressure, but this probe measured no memory saving. Add an explicit output-stage log, bounded retries and error propagation before claiming a repair. [Task collection](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/output/mod.rs#L353-L380), [buffer lifetime](https://github.com/Pagefind/pagefind/blob/v1.5.2/pagefind/src/output/mod.rs#L434-L448).

Neither probe identifies the historical runner-shutdown cause. The original failed build steps lasted about 3 minutes 3 seconds and 3 minutes 24 seconds, not the workflow's 45-minute job limit. Their logs did not provide a kernel OOM receipt. Preserve the existing qualified conclusion that memory pressure is strongly supported. [First failed run](https://github.com/austery/thought-foundry/actions/runs/41353545266), [second failed run](https://github.com/austery/thought-foundry/actions/runs/41364163693), [job limit](https://github.com/austery/thought-foundry/blob/5bfab2ddfdc8e5612ae901d6e1da2267b746d59f/.github/workflows/deploy.yml#L24-L26).

## Implications

Track searchable positions, text bytes, distinct terms and build memory as the corpus grows. Keep capacity separate from the cost of rebuilding the same input. Before reusing a bundle, verify its complete inputs and coverage. See [reuse and capacity options](../experiments/pagefind-memory/architecture.md).

The probe scripts and raw logs were retained locally under `.native-build/pagefind-scale-20261102/` at the time of the investigation. They are not required to read this note and are not part of this repository.
