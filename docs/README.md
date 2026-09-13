# Documentation index

The current site uses Hugo, TypeScript metadata preparation and full-text
Pagefind. Start with the [project README](../README.md) and
[canonical project guide](../AGENTS.md) for active commands and behavior.

## Current migration and cleanup records

- [Native Hugo migration specification](architecture/specs/SPEC-057-native-hugo-migration.md)
- [Native migration validation](experiments/native-hugo/validation.md)
- [Cleanup inventory](architecture/hugo-cleanup-audit.md)
- [Persistent production backup and final cutover receipt](https://github.com/austery/thought-foundry/releases/tag/native-hugo-backup-fbcb7ce3)

## Historical decisions and proposals

Documents under `architecture/specs/`, `architecture/decisions/`, `archive/`
and `experiments/` preserve their original context. Earlier Eleventy choices,
cache strategies and proposed hybrid search designs are historical records,
not descriptions of the current deployed system. The current search index is
full-text Pagefind; do not infer a vector service from an older proposal.

The original executable comparison tooling and retired workflows can be
recovered from Git commit `de01b068599077fd76b97cb5fca7ccf69bd1ea1b`.
Measured results remain in [experiments](experiments/).
