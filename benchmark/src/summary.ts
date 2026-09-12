import { validateMeasurement, type Mode, type Engine } from './pair.js';
export interface CompletedPair { mode: Mode; repetition: number; totals: Record<Engine,number>; strictParity: boolean; }
function object(value: unknown): Record<string,unknown> { if(!value||typeof value!=='object'||Array.isArray(value))throw new Error('Expected report object');return value as Record<string,unknown>; }
export function readCompletedPair(value: unknown): CompletedPair {
  const row=object(value);
  if(row.status!=='completed')throw new Error(`Unsuccessful pair: ${String(row.status)}`);
  if(!['cold','warm','added'].includes(String(row.mode))||typeof row.repetition!=='number'||!Number.isInteger(row.repetition)||row.repetition<1||row.repetition>3||typeof row.strictParity!=='boolean'||row.sourceUnchanged!==true)throw new Error('Invalid pair metadata');
  const stages=object(row.results);const totals=object(row.totals);
  const sums:Record<Engine,number>={eleventy:0,hugo:0};
  const expected={eleventy:['measured-eleventy','measured-pagefind'],hugo:['measured-hugo-prepare','measured-hugo-adapt','measured-hugo','measured-hugo-paths','measured-hugo-pagefind']};
  for(const engine of ['eleventy','hugo'] as const){
    const values=stages[engine];if(!Array.isArray(values))throw new Error('Missing measured stages');
    const rows=values.map(validateMeasurement);
    if(JSON.stringify(rows.map(r=>r.stage))!==JSON.stringify(expected[engine])||rows.some(r=>r.exitCode!==0))throw new Error('Incomplete or failed measured stages');
    sums[engine]=rows.reduce((s,r)=>s+r.seconds,0);
    if(sums[engine]<=0 || typeof totals[engine]!=='number'||!Number.isFinite(totals[engine])||Math.abs(sums[engine]-totals[engine])>0.001)throw new Error('Inconsistent totals');
  }
  return {mode:row.mode as Mode,repetition:row.repetition,totals:sums,strictParity:row.strictParity};
}
export function statistics(values:number[]):{median:number;min:number;max:number}{
  if(!values.length||values.some(v=>!Number.isFinite(v)||v<0))throw new Error('Invalid sample');
  const sorted=[...values].sort((a,b)=>a-b);const midpoint=Math.floor(sorted.length/2);
  return {median:sorted.length%2?sorted[midpoint]!:(sorted[midpoint-1]!+sorted[midpoint]!)/2,min:sorted[0]!,max:sorted.at(-1)!};
}
export function summarize(pairs:CompletedPair[]) {
  for(const mode of ['cold','warm','added'] as const){const expected=mode==='added'?[1]:[1,2,3];if(JSON.stringify(pairs.filter(p=>p.mode===mode).map(p=>p.repetition).sort())!==JSON.stringify(expected))throw new Error(`Missing or duplicate ${mode} pair`);}
  const byMode=Object.fromEntries((['cold','warm','added'] as const).map(mode=>{const sample=pairs.filter(p=>p.mode===mode);return [mode,{eleventy:statistics(sample.map(p=>p.totals.eleventy)),hugo:statistics(sample.map(p=>p.totals.hugo)),pairedSavings:sample.map(p=>({repetition:p.repetition,seconds:p.totals.eleventy-p.totals.hugo,percent:100*(p.totals.eleventy-p.totals.hugo)/p.totals.eleventy}))}];}));
  const warm=byMode.warm!;const saved=warm.eleventy.median-warm.hugo.median;const percent=100*saved/warm.eleventy.median;
  const performanceThreshold=saved>=120&&percent>=30;
  const compatibilityPassed=pairs.every(p=>p.strictParity);
  const consistent=pairs.filter(p=>p.mode!=='added').every(p=>p.totals.hugo<p.totals.eleventy);
  const overlappingRanges=['cold','warm'].some(mode=>byMode[mode]!.hugo.max>=byMode[mode]!.eleventy.min);
  const needsFurtherInvestigation=!consistent||overlappingRanges;
  return {byMode,warmMedianSaving:{seconds:saved,percent},performanceThreshold,compatibilityPassed,consistent,overlappingRanges,needsFurtherInvestigation,recommendMigration:performanceThreshold&&compatibilityPassed&&!needsFurtherInvestigation};
}

export function experimentIdentity(manifest: unknown, sourceAfter: unknown, versions: unknown, hugo: unknown): string {
  const m=object(manifest), e=object(m.environment), after=object(sourceAfter), v=object(versions), h=object(hugo);
  const identity:Record<string,string>={};
  for(const key of ['baselineSha','contentSha','candidateSha','siteLockHash','toolsLockHash','pnpm']){if(typeof m[key]!=='string'||!m[key])throw new Error('Missing experiment identity');identity[key]=m[key];}
  for(const key of ['node','runId','attempt']){if(typeof e[key]!=='string'||!e[key])throw new Error('Missing runner identity');identity[key]=e[key];}
  for(const key of ['@11ty/eleventy','pagefind']){if(typeof v[key]!=='string'||!v[key])throw new Error('Missing engine identity');identity[key]=v[key];}
  if(typeof h.hugo!=='string'||!h.hugo)throw new Error('Missing Hugo identity');identity.hugo=h.hugo;
  if(after.unchanged!==true||typeof after.before!=='string'||after.before!==after.after)throw new Error('Source verification failed');identity.sourceFingerprint=after.before;
  return JSON.stringify(identity);
}
export function requireSameExperiment(identities:string[]):string {if(!identities.length||new Set(identities).size!==1)throw new Error('Mixed experiment identities');return identities[0]!;}
