import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, cp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { load } from 'cheerio';
import { prepare, restore, files, escapeShortcodes } from '../src/prepare.js';
import { createHash } from 'node:crypto';

async function digest(root: string): Promise<string> {
  const hash=createHash('sha256');
  for (const name of await files(root)) hash.update(name).update(await readFile(join(root,name)));
  return hash.digest('hex');
}
test('native templates preserve source, exclusions, scalar metadata, exact links, repeated membership, and date ties', async () => {
  const root=await mkdtemp(join(tmpdir(),'tf-native-')); const site=join(root,'source');
  for (const folder of ['notes','books','posts']) await mkdir(join(site,'src/content',folder),{recursive:true});
  for (const folder of ['css','js']) await cp(resolve('../src',folder),join(site,'src',folder),{recursive:true});
  const doc=(title:string,extra:string,body='# Heading\n\nText 高考\n\n<details><summary>Original</summary>English</details>')=>`---\ntitle: "${title}"\ndate: "2026-09-12"\nlayout: post.njk\n${extra}\n---\n${body}`;
  await writeFile(join(site,'src/content/notes/B.md'),doc('B','draft: true\nseries: Test\npeople: []\ntags: [note, repeat, repeat, repeat, repeat, repeat]\nproject: "[]"\nspeaker: "Alice, Bob"\nguest: Alice'));
  await writeFile(join(site,'src/content/notes/A.md'),doc('A','series: Test\npeople: ["中文 & +"]\ntags: []'));
  await writeFile(join(site,'src/content/notes/Excluded.md'),doc('Excluded','exclude: true\ntags: [hidden]\nseries: Test'));
  await writeFile(join(site,'src/content/notes/Older.md'),doc('Older','series: Test').replace('2026-09-12','2026-09-11'));
  await writeFile(join(site,'src/content/notes/Case:_中文?.md'),doc('Case','tags: [note]','~~~js\nconst x = 1;\n~~~\n\n| a | b |\n|---|---|\n| 1 | 2 |'));
  await writeFile(join(site,'src/content/notes/No-layout.md'),'---\ntitle: Bare\n---\n# Bare');
  await writeFile(join(site,'src/content/books/Book.md'),doc('Book','tags: [note]').replace('post.njk','book-note.njk'));
  const before=await digest(site); const stage=join(root,'stage'); const output=join(root,'output');
  await prepare(site,stage);
  execFileSync('hugo',['--source',stage,'--destination',output],{stdio:'pipe'});
  await restore(stage,output);
  const html=async(url:string)=>load(await readFile(join(output,url,'index.html'),'utf8'));
  const home=await html('');
  const urls=home('.home-layout > ul > li > a:first-child').map((_,a)=>home(a).attr('href')).get();
  assert.ok(urls.indexOf('/content/notes/A/')<urls.indexOf('/content/notes/B/'));
  assert.ok(!urls.includes('/content/notes/Excluded/'));
  assert.ok(urls.includes('/content/notes/Case:_中文?/'));
  const b=await html('content/notes/B');
  assert.equal(b('[data-pagefind-body]').length,1);
  assert.deepEqual(b('[data-pagefind-filter="speaker"]').map((_, e) => b(e).text()).get(), ['Alice', 'Bob']);
  assert.equal(b('.entity-section summary').text(),'📌 文中提及的人物和组织');
  assert.deepEqual(b('.pkm-taxonomy .taxonomy-link').map((_,a)=>b(a).text()).get(),['[',']']);
  assert.deepEqual(b('.related-post-link').map((_,a)=>b(a).attr('href')).get(),['/content/notes/Older/','/content/notes/A/']);
  assert.equal(b('.tag-link').text(),'repeatrepeatrepeatrepeatrepeat');
  const a=await html('content/notes/A');
  assert.equal(a('.entity-link').attr('href'),'/search/?q=中文 & +');
  assert.match(a('.tags-section').text(),/关键字/);
  const repeated=await html('tags/repeat');
  assert.equal(repeated('.home-layout > ul > li').length,5);
  const excluded=await html('content/notes/Excluded');
  assert.equal(excluded('[data-pagefind-body]').length,0);
  assert.equal(excluded('#content-body[data-pagefind-ignore]').length,1);
  assert.doesNotMatch(await readFile(join(output,'content/notes/No-layout/index.html'),'utf8'),/<html/);
  const book=await html('content/books/Book'); assert.equal(book('.tag-link').text(),'note');
  assert.equal(await digest(site),before);
  await assert.rejects(prepare(site,stage),/EEXIST/);
});

test('route restoration validates the whole manifest before moving output', async()=>{
  const root=await mkdtemp(join(tmpdir(),'tf-native-routes-')); const output=join(root,'public');
  await mkdir(join(output,'__native_pages/0'),{recursive:true});
  await writeFile(join(output,'__native_pages/0/index.html'),'kept');
  await writeFile(join(root,'routes.json'),JSON.stringify([{internal:'/__native_pages/0/',legacy:'/ok/'},{internal:'/__native_pages/1/',legacy:'/../escape/'}]));
  await assert.rejects(restore(root,output),/Unsafe/);
  assert.equal(await readFile(join(output,'__native_pages/0/index.html'),'utf8'),'kept');
});

test('shortcode-like content cannot execute as Hugo instructions',()=>{
  assert.equal(escapeShortcodes('{{< ref "x" >}}'),'{{/*< ref "x" >*/}}');
  assert.throws(()=>escapeShortcodes('{{< missing'),/Incomplete/);
});
