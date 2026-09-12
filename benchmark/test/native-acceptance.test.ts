import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {inventory} from '../src/evidence.js';
import {validateNative,canonicalReading,assertDateOrder} from '../src/native-acceptance.js';

test('native acceptance permits stable date ties but rejects dropped content, links, and uninspected index differences',async()=>{
  const dir=await mkdtemp(join(tmpdir(),'tf-acceptance-'));
  const left=join(dir,'left'),right=join(dir,'right');
  await mkdir(left);await mkdir(right);
  const item=(url:string)=>`<li><a href="/${url}/">${url}</a><time datetime="2026-09-12">date</time></li>`;
  const html=(content:string)=>`<html><head><title>Home</title></head><body><div class="home-layout"><ul>${content}</ul></div></body></html>`;
  await writeFile(join(left,'index.html'),html(item('b')+item('a')));
  await writeFile(join(right,'index.html'),html(item('a')+item('b')));
  const a=await inventory(left),b=await inventory(right);
  assert.equal((await validateNative(a,b,[],[],left,right)).passed,true);
  assert.equal((await validateNative(a,a,[],[],left,left)).passed,false);
  assert.throws(()=>assertDateOrder(html(item('b')+item('a'))),/order/);
  const result=await validateNative(a,{...b,pages:[]},[],[],left,right);
  assert.equal(result.passed,false);assert.ok(result.failures.includes('Output URL coverage differs'));
  assert.equal((await validateNative(a,b,[{url:'/',textHash:'old'}],[{url:'/',textHash:'new'}],left,right)).passed,false);
  assert.equal((await validateNative(a,b,[{url:'/',textHash:'old'}],[{url:'/',textHash:'new'}],left,right,[{url:'/',surface:'index',baselineHash:'old',candidateHash:'wrong',reason:'inspected'}])).passed,false);
  await writeFile(join(right,'index.html'),html(item('a')+item('c')));
  assert.equal((await validateNative(a,await inventory(right),[],[],left,right)).passed,false);
});

test('canonicalization only reorders navigation, not article prose or list membership',()=>{
  assert.notEqual(canonicalReading('<main id="content-body"><p>first</p><p>second</p></main>'),canonicalReading('<main id="content-body"><p>second</p><p>first</p></main>'));
  assert.notEqual(canonicalReading('<div class="home-layout"><ul><li>A</li><li>A</li></ul></div>'),canonicalReading('<div class="home-layout"><ul><li>A</li></ul></div>'));
});

 test('series must remain ascending with deterministic ties',()=>{
  const item=(date:string,url:string)=>`<li data-sort-date="${date}"><a href="/${url}/">${url}</a></li>`;
  const html=(items:string)=>`<main id="content-body"><div class="related-series"><ul class="related-posts-list">${items}</ul></div></main>`;
  assert.doesNotThrow(()=>assertDateOrder(html(item('2020-01-01','a')+item('2026-01-01','b'))));
  assert.throws(()=>assertDateOrder(html(item('2026-01-01','b')+item('2020-01-01','a'))),/order/);
  assert.throws(()=>assertDateOrder(html(item('2026-01-01','b')+item('2026-01-01','a'))),/order/);
});
