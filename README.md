# Thought Foundry

A reading and search site for collected video and podcast material, web articles,
and X originals, built with Hugo, TypeScript metadata preparation, and Pagefind.
Published at <https://austery.github.io/>. Collection and processing belong upstream
in PureSubs; this repository owns presentation. Personal writing and reading
reflections remain in the private Personal Vault and are selected separately for
the personal blog.

## Get started

Install Node 22.19.0, pnpm 10.14.0 and Hugo extended 0.165.0, then initialize
the separate content checkout and install the pinned dependencies:

```sh
git submodule update --init src/content
pnpm install --frozen-lockfile
pnpm --dir native install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm preview
```

Preview opens a local server at <http://127.0.0.1:8098/>. Each build prints a
fresh output path under `.native-build/`; preview uses the latest successful
build. `pnpm dev` builds once and serves it, without file watching. For another
output or port: `pnpm preview /absolute/output/directory 8099`.

## Repository map

| Path | Purpose |
| --- | --- |
| `native/` | Hugo configuration/templates, metadata adapter, search dependencies, tests and release tools |
| `src/content/` | Independent content Git submodule; commit article changes there |
| `src/css/`, `src/js/` | Site styling and browser interactions |
| `src/test-series.md` | Retained published compatibility fixture |
| `.github/` | Native validation and hourly publication |
| `docs/` | Architecture decisions, migration evidence and cleanup inventory |
| `_archive/` | Retained archived writing |
| `taxonomy.json` | Local external classification-config symlink |
| `AGENTS.md` | Canonical project instructions; `CLAUDE.md` references it |

`native/node_modules/` and `.native-build/` are generated locally. The root
package only provides command entry points and has no runtime dependencies.
Content-maintenance Python scripts live in the content repository.

## Content directories and provenance

The following paths are relative to the `thought-foundry-content` repository
mounted at `src/content/`. They record different acquisition histories, not a
strict distinction between original writing and transcripts.

| Content path | Current role |
| --- | --- |
| `notes/` | Primarily automatically processed video/podcast articles, usually named by video ID; bodies can contain cleaned, translated, or structured transcripts |
| `posts/` | Legacy manually imported material, including external transcripts, community discussions, AI reports, and some later processed articles; the name does not imply personal blog authorship |
| `clippings/` | Collected web articles, including external blogs; current web-feed exports use this directory |
| `clippings/x/posts/` | Saved X posts and long-form articles, rendered as literal originals |
| `clippings/x/daily/<author-id>/` | Daily X collections, with publication times, source links, and known gaps preserved |
| `books/` | Historical personal reading-note copies; these belong in the private vault and separate blog, rather than the ongoing external-content collection |
| `raw_subtitles/` | Acquired subtitle text retained as source material, separate from the rendered article |
| `cleaned_subtitles/` | Cleaned subtitle text retained for processing and verification |
| `scripts/`, `pyproject.toml`, `uv.lock` | Content-maintenance tools and their dependencies |

`notes/` and `posts/` overlap in format and source type. Use the article body and
provenance fields to identify its origin. A rendered Markdown article is not
necessarily a byte-for-byte copy of the original subtitle text. Existing folder
names remain part of public URLs; moving an article between them changes its URL.

For regular articles, `speaker` is the source identity displayed as "来源" and
used for source browsing/search; it may name a channel, publication, or community.
`source` is the original-material URL displayed as "原文". Legacy `author: Lei`
does not establish Lei's authorship: many imported transcripts and AI reports
carry that value. Correct attribution from source evidence; a participant in a
community discussion is not automatically the author of the whole discussion.
Book-note `author` identifies the book's author. X originals use their dedicated
`x_*` identity and provenance fields.

The product boundary and source-field contract are recorded in
[the information-platform design](docs/architecture/information-platform-design.md).

## Publication and historical evidence

The hourly workflow builds current content with Hugo and Pagefind, then
publishes to `austery/austery.github.io`. See [AGENTS.md](AGENTS.md) for the
compatibility contract and publication boundaries.

Local builds use the content currently checked out at `src/content/`; production
checks out the content repository's current `main` separately. Content changes
therefore do not require a site-code change before the next hourly build.
`raw_subtitles/`, `cleaned_subtitles/`, and Git metadata are excluded from
production staging. The renderer scans Markdown recursively under `src/`, not
only a closed list of content directories: Markdown maintenance documents or
backups placed inside the content checkout can also acquire direct public pages.
Keep site documentation in `docs/` and private originals outside this checkout.

This site does not enforce the personal blog's `publish: true` approval boundary.
`draft` metadata currently does not prevent page generation. `exclude: true`
removes an article from listings and search but leaves its direct page available.
Removing a publication copy from the deployed content branch withdraws its page
on the next successful fresh deployment; the old URL has no automatic redirect,
and the file remains recoverable from Git history. A branch or PR alone does not
withdraw a live page.

Eleventy and the one-time comparison workflows were retired after the native
migration. Their executable source is preserved at commit
`de01b068599077fd76b97cb5fca7ccf69bd1ea1b`; results remain in
[docs/experiments](docs/experiments). See the
[cleanup inventory](docs/architecture/hugo-cleanup-audit.md) and the
[persistent migration backup and cutover receipt](https://github.com/austery/thought-foundry/releases/tag/native-hugo-backup-fbcb7ce3).
