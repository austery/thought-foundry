import { join } from 'node:path';
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { measure, inventory, fingerprint, environment, type Measurement } from './evidence.js';
import { buildCandidate } from './candidate.js';
import { buildNativeCandidate } from './native-candidate.js';
import { validateNative, type TextException } from './native-acceptance.js';
import { compareInventories, compareIndexes, indexedPages } from './compare.js';

export type Mode = 'cold' | 'warm' | 'added';
export type Engine = 'eleventy' | 'hugo';
export interface PairPlan { mode: Mode; repetition: number; order: Engine[]; prime: boolean; }
export function planPair(mode: string, repetition: number): PairPlan {
  if (!['cold','warm','added'].includes(mode) || !Number.isInteger(repetition) || repetition < 1 || repetition > 3 || (mode === 'added' && repetition !== 1)) throw new Error('Invalid comparison pair');
  const hugoFirst = (repetition % 2 === 0) !== (mode === 'warm');
  return { mode: mode as Mode, repetition, order: hugoFirst ? ['hugo','eleventy'] : ['eleventy','hugo'], prime: mode !== 'cold' };
}
export const fixture = '---\ntitle: "Comparison fixture: added article"\ndate: "2026-09-11"\nlayout: "post.njk"\ntags: [note]\n---\n# Reproducible added article\n\nThis is a benchmark-only addition. 完整重建对照实验。\n';
export async function addFixture(site: string): Promise<{ path: string; sha256: string }> {
  const path = 'src/content/notes/comparison-added-article-056.md';
  await writeFile(join(site,path),fixture,{flag:'wx'});
  return { path, sha256:createHash('sha256').update(fixture).digest('hex') };
}
export function validateMeasurement(value: unknown): Measurement {
  if (!value || typeof value !== 'object') throw new Error('Invalid measurement');
  const v = value as Record<string,unknown>;
  if (typeof v.stage !== 'string' || !Array.isArray(v.command) || !v.command.every(x=>typeof x==='string') || typeof v.seconds !== 'number' || !Number.isFinite(v.seconds) || v.seconds < 0 || typeof v.exitCode !== 'number' || !Number.isInteger(v.exitCode) || !(v.signal === null || typeof v.signal === 'string') || !(v.peakMemoryKiB === null || typeof v.peakMemoryKiB === 'number' && Number.isFinite(v.peakMemoryKiB) && v.peakMemoryKiB >= 0)) throw new Error('Invalid measurement fields');
  return v as unknown as Measurement;
}
export async function runPair(mode: string, repetition: number, site: string, root: string, reports: string, native = false): Promise<void> {
  const candidate = native ? buildNativeCandidate : buildCandidate;
  const plan = planPair(mode,repetition);
  await mkdir(reports,{recursive:true}); await mkdir(root,{recursive:true});
  // Refuse inherited caches: cold means engine build caches, not a cold dependency download.
  try { await access(join(site,'.eleventy-cache.json')); throw new Error('Baseline cache already exists'); }
  catch(error) { if (!(error instanceof Error) || !('code' in error) || error.code !== 'ENOENT') throw error; }
  const sourceBefore = await fingerprint(join(site,'src'));
  const metadata = { ...plan, environment:environment(), sourceBefore, status:'running' };
  await writeFile(join(reports,'pair.json'),JSON.stringify(metadata,null,2));
  async function baseline(label: string): Promise<string> {
    const output = join(root,label,'public');
    for (const [stage,args] of [[`${label}-eleventy`,['exec','eleventy','--output',output]],[`${label}-pagefind`,['exec','pagefind','--site',output]]] as const) {
      const result = await measure(stage,'pnpm',[...args],site,reports);
      if(result.exitCode!==0) throw new Error(`Baseline failed: ${stage}`);
    }
    return output;
  }
  let cacheSeed: string | undefined;
  const outputs: Partial<Record<Engine,string>> = {};
  try {
    if(plan.prime) {
      for(const engine of plan.order) {
        if(engine==='eleventy') await baseline('prime');
        else {
          await candidate(site,join(root,'prime-hugo'),reports,'prime-hugo');
          cacheSeed=native ? join(root,'prime-hugo','generated','slug-cache.json') : join(root,'prime-hugo','legacy','.eleventy-cache.json');
          await access(cacheSeed);
        }
      }
    }
    if(await fingerprint(join(site,'src'))!==sourceBefore) throw new Error('Priming mutated staged source');
    const addition = mode==='added' ? await addFixture(site) : null;
    const inputFingerprint=await fingerprint(join(site,'src'));
    await writeFile(join(reports,'input.json'),JSON.stringify({sourceBefore,inputFingerprint,addition,cacheMode:plan.mode},null,2));
    for(const engine of plan.order) outputs[engine] = engine==='eleventy' ? await baseline('measured') : await candidate(site,join(root,'measured-hugo'),reports,'measured-hugo',cacheSeed);
    if(!outputs.eleventy || !outputs.hugo) throw new Error('Both engine outputs are required');
    if(await fingerprint(join(site,'src'))!==inputFingerprint) throw new Error('Build mutated staged source');
    const left=await inventory(outputs.eleventy); const right=await inventory(outputs.hugo);
    const leftIndex=await indexedPages(outputs.eleventy); const rightIndex=await indexedPages(outputs.hugo);
    const comparison=compareInventories(left,right); const indexes=compareIndexes(leftIndex,rightIndex);
    const url='/content/notes/comparison-added-article-056/';
    if(addition && (![left,right].every(i=>i.pages.some(p=>p.url===url)) || ![leftIndex,rightIndex].every(i=>i.some(p=>p.url===url)))) throw new Error('Added fixture missing from output or actual index');
    await writeFile(join(reports,'comparison.json'),JSON.stringify({comparison,indexes},null,2));
    for(const [engine,inv,index] of [['eleventy',left,leftIndex],['hugo',right,rightIndex]] as const) {
      await writeFile(join(reports,`${engine}-inventory.json`),JSON.stringify({...inv,pages:inv.pages.map(({text,...page})=>page)}));
      await writeFile(join(reports,`${engine}-indexed.json`),JSON.stringify(index));
    }
    const results: Record<Engine,Measurement[]>={eleventy:[],hugo:[]};
    for(const [engine,names] of [['eleventy',['measured-eleventy','measured-pagefind']],['hugo',['measured-hugo-prepare','measured-hugo-adapt','measured-hugo','measured-hugo-paths','measured-hugo-pagefind']]] as const) {
      for(const name of names) results[engine].push(validateMeasurement(JSON.parse(await readFile(join(reports,`${name}.json`),'utf8'))));
    }
    const strictParity = comparison.missing.length===0 && comparison.added.length===0 && Object.values(comparison.changed).every(v=>v.length===0) && indexes.missing.length===0 && indexes.added.length===0 && indexes.changedText.length===0;
    if(native){
      const exceptions:TextException[]=JSON.parse(await readFile(new URL('../../native/compatibility-exceptions.json',import.meta.url),'utf8'));
      const acceptance=await validateNative(left,right,leftIndex,rightIndex,outputs.eleventy,outputs.hugo,exceptions);
      await writeFile(join(reports,'native-acceptance.json'),JSON.stringify(acceptance,null,2));
      if(!acceptance.passed)throw new Error(`Native compatibility failed: ${acceptance.failures.length} findings`);
    }
    await writeFile(join(reports,'pair.json'),JSON.stringify({...metadata,status:'completed',inputFingerprint,sourceUnchanged:true,addition,results,totals:{eleventy:results.eleventy.reduce((n,r)=>n+r.seconds,0),hugo:results.hugo.reduce((n,r)=>n+r.seconds,0)},strictParity,outputs:{eleventy:{bytes:left.bytes,files:left.fileCount,html:left.pages.length,indexed:leftIndex.length},hugo:{bytes:right.bytes,files:right.fileCount,html:right.pages.length,indexed:rightIndex.length}}},null,2));
  } catch(error) {
    await writeFile(join(reports,'pair.json'),JSON.stringify({...metadata,status:'failed',error:String(error)},null,2)); throw error;
  }
}
