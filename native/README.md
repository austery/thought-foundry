# Native Hugo build

This is the production renderer. Hugo owns Markdown and templates; TypeScript
stages unchanged source metadata, resolves public slugs, preprocesses legacy
Liquid expressions and restores exact output paths. Pagefind indexes the
rendered content. No Eleventy, Nunjucks or MarkdownIt renderer is installed.

See [AGENTS.md](../AGENTS.md) for the canonical commands and compatibility
contract. From the root use `pnpm build`, `pnpm preview`, `pnpm check`, and
`pnpm test`. From this directory, `pnpm build /absolute/site/root` can build
another source checkout; output is always under this package's parent
`.native-build/` directory.

The stages remain independently callable:

```sh
pnpm prepare-site /absolute/source /absolute/new-staging
hugo --source /absolute/new-staging --destination /absolute/output
pnpm restore /absolute/new-staging /absolute/output
pnpm exec pagefind --site /absolute/output
```

Staging must not exist. Restoration validates the entire route manifest before
moving output. The production workflow additionally stages source without
subtitle working directories and records publication manifests.

The one-time paired migration benchmark is preserved in Git at
`de01b068599077fd76b97cb5fca7ccf69bd1ea1b`. Its measured results and inspected
compatibility differences remain under `docs/experiments/`; the executable
comparison workflows are retired. Current PR validation uses native tests.
