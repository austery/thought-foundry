import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readX } from '../src/x-reading.js';
const fields='Original publication time: 2026-09-13T07:23:14.000Z\n\nSaved time: 2026-09-13T23:24:12.945Z\n\nText status: UNVERIFIED\n\nMedia status: NOT_ARCHIVED\n\nContext status: PARTIAL\n\n';
const literal='<pre>中文\n&lt;script&gt; &amp; &#123;&#123; source &#125;&#125;</pre>\n<pre>Missing image</pre>';
const section=`<section id="x-post-123">\n## Author &amp; Name · 2026-09-13\n\nAuthor ID: 99; handle: fixture\n\nSource: <https://x.com/fixture/status/123>\n\n${fields}${literal}\n<a href="https://x.com/i/status/456">QUOTES: x:post:456</a>\n</section>`;
const meta={x_source:'x',x_kind:'DAILY_COLLECTION',x_author_id:'99',x_collection_date:'2026-09-13',x_export_policy:'daily-literal-v1'};
test('daily source becomes literal cards with stable identity and related links',()=>{
  const result=readX(meta,section)!;
  assert.equal(result.author,'Author & Name');assert.equal(result.entries.length,1);
  assert.equal(result.entries[0]!.body,'中文\n<script> & {{ source }}');
  assert.equal(result.entries[0]!.related[0]!.url,'https://x.com/i/status/456');
  assert.equal(result.entries[0]!.status,'UNVERIFIED');
});
test('rejects unsupported or conflicting exports and unsafe relation URLs',()=>{
  assert.throws(()=>readX(meta,section+section),/duplicate/);
  assert.throws(()=>readX({...meta,x_author_id:'98'},section),/author mismatch/);
  assert.throws(()=>readX(meta,section.replace('https://x.com/i/status/456','javascript:alert(1)')),/Unsafe/);
  assert.throws(()=>readX(meta,section.replace('/status/123','/status/999')),/identity/);
  assert.equal(readX({},section),undefined);
});
test('standalone Article preserves source text and unknown date without inventing a date',()=>{
  const result=readX({x_source:'x',x_kind:'ARTICLE',x_author_id:'99',x_material_id:'x:post:123',x_observed_name:'Author &amp; Name',x_source_url:'https://x.com/fixture/status/123',x_export_policy:'original-literal-v1'},fields+literal)!;
  assert.equal(result.author,'Author &amp; Name');assert.equal(result.kind,'ARTICLE');assert.equal(result.date,'');assert.equal(result.entries.length,1);
});

test('saved relative Markdown links resolve to public reading routes',()=>{
  const linked=section.replace('https://x.com/i/status/456','../../posts/456.md#x-post-456');
  assert.equal(readX(meta,linked,'content/clippings/x/daily/99/2026-09-13.md')!.entries[0]!.related[0]!.url,'/content/clippings/x/posts/456/#x-post-456');
  assert.throws(()=>readX(meta,linked.replace('../../posts/456.md','../../../../../elsewhere.md'),'content/clippings/x/daily/99/2026-09-13.md'),/outside/);
});
