// @ts-check
import { additionalPassages } from "./search-passages.mjs";
/** @typedef {{ title: string, url: string, excerpt: string }} Passage */
/** @typedef {{url: string, excerpt: string, meta: Record<string, string>, sub_results?: Passage[], raw_content?: string, locations?: number[]}} ArticleResult */
/** @typedef {{id: string, data: () => Promise<ArticleResult>}} ResultHandle */
/** @typedef {{filters: () => Promise<Record<string, Record<string, number>>>, search: (query: string | null, options: {filters: Record<string, string>}) => Promise<{results: ResultHandle[]}>}} SearchAPI */

const form = /** @type {HTMLFormElement} */ (document.querySelector('#archive-search'));
const query = /** @type {HTMLInputElement} */ (document.querySelector('#query'));
const exact = /** @type {HTMLInputElement} */ (document.querySelector('#exact'));
const speaker = /** @type {HTMLSelectElement} */ (document.querySelector('#speaker'));
const status = /** @type {HTMLElement} */ (document.querySelector('#search-status'));
const filterStatus = /** @type {HTMLElement} */ (document.querySelector('#filter-status'));
const results = /** @type {HTMLElement} */ (document.querySelector('#search-results'));
const more = /** @type {HTMLButtonElement} */ (document.querySelector('#search-more'));
const reload = document.createElement('button');
reload.type = 'button'; reload.textContent = '重新加载搜索'; reload.hidden = true;
reload.addEventListener('click', () => location.reload());
status.after(reload);
const bundle = '/pagefind/pagefind.js';
/** @type {Promise<SearchAPI> | undefined} */
let apiPromise;
function api() {
  apiPromise ??= import(bundle).catch(error => { apiPromise = undefined; throw error; });
  return apiPromise;
}
let revision = 0;
let offset = 0;
/** @type {ResultHandle[]} */
let handles = [];
const seen = new Set();

/** @param {string} tag @param {string} text */
function element(tag, text) {
  const node = document.createElement(tag);
  node.textContent = text;
  return node;
}
/** @param {string} value */
function localURL(value) {
  const url = new URL(value, location.href);
  if (url.origin !== location.origin || !['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid result URL');
  return url;
}
/** @param {string} title @param {string} url */
function link(title, url) {
  const a = document.createElement('a');
  a.textContent = title;
  a.href = localURL(url).href;
  return a;
}
/** @param {string} html */
function excerpt(html) {
  const p = document.createElement('p');
  p.className = 'search-excerpt';
  // Pagefind escapes content before adding marks. Also enforce a mark-only DOM.
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  /** @param {Node} node @param {Node} parent */
  function copy(node, parent) {
    if (node.nodeType === Node.TEXT_NODE) parent.appendChild(document.createTextNode(node.textContent ?? ''));
    else if (node instanceof Element) {
      const target = node.tagName === 'MARK' ? document.createElement('mark') : parent;
      if (target !== parent) parent.appendChild(target);
      for (const child of node.childNodes) copy(child, target);
    }
  }
  for (const child of parsed.body.childNodes) copy(child, p);
  return p;
}
/** @param {ArticleResult} data */
function card(data) {
  const article = document.createElement('article');
  article.className = 'search-result';
  const heading = document.createElement('h2');
  heading.append(link(data.meta.title || '未命名文章', data.url));
  article.append(heading);
  const metadata = element('p', [(data.meta.speaker || data.meta.author) && `作者 / 来源：${data.meta.speaker || data.meta.author}`, data.meta.date && `日期：${data.meta.date}`].filter(Boolean).join(' · '));
  metadata.className = 'search-metadata';
  article.append(metadata, excerpt(data.excerpt));
  const primaryPost = (data.sub_results ?? []).find(p => p.excerpt === data.excerpt && localURL(p.url).hash.startsWith('#x-post-heading-'));
  if (primaryPost) article.append(link(`跳到命中的帖子 · ${primaryPost.title}`, primaryPost.url));
  const sections = (data.sub_results ?? []).filter(p => p.excerpt !== data.excerpt);
  const passages = sections.length ? sections : additionalPassages(data).map(text => ({title: '查看原文', url: data.url, excerpt: text}));
  if (passages.length) {
    const details = document.createElement('details');
    details.append(element('summary', `查看其他命中片段（${passages.length}）`));
    for (const passage of passages) {
      const section = document.createElement('section');
      section.append(link(passage.title || '查看原文', passage.url), excerpt(passage.excerpt));
      details.append(section);
    }
    article.append(details);
  }
  return article;
}
/** @param {number} version */
async function loadPage(version) {
  more.disabled = true;
  results.setAttribute('aria-busy', 'true');
  try {
    const batch = await Promise.all(handles.slice(offset, offset + 10).map(h => h.data()));
    if (version !== revision) return;
    // Prepare the whole batch before changing the DOM, so retry is atomic.
    const entries = batch.map(data => ({key: localURL(data.url).pathname, node: card(data)}));
    for (const {key, node} of entries) if (!seen.has(key)) { seen.add(key); results.append(node); }
    offset += batch.length;
    more.hidden = offset >= handles.length;
    status.textContent = handles.length ? `找到 ${handles.length} 篇匹配文章，已显示 ${seen.size} 篇。` : '没有匹配文章。可以关闭完整短语或取消作者与来源筛选后重试。';
  } catch {
    if (version !== revision) return;
    status.textContent = '搜索结果加载失败，请重新加载搜索。';
    reload.hidden = false;
    more.hidden = true;
  } finally {
    if (version === revision) { more.disabled = false; results.setAttribute('aria-busy', 'false'); }
  }
}
function selection() {
  /** @type {[string, string]} */
  const pair = speaker.value ? JSON.parse(speaker.value) : ['', ''];
  return pair;
}
async function search() {
  const version = ++revision;
  reload.hidden = true;
  handles = []; offset = 0; seen.clear(); results.replaceChildren(); more.hidden = true;
  const text = query.value.replace(/[《》【】〔〕「」『』〈〉]/g, '').trim();
  const params = new URLSearchParams();
  if (query.value.trim()) params.set('q', query.value.trim());
  if (exact.checked) params.set('exact', '1');
  const [filterKey, filterValue] = selection();
  if (filterValue) params.set(filterKey === 'x_author' ? 'author' : 'speaker', filterValue);
  history.replaceState(null, '', `${location.pathname}${params.size ? '?' + params : ''}`);
  results.setAttribute('aria-busy', 'false');
  if (!text && !speaker.value) { status.textContent = '输入关键词开始搜索，也可以仅选择作者或来源。'; return; }
  status.textContent = '正在搜索…';
  results.setAttribute('aria-busy', 'true');
  // A phrase toggle owns the quotes; avoid nesting quotes from pasted queries.
  const phrase = text.replace(/["“”]/g, '').trim();
  const term = exact.checked && phrase ? `"${phrase}"` : text;
  try {
    const engine = await api();
    const response = await engine.search(term || null, {filters: filterValue ? {[filterKey]: filterValue} : {}});
    if (version !== revision) return;
    handles = response.results;
    await loadPage(version);
  } catch {
    if (version === revision) { status.textContent = '搜索暂时无法加载，请重新加载搜索。'; reload.hidden = false; results.setAttribute('aria-busy', 'false'); }
  }
}
form.addEventListener('submit', event => { event.preventDefault(); void search(); });
exact.addEventListener('change', () => { void search(); });
speaker.addEventListener('change', () => { void search(); });
more.addEventListener('click', () => { void loadPage(revision); });
const params = new URLSearchParams(location.search);
query.value = params.get('q') ?? '';
exact.checked = params.get('exact') === '1';
// An explicit X author wins if both source parameters are supplied.
const requestedAuthor = params.get('author');
const requestedSpeaker = params.get('speaker');
const requestedValue = requestedAuthor ? JSON.stringify(['x_author', requestedAuthor]) : requestedSpeaker ? JSON.stringify(['speaker', requestedSpeaker]) : '';
if (requestedValue) speaker.add(new Option(requestedAuthor || requestedSpeaker || '', requestedValue, true, true));
async function loadFilters() {
  try {
    const filters = await (await api()).filters();
    const selected = speaker.value;
    const legacyGroup = document.createElement('optgroup'); legacyGroup.label = '演讲者 / 来源';
    for (const [name, count] of Object.entries(filters.speaker ?? {}).sort(([a], [b]) => a.localeCompare(b, 'zh'))) legacyGroup.append(new Option(name + '（' + count + '）', JSON.stringify(['speaker', name])));
    const xGroup = document.createElement('optgroup'); xGroup.label = 'X 作者';
    /** @type {Map<string,string>} */
    const authorNames = new Map();
    try {
      const response = await fetch('/x-authors.json');
      if (!response.ok) throw new Error('Author labels unavailable');
      /** @type {unknown} */
      const authors = await response.json();
      if (Array.isArray(authors)) for (const author of /** @type {unknown[]} */ (authors)) if (author && typeof author === 'object' && 'id' in author && 'name' in author && typeof author.id === 'string' && typeof author.name === 'string') authorNames.set(author.id, author.name);
    } catch { /* Stable IDs remain usable if display labels cannot be loaded. */ }
    for (const [id, count] of Object.entries(filters.x_author ?? {})) xGroup.append(new Option((authorNames.get(id) || id) + ' · X（' + count + ' 页）', JSON.stringify(['x_author', id])));
    speaker.replaceChildren(new Option('全部作者与来源', ''), legacyGroup);
    if (xGroup.children.length) speaker.append(xGroup);
    if (selected && !Array.from(speaker.options).some(option => option.value === selected)) speaker.add(new Option('当前索引无此来源', selected));
    speaker.value = selected;
    speaker.disabled = false;
    filterStatus.replaceChildren();
  } catch {
    filterStatus.textContent = '作者与来源列表加载失败。';
    const retry = document.createElement('button');
    retry.type = 'button'; retry.textContent = '重试加载筛选';
    retry.addEventListener('click', () => location.reload());
    filterStatus.append(retry);
  }
}
void loadFilters();
if (query.value || requestedValue) void search();
