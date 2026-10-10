# Podcast publication consumer acceptance

Date: 2026-10-09
Status: Consumer implementation, local validation and independent code review passed. Remote CI will be recorded in the PR. No site merge or deployment.

## Contract

PureSubs PR 491 supplies stable formal article writes. New public paths are `content/podcasts/article/<episode-key>.md`; existing successful paths remain permanent. Thought Foundry admits these paths before reading/rendering/exporting Markdown. Other Podcast paths are absent from pages, reader exports, collections and search. Two admitted files for one episode fail preparation, including excluded articles. Approved formal articles retain existing `exclude: true` direct-page behavior. An admitted path without `layout: post.njk` fails instead of producing bare output.

Podcast shares ordinary homepage, source directory, reader and Pagefind search. X and existing taxonomy rules are unchanged. The static legacy mapping contains only verified destinations; new entries require authoritative producer evidence, never timestamp or filename selection. There is no runtime database dependency or additional publication/version system.

This document supersedes the producer-blocked status in the earlier local acceptance/integration documents. Their recorded results remain historical evidence. The new consumer contract was authorized by the owner's follow-up implementation request after the producer closeout.

## Legacy mapping provenance

Producer release inspected: `b26797c44896268f5fb28b9615acc2f9ef6093be`, [accepted publication plan](https://github.com/austery/puresubs/blob/b26797c44896268f5fb28b9615acc2f9ef6093be/docs/plans/podcast-redesign/stable-article-publication.md).

PureSubs MOC and log `2026-10-09_puresubs_podcast-stable-publication-and-x-import-capacity-production-closeout.md` record 11 successful article readbacks with unchanged job attribution, paths and bytes at rollout. This implementation consumed the paired `after-readback.json` and `production-acceptance.json` under `/private/tmp/x-deploy-production-20261009/`. All 11 readback body SHA-256 values were checked against the fixed content snapshot `2e41c0747370f89b3a5f723f864df2927d619fd2` before creating `native/src/podcast-publication.ts`.

The hashes below establish the inventory snapshot; they are not build-time pins, so legitimate same-path replacements remain supported. No candidate/content deletion or mutation was performed.

| Permanent content path | Readback SHA-256 |
| --- | --- |
| `podcasts/article/2a469daf-f229-4e99-a62d-fb155fa64e35/pod_algbr0fzbuh6cwz3puc2flgn.md` | `e0b0e602d9c677198d69bf0451a7d311945585262bc1064e38b8cc792a4715f6` |
| `podcasts/article/40322b42-7593-4738-bb77-5eba3ddbcb1d/pod_bhpksupl57xxm06yw2qxu3rr.md` | `62ceaa20663c6c0575ccb2fa1d1a9d10e7e9dbf25c7ef105d8b6b8a2114421c0` |
| `podcasts/article/7dc4d236-f439-41d3-bbdb-06abf4fb69ec/pod_hgxoxitfxhetj76teof3srdf.md` | `9eeec1c171fe8bbc1bd8fc3399ed243a1714e23286876d628b518044612e2ed1` |
| `podcasts/article/ca22ed24-4b43-4095-88af-c2e77f7add1f/pod_m5zqaqi8j5m9egqvk0gbzoli.md` | `80e57e5ff99bb57a6721744313ef1c0e507ad6c0f0840add2f607d8b048c908e` |
| `podcasts/article/dabf76d8-8055-46ce-adf8-afe9403d1263/pod_pt3rc9hdyvr2hc7j8l4072ba.md` | `5f38af10f454b85cc77eefc03de380bca892378687ec4c162ddf1b079c7aca62` |
| `podcasts/article/26a6228e-6473-4ecf-8084-688bdf7a74e2/pod_rfzt7mr9dt288mjethcybarn.md` | `09e42981b7221d16ff86413bb2add0e1d9cc82a91839afff4ada0754a7750fbb` |
| `podcasts/article/adf60f89-15bf-4465-ae10-350531c520ce/pod_roxlsqmv3cgdp7tb8hdvaods.md` | `26b07adff63bf5690320a9dd94fc74165602bff3886d760b26cbe5677192e00b` |
| `podcasts/article/7415c42a-7721-4f37-ba57-74140b3b45dc/pod_usdrkgnkglrlol7wmyg8ybn0.md` | `c8b6f47d39e1e647fce1457b4adf2ac146fb9383ec6862cd0ce3f2a1abf53f72` |
| `podcasts/article/6d3ae53c-656a-4620-bf30-ef155e3efd92/pod_vtqhul6ruvqlzwrgjndko3ew.md` | `8ce96c7b28acf838edb8da87c86acfd782cffc9ab9440bbbdd6ef811f12660f0` |
| `podcasts/article/f2a8a91c-21d5-4a01-a554-29668d5eea1b/pod_wk776tsn18evx7ofm9fs607b.md` | `1e7820fe48a580788646346a150d9beb0c8e6b06fac3a95028acda4d77566fc1` |
| `podcasts/article/28ca5992-18c1-4812-972a-c574ef5a48dd/pod_zpqj8oh2grf5jqllt80bkds4.md` | `b392dcf9740ab53ca6cec6a11a948bbc8bce4a8c6ac51b4035a40923d9755614` |

## Validation

- `pnpm check` and all 37 native tests passed locally. Tests execute real Hugo and filtered Pagefind queries for stable and legacy replacement, exclude behavior, absent intermediate routes/exports/search, invalid formal metadata and duplicate publication refusal.
- Fixed-content baseline/candidate full Hugo and Pagefind builds passed, both indexing 12,281 pages. Baseline site `8ed221150df123c8d980cd64ebf9fa6f16830be4`, content `2e41c0747370f89b3a5f723f864df2927d619fd2`.
- All 15,399 original routes retained; five additions: `/page/410/`, `/tags/collective-memory/`, `/tags/psychological-defense/`, `/speakers/get-connected/`, `/speakers/liang-zhou-ling/`. Homepage membership increased from 12,270 to 12,281 (11 Podcast articles); Liangzhouling has 10 article links and one source-directory link.
- All 10,994 existing formatted bodies and raw Markdown exports compared unchanged; X discovery JSON byte-identical.
- The generated full-corpus Pagefind bundle returned exactly one saved Podcast URL for `极寒末世` with the `梁州令` filter. The Node harness supplies the rendered document's `zh-hans` language context and reads the real generated index; no fake search results. An initial harness invocation without document language returned no result and was corrected to match browser language detection.
- New full-corpus browser/mobile inspection was not repeated: templates/assets are unchanged; earlier local browser evidence remains recorded separately. This acceptance includes DOM/corpus checks and actual Pagefind bundle queries.
- Independent immutable code review approved `5c9413dc335faecc9c948b5573ff0f31d0a09df0`, resolving the earlier candidate-selection gap. Reviewer independently ran all five Podcast behavior tests and production staging/admission probe. Subsequent changes only record validation evidence.
- Exact-head remote CI: see the task PR; local validation does not establish CI acceptance.

Local evidence: `/private/tmp/tf-podcast-consumer-tests.log`, `/private/tmp/tf-podcast-consumer-build.log`, `/private/tmp/tf-podcast-consumer-baseline-build.log`, `/private/tmp/tf-podcast-consumer-corpus-check.json`, `/private/tmp/tf-podcast-consumer-search.json`, `/private/tmp/tf-podcast-consumer-review.md`. Builds: candidate `.native-build/run-Y3OA0V/public` in `/private/tmp/thought-foundry-podcast-20261009`; baseline `.native-build/run-CcA2RU/public` in `/private/tmp/thought-foundry-podcast-baseline-20261009`.

The producer's production receipt excludes live regeneration. This site work uses local successive build fixtures; neither check is a new production regeneration test.
