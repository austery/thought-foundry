import {readFile,readdir,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
interface Sample {epochMs:number;current:number;swap:number;anon:number;file:number;rssKiB:number;processSwapKiB:number;phase:string;}
const root=process.argv[2];if(!root)throw new Error('Expected experiment root');
const reports=[];
for(const label of (await readdir(join(root,'results'))).sort()){
 const directory=join(root,'results',label);
 let exitCode:number;try{exitCode=Number(await readFile(join(directory,'exit-code.txt'),'utf8'));}catch{continue;}
 const rows=(await readFile(join(directory,'samples.tsv'),'utf8')).trim().split('\n').slice(1).map((line):Sample=>{const [time,current,swap,anon,file,rss,pswap,phase='']=line.split('\t');return {epochMs:Number(time),current:Number(current),swap:Number(swap),anon:Number(anon),file:Number(file),rssKiB:Number(rss),processSwapKiB:Number(pswap),phase};});
 const max=(value:(s:Sample)=>number)=>Math.max(0,...rows.map(value));
 const log=await readFile(join(directory,'engine.log'),'utf8');
 const phases=Object.fromEntries([...new Set(rows.map(s=>s.phase))].map(phase=>[phase,{samples:rows.filter(s=>s.phase===phase).length,maxSampledAnonymousPlusSwap:Math.max(...rows.filter(s=>s.phase===phase).map(s=>s.anon+s.swap))}]));
 reports.push({label,exitCode,indexedPages:Number(log.match(/Indexed (\d+) pages/)?.[1]??0),wallSeconds:Number(await readFile(join(directory,'wall-seconds.txt'),'utf8')),cgroupPeak:Number(await readFile(join(directory,'cgroup-peak.txt'),'utf8')),sampledRssPeakBytes:max(s=>s.rssKiB*1024),sampledProcessRssPlusSwapPeakBytes:max(s=>(s.rssKiB+s.processSwapKiB)*1024),sampledAnonymousPlusSwapPeakBytes:max(s=>s.anon+s.swap),sampledSwapPeakBytes:max(s=>s.swap),events:(await readFile(join(directory,'memory-events.txt'),'utf8')).trim(),phases});
}
await writeFile(join(root,'summary.json'),JSON.stringify({scope:'Local Linux amd64 containers on an arm64 host under emulation; RSS, cgroup resident peak and simultaneous anonymous-plus-swap are separate measures; phases are sampled, not allocation profiles.',reports},null,2)+'\n');
console.log(JSON.stringify(reports.map(({phases,...rest})=>rest),null,2));
