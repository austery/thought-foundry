# Pagefind memory experiment

Status: local experiments completed. Native runner acceptance is recorded by the dedicated PR workflow. No production configuration change.

## Purpose

Measure Pagefind 1.5.2 extended memory with a fixed Chinese corpus, then test ownership transfer and bounded intermediate processing. Preserve the repeated-indexing API and exact output bytes before considering production use.

Pagefind builds a static inverted index: terms map to pages and occurrence positions. The current workflow launches a fresh native process against all rendered HTML each publication. Its output is a browser query bundle, not a persisted writable database for the next build. The Node service retains parsed pages within a running process, but rebuilding output still recomputes the index. This experiment targets full-build memory; it does not implement durable incremental indexing.

## Fixed inputs and isolation

- Site: `5bfab2ddfdc8e5612ae901d6e1da2267b746d59f`.
- Content: `ae50e2b7d476a3334bf0c6715d7c3e86448a8ce5`.
- Hugo extended 0.165.0; Node 22.19.0 for preparation.
- Eligible input: whole HTML pages with explicit `data-pagefind-body`, preserving relative paths. The corpus manifest records every path, size and membership.
- Subsets: SHA-256 of the relative path modulo four; groups `[0]`, `[0,1]`, `[0,1,2,3]`. These are approximate fractions. Record size/source distributions.
- Runtime: Linux amd64 container and binary on an arm64 OrbStack host under emulation; four-CPU quota. Record memory/swap caps per run. Local timing is not a native-runner benchmark.
- Build: published `pagefind` 1.5.2 crate, supplied Cargo.lock and embedded browser assets; Rust 1.95.0 on amd64 musl. Baseline and prototype use the same dependencies, default crate release profile and toolchain. Compare the source build with the official binary before production extrapolation.

## Tools

Scripts in `native/experiments/pagefind-memory/` are outside the production build path:

- `build-prototype.sh EXPERIMENT_ROOT`: download checksum-verified source and task-local tools, build both binaries with one locked toolchain, and run upstream tests.
- `prepare.ts INPUT_HTML_ROOT EXPERIMENT_ROOT`: create nested task-owned hardlinks and record distributions.
- `run.sh EXPERIMENT_ROOT LABEL BINARY_RELATIVE_PATH SITE_RELATIVE_PATH RAM TOTAL_RAM_AND_SWAP`: create a fresh bounded container.
- `measure.sh`: sample process RSS/swap and cgroup memory, swap, anonymous/file memory each second; retain phase logs and OOM counters. This is not an allocation profile.
- `summarize.ts EXPERIMENT_ROOT`: summarize completed runs. Keep RSS, cgroup resident peak and synchronized anonymous-plus-swap separate.
- `compare.ts LEFT_INDEX RIGHT_INDEX REPORT`: require exact fragment/term-index payloads and unique URLs; decode filters and verify only their order/hash references differ. Compare decompressed WASM because packaged gzip timestamps can differ.
- `service-check.ts PAGEFIND_WRAPPER_MODULE OUTPUT_ROOT`: test repeated output, write-then-add, URL replacement and whole-index deletion with the native service.
- `merged-check.ts EXPERIMENT_ROOT`: compare four-index coverage, 350 query cases and separately measured cold API resource requests. It discovered matching differences and is not part of ordinary production CI.
- `query-index.ts INDEX_ROOT REPORT`: run six established Chinese/phrase/filter/zero-result queries through the real browser bundle in Node.

Use Node 22.19.0 and `pnpm --dir native exec node --import tsx ...`. Type-check research tools explicitly because the production tsconfig does not include them.

## Prototype boundaries

`pagefind-1.5.2-cli-consume.patch` adds a private consuming build entry point for the one-shot CLI. It moves parsed pages into language groups. The service entry point retains pages for later builds. CLI UI-warning flags are captured before consumption. Filtering, language selection, serialization and browser code remain unchanged. The second patch batches page intermediates before the global merge; it preserves global metadata, page numbers and merge order. See [results](results.md) for measured outcomes and the rejected partition route.

A smaller peak is insufficient acceptance. Compare official, source-built baseline and prototype outputs. Test CLI compatibility flags and the service lifecycle. Adopting a source-built binary requires a separate maintenance decision and review.

## Evidence and cleanup

Raw data and ownership remain under `.native-build/pagefind-scale-20261102/`, outside the task worktree. Export results, source/binary hashes, input identities, patch and validation before removing reproducible input/output and stopped containers. Preserve prior evidence, the primary checkout, shared dependencies and unrelated worktrees.
