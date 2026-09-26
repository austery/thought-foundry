// Chapter navigation is a progressive enhancement of the built article outline.
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.article-body');
  const container = document.getElementById('toc-container');
  const outline = document.querySelector('.article-outline');
  if (!body || !container || !outline) return;
  const headings = Array.from(body.querySelectorAll('h2, h3')).filter(h => !h.closest('details'));
  if (headings.length < 2) { container.remove(); return; }
  const mobile = window.matchMedia('(max-width: 992px)');
  const button = container.querySelector('button');
  const panel = container.querySelector('.toc-panel');
  const title = container.querySelector('.toc-current-title');
  const number = container.querySelector('.toc-current-number');
  if (!(button instanceof HTMLButtonElement) || !(panel instanceof HTMLElement) || !title || !number) return;
  const list = document.createElement('ol');
  /** @type {HTMLAnchorElement[]} */
  const links = [];
  /** @type {HTMLLIElement | null} */
  let section = null;
  headings.forEach((heading, i) => {
    if (!heading.id) {
      let id = `sec-${i}`;
      while (document.getElementById(id)) id += '-section';
      heading.id = id;
    }
    const item = document.createElement('li');
    item.className = heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    const label = document.createElement('span');
    label.className = 'toc-number'; label.textContent = String(i + 1).padStart(2, '0');
    link.append(label, document.createTextNode(heading.textContent || ''));
    item.append(link); links.push(link);
    if (heading.tagName === 'H3' && section) {
      let nested = section.querySelector('ol');
      if (!nested) { nested = document.createElement('ol'); section.append(nested); }
      nested.append(item);
    } else { list.append(item); if (heading.tagName === 'H2') section = item; }
  });
  panel.append(list);
  const above = document.createElement('p'), below = document.createElement('p');
  above.className = below.className = 'toc-edge';
  panel.prepend(above); panel.append(below);
  let current = 0;
  const edges = () => {
    const bounds = panel.getBoundingClientRect();
    above.textContent = `上方 ${links.filter(a => a.getBoundingClientRect().bottom < bounds.top).length} 节`;
    below.textContent = `下方 ${links.filter(a => a.getBoundingClientRect().top > bounds.bottom).length} 节`;
  }
  const close = () => {
    if (!container.hasAttribute('data-open')) return;
    container.removeAttribute('data-open'); button.setAttribute('aria-expanded', 'false');
    button.focus({preventScroll: true});
  }
  button.addEventListener('click', () => {
    if (container.hasAttribute('data-open')) { close(); return; }
    container.setAttribute('data-open', ''); button.setAttribute('aria-expanded', 'true');
    // Focus the first item without scrolling the page, then reveal the current item.
    links[0]?.focus({preventScroll: true});
    const active = links[current];
    if (active) panel.scrollTop += active.getBoundingClientRect().top - panel.getBoundingClientRect().top - panel.clientHeight / 2;
    edges();
  });
  document.addEventListener('click', e => { if (e.target instanceof Node && !container.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  links.forEach(link => link.addEventListener('click', close));
  panel.addEventListener('scroll', edges, {passive: true});
  mobile.addEventListener('change', () => {
    close();
    if (!mobile.matches && document.activeElement === button) links[current]?.focus({preventScroll: true});
  });
  const update = () => {
    const threshold = mobile.matches ? (window.innerWidth <= 768 ? 64 : 116) : 100;
    current = 0;
    headings.forEach((heading, i) => { if (heading.getBoundingClientRect().top <= threshold) current = i; });
    links.forEach((a, i) => { if (i === current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    title.textContent = headings[current]?.textContent || '';
    number.textContent = String(current + 1).padStart(2, '0');
    container.querySelectorAll('.toc-count').forEach(el => { el.textContent = `${current + 1}/${headings.length}`; });
    const rect = body.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (threshold - rect.top) / Math.max(1, rect.height - window.innerHeight + threshold)));
    container.style.setProperty('--progress', `${progress * 100}%`);
  }
  let queued = false;
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; update(); }); }
  }, {passive: true});
  container.hidden = false;
  update();
});
