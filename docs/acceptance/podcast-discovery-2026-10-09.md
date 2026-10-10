# Podcast discovery: local acceptance and unresolved publication contract

Date: 2026-10-09
Status: Local discovery accepted; complete replacement acceptance blocked. No PR, remote CI, merge, deployment or production reprocessing.

## Identities

- Baseline site: `8ed221150df123c8d980cd64ebf9fa6f16830be4`.
- Reviewed implementation: `76c81b338341271b403cdcd7fce59036d84c13d9`, branch `codex/podcast-discovery`.
- Isolated checkout: `/private/tmp/thought-foundry-podcast-20261009`.
- Fixed content commit: `91b8bfc912306a84e6f2b1f3137fd506ccc95343`.
- Baseline output: `/private/tmp/thought-foundry-podcast-baseline-20261009/.native-build/run-2eLxlC/public`.
- Candidate output: `/private/tmp/thought-foundry-podcast-20261009/.native-build/run-tmPyx2/public`.
- Toolchain: Node 22.19.0, pnpm 10.14.0, Hugo extended 0.165.0. The official macOS package was checksum-verified and extracted under `/private/tmp/tf-hugo-0.165.0`; no system installation occurred.

The shared checkout and its dirty content submodule were preserved. The isolated content checkout is clean; its different gitlink was not included in the implementation commit. Native dependencies were read through an uncommitted local symlink to the existing installation; no dependency files or lockfiles changed.

## Executed validation

| Check | Result |
| --- | --- |
| `pnpm check` | Passed |
| `pnpm test` | 35 passed, 0 failed, 0 skipped |
| Baseline and candidate full Hugo/Pagefind builds on the same source snapshot | Both passed; each indexed 12,260 pages |
| Original URL coverage | All 15,371 original routes retained; 4 additive routes |
| Homepage collection | 12,249 to 12,260 articles; exactly 11 Podcast articles added |
| 梁州令 source directory and page | One directory link; 10 article links on the source page |
| Existing formatted article bodies | 10,983 compared; no difference |
| Original Markdown exports | 10,983 compared byte-for-byte; no difference |
| X discovery data | Byte-identical |
| Desktop browser journey | Source filter → 梁州令 → EP48 article passed; show, original source, date and formatted body visible |
| Actual full-corpus search in browser | `极寒末世` query found EP48; selecting 梁州令 returned its one article with matching passages at the existing URL |
| Mobile source view | 390×844 viewport; 10 article rows; document width equals viewport width; visual inspection found no horizontal overflow |
| Temporary viewport | Reset after inspection |

Additive routes: `/speakers/liang-zhou-ling/`, `/speakers/get-connected/`, `/tags/collective-memory/`, `/tags/psychological-defense/`. Tag additions follow the existing membership threshold; no threshold or template changed.

Evidence files:

- `/private/tmp/tf-podcast-tests-20261009.log`
- `/private/tmp/tf-podcast-baseline-build-20261009.log`
- `/private/tmp/tf-podcast-candidate-build-20261009.log`
- `/private/tmp/tf-podcast-corpus-check-20261009.json`
- `/private/tmp/tf-podcast-corpus-check.mts`
- `/private/tmp/tf-podcast-replacement-probe-20261009.json`
- `/private/tmp/tf-podcast-replacement-probe.mts`
- `/private/tmp/tf-podcast-review-v1.md`

The full-corpus comparison covers ordinary post bodies/exports and all routes; X-specific browsing is additionally covered by byte-identical discovery data and the executed suite. It does not establish owner content-quality acceptance or current successful-job status for every saved file.

## Remaining blocker

The real producer storage probe changes the article path between attempts. The database's Type 1 behavior does not supply a fixed GitHub publication path or a success selection rule to the static site. The duplicate guard blocks ambiguous builds, but cannot recognize a lone unfinished candidate. The synthetic same-path replacement test proves only conditional consumer behavior.

The independent pre-publication review returned **Request changes** for this one spec gap and found no additional material standards defect. The [producer correction proposal](../plans/2026-10-09-podcast-publication-replacement.md) is ready for owner scope confirmation. Do not push/create a PR as complete integration, merge, deploy, or claim stable replacement acceptance until the producer/site contract correction is implemented and tested.

Local preview: `http://127.0.0.1:8109/speakers/liang-zhou-ling/`. This serves only the recorded isolated candidate output.
