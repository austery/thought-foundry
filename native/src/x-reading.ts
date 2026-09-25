import type { Metadata } from './model.js';

export interface XEntry {
  id: string; author: string; handle: string; published: string; saved: string;
  source: string; status: string; media: string; context: string; body: string; gaps: string;
  observedName?: string;
  related: { label: string; url: string }[];
}
export interface XReading { authorId: string; author: string; kind: string; date: string; entries: XEntry[]; }
const value = (v: unknown): string => typeof v === 'string' ? v : '';
// Decode only entities emitted by PureSubs' literal export, once, as plain text.
function decode(s: string): string {
  const entities: Record<string,string> = {'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&#123;':'{','&#125;':'}'};
  return s.replace(/&(amp|lt|gt|quot);|&#(39|123|125);/g, m => entities[m]!);
}
function field(body: string, name: string): string {
  const match = new RegExp(`^${name}: (.*)$`, 'm').exec(body);
  if (!match) throw new Error(`Missing X export field: ${name}`);
  return decode(match[1]!);
}
function safeUrl(url: string): string {
  const parsed = new URL(url);
  if (!['https:','http:'].includes(parsed.protocol)) throw new Error('Unsafe X source link');
  return url;
}
function relatedUrl(url: string, sourcePath: string): string {
  if (/^https?:/.test(url)) return safeUrl(url);
  if (!sourcePath || !/^(?:\.\.\/)*[a-zA-Z0-9_./-]+\.md(?:#x-post-\d+)?$/.test(url)) throw new Error('Unsafe X reading link');
  const target = new URL(url, `https://reading.invalid/${sourcePath}`);
  if (!target.pathname.startsWith('/content/clippings/x/')) throw new Error('X reading link outside originals');
  return target.pathname.replace(/\.md$/, '').replace(/\/index$/, '') + '/' + target.hash;
}
function entry(body: string, id: string, author: string, handle: string, source: string, sourcePath: string, observedName = author): XEntry {
  const blocks = [...body.matchAll(/<pre>([\s\S]*?)<\/pre>/g)];
  if (blocks.length !== 2) throw new Error('Unsupported X literal body blocks');
  const url = new URL(source);
  if (!['x.com','twitter.com'].includes(url.hostname) || !url.pathname.endsWith(`/status/${id}`)) throw new Error('X original URL identity mismatch');
  return {id,author,observedName,handle,published:field(body,'Original publication time'),saved:field(body,'Saved time'),source:safeUrl(source),status:field(body,'Text status'),media:field(body,'Media status'),context:field(body,'Context status'),body:decode(blocks[0]![1]!),gaps:decode(blocks[1]![1]!),related:[...body.matchAll(/<a href="([^"]+)">([^<]*)<\/a>/g)].map(m=>({url:relatedUrl(decode(m[1]!),sourcePath),label:decode(m[2]!)}))};
}
export function readX(meta: Metadata, body: string, sourcePath = ''): XReading | undefined {
  if (meta.x_source !== 'x') return undefined;
  const authorId=value(meta.x_author_id); if (!/^\d+$/.test(authorId)) throw new Error('Invalid X author ID');
  const kind=value(meta.x_kind); const entries:XEntry[]=[];
  let date='';
  if (kind==='DAILY_COLLECTION') {
    if (meta.x_export_policy!=='daily-literal-v1') throw new Error('Unsupported X daily export');
    date=value(meta.x_collection_date); if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || (!Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0,10)!==date)) throw new Error('Invalid X collection date');
    for (const match of body.matchAll(/<section id="x-post-(\d+)">([\s\S]*?)<\/section>/g)) {
      const content=match[2]!;const name=/^## (.*) · /m.exec(content)?.[1];
      const identity=/^Author ID: (\d+); handle: (.*)$/m.exec(content);
      if (!name || identity?.[1]!==authorId) throw new Error('X daily author mismatch');
      entries.push(entry(content,match[1]!,decode(name),identity[2]!,field(content,'Source').replace(/^<|>$/g,''),sourcePath));
    }
  } else if (kind==='POST' || kind==='ARTICLE') {
    if (meta.x_export_policy!=='original-literal-v1') throw new Error('Unsupported X original export');
    const id=value(meta.x_material_id).replace(/^x:post:/,'');if(!/^\d+$/.test(id)) throw new Error('Invalid X post ID');
    date=value(meta.x_original_published_at);
    if (date && !Number.isFinite(Date.parse(date))) throw new Error('Invalid X original date');
    const observedName = value(meta.x_observed_name).trim() || value(meta.x_observed_handle).trim();
    entries.push(entry(body,id,observedName||authorId,value(meta.x_observed_handle),value(meta.x_source_url),sourcePath,observedName));
  } else throw new Error('Unsupported X kind');
  if (!entries.length || new Set(entries.map(e=>e.id)).size!==entries.length) throw new Error('Missing or duplicate X entries');
  return {authorId,author:entries[0]!.author,kind,date,entries};
}
