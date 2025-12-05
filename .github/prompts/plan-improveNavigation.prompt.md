# Plan: Improve Blog Navigation UX

This 11ty blog has 9 flat navigation items, no mobile support, and hidden content sections. The plan focuses on adding mobile navigation, reorganizing links logically, and making all content discoverable.

## Steps

1. **Add mobile hamburger menu** — Create toggle button and collapsible navigation in `src/_includes/base.njk`, add JavaScript handler, and responsive CSS in `src/css/navigation.css` with breakpoint at ~768px.

2. **Group navigation links with dropdowns** — Reorganize 9 items into logical groups: "Home", "Browse" (Areas, Categories, Tags, Projects), "Content" (Speakers, Bookshelf), "About", reducing cognitive load.

3. **Add active page indicator** — Implement CSS class for current page highlighting in navigation using 11ty's `page.url` in templates.

4. **Expose hidden entity pages** — Add navigation or footer links to discoverable People, Companies, Products, and Media-Books pages that currently exist but aren't in nav.

5. **Add breadcrumb navigation** — Create breadcrumb partial for content pages linking back to parent taxonomy (e.g., `Home > Areas > Tech Insights > [Post Title]`).

6. **Consolidate navigation CSS** — Merge duplicate styles from `navigation.css`, `header.css`, and `style.css` into single source.

## Further Considerations

1. **Remove or hide "Tools" link?** The `/tool/` page is empty ("coming!!!") — hide until ready, or remove from nav?

2. **Language consistency?** Site title is English but nav is Chinese — should nav labels also be English, or add bilingual support?

3. **Dropdown implementation approach?** Pure CSS dropdowns (simpler) vs JavaScript-enhanced (better accessibility) — recommend CSS with JS enhancement for keyboard navigation.
