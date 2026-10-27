# Navigation and search UX for Thought Foundry

Date: 2026-09-26
Status: Research and recommendations; no implementation decision
Repository inspected: c8a66ae1ff117f59a1687e7d3bf67621d56e4f4d

## Recommendation

Keep the current editorial reading style and Pagefind engine. Make search prominent, keep global navigation small, and use the article sidebar for local orientation. Do not restore the full hidden taxonomy merely to fill a sidebar. Introduce curated topic landing pages only when they provide a coherent reading path and have an owner willing to maintain them.

These are design judgments based on the examples below, not a prevalence survey or measured usability findings. A documentation tree fits ordered material; a large mixed archive benefits from several independent ways to enter it.

## Evidence and current baseline

A delegated search agent used Exa for three navigation searches (15 candidate results) and fetched six primary sources. The parent ran one Pagefind search (five candidate results) and fetched four official pages. Thus 20 candidate results were screened across two workstreams; candidate counts are not unique-source counts. Browser screenshots and accessibility state were inspected for the live Thought Foundry homepage and search results, Quartz, Starlight, and Gwern. Screenshots were viewed in the tool session, not saved as repository artifacts. Mobile layouts were not inspected. Sources were accessed on the date above.

The checked-out implementation already uses a custom Pagefind browser API interface, not the old default Pagefind UI:

- Global links are Home, Tags, Sources, X Reading, and About, with a header search form: `native/layouts/partials/base.html:28`.
- Phrase mode, source selection, and a full search page already exist: `native/layouts/partials/standalone/search.html:8`.
- Result cards have title, source/author, date, highlighted excerpt, and expandable additional passages: `src/js/search.js:71`.
- Query and filters are represented in URL parameters, using `replaceState`: `src/js/search.js:123`. This preserves reload/share state, but does not create a separate browser-history entry for every query.
- Source options are populated from the whole filter inventory, including X authors: `src/js/search.js:163`.
- Article sidebars are page TOCs, not taxonomy navigation: `native/layouts/partials/post.html:3` and `src/js/post.js:16`. The script collects h2/h3 into a flat list.
- The dependency is pinned to Pagefind 1.5.2: `native/package.json:17`.

The live homepage showed the same five global destinations and a recent-content feed. In the desktop dark-mode screenshot, search was a small header control; the current serif typography, restrained gold accent, and divider-based lists already form an identifiable visual style. The live search page for `家庭关系` showed 2,165 matching articles and ten displayed results. Its large title/introduction and controls occupied most of the first viewport, with the first result near the bottom. This is a single live observation, not a relevance benchmark or stable corpus count. The production search header differed from the local base template by omitting the extra header search form; production/source byte equivalence was not established.

## Reference patterns

| Reference | Verified pattern | Transfer to this archive |
| --- | --- | --- |
| [Starlight sidebar](https://starlight.astro.build/guides/sidebar/) | Manual links and generated groups can be combined; labels, ordering, visibility, and collapsed groups are configurable. Desktop screenshot separates left navigation, central content, and right page TOC, with a distinct active item. | Borrow hierarchy and current-location clarity. Reserve long trees for ordered collections. |
| [Docusaurus sidebar](https://docusaurus.io/docs/sidebar) | Ordered document collections, multiple sidebars, breadcrumbs, and previous/next navigation. | Useful for series and books; not evidence that unrelated articles need one universal tree. |
| [Quartz Explorer](https://quartz.jzhao.xyz/features/explorer) | Folder/page exploration with collapse behavior, saved state, and customization. | Useful only when the underlying structure makes sense to readers. |
| [Quartz folder/tag listings](https://quartz.jzhao.xyz/features/folder-and-tag-listings) | Folder and tag indexes can have their own introductory content. | Preserve deep taxonomy routes while promoting only useful entry pages. |
| [PaperMod features](https://github.com/adityatelange/hugo-PaperMod/wiki/Features) | Archive, search, article TOC, breadcrumbs, and keyboard search navigation. | A small set of destinations can support a usable reading site. Its search engine is not a recommendation to replace Pagefind. |
| [Gwern homepage](https://gwern.net/) | Newest, Popular, Notable, and topic groupings provide multiple entry routes. Desktop screenshot uses editorial typography and compact grouped links rather than an exhaustive left tree. | Borrow curated discovery and explicit visit intents; its dense typography and floating controls need not be copied. |

Quartz's live desktop page showed an explorer and search on the left, content in the middle, and graph/TOC/backlinks on the right. This gives each rail a distinct job, but consumes substantial horizontal space. A graph is only useful here if meaningful inter-article links exist; imported content volume alone does not justify one. This is a recommendation, not a measured comparison.

## Proposed navigation and visual direction

Prefer a reading-oriented layout with a prominent search entry and a few stable destinations. A candidate global set is Recent, Sources, Topics, and About, with Search always accessible; retain X Reading when it serves a distinct browsing task. Topics is conditional on worthwhile curated pages. Existing tag indexes can remain reachable through a browse directory or article metadata.

Separate three jobs:

1. Global navigation answers where to go: search, recent additions, source directory, and optionally curated topics.
2. Collection navigation answers what comes next: chapters, series entries, or articles selected for one theme.
3. Page TOC answers where the reader is in this article.

For desktop, retain a generous reading column and one quiet TOC rail; avoid adding both a full site tree and another TOC rail by default. Indent subordinate headings, highlight the current section, use restrained backgrounds and borders, and keep long labels readable. Sidebar width around 220–260px is a prototype starting point, not a discovered optimum. For mobile, prototype an explicit collapsible TOC above the article and a compact navigation drawer. Verify focus behavior and reading space before adopting either.

Keep existing categories and URLs as metadata and deep links. Promote a topic only when its label is understandable, its contents are coherent, and its landing page offers a short introduction plus a useful starting sequence. Begin with a few manually selected topics rather than a new comprehensive taxonomy. If nobody will maintain selections, prefer source browsing and search; do not invent a Popular section without usage evidence.

## Search improvements without replacing the engine

[Pagefind Component UI](https://pagefind.app/docs/search-ui/) supplies modal and dropdown experiences as well as composable controls. The [searchbox documentation](https://pagefind.app/docs/components/searchbox/) describes Cmd/Ctrl+K, arrow navigation, Escape, custom result templates, and lazily loaded result data. The site can adopt these interactions through the existing custom UI or evaluate the official components; either route must preserve the current phrase/source/X-author behavior.

Recommended order:

| Priority | Change | Reason and boundary |
| --- | --- | --- |
| First | Compress the search page heading and helper text; move the first results higher | Directly addresses the observed desktop viewport. Verify mobile separately. |
| First | Add a global keyboard-accessible quick search, with an explicit link to full results | Helps known-item lookup without leaving an article; retain the full page for exploration and shareable filters. Choose either modal or dropdown in a prototype. |
| First | Make source selection searchable and show removable active-filter chips | The existing full-inventory select is mechanically functional; a searchable selector should be tested against actual source counts and keyboard use. |
| Next | Give results a short article summary plus a separate highlighted matching passage | Summary explains the article; passage explains the match. Summaries exist in article templates but are not currently emitted as search-result summary metadata (`native/layouts/partials/post.html:22`, `src/js/search.js:79`). Use excerpts alone where summaries are absent. |
| Next | Consider content-type or date controls only where metadata is dependable | Pagefind supports [explicit filter values](https://pagefind.app/docs/filtering/), but metadata must be indexed first. A type filter is not already present. Date ranges require deliberate representation and UI logic. |
| Later | Evaluate relevance with real queries before adjusting weights or retrieval architecture | [Pagefind weighting](https://pagefind.app/docs/weighting/) affects ranking and excerpt selection. It does not turn lexical search into semantic search or guarantee fewer matches. |

Preserve the already implemented phrase toggle, source intersection, URL state, collapsed additional passages, and loading/error handling. Treat summary quality and retrieval quality as distinct from visual polish. Before enabling heading deep links broadly, verify the final DOM anchors: the current TOC script rewrites h2/h3 IDs (`src/js/post.js:35`), so build-time search anchors and runtime anchors must agree. This is a compatibility risk identified from code, not a reproduced broken-link report.

## Small next experiment and acceptance

If implementation is requested, first compare two static layouts with the same real content: the current header plus improved TOC, and a compact left navigation rail with only a handful of destinations. Include a populated search state, an empty state, and one long article. Keep the current Hugo/Pagefind architecture.

Use desktop and approximately 390px mobile viewports. Check known-article lookup, source-plus-topic filtering, return from an article to results, section navigation, long titles, keyboard focus, Escape, empty results, and failed index loading. Evaluate the top five results on 15–20 real queries separately from visual preference. Measure startup/download cost if a new global search component loads on every page. None of these proposed acceptance checks was run in this research task.

Related earlier work: [static search options](2026-09-13-static-search-options.md) and [search controls validation](search-controls-validation.md). Their historical counts and test results are not new validation for this report.

No site code, content, taxonomy target, deployment, or dependencies were changed. The working tree already contained a modified content submodule and an untracked `pr-reviews/` directory; this research leaves them untouched.
