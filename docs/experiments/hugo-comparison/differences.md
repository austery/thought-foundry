# Compatibility Difference Ledger

Pinned content: `f8a8939248be4c1d4af6072381c06a4a79d00223`.
Candidate checkpoint: `3514703ac`. Complete local output: 12,101 HTML URLs and 10,307 actual indexed URLs, with no additions or omissions. This is an experiment candidate, not a production migration acceptance.

| Surface | Evidence and disposition |
| --- | --- |
| Legacy Markdown parsing | Six initial indexed DOM text differences were investigated. Preserve Liquid preprocessing, escape Nunjucks metadata, treat single tildes literally, and use MarkdownIt for one indented-code document (`Hidden_Potential_And_Education_thinking.md`). Corrected candidate has zero DOM indexed-text differences. |
| Navigation | 524 link-sequence differences remain, all outside `/content/`. Examples: `/areas/knowledge-meta/`, `/speakers/a16z/`. The legacy collections consume `getAll()` insertion order; date sorting retains insertion order for ties. Candidate uses deterministic descending source path order. This does not preserve the complete navigation ordering contract. Membership/pagination differences require batch classification; do not dismiss every difference as a harmless tie. Open migration blocker. |
| Unicode autolink display | `/content/posts/Navigating_AI_Wave_Brain_Science_Future_Strategy/`: the legacy text displays `https://zh.wikipedia.org/zh-cn/道德恐慌`; Hugo displays the percent-encoded path. Link targets match. This document is not indexed in the baseline. Open presentation difference. |
| Actual Pagefind text | `/content/notes/jwEYTEbfprw/` and `/content/posts/stock_tokenization_invest_pre_ipo_Gemini/`: actual fragments differ by three and one punctuation characters respectively, although normalized indexed DOM text matches. Representative boundaries are `Yes, that sounds.` and `PoR报告.`. Retain as actual index differences; URL counts alone are insufficient. |
| Legacy colon URL | Hugo 0.165.0 panics when directly assigned the existing colon-bearing post URL. Numeric internal routes followed by measured path restoration preserve all exact output filenames, including case. A real Hugo regression test covers the reproduced shape. |
| Search queries | Both outputs return identical counts and first three URLs for Chinese title/body `高考` (259) and speaker `夸克说` (137). Quoted gibberish, Cyrillic gibberish, and the Chinese phrase `量子菠萝不存在这篇文档` return zero on both. Unquoted Latin gibberish can return fuzzy matches in both; this is pre-existing behavior. |
| Presentation | Real Chrome checks at 390, 820 and 1440 pixels: equal title/headings/ToC, no horizontal overflow on the representative article, working persistent theme toggle and ToC navigation, no page errors. Phone and tablet screenshots inspected. This sample does not establish exhaustive visual parity. |

The raw complete difference list is retained in `evidence/local-candidate-comparison.json`. Do not relax the final compatibility gate merely because a difference is explained. No production behavior change has been accepted.
