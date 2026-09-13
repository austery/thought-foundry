# Post-migration cleanup record

Status: user-approved cleanup implemented and locally validated; PR publication pending.

## Baseline and ownership

The cleanup starts at deployed source commit
`de01b068599077fd76b97cb5fca7ccf69bd1ea1b`. The primary checkout was previously
at `d98141a82`; it now uses the task branch `codex/hugo-repository-cleanup`.
Preexisting untracked migration documents were preserved under
`.local-evidence/hugo-cleanup/preexisting-docs/` before switching branches.
The existing content checkout remains untouched at
`5a0954c7347e772dacab8e87226de75e1daff0a9`; its preexisting difference from the
site's recorded submodule pointer is excluded from the cleanup commit.

## Required files and retained records

| Paths | Why retained |
| --- | --- |
| `native/layouts/`, `native/hugo.json` | Active Hugo renderer |
| `native/src/`, `native/test/`, native package/lock/TypeScript config | Metadata compatibility, Pagefind, preview, release utilities and validation |
| `src/content/`, `.gitmodules` | Independent article repository |
| `src/css/`, `src/js/` | Active browser assets |
| `src/test-series.md` | Existing published page; deletion would change coverage |
| Root package/lock, `.nvmrc`, `.npmrc`, `jsconfig.json` | Hugo command entry points, toolchain and browser-source editor scope |
| `.github/actions/setup-native/`, `deploy.yml`, `check-native.yml` | Production build and native-only PR checks |
| `AGENTS.md` | Canonical project guide |
| `CLAUDE.md`, AI/commit instruction entry points | Short references to the canonical guide |
| `README.md`, `docs/`, license | Current usage, historical decisions and audit evidence |
| `_archive/` | Archived writing, not generated output |
| `taxonomy.json` | Symlink to PureSubs classification configuration; target untouched |
| `.claude/`, `.codex/`, `.vscode/` | Existing local tool integrations |
| `native/node_modules/` | Installed local build dependencies; reproducible from native lockfile |
| `.native-build/` | Latest successful local output and preview pointer |
| `.worktrees/` | Previous checkouts, unique experiment records and retained backup archives |
| `.local-evidence/hugo-cleanup/` | Local cleanup logs, inventories, comparison and preserved documents |

The worktree folder is retained as recovery/history, not a production dependency.
Generated outputs within it were inventoried individually and removed. Remaining
content snapshots and unique reports were not classified as disposable caches.
The persistent production backup release `native-hugo-backup-fbcb7ce3` is retained.
Clean output clones were removed only after confirming no local changes; the
re-downloaded backup was removed only after matching its SHA-256 to the retained
archive. Their revisions and hashes are in the local removal receipt.

## Implementation

Root `build`, `check`, `test`, `preview`, and `dev` now use native Hugo tools.
Root Eleventy dependencies were removed and the root lockfile regenerated.
`dev` builds once then serves; no hot reload is claimed. A failed build does
not overwrite the latest successful preview pointer.

Old templates and executable comparison workflows were retired together.
Native-only PR checks replace one-time migration benchmarking. The hourly
publisher is unchanged. Release utilities remain available for backups and
historical evidence verification: their old workflow-identity check applies to
migration receipts, not the current publication entry point.

All active project instructions now reference `AGENTS.md`. README and the docs
index distinguish current Hugo behavior from retained historical proposals.
Former `.scratch/hugo-build-comparison/` notes were moved to
`docs/archive/hugo-migration-work-notes/` to preserve their evidence.

## Validation

- Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0.
- Frozen native dependency installation and regenerated root frozen installation succeeded.
- Native type check passed; all 9 native integration/release tests passed.
- The pre-cleanup native renderer and final root build consumed the same untouched
  local content checkout. Both generated 23,265 files, including 11,170 HTML
  pages and 9,529 indexed pages. Every output file had an identical SHA-256;
  no missing, added, or changed files. Baseline code came from the pre-cleanup
  Git snapshot; both builds read the same remaining source paths after the
  inert legacy templates were removed. This is a local fixed-snapshot cleanup
  comparison, not a new measurement against current remote content.
- Browser: default preview, Chinese full-text search (238 results for 高考),
  zero-result query, result-to-article navigation, article heading anchor,
  dark theme, and classification navigation (990 entries) passed.
- A deliberately failing build exited nonzero and left the successful preview
  pointer unchanged. It is a failure-path probe, not a failed acceptance build.
- Independent read-only review found no blocking dependency or workflow issue;
  its documentation clarifications were incorporated.
- Earlier local preview processes on ports 8096–8098 were identified as this
  project's obsolete experiments and stopped before removing their outputs.
  Other projects' services were left running.

Detailed local receipts are retained under `.local-evidence/hugo-cleanup/`.
The content Git repository is clean; its revision was not changed.

## Removed tracked implementation paths

Recover these from the baseline Git revision above. Legacy layout names in
article frontmatter remain supported; the content itself was not rewritten.

- `.eleventy.js`
- `.eleventyignore`
- `.github/prompts/plan-improveNavigation.prompt.md`
- `.github/workflows/compare-builds.yml`
- `.github/workflows/release-output.yml`
- `.github/workflows/validate-native-hugo.yml`
- `.github/workflows/validate-native-release-input.yml`
- `benchmark/config.json`
- `benchmark/package.json`
- `benchmark/pnpm-lock.yaml`
- `benchmark/src/adapter.ts`
- `benchmark/src/candidate.ts`
- `benchmark/src/cli.ts`
- `benchmark/src/compare.ts`
- `benchmark/src/evidence.ts`
- `benchmark/src/native-acceptance.ts`
- `benchmark/src/native-candidate.ts`
- `benchmark/src/pair.ts`
- `benchmark/src/summary.ts`
- `benchmark/test/adapter.test.ts`
- `benchmark/test/compare.test.ts`
- `benchmark/test/measure.test.ts`
- `benchmark/test/native-acceptance.test.ts`
- `benchmark/test/pair.test.ts`
- `benchmark/test/summary.test.ts`
- `benchmark/tsconfig.json`
- `src/_11ty/transforms/pagefind-segmentation.js`
- `src/_includes/base.njk`
- `src/_includes/book-note.njk`
- `src/_includes/default.njk`
- `src/_includes/post.njk`
- `src/about.njk`
- `src/all-areas.njk`
- `src/all-categories.njk`
- `src/all-projects.njk`
- `src/all-speakers.njk`
- `src/all-tags.njk`
- `src/area-page.njk`
- `src/blog.njk`
- `src/bookshelf.njk`
- `src/category-page.njk`
- `src/debug-series.njk`
- `src/project-page.njk`
- `src/search.njk`
- `src/speaker-page.njk`
- `src/tag-page.njk`
- `src/tool.njk`

## Removed generated paths

These are reproducible outputs, dependency installations, extraction copies or
verified clean output clones. Unique reports and original backup archives remain.

- `node_modules`
- `_site`
- `.eleventy-cache.json`
- `.DS_Store`
- `.worktrees/native-hugo-migration/.native-build`
- `.worktrees/native-hugo-migration/.native-fifth`
- `.worktrees/native-hugo-migration/.native-fifth-output`
- `.worktrees/native-hugo-migration/.native-first`
- `.worktrees/native-hugo-migration/.native-first-output`
- `.worktrees/native-hugo-migration/.native-fourth`
- `.worktrees/native-hugo-migration/.native-fourth-output`
- `.worktrees/native-hugo-migration/.native-guard-output`
- `.worktrees/native-hugo-migration/.native-second`
- `.worktrees/native-hugo-migration/.native-second-output`
- `.worktrees/native-hugo-migration/.native-third`
- `.worktrees/native-hugo-migration/.native-third-output`
- `.worktrees/hugo-build-comparison/.benchmark/baseline/_site`
- `.worktrees/hugo-build-comparison/.benchmark/baseline/node_modules`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v4/generated/static/tags/public`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v4/public`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v5/generated/static/tags/public`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v5/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo/static/tags/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v2/static/tags/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v3/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v3/public-complete/tags/public`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v3/static/tags/public`
- `.worktrees/native-hugo-release/.native-backup-fbcb7ce3/restore`
- `.worktrees/native-hugo-release/.native-backup-fbcb7ce3-downloaded/restored`
- `.worktrees/native-hugo-release/.native-production-backup/restore`
- `.worktrees/native-hugo-release/.backup-baseline-validation/restore`
- `.worktrees/native-hugo-release/.backup-baseline-validation/staging`
- `.worktrees/native-hugo-release/.benchmark/fresh-release-previews/verified-candidate`
- `.venv`
- `.pnpm-store`
- `.worktrees/hugo-build-comparison/.benchmark/hugo`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v2`
- `.worktrees/hugo-build-comparison/.benchmark/hugo-v3`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v4/generated`
- `.worktrees/hugo-build-comparison/.benchmark/candidate-v5/generated`
- `.local-evidence/hugo-cleanup/baseline`
- `.native-build/run-DRJzWc`
- `.worktrees/native-hugo-release/.native-backup-fbcb7ce3-source`
- `.worktrees/native-hugo-release/.native-production-backup-source`
- `.worktrees/native-hugo-release/.native-published-verification`
- `.worktrees/native-hugo-release/.native-backup-fbcb7ce3-downloaded`
