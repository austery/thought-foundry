import { gunzipSync } from 'node:zlib';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { files, type Inventory, type PageEvidence } from './evidence.js';

export interface IndexedPage { url: string; textHash: string; }
export async function indexedPages(site: string): Promise<IndexedPage[]> {
  const root = join(site, 'pagefind/fragment');
  const result: IndexedPage[] = [];
  for (const name of await files(root)) {
    if (!name.endsWith('.pf_fragment')) continue;
    const raw = gunzipSync(await readFile(join(root, name))).toString();
    if (!raw.startsWith('pagefind_dcd')) throw new Error('Unsupported Pagefind fragment format');
    const fragment: unknown = JSON.parse(raw.slice(12));
    if (!fragment || typeof fragment !== 'object' || !('url' in fragment) || typeof fragment.url !== 'string' || !('content' in fragment) || typeof fragment.content !== 'string') throw new Error(`Invalid fragment: ${name}`);
    const text = fragment.content.replace(/\u200b/gu, '').replace(/\s+/gu, ' ').trim();
    result.push({ url: fragment.url, textHash: createHash('sha256').update(text).digest('hex') });
  }
  if (new Set(result.map(p => p.url)).size !== result.length) throw new Error('Duplicate indexed URL');
  return result.sort((a,b) => a.url.localeCompare(b.url));
}
function difference(a: string[], b: string[]): string[] { const set = new Set(b); return a.filter(value => !set.has(value)).sort(); }
export function compareInventories(baseline: Inventory, candidate: Inventory): object {
  const left = new Map(baseline.pages.map(p => [p.url, p])); const right = new Map(candidate.pages.map(p => [p.url, p]));
  if (left.size !== baseline.pages.length || right.size !== candidate.pages.length) throw new Error('Duplicate rendered URL');
  const changed: Record<string, string[]> = { title: [], readingText: [], indexableText: [], headings: [], links: [], images: [] };
  for (const [url, a] of left) {
    const b = right.get(url); if (!b) continue;
    const fields: [string, keyof PageEvidence][] = [['title','title'],['readingText','readingTextHash'],['indexableText','textHash'],['headings','headings'],['links','links'],['images','images']];
    for (const [label, field] of fields) if (JSON.stringify(a[field]) !== JSON.stringify(b[field])) changed[label]!.push(url);
  }
  return { baselinePages: left.size, candidatePages: right.size, missing: difference([...left.keys()], [...right.keys()]), added: difference([...right.keys()], [...left.keys()]), changed };
}
export function compareIndexes(baseline: IndexedPage[], candidate: IndexedPage[]): object {
  const right = new Map(candidate.map(p => [p.url, p.textHash]));
  return { baselineIndexed: baseline.length, candidateIndexed: candidate.length, missing: difference(baseline.map(p => p.url), candidate.map(p => p.url)), added: difference(candidate.map(p => p.url), baseline.map(p => p.url)), changedText: baseline.filter(p => right.has(p.url) && right.get(p.url) !== p.textHash).map(p => p.url) };
}
