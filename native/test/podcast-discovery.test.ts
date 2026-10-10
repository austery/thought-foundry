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

const legacyKey = 'pod_algbr0fzbuh6cwz3puc2flgn';
const legacyPath = `content/podcasts/article/2a469daf-f229-4e99-a62d-fb155fa64e35/${legacyKey}.md`;
const legacyUrl = `/${legacyPath.slice(0,-3)}/`;

test('accepted legacy publication retains its exact URL across replacement', async()=>{
  const f = await fixture(legacyPath);
  const first = await f.build('first');
  assert.deepEqual(await searchUrls(first.output,join(f.root,'first-search'),'FirstPodcastMarker'),[legacyUrl]);
  await f.save(legacyPath,document('PodcastDiscovery','LegacyReplacementMarker'));
  const {output} = await f.build('replacement');
  assert.deepEqual(await searchUrls(output,join(f.root,'replacement-search'),'LegacyReplacementMarker'),[legacyUrl]);
  assert.deepEqual(await searchUrls(output,join(f.root,'old-search'),'FirstPodcastMarker'),[]);
});

test('two formal destinations for one episode stop preparation, including excluded content', async()=>{
  const f = await fixture(legacyPath);
  const previous = await f.build('previous');
  const before = await readFile(join(previous.output,legacyUrl,'index.html'),'utf8');
  await f.save(`content/podcasts/article/${legacyKey}.md`,document('Replacement','UncommittedMarker','exclude: true\n'));
  await assert.rejects(f.build('ambiguous'),/Ambiguous Podcast article/);
  assert.equal(await readFile(join(previous.output,legacyUrl,'index.html'),'utf8'),before);
});

test('formal Podcast paths require article metadata instead of publishing bare output', async()=>{
  const f = await fixture();
  await f.save(path,'UnfinishedMarker');
  await assert.rejects(f.build('unfinished'),/Invalid published Podcast layout/);
});
