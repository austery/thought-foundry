// Shared fragment positioning also applies to X pages and articles without a TOC.
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const measureHeader = () => {
    const height = header && getComputedStyle(header).position === 'sticky' ? header.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty('--site-header-offset', `${height}px`);
    return height;
  };
  measureHeader();
  if (header) new ResizeObserver(measureHeader).observe(header);

  const followFragment = () => {
    // The previous reader numbered every H2/H3, including disclosures and
    // related-series navigation. Keep that ordering, not the new TOC subset.
    const legacy = /^#heading-(\d+)$/.exec(location.hash);
    const target = legacy
      ? document.querySelectorAll('#content-body h2, #content-body h3')[Number(legacy[1])]
      : /^#x-post-(?:heading-)?\d+$/.test(location.hash)
        ? document.getElementById(location.hash.slice(1)) : null;
    if (!target) return;
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent instanceof HTMLDetailsElement) parent.open = true;
    }
    const clearance = measureHeader() + 16;
    target.scrollIntoView({block: 'start', behavior: 'instant'});
    // Former numbering also exposed series headings outside .article-body,
    // which do not inherit the article heading scroll margin.
    const top = target.getBoundingClientRect().top;
    if (top < clearance) window.scrollBy({top: top - clearance, behavior: 'instant'});
  };
  window.addEventListener('hashchange', followFragment);
  requestAnimationFrame(followFragment);
});
