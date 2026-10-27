# Mobile reading and AI access

Date: 2026-09-26
Status: Research; recommendations are not implemented
Follow-up to [navigation and search UX](2026-09-26-navigation-search-ux.md)

## User intent

The primary workflow is increasingly to send one article URL to an AI assistant and discuss it. The user prefers less visible taxonomy and reports that Gemini Apps sometimes cannot read a link that ChatGPT can read. They confirmed that the question is about optimizing the site for AI access, not Google Search AI Overviews. No exact failed URL, error message, model/mode, or timestamp was supplied. This investigation cannot establish that failure's root cause.

## Mobile and tablet observations

Inspected the public article at https://austery.github.io/content/notes/-ywZlfznTa4/ in a desktop browser with responsive viewport overrides. These are layout checks, not physical-device Safari/touch/virtual-keyboard tests. Screenshots were inspected in the tool session, not saved to the repository.

| Viewport | Observed layout |
| --- | --- |
| 390 x 844 | TOC is 320px wide and 250px high, starts about 194px down the page, and has an internal scrollbar. The article container begins around y=589 after a 120px top margin. The title is repeated inside the TOC. The first viewport mainly contains navigation, TOC, empty space, and the beginning of metadata/summary. |
| 820 x 1180 | Portrait tablet still uses the narrow-layout rules: top TOC, 250px TOC height, 120px article margin. At a retained mid-article scroll position the large sticky TOC occupies the top of the reading viewport. |
| 1180 x 820 | Wide layout restores a side rail: measured TOC width 282px, article container width 733px, and zero article top margin. |

On the phone, a page-down scroll changed the TOC class to `sidebar-toc hidden`. During the transition, computed article margin was approximately 70px, between its 120px and 20px endpoints. The TOC also translated upward. This proves that reading-area geometry changes during the hide/show interaction; it does not quantify perceived scroll jumping or browser scroll anchoring.

### Why the current behavior is awkward

Two competing style layers are active:

- `src/css/base/_post.css:134` switches the report to column layout at 992px, attempts a fixed top TOC, and sets article margin to 120px; the hidden state changes it to 20px at line 166.
- `src/css/components/_sidebar.css:2`, imported later by `src/css/main.css:10`, changes the same selector back to `position: sticky`, `top: 20px`, and `flex: 0 0 250px`.
- Computed styles confirm sticky, not fixed. In the column layout the flex basis reserves vertical space. Disabling only sticky positioning would leave other spacing and scroll behavior unresolved.
- `src/js/post.js:85` toggles hidden states based on scroll direction. A small upward movement can therefore request the whole TOC again, even when the reader only wants to reread the preceding sentence.
- Article padding remains 30px on each side (`src/css/base/_post.css:69`), in addition to outer spacing. On a phone this further narrows Chinese text lines.

### Recommended interaction

Keep access to the TOC persistent, while keeping the expanded TOC out of the normal reading viewport.

| Option | Tradeoff | Recommendation |
| --- | --- | --- |
| Entire TOC remains sticky | Immediate access, but substantial obstruction and competing scroll regions | Avoid on narrow screens |
| Inline collapsed TOC only | Very quiet, but inconvenient to reopen deep in a long article | Suitable for short pages; insufficient as the sole long-article navigation |
| Compact persistent TOC control opening a bounded panel | One extra tap, but accessible anywhere without reserving a large content block | Preferred starting point |

A concrete prototype should use a roughly 44–48px compact bar labeled with TOC and the current section. Open a scrollable panel only on request; close it after choosing a section, keep the heading clear of the bar, and preserve the reading position when simply closing it. Do not animate article margins on scroll. Use explicit open/close behavior rather than expanding the whole TOC because scroll direction changed. If bottom placement is preferred for thumb reach, coordinate it with the existing floating original-text control and device safe areas.

This mechanism has a directly inspected reference: at 390px, [Starlight's sidebar guide](https://starlight.astro.build/guides/sidebar/) shows a compact “On this page” row with the current section. Clicking it reveals the hierarchical TOC while the initial closed state leaves room for the article. This observation supports the interaction pattern; it is not proof that its exact styling or all accessibility behavior fits this site.

Keep the side TOC where sufficient reading width remains, including wide tablet layouts. Use available space rather than the device name to choose the layout. Portrait tablet can use the compact control. Test long Chinese headings, short/no-heading articles, pinch zoom, rotation, touch scrolling, focus return, Escape, and reduced motion before shipping. The target bar size is a design proposal, not an experimentally established optimum.

## AI access: verified site facts

A direct HTTP GET for the sample article returned 200 and `text/html; charset=utf-8`. The initial HTML was 37,073 bytes and contained 24,628 text characters under `#content-body`, including folded content. Thus this sample does not require JavaScript to retrieve its article text. No `X-Robots-Tag` appeared in its response headers and no robots meta tag appeared in its HTML.

The sample also had:

- A correct document title but no h1.
- Two main elements and no article element; the site wrapper and article template both emit main.
- Six h3 section headings with no initial IDs. JavaScript subsequently creates `heading-0` through `heading-5` (`src/js/post.js:35`).
- Seven details elements; an extractor may include hidden English text, omit it, or duplicate concepts across languages. The text is present, but each product's extraction behavior remains untested.
- No canonical link in the sample HTML.

Public HEAD requests to `/robots.txt` and `/sitemap.xml` returned 404. `native/hugo.json:3` disables sitemap generation and line 6 disables robots generation. We did not inspect Search Console, crawler logs, Gemini's actual request, or every article type. These checks do not prove access from Google's infrastructure or explain the reported failure.

## Why ChatGPT and Gemini can differ

Separate three operations: discovering a URL through a search index, fetching a URL supplied by a user, and extracting enough usable text from the response. Success at one does not guarantee the others. Product-specific fetch paths, cached/indexed versions, transient errors, extraction limits, and model/tool choices are hypotheses to test, not established causes here.

[OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes OAI-SearchBot for search, GPTBot for model training, and ChatGPT-User for certain user-initiated visits. Search eligibility and training permission are independent. User-initiated visits are not automatic crawling, and robots rules may not apply to those visits. This establishes different access purposes, not which exact path served the user's successful conversation.

[Google's robots specification](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec) treats a robots 404 as no crawl restrictions; its REP explanation also distinguishes some user-controlled fetchers. Missing robots is therefore not evidence of blocking Google. [Google-Extended](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers#google-extended) is a control token for certain Gemini training/grounding uses, not a separate HTTP user agent and not the same control as Googlebot/Search.

[Gemini Apps source documentation](https://support.google.com/gemini/answer/14143489) describes related sources and citations, but does not promise successful reading of every public URL. Its existence of a source link is not a completeness check. [Gemini API URL Context](https://ai.google.dev/gemini-api/docs/url-context) documents a separate API tool; its cache/live-fetch mechanism must not be presented as the Gemini consumer app's implementation.

## Optimization priorities for link-based discussion

1. **Make the article self-contained and unambiguous in HTML.** Keep server-rendered text. Give the article a visible title/h1, a clear article region inside one page main, source URL, date, and explicit labels for summary versus original text. Generate stable heading IDs at build time and preserve public fragments. These improve structure and handoff quality; missing h1 is not proven to cause Gemini's fetch failure.
2. **Provide a user-controlled fallback.** Add Copy article and Download Markdown, containing title, canonical article URL, source/date, section headings, and selected text. Offer clear summary-only versus full/original choices when bilingual source text is large. Derive exports only from published content; do not expose raw private metadata or excluded maintenance files. This helps the user supply context when link reading fails, without promising automatic discovery of Markdown by either assistant.
3. **Improve discoverability independently.** Generate a sitemap using the final restored public paths, canonical links, and reliable ordinary HTML archive/pagination links. Keep excluded pages out of discovery surfaces according to the site's contract. [Google's sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) supports sitemaps for large sites and incomplete linking; it does not guarantee indexing or repair a failed direct URL read. Existing chronological pagination already helps; hiding taxonomy UI does not require removing that path.
4. **Keep Pagefind for people searching the site.** There is no evidence here that Gemini invokes the site's browser Pagefind bundle. A normal URL fetch of a client-rendered search page is not a public search API. An MCP service or server search endpoint is only worth considering if cross-article AI retrieval becomes a repeated unmet need; it is unnecessary for discussing one supplied article.
5. **Defer speculative AI SEO work.** [Google's current AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) explicitly says Google Search does not use llms.txt or special AI markup for inclusion, and does not require artificial chunking or special schema. That statement concerns Search, not all Gemini App behavior. A small optional llms.txt may help tools that deliberately read it, but it is not an established fix here. Avoid a giant full-corpus text file for a one-article workflow.

No restoration of a visible taxonomy tree is needed for these improvements. Minimal navigation and strong machine-readable article structure are compatible.

## Reproduction needed for the reported Gemini failure

When a failing link is available, use the same public URL and prompt in both products, recording date and product/mode. Ask for the article title, first and last section headings, and a brief paraphrase of the final section. Require an explicit statement if the body was not obtained. Compare against the HTML to distinguish complete failure, snippet-only access, stale content, and truncation. Then compare pasting/downloading the same published article text. A successful text upload with failed URL access narrows the problem to access/extraction rather than whether the model can discuss the material.

Do not claim a Gemini fix from a successful local curl request, an allowed robots rule, or a sitemap submission alone.

## Scope and next step

Research included a delegated Google-source investigation, official OpenAI documentation, live HTTP checks, and responsive browser inspection. No website code, content, crawler policy, deployment, or dependency was changed. Physical-device testing and the Gemini/ChatGPT same-link comparison remain unperformed. Next implementation priority is the compact mobile TOC and stable reading geometry, followed by article export and HTML structure/discovery improvements.
