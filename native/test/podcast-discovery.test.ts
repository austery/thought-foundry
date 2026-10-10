import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, readFile, cp, access} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {dirname, join, resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {load} from 'cheerio';
import {createIndex, close} from 'pagefind';
import {prepare, restore, files} from '../src/prepare.js';

const key = 'pod_abcdefghijklmnopqrstuvwx';
const path = `content/podcasts/article/${key}.md`;
const url = `/${path.slice(0,-3)}/`;
const document = (title: string, body: string, extra = '') => `---\ntitle: ${title}\nlayout: post.njk\nspeaker: 梁州令\nsource: https://example.org/episode\ndate: '2026-10-09'\ndraft: true\ntags: []\n${extra}---\n## Reading\n\n${body}\n`;

async function fixture(publicPath = path) {
  const root = await mkdtemp(join(tmpdir(),'tf-podcast-'));
  const site = join(root,'site');
  for (const dir of ['css','js']) await cp(resolve('../src',dir),join(site,'src',dir),{recursive:true});
  const save = async (name: string, body: string) => {
    await mkdir(dirname(join(site,'src',name)),{recursive:true});
    await writeFile(join(site,'src',name),body);
  };
  await save('content/notes/ordinary.md',document('Ordinary','OrdinaryMarker'));
  await save(publicPath,document('PodcastDiscovery','FirstPodcastMarker'));
  await save('content/podcasts/transcript/raw.txt','TranscriptOnlyMarker');
  await save('content/podcasts/tools/internal.md','---\nlayout: unsupported-internal-layout\n---\nInternalMarker');
  await save(`content/podcasts/article/unadopted/${key}.md`,document('Unadopted','UnadoptedMarker'));
  await save('content/podcasts/article/pod_zzzzzzzzzzzzzzzzzzzzzzzz.md',document('Hidden','ExcludedPodcastMarker','exclude: true\n'));
  const build = async (name: string) => {
    const stage = join(root,name,'stage'), output = join(root,name,'public');
    await mkdir(dirname(stage));
    await prepare(site,stage);
    execFileSync('hugo',['--source',stage,'--destination',output],{stdio:'pipe'});
    await restore(stage,output);
    return {stage,output};
  };
  return {root,site,save,build};
}

interface SearchBundle {
  options(options: {baseUrl: string}): Promise<void>;
  search(query: string, options?: {filters: {speaker: string}}): Promise<{results: {data(): Promise<{url: string}>}[]}>;
}
async function searchUrls(output: string, directory: string, query: string): Promise<string[]> {
  const {index} = await createIndex();
  assert.ok(index);
  for (const path of (await files(output)).filter(path=>path.endsWith('.html'))) {
    await index.addHTMLFile({url:'/'+path.replace(/index\.html$/,''),content:await readFile(join(output,path),'utf8')});
  }
  await index.writeFiles({outputPath:directory});
  await writeFile(join(directory,'package.json'),'{"type":"module"}');
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input,init) => String(input).startsWith('file:')
    ? new Response(new Uint8Array(await readFile(new URL(String(input)))).buffer) : originalFetch(input,init);
  try {
    const bundle = await import(pathToFileURL(join(directory,'pagefind.js')).href) as SearchBundle;
    await bundle.options({baseUrl:'/'});
    const response = await bundle.search(query,{filters:{speaker:'梁州令'}});
    return Promise.all(response.results.map(async result=>(await result.data()).url));
  } finally {
    globalThis.fetch = originalFetch;
    await close();
  }
}

test('Podcast articles use ordinary discovery, reader provenance and real filtered search', async()=>{
  const f = await fixture();
  const {stage,output} = await f.build('first');
  const html = async (path: string)=>load(await readFile(join(output,path,'index.html'),'utf8'));
  const home = await html('');
  const links = home('.home-layout > ul > li > a:first-child').map((_,a)=>home(a).attr('href')).get();
  assert.deepEqual(links,['/content/notes/ordinary/',url]);
  assert.equal(home('.main-nav a[href="/x/"]').length,1);
  assert.equal(home('.main-nav a[href*="podcast"]').length,0);
  const directory = await html('all-speakers');
  assert.equal(directory('a[href="/speakers/liang-zhou-ling/"]').length,1);
  const source = await html('speakers/liang-zhou-ling');
  assert.equal(source(`a[href="${url}"]`).length,1);
  const reader = await html(url.slice(1));
  assert.equal(reader('.speaker-link').attr('href'),'/speakers/liang-zhou-ling/');
  assert.equal(reader('.provenance a[href="https://example.org/episode"]').length,1);
  assert.equal(reader('.provenance time').attr('datetime'),'2026-10-09T00:00:00.000Z');
  assert.match(reader('.article-body').text(),/FirstPodcastMarker/);
  assert.deepEqual(await searchUrls(output,join(f.root,'search'),'FirstPodcastMarker'),[url]);
  assert.deepEqual(await searchUrls(output,join(f.root,'excluded-search'),'ExcludedPodcastMarker'),[]);
  await access(join(output,'content/podcasts/article/pod_zzzzzzzzzzzzzzzzzzzzzzzz','index.html'));
  assert.deepEqual(await searchUrls(output,join(f.root,'unadopted-search'),'UnadoptedMarker'),[]);
  for (const source of ['content/podcasts/tools/internal.md',`content/podcasts/article/unadopted/${key}.md`]) {
    await assert.rejects(access(join(output,source.slice(0,-3),'index.html')));
  }
  const archive = JSON.parse(await readFile(join(stage,'data/archive.json'),'utf8')) as {articles: Record<string, {source: string}>};
  assert.ok(!JSON.stringify(archive).includes('UnadoptedMarker'));
  const exports = (await files(join(output,'reader'))).filter(name=>name.endsWith('.md'));
  for (const file of exports) assert.doesNotMatch(await readFile(join(output,'reader',file),'utf8'),/UnadoptedMarker|InternalMarker/);
});

test('replacing the same article file preserves its URL and one discoverable result', async()=>{
  const f = await fixture();
  await f.build('first');
  await f.save(path,document('PodcastDiscovery','ReplacementPodcastMarker'));
  const {output} = await f.build('replacement');
  const reader = await readFile(join(output,url,'index.html'),'utf8');
  assert.match(reader,/ReplacementPodcastMarker/);
  assert.doesNotMatch(reader,/FirstPodcastMarker/);
  assert.deepEqual(await searchUrls(output,join(f.root,'search'),'ReplacementPodcastMarker'),[url]);
  assert.deepEqual(await searchUrls(output,join(f.root,'old-search'),'FirstPodcastMarker'),[]);
});

const legacyPath = `content/podcasts/article/old-attempt/${key}.md`;
const legacyUrl = `/${legacyPath.slice(0,-3)}/`;

test('migrated old URLs redirect to one canonical article and stay out of search after replacement', async()=>{
  const f = await fixture();
  await f.save('content/podcasts/redirects.json',JSON.stringify([{from:legacyUrl,to:url}]));
  await f.save(legacyPath,document('Obsolete duplicate','ObsoleteLegacyMarker'));
  const first = await f.build('first');
  const redirect = load(await readFile(join(first.output,legacyUrl,'index.html'),'utf8'));
  assert.equal(redirect('link[rel="canonical"]').attr('href'),url);
  assert.equal(redirect('meta[http-equiv="refresh"]').attr('content'),`0; url=${url}`);
  assert.equal(redirect('meta[name="robots"]').attr('content'),'noindex');
  assert.equal(redirect('a').attr('href'),url);
  assert.deepEqual(await searchUrls(first.output,join(f.root,'first-search'),'FirstPodcastMarker'),[url]);
  assert.deepEqual(await searchUrls(first.output,join(f.root,'obsolete-search'),'ObsoleteLegacyMarker'),[]);
  await f.save(path,document('PodcastDiscovery','MigratedReplacementMarker'));
  const {output} = await f.build('replacement');
  assert.deepEqual(await searchUrls(output,join(f.root,'replacement-search'),'MigratedReplacementMarker'),[url]);
  assert.deepEqual(await searchUrls(output,join(f.root,'old-search'),'FirstPodcastMarker'),[]);
  assert.equal(load(await readFile(join(output,legacyUrl,'index.html'),'utf8'))('link[rel="canonical"]').attr('href'),url);
});

test('invalid, broken and duplicate Podcast redirects stop preparation', async()=>{
  const f = await fixture();
  const invalid = [
    [{from:legacyUrl,to:'https://example.org/'}],
    [{from:'/content/podcasts/article/../'+key+'/',to:url}],
    [{from:legacyUrl,to:'/content/podcasts/article/pod_zzzzzzzzzzzzzzzzzzzzzzzz/'}],
    [{from:legacyUrl,to:url},{from:legacyUrl,to:url}],
    [{from:'/content/podcasts/article/old/pod_bbbbbbbbbbbbbbbbbbbbbbbb/',to:'/content/podcasts/article/pod_bbbbbbbbbbbbbbbbbbbbbbbb/'}],
  ];
  for (const [index,redirects] of invalid.entries()) {
    await f.save('content/podcasts/redirects.json',JSON.stringify(redirects));
    await assert.rejects(f.build(`invalid-${index}`),/Invalid Podcast redirect|Duplicate URL|Missing Podcast redirect target/);
  }
  await f.save('content/podcasts/redirects.json','{broken');
  await assert.rejects(f.build('malformed'),SyntaxError);
});

test('formal Podcast paths require article metadata instead of publishing bare output', async()=>{
  const f = await fixture();
  await f.save(path,'UnfinishedMarker');
  await assert.rejects(f.build('unfinished'),/Invalid published Podcast layout/);
});
