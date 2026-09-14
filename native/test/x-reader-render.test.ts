import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, cp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import { prepare, restore } from '../src/prepare.js';

test('X originals render in the site shell with exact text, anchors, search metadata and exclusions',async()=>{
 const root=await mkdtemp(join(tmpdir(),'tf-x-render-'));const site=join(root,'source');
 const content=join(site,'src/content/clippings/x/daily/99');await mkdir(content,{recursive:true});
 for(const folder of ['css','js'])await cp(resolve('../src',folder),join(site,'src',folder),{recursive:true});
 const body='literal <script>alert(1)</script> & {{ source }}\n第二行';
 const doc=`---\nx_source: x\nx_kind: DAILY_COLLECTION\nx_author_id: '99'\nx_collection_date: '2026-09-13'\nx_export_policy: daily-literal-v1\n---\n<section id="x-post-123">\n## Fixture · 2026-09-13\nAuthor ID: 99; handle: fixture\nSource: <https://x.com/fixture/status/123>\nOriginal publication time: 2026-09-13T07:00:00.000Z\nSaved time: 2026-09-13T08:00:00.000Z\nText status: UNVERIFIED\nMedia status: NOT_ARCHIVED\nContext status: PARTIAL\n<pre>literal &lt;script&gt;alert(1)&lt;/script&gt; &amp; &#123;&#123; source &#125;&#125;\n第二行</pre>\n<pre>Missing image</pre>\n</section>`;
 await writeFile(join(content,'2026-09-13.md'),doc);
 await writeFile(join(content,'excluded.md'),doc.replace('x_source: x','exclude: true\nx_source: x'));
 const stage=join(root,'stage'),output=join(root,'output');await prepare(site,stage);
 execFileSync('hugo',['--source',stage,'--destination',output],{stdio:'pipe'});await restore(stage,output);
 const html=load(await readFile(join(output,'content/clippings/x/daily/99/2026-09-13/index.html'),'utf8'));
 assert.equal(html('.site-header').length,1);assert.equal(html('[data-pagefind-body]').length,1);
 assert.equal(html('.x-original-text').text(),body);assert.equal(html('.x-entry script').length,0);
 assert.equal(html('#x-post-123').length,1);assert.match(html('h1').text(),/Fixture.*1 条帖子/);
 assert.match(html('.x-status').text(),/尚未人工核对/);
 const home=load(await readFile(join(output,'index.html'),'utf8'));
 assert.match(home('.home-layout').text(),/Fixture/);assert.doesNotMatch(home('.home-layout').html()||'',/excluded/);
 const excluded=load(await readFile(join(output,'content/clippings/x/daily/99/excluded/index.html'),'utf8'));
 assert.equal(excluded('[data-pagefind-body]').length,0);assert.equal(excluded('[data-pagefind-ignore]').length,1);
});
