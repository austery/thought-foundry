# Pagefind build memory recovery

Date: 2026-11-01.

## Approved scope and decision

The owner asked to restore the static-site builder, test locally first, and publish the validated fix remotely. Preserve content, public URLs, metadata visibility and full-text search scope. This is a build-resource repair, not a search redesign.

Keep Pagefind 1.5.2 and its existing concurrency. Add an 8 GiB temporary swap file to the GitHub-hosted runner after Hugo rendering. Record `free`, disk capacity, `vmstat` and GNU time statistics. A swap allocation or index failure must stop publication. Release only the swap file created by this job. GitHub also discards the hosted VM after the job.

Manual runs can set `dry_run=true` to exercise all build, verification and artifact steps without publishing. Publication requires the main branch and `dry_run` not set. Scheduled and main-push publication keep their existing behavior. No credentials, permissions, target repository or orphan-publication policy changes.

## Fixed-input local experiment

Site: `29865de9d878bfc0c3d507ca49953b23272172c0`.
Content: `ae50e2b7d476a3334bf0c6715d7c3e86448a8ce5`.
Node 22.19.0 and checksum-verified Hugo extended 0.165.0 generated 16,788 HTML pages and 11,803 static files. Production staging excluded subtitle working directories. Every experiment consumed the same HTML through a read-only mount.

The container image and both Pagefind binaries were Linux amd64. OrbStack ran on an arm64 host, so this is a local controlled comparison, not a native CI hardware measurement. Containers had four CPUs and 14 GiB RAM. The successful run used the VM's existing swap, bounded to 8 GiB for that container; no global Docker setting changed. Sampled memory values are lower bounds on peaks.

| Pagefind | Rayon threads | Swap allowance | Result |
| --- | ---: | ---: | --- |
| 1.5.2 | 4 | None | OOM; exit 137 |
| 1.5.2 | 1 | None | OOM; exit 137 |
| 1.6.0 | 1 | None | OOM; exit 137 |
| 1.5.2 | 4 | 8 GiB | Exit 0; no OOM; 114.256 seconds container wall time |

The successful run sampled up to 7,097,794,560 bytes of swap (about 6.61 GiB). This supports adding swap; it does not establish an exact minimum or guarantee unlimited corpus growth. The ephemeral CI swap is disk-backed, unlike the local VM's mixed zram/disk swap. Remote performance and memory diagnostics remain required.

Machine-readable results: [memory and search comparison](../research/evidence/2026-11-01-pagefind-memory.json). Raw logs and reproduction harnesses are retained outside the disposable worktree in `.native-build/pagefind-fix-20261101/` in the primary checkout. The [source research](../research/2026-11-01-pagefind-memory-investigation.md) explains the retained full-corpus allocations.

## Local validation

- `pnpm check` passed with Node 22.19.0.
- `pnpm test` passed all 37 tests with pinned Hugo 0.165.0.
- actionlint 1.7.12 accepted the modified deployment workflow.
- The Linux index contains 13,300 pages, 265,802 unique terms and two filters.
- All 13,300 decompressed fragment payloads exactly match a fresh macOS Pagefind 1.5.2 baseline on the same HTML. Their URL sets are identical.
- Six real queries through each generated browser bundle match in count, first five result data, excerpts, locations, subresults and the complete filter map. Queries cover Chinese terms, an exact phrase, a Podcast speaker filter, an X author filter, and a zero-result quoted phrase.
- The full production HTML was not modified between index builds. No dependency, renderer, content or browser search code changed.

## Delivery gates and recovery

Before live publication, require a successful remote full build with `dry_run=true`, native PR checks and review of the exact task head. Record remote run links and measured resource use after they exist. Local tests do not prove remote recovery.

The change affects only this site's build and publication workflow. A failed render, swap allocation or index stops before publication, preserving the existing public site. The manual non-publication mode and main-only gate bound task-branch validation. Reverting the workflow restores its previous behavior but also restores its memory risk; the content repository is unchanged. If a published index needs rollback, rebuild a previously accepted site/content pair through the existing publication workflow. No data migration or content rewrite is involved.

Pending at this snapshot: remote build evidence, exact-head review and live publication acceptance. More corpus growth may require a measured index-memory change; this repair supplies headroom and diagnostics, not a new indexing architecture.
