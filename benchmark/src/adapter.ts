import { readFile, writeFile, mkdir, cp, stat, rename, symlink } from 'node:fs/promises';
import { join, dirname, resolve, sep } from 'node:path';
import { createRequire } from 'node:module';
import matter from 'gray-matter';
import nunjucks from 'nunjucks';
import { Liquid } from 'liquidjs';
import MarkdownIt from 'markdown-it';
import { files } from './evidence.js';

interface Document { inputPath: string; filePathStem: string; url: string; date: Date; data: Record<string, unknown>; body: string; }
type Filter = (...args: unknown[]) => unknown;
interface CollectionApi { getAll(): Document[]; getFilteredByGlob(glob: string): Document[]; }
interface LegacyConfig { addFilter(name: string, fn: Filter): void; getFilter(name: string): Filter; addCollection(name: string, fn: (api: CollectionApi) => unknown): void; addPassthroughCopy(path: string): void; on(event: string, fn: () => Promise<void>): void; }
const slot = '<!-- THOUGHT_FOUNDRY_HUGO_BODY_056 -->';
function record(value: unknown): Record<string, unknown> { if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Expected metadata object'); return value as Record<string, unknown>; }
function dateOf(data: Record<string, unknown>, name: string, fallback: Date): Date {
  const value = data.date || name.match(/\d{4}-\d{2}-\d{2}/)?.[0];
  const date = value instanceof Date ? value : typeof value === 'string' ? new Date(value) : fallback;
  if (!Number.isFinite(date.getTime())) throw new Error(`Invalid date: ${name}`);
  return date;
}
function sortDocuments(a: Document, b: Document): number { return a.date.getTime() - b.date.getTime() || (a.inputPath > b.inputPath ? 1 : a.inputPath < b.inputPath ? -1 : 0); }
function globMatch(path: string, pattern: string): boolean {
  const escaped = pattern.replace(/[.+^$()|[\]\\]/g, '\\$&').replace(/\{([^}]+)\}/g, '($1)').replace(/,/g, '|').replace(/\*\*\//g, '(?:.*/)?').replace(/(?<!\.)\*/g, '[^/]*');
  return new RegExp(`^${escaped}$`).test(path);
}
export async function adapt(site: string, destination: string): Promise<{ documents: number; navigationPages: number }> {
  const sourceDir = join(site, 'src');
  const allNames = (await files(sourceDir)).filter(name => /\.(md|njk)$/.test(name) && !name.startsWith('_includes/') && !name.startsWith('_11ty/'));
  const documents: Document[] = [];
  for (const name of allNames.filter(n => n.endsWith('.md'))) {
    const raw = await readFile(join(sourceDir, name), 'utf8');
    const parsed = matter(raw); const data = record(parsed.data);
    const filePathStem = '/' + name.replace(/\.md$/, '').replace(/\/index$/, '');
    const date = dateOf(data, name, (await stat(join(sourceDir, name))).birthtime);
    const url = filePathStem + '/';
    documents.push({ inputPath: './src/' + name, filePathStem, url, date, data, body: parsed.content });
  }
  // Use deterministic descending input order; legacy equal-date collection ties are reported.
  documents.sort((a,b) => a.inputPath < b.inputPath ? 1 : a.inputPath > b.inputPath ? -1 : 0);
  const filters = new Map<string, Filter>();
  const factories = new Map<string, (api: CollectionApi) => unknown>();
  const hooks = new Map<string, (() => Promise<void>)[]>();
  const config: LegacyConfig = {
    addFilter: (name, fn) => { filters.set(name, fn); },
    getFilter: name => { const filter = filters.get(name); if (!filter) throw new Error(`Missing filter ${name}`); return filter; },
    addCollection: (name, fn) => { factories.set(name, fn); },
    addPassthroughCopy: () => {},
    on: (event, fn) => { hooks.set(event, [...hooks.get(event) ?? [], fn]); },
  };
  const require = createRequire(join(site, 'package.json'));
  const configure: (config: LegacyConfig) => Promise<unknown> = require(join(site, '.eleventy.js'));
  await configure(config);
  for (const hook of hooks.get('eleventy.before') ?? []) await hook();
  const collections: Record<string, unknown> = {};
  const api: CollectionApi = { getAll: () => [...documents], getFilteredByGlob: glob => documents.filter(doc => globMatch(doc.inputPath, glob)).sort(sortDocuments) };
  for (const [name, factory] of factories) collections[name] = factory(api);
  const env = new nunjucks.Environment(undefined, { autoescape: true, throwOnUndefined: false });
  env.addFilter('url', (value: unknown) => value);
  for (const [name, filter] of filters) env.addFilter(name, filter);
  const templates = new Map<string, { template: nunjucks.Template; parent: unknown }>();
  for (const name of await files(join(sourceDir, '_includes'))) {
    if (!name.endsWith('.njk')) continue;
    const parsed = matter(await readFile(join(sourceDir, '_includes', name), 'utf8'));
    templates.set(name, { template: nunjucks.compile(parsed.content, env), parent: parsed.data.layout });
  }
  function wrap(content: string, layout: unknown, data: Record<string, unknown>): string {
    if (!layout) return content;
    if (typeof layout !== 'string') throw new Error('Invalid layout');
    const entry = templates.get(layout); if (!entry) throw new Error(`Unsupported layout ${layout}`);
    return wrap(entry.template.render({ ...data, content }), entry.parent, data);
  }
  await mkdir(join(destination, 'content'), { recursive: true });
  await mkdir(join(destination, 'layouts/_default'), { recursive: true });
  await mkdir(join(destination, 'static'), { recursive: true });
  await writeFile(join(destination, 'hugo.json'), JSON.stringify({ baseURL: 'https://austery.github.io/', security: { allowContent: ['^text/html$', '^text/markdown$'] }, disableKinds: ['home','section','taxonomy','term','rss','sitemap'], disableAliases: true, disablePathToLower: true, enableRobotsTXT: false, markup: { goldmark: { renderer: { unsafe: true }, parser: { autoHeadingID: false }, extensions: { linkify: false, typographer: false, strikethrough: false, extras: { delete: { enable: true } }, footnote: { enable: false }, definitionList: false, taskList: false } }, highlight: { codeFences: false } } }, null, 2));
  await writeFile(join(destination, 'layouts/_default/single.html'), '{{ .Params.before | safeHTML }}{{ .Content }}{{ .Params.after | safeHTML }}');
  const usedUrls = new Set<string>();
  const routes: { internal: string; legacy: string }[] = [];
  function reserve(url: string): void { if (!url.startsWith('/') || url.includes('..') || usedUrls.has(url)) throw new Error(`Unsafe or duplicate URL: ${url}`); usedUrls.add(url); }
  const liquid = new Liquid();
  const syntaxProbe = new MarkdownIt({ html: true });
  const legacyMarkdown = new MarkdownIt({ html: true }).disable('code');
  const markdownFallbacks: string[] = [];
  for (const [index, doc] of documents.entries()) {
    const data = { ...doc.data, collections, page: { url: doc.url, inputPath: doc.inputPath, filePathStem: doc.filePathStem, date: doc.date } };
    const shell = wrap(slot, doc.data.layout, data); const parts = shell.split(slot);
    if (parts.length !== 2) throw new Error(`Body slot was lost or duplicated: ${doc.inputPath}`);
    reserve(doc.url);
    const internal = `/__comparison_pages/${index}/`;
    routes.push({ internal, legacy: doc.url });
    // Escape shortcode-looking examples in generated copies only. Never edit source documents.
    const rendered: unknown = /\{[{%]/.test(doc.body) ? await liquid.parseAndRender(doc.body, data) : doc.body;
    if (typeof rendered !== 'string') throw new Error(`Invalid rendered body: ${doc.inputPath}`);
    const indentedCode = /^ {4,}\S/m.test(rendered) && syntaxProbe.parse(rendered, {}).some(token => token.type === 'code_block');
    const body = indentedCode ? legacyMarkdown.render(rendered) : escapeShortcodes(rendered);
    if (indentedCode) markdownFallbacks.push(doc.inputPath);
    await writeFile(join(destination, 'content', `document-${index}.${indentedCode ? 'html' : 'md'}`), JSON.stringify({ title: String(doc.data.title ?? ''), url: internal, type: 'page', draft: false, before: parts[0], after: parts[1] }) + '\n' + body);
  }
  let navigationPages = 0;
  for (const name of allNames.filter(n => n.endsWith('.njk'))) {
    const parsed = matter(await readFile(join(sourceDir, name), 'utf8')); const front = record(parsed.data);
    const pagination = front.pagination ? record(front.pagination) : undefined;
    const collectionName = pagination ? String(pagination.data).replace(/^collections\./, '') : '';
    const source = pagination ? collections[collectionName] : [null];
    if (!Array.isArray(source)) throw new Error(`Unknown paginated collection: ${name}`);
    const size = pagination ? Number(pagination.size) : 1;
    if (!Number.isInteger(size) || size < 1) throw new Error(`Invalid pagination: ${name}`);
    const chunks: unknown[][] = []; for (let i=0; i<source.length; i+=size) chunks.push(source.slice(i,i+size));
    const template = nunjucks.compile(parsed.content, env);
    const contexts = chunks.map((chunk, pageNumber) => ({ ...front, collections, ...(pagination ? { [String(pagination.alias)]: size === 1 ? chunk[0] : chunk } : {}), pagination: { pageNumber, pages: chunks, href: { previous: null as string | null, next: null as string | null } }, page: { url: '' } }));
    const urls = contexts.map(context => typeof front.permalink === 'string' ? env.renderString(front.permalink, context) : '/' + name.replace(/\.njk$/, '') + '/');
    for (const [index, context] of contexts.entries()) {
      const url = urls[index]!; reserve(url); context.page.url = url;
      context.pagination.href.previous = urls[index-1] ?? null; context.pagination.href.next = urls[index+1] ?? null;
      const html = wrap(template.render(context), front.layout, context);
      const output = join(destination, 'static', url.slice(1), 'index.html');
      await mkdir(dirname(output), { recursive: true }); await writeFile(output, html); navigationPages++;
    }
  }
  for (const folder of ['css','js']) await cp(join(sourceDir, folder), join(destination, 'static', folder), { recursive: true });
  await writeFile(join(destination, 'routes.json'), JSON.stringify(routes));
  const summary = { documents: documents.length, navigationPages };
  await writeFile(join(destination, 'adaptation.json'), JSON.stringify({ ...summary, markdownFallbacks }));
  for (const hook of hooks.get('eleventy.after') ?? []) await hook();
  return summary;
}


export async function restoreLegacyPaths(staging: string, output: string): Promise<void> {
  const routes: unknown = JSON.parse(await readFile(join(staging, 'routes.json'), 'utf8'));
  if (!Array.isArray(routes)) throw new Error('Invalid route manifest');
  const root = resolve(output);
  for (const route of routes) {
    const value = record(route);
    if (typeof value.internal !== 'string' || !/^\/__comparison_pages\/\d+\/$/.test(value.internal) || typeof value.legacy !== 'string') throw new Error('Invalid route');
    const source = resolve(root, '.' + value.internal, 'index.html');
    const target = resolve(root, '.' + value.legacy, 'index.html');
    if (!target.startsWith(root + sep)) throw new Error('Route escaped output root');
    try { await stat(target); throw new Error(`Output collision: ${value.legacy}`); }
    catch (error) { if (!(error instanceof Error) || !('code' in error) || error.code !== 'ENOENT') throw error; }
    await mkdir(dirname(target), { recursive: true });
    await rename(source, target);
  }
}


export async function prepareCandidateSource(site: string, destination: string): Promise<void> {
  await mkdir(destination, { recursive: true });
  for (const name of ['.eleventy.js', 'package.json']) await cp(join(site, name), join(destination, name), { errorOnExist: true, force: false });
  // Share only immutable source and dependencies; each engine owns its cache and outputs.
  await symlink(join(site, 'src'), join(destination, 'src'), 'dir');
  await symlink(join(site, 'node_modules'), join(destination, 'node_modules'), 'dir');
}


export function escapeShortcodes(body: string): string {
  const escaped = body.replace(/\{\{([<%])([\s\S]*?)([>%])\}\}/g, (whole: string, open: string, content: string, close: string) => {
    if ((open === '<' && close !== '>') || (open === '%' && close !== '%')) throw new Error('Mismatched shortcode example');
    return `{{/*${open}${content}${close}*/}}`;
  });
  if (/\{\{[<%]/.test(escaped)) throw new Error('Incomplete shortcode example requires explicit compatibility handling');
  return escaped;
}
