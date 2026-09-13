# Thought Foundry

## Architecture and ownership

Hugo renders Markdown and templates. TypeScript in `native/src/` interprets
existing metadata, generates navigation data, and restores public URL paths.
Pagefind builds the full-text search index. This repository has no Python runtime.

- `native/layouts/`, `native/hugo.json`: page rendering and Hugo configuration.
- `native/src/prepare.ts`, `model.ts`: metadata, sorting, taxonomy and URL rules.
- `native/src/release.ts`, `release-cli.ts`: production staging, manifests,
  archive verification, backups and guarded publication utilities.
- `src/css/`, `src/js/`: browser assets copied into the output.
- `src/content/`: independent `austery/thought-foundry-content` Git submodule.
  Edit and commit article content in that repository, never as site-code changes.
  Its Python maintenance tools belong there. Site documentation belongs in `docs/`.
- `src/test-series.md`: existing published compatibility fixture; deleting it
  changes public coverage. `_archive/` is retained writing, not build debris.
- `taxonomy.json`: external symlink to PureSubs metadata configuration; do not
  rewrite or delete its target as part of site maintenance.

## Local commands

Use Node 22.19.0 (`.nvmrc`), pnpm 10.14.0, and Hugo extended 0.165.0.

```sh
pnpm install --frozen-lockfile
pnpm --dir native install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm preview
```

The content checkout must exist at `src/content/`. Builds create a fresh
`.native-build/run-*/public` and print its absolute path. Only a successful
full build updates `.native-build/latest.json`; `pnpm preview` serves that output
at `http://127.0.0.1:8098`. `pnpm dev` builds once and starts preview; it does
not watch files. Rebuild after editing. To inspect another output, use
`pnpm preview /absolute/output/directory 8099`.

`pnpm build:hugo` and `pnpm check:hugo` remain compatibility aliases. Tests
invoke real Hugo and require the pinned toolchain. Use lockfile-aware pnpm;
root dependencies have been removed, but `native/node_modules/` is required.

## Compatibility requirements

Preserve content bytes, exact public paths, metadata visibility and Pagefind
scope. Legacy `layout: post.njk` and related values are data identifiers; the
old Nunjucks renderer is not required. Liquid expressions in existing Markdown
still need preprocessing. Do not mass-edit content to remove these conventions.

- `exclude: true` still renders a direct page but removes it from listings and
  search. Existing missing-layout content retains its bare-output behavior.
- Dates sort descending with exact URL ascending for ties; series dates ascend.
  Missing dates can fall back to filesystem birthtime; fresh checkouts are not
  guaranteed byte-identical across runs for those listings.
- Preserve Chinese slugs, repeated taxonomy membership, tag thresholds,
  book metadata and existing search links for entities.
- Explicit content permalinks and unknown layout values fail until supported.
- Preserve intentional HTML spacing used by Pagefind. Compatibility exceptions
  are recorded in `native/compatibility-exceptions.json`.
- Legacy optional segmentation flags `NODE_ENV=production` and
  `OPTIMIZE_SEARCH=true` are rejected by the native preparation contract.

## Validation and publication

`.github/workflows/check-native.yml` runs type checks and native integration
and release-safety tests for PRs. For changes to rendering, metadata or build
inputs, also compare a fixed-content full build and search/navigation behavior.
Never equate type checks alone with full-corpus acceptance.

`.github/workflows/deploy.yml` publishes hourly at minute 05, on manual dispatch,
 and on qualifying main-branch pushes. It checks out current content, excludes
subtitle working directories during staging, builds Hugo and full Pagefind,
adds `.nojekyll`, records source/output identities, and publishes to
`austery/austery.github.io` using the existing deployment key. Publication
artifacts have 90-day retention; the migration backup is stored separately at
GitHub Release `native-hugo-backup-fbcb7ce3`.

Implementation authorizes validated task-branch commits, pushes and PRs.
Merging and deployment require explicit authorization. Do not delete content,
backups, unique local evidence or worktrees as ordinary generated-file cleanup.

Communicate in Mandarin; write code, comments, documents, commits and PRs in
English. This file is the single project instruction source; other tool entry
points reference it.
