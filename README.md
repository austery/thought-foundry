# Thought Foundry

A personal knowledge garden built with Hugo, TypeScript metadata preparation,
and full-text Pagefind search. Published at <https://austery.github.io/>.

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

## Publication and historical evidence

The hourly workflow builds current content with Hugo and Pagefind, then
publishes to `austery/austery.github.io`. See [AGENTS.md](AGENTS.md) for the
compatibility contract and publication boundaries.

Eleventy and the one-time comparison workflows were retired after the native
migration. Their executable source is preserved at commit
`de01b068599077fd76b97cb5fca7ccf69bd1ea1b`; results remain in
[docs/experiments](docs/experiments). See the
[cleanup inventory](docs/architecture/hugo-cleanup-audit.md) and the
[persistent migration backup and cutover receipt](https://github.com/austery/thought-foundry/releases/tag/native-hugo-backup-fbcb7ce3).
