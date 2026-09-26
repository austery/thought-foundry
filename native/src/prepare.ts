import { createHash } from 'node:crypto';
import { finishReadingPage } from './reading.js';
import { createXDiscovery } from './x-discovery.js';
import { readX } from './x-reading.js';
import { readFile, writeFile, mkdir, cp, stat, readdir, rename } from 'node:fs/promises';
import { join, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { Liquid } from 'liquidjs';
import { createModel, dateValues, makeSlugger, ordinal, text, type Article, type Metadata, type Taxonomy } from './model.js';

export async function files(root: string): Promise<string[]> {
  const out: string[] = [];
  for (const e of (await readdir(root,{withFileTypes:true})).sort((a,b) => ordinal(a.name,b.name))) {
    if (e.name === '.git') continue;
    if (e.isDirectory()) out.push(...(await files(join(root,e.name))).map(n => `${e.name}/${n}`));
    else if (e.isFile()) out.push(e.name);
    else throw new Error(`Unsupported input entry: ${join(root,e.name)}`);
  }
  return out;
}
export function record(v: unknown): Metadata {
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error('Expected metadata object');
  return v as Metadata;
}
export function escapeShortcodes(body: string): string {
  const escaped = body.replace(/\{\{([<%])([\s\S]*?)([>%])\}\}/g, (_whole: string, open: string, content: string, close: string) => {
    if ((open === '<' && close !== '>') || (open === '%' && close !== '%')) throw new Error('Mismatched shortcode example');
    return `{{/*${open}${content}${close}*/}}`;
  });
  if (/\{\{[<%]/.test(escaped)) throw new Error('Incomplete shortcode example');
  return escaped;
}
export interface Route { internal: string; legacy: string; }
function targetPath(root: string, url: string): string {
  if (!url.startsWith('/') || !url.endsWith('/') || url.includes('\\') || url.split('/').some(p => p === '..' || p === '.')) throw new Error(`Unsafe URL: ${url}`);
  const target = resolve(root, '.' + url, 'index.html');
  if (!target.startsWith(resolve(root) + sep)) throw new Error(`Escaping URL: ${url}`);
  return target;
}
export async function prepare(site: string, destination: string, cacheFile?: string): Promise<void> {
  if(process.env.NODE_ENV === 'production' || process.env.OPTIMIZE_SEARCH === 'true') throw new Error('Legacy optional Chinese search segmentation is outside the native compatibility contract');
  // Refuse to overwrite an earlier build or accidentally stage into source.
  if (resolve(site) === resolve(destination) || resolve(destination).startsWith(resolve(site,'src') + sep)) throw new Error('Staging overlaps source');
  await mkdir(destination);
  const native = fileURLToPath(new URL('..',import.meta.url));
  await cp(join(native,'layouts'),join(destination,'layouts'),{recursive:true});
  await cp(join(native,'hugo.json'),join(destination,'hugo.json'));
  for (const dir of ['content','data','static']) await mkdir(join(destination,dir));
  for (const dir of ['css','js']) await cp(join(site,'src',dir),join(destination,'static',dir),{recursive:true});
  const source = join(site,'src');
  const articles: Article[] = [];
  for (const name of (await files(source)).filter(n => n.endsWith('.md') && !/^(_includes|_11ty)\//.test(n))) {
    const raw = await readFile(join(source,name),'utf8');
    const parsed = matter(raw);
    const meta = record(parsed.data);
    if (Object.hasOwn(meta,'permalink')) throw new Error(`Explicit permalink requires migration handling: ${name}`);
    const xReading = readX(meta,parsed.content,name);
    const layout = xReading ? 'x-original' : text(meta.layout);
    if (!['','post.njk','book-note.njk','base.njk','default.njk'].includes(text(meta.layout))) throw new Error(`Unsupported layout ${text(meta.layout)}: ${name}`);
    if (xReading) meta.title = `${xReading.author} · ${xReading.date.slice(0,10) || '日期未知'} · ${xReading.kind === 'DAILY_COLLECTION' ? `${xReading.entries.length} 条帖子` : xReading.kind === 'ARTICLE' ? '长文' : '帖子'}`;
    const dates = xReading ? {date:xReading.date ? new Date(xReading.date).toISOString() : '',dateLabel:xReading.date.slice(0,10) || '日期未知'} : dateValues(meta,name,(await stat(join(source,name))).birthtime);
    if (layout === 'post.njk') {
      const exports = join(destination,'static','reader');
      await mkdir(exports,{recursive:true});
      await writeFile(join(exports,`${createHash('sha256').update(name).digest('hex')}.md`),raw);
    }
    articles.push({xReading,id:`d${articles.length}`, source:name, url:`/${name.replace(/\.md$/,'').replace(/\/index$/,'')}/`,
      ...dates, meta, body:parsed.content, kind:name.split('/')[1] ?? '', layout,
      links:{tags:[],speakers:[],categories:[],projects:[],areas:[]}, speakerLink:'', related:[]});
  }
  // Preserve legacy first-seen display names independently of article ordering.
  // Full-corpus comparison checks taxonomy URLs and labels against the baseline.
  articles.sort((a,b) => -ordinal(a.source,b.source));
  let seed: Record<string,string> = {};
  if (cacheFile) {
    const value = record(JSON.parse(await readFile(cacheFile,'utf8')));
    if (!Object.values(value).every(v => typeof v === 'string')) throw new Error('Invalid slug cache');
    seed = value as Record<string,string>;
  }
  const {slug,cache} = makeSlugger(seed);
  const model = createModel(articles,slug);
  const discovery = createXDiscovery(articles);
  await writeFile(join(destination,'data','xdiscovery.json'),JSON.stringify(discovery));
  await writeFile(join(destination,'static','x-authors.json'),JSON.stringify(discovery.authors));
  await writeFile(join(destination,'data','archive.json'),JSON.stringify(model));
  const routes: Route[] = []; const targets = new Set<string>();
  async function page(url: string, params: Metadata, body = ''): Promise<void> {
    const target = targetPath(join(destination,'public'),url);
    if (targets.has(target)) throw new Error(`Duplicate URL: ${url}`);
    targets.add(target);
    const id = routes.length; const internal = `/__native_pages/${id}/`;
    routes.push({internal,legacy:url});
    await writeFile(join(destination,'content',`page-${id}.md`),JSON.stringify({title:'',url:internal,type:'page',draft:false,params:{...params,publicurl:url}})+'\n'+body);
  }
  const liquid = new Liquid();
  const preprocessed: string[] = [];
  for (const article of articles) {
    if (article.xReading) {
      // The X partial reads literal data; never pass its source through templates.
      await page(article.url,{view:'article',articleid:article.id,pagetitle:text(article.meta.title)});
      continue;
    }
    // Expand legacy Liquid expressions into Markdown, never into a second HTML
    // body renderer. Hugo owns the resulting Markdown-to-HTML conversion.
    const context = {...article.meta,page:{url:article.url,inputPath:`./src/${article.source}`,filePathStem:article.url.slice(0,-1),date:new Date(article.date)}};
    const rendered: unknown = /\{[{%]/.test(article.body) ? await liquid.parseAndRender(article.body,context) : article.body;
    if (typeof rendered !== 'string') throw new Error(`Invalid Liquid result: ${article.source}`);
    if (rendered !== article.body) preprocessed.push(article.source);
    await page(article.url,{view:'article',articleid:article.id,pagetitle:text(article.meta.title)},escapeShortcodes(rendered));
  }
  const homeSize = 30;
  const homePages = Math.max(1, Math.ceil(model.descending.length / homeSize));
  const homeUrl = (number: number): string => number === 1 ? '/' : `/page/${number}/`;
  for (let number = 1; number <= homePages; number++) {
    await page(homeUrl(number), {
      view:'home', pagetitle:number === 1 ? 'The Learning Grove | Home' : `林间拾穗 · 第 ${number} 页`,
      offset:(number - 1) * homeSize, size:homeSize, pagenumber:number, pagecount:homePages,
      previous:number > 1 ? homeUrl(number - 1) : '', next:number < homePages ? homeUrl(number + 1) : '',
    });
  }
  for (const [view,url,title] of [
    ['about','/about/','关于本站'],['search','/search/','搜索'],['debug-series','/debug-series/',''],
  ]) await page(url!,{view,pagetitle:title});
  for (const [index,feed] of discovery.feeds.entries()) {
    if (feed.url === '/x/' && discovery.days.length) await page('/x/',{view:'x-day',dayindex:0,pagetitle:'X 阅读'});
    else await page(feed.url,{view:'x-feed',feedindex:index,pagetitle:feed.title});
  }
  if (discovery.days.length) await page('/x/archive/',{view:'x-feed',feedindex:0,pagetitle:'X 阅读 · 历史记录'});
  for (const [index,day] of discovery.days.entries()) await page(day.url,{view:'x-day',dayindex:index,pagetitle:`X 阅读 · ${day.date}`});
  const labels: Record<Taxonomy,string> = {tags:'标签',speakers:'来源',categories:'分类',projects:'专题',areas:'领域'};
  // Internal classification metadata remains available without public routes.
  for (const taxonomy of ['tags', 'speakers'] as const) {
    const list = model.groups[taxonomy];
    for (const group of list) await page(group.url,{view:'term',taxonomy,groupkey:group.key});
    const size = taxonomy === 'tags' ? 50 : Math.max(1,list.length);
    const count = taxonomy === 'tags' ? Math.ceil(list.length/size) : 1;
    for (let i=0;i<count;i++) await page(`/all-${taxonomy}/${i ? `page/${i+1}/` : ''}`,{view:'directory',taxonomy,pagetitle:`所有${labels[taxonomy]}`,offset:i*size,size,pagecount:count,pagenumber:i+1});
  }
  await writeFile(join(destination,'routes.json'),JSON.stringify(routes));
  await writeFile(join(destination,'slug-cache.json'),JSON.stringify(cache));
  await writeFile(join(destination,'adaptation.json'),JSON.stringify({documents:articles.length,navigationPages:routes.length-articles.length,bodyRenderer:'Hugo Goldmark',liquidPreprocessed:preprocessed}));
}
export async function restore(destination: string, output: string): Promise<void> {
  const values: unknown = JSON.parse(await readFile(join(destination,'routes.json'),'utf8'));
  if (!Array.isArray(values)) throw new Error('Invalid routes');
  const moves: {source:string;target:string}[] = []; const seen = new Set<string>();
  for (const value of values) {
    const route = record(value);
    if (typeof route.internal !== 'string' || !/^\/__native_pages\/\d+\/$/.test(route.internal) || typeof route.legacy !== 'string') throw new Error('Invalid route');
    const source = targetPath(output,route.internal); const target = targetPath(output,route.legacy);
    if (seen.has(target)) throw new Error('Duplicate restored route'); seen.add(target);
    await stat(source);
    try { await stat(target); throw new Error(`Output collision: ${route.legacy}`); }
    catch (error) { if (!(error instanceof Error) || !('code' in error) || error.code !== 'ENOENT') throw error; }
    moves.push({source,target});
  }
  for (const {source,target} of moves) {
    const html = await readFile(source,'utf8');
    const finalized = finishReadingPage(html);
    if (finalized !== html) await writeFile(source,finalized);
    await mkdir(dirname(target),{recursive:true}); await rename(source,target);
  }
}
