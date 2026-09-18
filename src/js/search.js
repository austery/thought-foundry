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
  const metadata = element('p', [data.meta.speaker && `演讲者 / 来源：${data.meta.speaker}`, data.meta.date && `日期：${data.meta.date}`].filter(Boolean).join(' · '));
  metadata.className = 'search-metadata';
  article.append(metadata, excerpt(data.excerpt));
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
    status.textContent = handles.length ? `找到 ${handles.length} 篇匹配文章，已显示 ${seen.size} 篇。` : '没有匹配文章。可以关闭完整短语或取消演讲者筛选后重试。';
  } catch {
    if (version !== revision) return;
    status.textContent = '搜索结果加载失败，请重试。';
    more.hidden = false;
  } finally {
    if (version === revision) { more.disabled = false; results.setAttribute('aria-busy', 'false'); }
  }
}
async function search() {
  const version = ++revision;
  handles = []; offset = 0; seen.clear(); results.replaceChildren(); more.hidden = true;
  const text = query.value.replace(/[《》【】〔〕「」『』〈〉]/g, '').trim();
  const params = new URLSearchParams();
  if (query.value.trim()) params.set('q', query.value.trim());
  if (exact.checked) params.set('exact', '1');
  if (speaker.value) params.set('speaker', speaker.value);
  history.replaceState(null, '', `${location.pathname}${params.size ? '?' + params : ''}`);
  results.setAttribute('aria-busy', 'false');
  if (!text && !speaker.value) { status.textContent = '输入关键词开始搜索，也可以仅选择演讲者。'; return; }
  status.textContent = '正在搜索…';
  results.setAttribute('aria-busy', 'true');
  // A phrase toggle owns the quotes; avoid nesting quotes from pasted queries.
  const phrase = text.replace(/["“”]/g, '').trim();
  const term = exact.checked && phrase ? `"${phrase}"` : text;
  try {
    const engine = await api();
    const response = await engine.search(term || null, {filters: speaker.value ? {speaker: speaker.value} : {}});
    if (version !== revision) return;
    handles = response.results;
    await loadPage(version);
  } catch {
    if (version === revision) { status.textContent = '搜索暂时无法加载，请点击搜索重试。'; results.setAttribute('aria-busy', 'false'); }
  }
}
form.addEventListener('submit', event => { event.preventDefault(); void search(); });
exact.addEventListener('change', () => { void search(); });
speaker.addEventListener('change', () => { void search(); });
more.addEventListener('click', () => { void loadPage(revision); });
const params = new URLSearchParams(location.search);
query.value = params.get('q') ?? '';
exact.checked = params.get('exact') === '1';
const requestedSpeaker = params.get('speaker');
if (requestedSpeaker) speaker.add(new Option(requestedSpeaker, requestedSpeaker, true, true));
async function loadFilters() {
  try {
    const filters = await (await api()).filters();
    const selected = speaker.value;
    speaker.replaceChildren(new Option('全部演讲者', ''));
    for (const [name, count] of Object.entries(filters.speaker ?? {}).sort(([a], [b]) => a.localeCompare(b, 'zh'))) speaker.add(new Option(`${name}（${count}）`, name));
    if (selected && !Object.hasOwn(filters.speaker ?? {}, selected)) speaker.add(new Option(`${selected}（当前索引无此来源）`, selected));
    speaker.value = selected;
    speaker.disabled = false;
    filterStatus.replaceChildren();
  } catch {
    filterStatus.textContent = '演讲者列表加载失败。';
    const retry = document.createElement('button');
    retry.type = 'button'; retry.textContent = '重试加载筛选';
    retry.addEventListener('click', () => { void loadFilters(); });
    filterStatus.append(retry);
  }
}
void loadFilters();
if (query.value || requestedSpeaker) void search();
