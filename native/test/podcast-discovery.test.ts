import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, readFile, cp} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {dirname, join, resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {load} from 'cheerio';
import {createIndex, close} from 'pagefind';
import {prepare, restore, files} from '../src/prepare.js';

const key = 'pod_abcdefghijklmnopqrstuvwx';
const path = `content/podcasts/article/current/${key}.md`;
const url = `/${path.slice(0,-3)}/`;
const document = (title: string, body: string, extra = '') => `---\ntitle: ${title}\nlayout: post.njk\nspeaker: 梁州令\nsource: https://example.org/episode\ndate: '2026-10-09'\ndraft: true\ntags: []\n${extra}---\n## Reading\n\n${body}\n`;

async function fixture() {
  const root = await mkdtemp(join(tmpdir(),'tf-podcast-'));
  const site = join(root,'site');
  for (const dir of ['css','js']) await cp(resolve('../src',dir),join(site,'src',dir),{recursive:true});
  const save = async (name: string, body: string) => {
    await mkdir(dirname(join(site,'src',name)),{recursive:true});
    await writeFile(join(site,'src',name),body);
  };
  await save('content/notes/ordinary.md',document('Ordinary','OrdinaryMarker'));
  await save(path,document('PodcastDiscovery','FirstPodcastMarker'));
  await save('content/podcasts/transcript/raw.txt','TranscriptOnlyMarker');
  await save('content/podcasts/tools/internal.md',document('Internal','InternalMarker'));
  await save('content/podcasts/article/hidden/pod_zzzzzzzzzzzzzzzzzzzzzzzz.md',document('Hidden','ExcludedPodcastMarker','exclude: true\n'));
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
  const {output} = await f.build('first');
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

test('ambiguous candidate files stop preparation instead of publishing multiple versions', async()=>{
  const f = await fixture();
  const previous = await f.build('previous');
  const before = await readFile(join(previous.output,url,'index.html'),'utf8');
  await f.save(`content/podcasts/article/another/${key}.md`,document('Replacement','UncommittedMarker'));
  await assert.rejects(f.build('ambiguous'),/Ambiguous Podcast article/);
  assert.equal(await readFile(join(previous.output,url,'index.html'),'utf8'),before);
});
