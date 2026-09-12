import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, cp, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { planPair, validateMeasurement, runPair } from '../src/pair.js';

test('pair plan alternates order and separates added-article priming',()=>{
  assert.deepEqual([1,2,3].map(i=>planPair('cold',i).order[0]),['eleventy','hugo','eleventy']);
  assert.deepEqual([1,2,3].map(i=>planPair('warm',i).order[0]),['hugo','eleventy','hugo']);
  assert.equal(planPair('cold',1).prime,false); assert.equal(planPair('added',1).prime,true);
  assert.throws(()=>planPair('added',2)); assert.throws(()=>planPair('cold',NaN));
});
test('downloaded timing evidence rejects invalid numbers and preserves command failure',()=>{
  const row={stage:'x',command:['hugo'],seconds:2,exitCode:9,signal:null,peakMemoryKiB:null};
  assert.equal(validateMeasurement(row).exitCode,9);
  assert.throws(()=>validateMeasurement({...row,seconds:NaN}));
  assert.throws(()=>validateMeasurement({...row,seconds:-1}));
  assert.throws(()=>validateMeasurement({...row,command:[{}]}));
});
test('real added-article pair primes independent caches and indexes the fixture in both engines',async()=>{
  const root=await mkdtemp(join(tmpdir(),'tf-pair-')); const site=join(root,'site');
  const baseline=resolve('../.benchmark/baseline');
  await mkdir(join(site,'src/content/notes'),{recursive:true});
  for(const file of ['package.json','.eleventy.js']) await cp(join(baseline,file),join(site,file));
  await symlink(join(baseline,'node_modules'),join(site,'node_modules'),'dir');
  for(const folder of ['_includes','css','js']) await cp(join(baseline,'src',folder),join(site,'src',folder),{recursive:true});
  await writeFile(join(site,'src/content/notes/Case.md'),'---\ntitle: Small corpus\ndate: "2026-01-01"\nlayout: post.njk\ntags: [note]\n---\n# Example\n\n中文内容测试。');
  const reports=join(root,'reports');
  await runPair('added',1,site,join(root,'builds'),reports);
  const value: unknown=JSON.parse(await readFile(join(reports,'pair.json'),'utf8'));
  assert.ok(value&&typeof value==='object'&&'status' in value&&value.status==='completed');
  const data=JSON.parse(await readFile(join(reports,'comparison.json'),'utf8')) as {indexes:{baselineIndexed:number;candidateIndexed:number;missing:string[];added:string[]}};
  assert.equal(data.indexes.baselineIndexed,2);assert.equal(data.indexes.candidateIndexed,2);
  assert.deepEqual(data.indexes.missing,[]);assert.deepEqual(data.indexes.added,[]);
  await assert.rejects(()=>runPair('cold',1,site,join(root,'duplicate'),join(root,'repeat-reports')),/cache already exists/);
});
