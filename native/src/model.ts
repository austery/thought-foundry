import type { XReading } from './x-reading.js';
import slugify from '@sindresorhus/slugify';
import { pinyin } from 'pinyin';

export type Metadata = Record<string, unknown>;
export type Taxonomy = 'tags' | 'speakers' | 'categories' | 'projects' | 'areas';
export interface Link { name: string; url: string; }
export interface Article {
  id: string; source: string; url: string; date: string; dateLabel: string;
  xReading?: XReading; meta: Metadata; body: string; kind: string; layout: string;
  links: Record<Taxonomy, Link[]>; speakerLink: string; related: string[];
}
export interface Group { name: string; key: string; slug: string; url: string; posts: string[]; }
export interface Model {
  articles: Record<string, Omit<Article, 'body'>>;
  groups: Record<Taxonomy, Group[]>;
  areaDirectory: Group[];
  descending: string[]; ascending: string[]; books: string[];
}
export const taxonomies: Taxonomy[] = ['tags', 'speakers', 'categories', 'projects', 'areas'];
export const ordinal = (a: string, b: string): number => a < b ? -1 : a > b ? 1 : 0;
export const text = (value: unknown): string => value == null ? '' : String(value);
export function strings(value: unknown): string[] {
  if (Array.isArray(value) && value.every(v => typeof v === 'string')) return value;
  if (!value) return [];
  throw new Error('Expected an array of strings');
}
// Legacy templates iterate scalar strings character by character. Preserve this
// observable defect without treating malformed values as valid taxonomy arrays.
export function displayItems(value: unknown): string[] {
  return typeof value === 'string' ? Array.from(value) : strings(value);
}
export function makeSlugger(seed: Record<string, string> = {}): { slug: (name: string) => string; cache: Record<string, string> } {
  const cache: Record<string, string> = Object.assign(Object.create(null) as Record<string, string>, seed);
  return { cache, slug(name) {
    const key = name.trim();
    if (!Object.hasOwn(cache, key)) cache[key] = slugify(pinyin(key, { style: pinyin.STYLE_NORMAL }).join(' '));
    return cache[key]!;
  } };
}
export function dateValues(meta: Metadata, source: string, fallback: Date): { date: string; dateLabel: string } {
  const value = meta.date || source.match(/\d{4}-\d{2}-\d{2}/)?.[0];
  const date = value instanceof Date ? value : typeof value === 'string' ? new Date(value) : fallback;
  if (!Number.isFinite(date.getTime())) throw new Error(`Invalid date: ${source}`);
  const dateLabel = date.toLocaleDateString('en-US', { timeZone: 'UTC' });
  if (meta.date instanceof Date) meta.date = meta.date.toLocaleDateString('en-US', { timeZone: 'UTC' });
  return { date: date.toISOString(), dateLabel };
}
export function createModel(articles: Article[], slug: (s: string) => string): Model {
  const visible = articles.filter(a => /^(posts|books|notes|clippings)$/.test(a.kind) && !a.meta.exclude);
  const groups = Object.fromEntries(taxonomies.map(t => [t, []])) as unknown as Record<Taxonomy, Group[]>;
  for (const taxonomy of taxonomies) {
    const map = new Map<string, Group>();
    for (const article of visible) {
      const m = article.meta;
      let names: string[];
      if (taxonomy === 'tags') names = strings(m.tags).filter(t => !['post','note','视频文稿'].includes(t));
      else if (taxonomy === 'speakers') {
        const raw = [m.speaker, m.guest].flatMap(v => !v || text(v).trim() === "''" ? [] : text(v).split(',').map(s => s.trim()).filter(Boolean));
        names = [...new Map(raw.map(s => [s.toLowerCase(), raw.find(v => v.toLowerCase() === s.toLowerCase())!])).values()];
      } else if (taxonomy === 'projects') names = Array.isArray(m.project) ? strings(m.project).filter(s => s.trim()) : [];
      else names = m[taxonomy === 'areas' ? 'area' : 'category'] ? [text(m[taxonomy === 'areas' ? 'area' : 'category'])] : [];
      for (const raw of names) {
        const name = (taxonomy === 'speakers' ? raw.replace(/^['"]|['"]$/g, '') : raw).trim();
        if (taxonomy === 'speakers' && !name) continue;
        const key = taxonomy === 'tags' ? slug(name) : name.toLowerCase();
        const group = map.get(key) ?? { name, key, slug: '', url: '', posts: [] };
        group.posts.push(article.id); map.set(key, group);
      }
    }
    const values = [...map.values()].sort((a,b) => a.name.localeCompare(b.name, 'en'));
    const conflicts = new Map<string, Group[]>();
    for (const group of values) {
      const s = taxonomy === 'tags' ? group.key : slug(group.key);
      conflicts.set(s, [...conflicts.get(s) ?? [], group]);
    }
    for (const [s, matches] of conflicts) for (const [i,g] of matches.entries()) {
      g.slug = matches.length > 1 ? slug(`${g.key}-${i+1}`) : s;
      g.url = `/${taxonomy}/${g.slug}/`;
    }
    groups[taxonomy] = values.filter(g => taxonomy !== 'tags' || g.posts.length >= 5);
  }
  const findLink = (taxonomy: Taxonomy, name: string): Link => {
    const cleaned = taxonomy === 'speakers' ? name.replace(/^['"]|['"]$/g, '').trim() : name.trim();
    const group = groups[taxonomy].find(g => taxonomy === 'tags' ? g.name === name : g.key === cleaned.toLowerCase());
    return {name, url: group?.url ?? `/${taxonomy}/${slug(taxonomy === 'tags' ? name : cleaned.toLowerCase())}/`};
  };
  const byId = new Map(articles.map(a => [a.id, a]));
  const compare = (a: Article, b: Article): number => ordinal(b.date,a.date) || ordinal(a.url,b.url);
  for (const values of Object.values(groups)) for (const group of values) group.posts.sort((a,b) => compare(byId.get(a)!,byId.get(b)!));
  for (const article of articles) {
    const m = article.meta;
    m.tags_present = Boolean(m.tags);
    m.entities_present = Boolean(m.people || m.companies_orgs || m.products_models || m.media_books);
    article.links = {
      tags: strings(m.tags).map(t => ({ name:t, url: article.layout === 'book-note.njk' || groups.tags.some(g => g.name === t) ? findLink('tags',t).url : '' })),
      speakers: [],
      areas: m.area ? [findLink('areas',text(m.area))] : [],
      categories: m.category ? [findLink('categories',text(m.category))] : [],
      projects: displayItems(m.project).map(t => findLink('projects',t)),
    };
    article.speakerLink = m.speaker ? findLink('speakers',text(m.speaker)).url : '';
    // Store links alongside scalar metadata; templates own presentation.
    for (const key of ['speaker','guest']) m[`${key}_links`] = text(m[key]).split(',').map(s => s.trim()).filter(Boolean).map(s => findLink('speakers',s));
    for (const key of ['people','companies_orgs','products_models','media_books']) m[`${key}_items`] = displayItems(m[key]);
    article.related = !text(m.series).trim() ? [] : visible.filter(a => a.url !== article.url && text(a.meta.series).trim() === text(m.series).trim()).sort((a,b) => ordinal(a.date,b.date) || ordinal(a.url,b.url)).map(a => a.id);
  }
  return {
    articles: Object.fromEntries(articles.map(({body,...article}) => [article.id,article])), groups,
    areaDirectory: [...groups.areas].sort((a,b) => ordinal(a.name.toLowerCase(),b.name.toLowerCase())),
    descending: [...visible].sort(compare).map(a => a.id),
    ascending: [...visible].sort((a,b) => ordinal(a.date,b.date) || ordinal(a.url,b.url)).map(a => a.id),
    books: [...visible].filter(a => a.kind === 'books').sort(compare).map(a => a.id),
  };
}
