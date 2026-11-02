import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {gunzipSync} from 'node:zlib';
interface Query {id:string;kind:string;q:string|null;filters?:Record<string,string>;referenceURLs?:string[];}
interface Fragment {url:string;content:string;word_count:number;filters:Record<string,string[]>;}
interface Doc {url:string;hash:string;payloadHash:string;bytes:number;tokens:string[];filters:Record<string,string[]>;}
interface Handle {id:string;data():Promise<{url:string;content:string;excerpt:string}>;}
interface Search {results:Handle[];filters?:Record<string,Record<string,number>>;totalFilters?:Record<string,Record<string,number>>;search_keywords?:unknown;query_term_idfs?:unknown;}
interface Bundle {options(value:{baseUrl:string;language?:string}):Promise<void>;mergeIndex(path:string,options:{baseUrl:string;language:string}):Promise<void>;filters():Promise<Record<string,Record<string,number>>>;search(query:string|null,options?:{filters?:Record<string,string>;verbose?:boolean}):Promise<Search>;destroy():Promise<void>;}
interface FetchStats {requests:number;bytes:number;byType:Record<string,{requests:number;bytes:number}>;}
interface Result extends Query {count:number;uniqueCount:number;membershipHash:string;orderedHash:string;top10:string[];responseFilterHash:string;first:FetchStats;repeat:FetchStats;firstMilliseconds:number;repeatMilliseconds:number;focused?:{urls:string[];searchKeywords:unknown;queryTermIdfs:unknown;examples:{id:string;expectedURL:string;actualURL:string;contentCharacters:number;contentSha256:string;contentStart:string;excerpt:string}[]};}
interface WorkerResult {mode:string;cacheMethod:string;initialization:FetchStats;filterInitialization:FetchStats;filters:Record<string,Record<string,number>>;results:Result[];ambiguousIds:number;}
const exec=promisify(execFile);
const digest=(value:string|Uint8Array)=>createHash('sha256').update(value).digest('hex');
function stable(value:unknown):string {if(Array.isArray(value))return `[${value.map(stable).join(',')}]`;if(value&&typeof value==='object')return `{${Object.entries(value).sort(([a],[b])=>a.localeCompare(b)).map(([key,v])=>`${JSON.stringify(key)}:${stable(v)}`).join(',')}}`;return JSON.stringify(value)??'null';}
const empty=():FetchStats=>({requests:0,bytes:0,byType:{}});
const copy=(value:FetchStats):FetchStats=>structuredClone(value);
function delta(a:FetchStats,b:FetchStats):FetchStats {const byType:FetchStats['byType']={};for(const [key,value]of Object.entries(b.byType)){const requests=value.requests-(a.byType[key]?.requests??0);if(requests)byType[key]={requests,bytes:value.bytes-(a.byType[key]?.bytes??0)};}return {requests:b.requests-a.requests,bytes:b.bytes-a.bytes,byType};}
async function inventory(root:string,withTokens=false):Promise<Doc[]> {
 const docs:Doc[]=[];
 for(const filename of (await readdir(join(root,'fragment'))).sort()){
  const payload=gunzipSync(await readFile(join(root,'fragment',filename))).subarray(12);const value:unknown=JSON.parse(payload.toString());
  assert.ok(value&&typeof value==='object'&&'url' in value&&typeof value.url==='string'&&'content' in value&&typeof value.content==='string');
  const fragment=value as Fragment;const words=withTokens?fragment.content.split(/[\u200B\s]+/u).filter(token=>/^[\p{L}\p{N}][\p{L}\p{N}_'-]{0,30}$/u.test(token)):[];const middle=Math.floor(words.length/2);const tokens=[...words.slice(0,3),...words.slice(middle,middle+3),...words.slice(-3)];
  docs.push({url:fragment.url,hash:filename.replace(/\.pf_fragment$/,''),payloadHash:digest(payload),bytes:payload.length,tokens,filters:fragment.filters??{}});
 }
 return docs;
}
function generate(docs:Doc[]):Query[] {
 const queries:Query[]=[];const seen=new Set<string>();
 const add=(kind:string,q:string|null,filters?:Record<string,string>)=>{const key=stable({q,filters});if(seen.has(key))return;seen.add(key);queries.push({id:`q${String(queries.length).padStart(3,'0')}`,kind,q,...(filters?{filters}:{})});};
 add('established-term','家庭关系');add('established-phrase','"家庭关系"');add('established-term','教育');add('established-filter','极寒末世',{speaker:'梁州令'});add('established-filter','Futu',{x_author:'858124064476479488'});add('established-zero','"zzzxqvnonexistenttermzzzxqv"');
 const sorted=[...docs].sort((a,b)=>a.bytes-b.bytes||a.url.localeCompare(b.url));
 for(let index=0;index<100;index++){
  const doc=sorted[Math.floor(index*(sorted.length-1)/99)]!;const tokens=doc.tokens;if(tokens.length<3)continue;
  const at=[0,Math.floor(tokens.length/3),Math.max(0,tokens.length-3)];const position=at[index%3]!;const term=tokens[position]!;
  add('sampled-term',term);add(`sampled-phrase-${['start','middle','tail'][index%3]}`,`"${tokens.slice(position,position+3).join(' ')}"`);
  if(tokens[0]!==tokens.at(-1))add('distant-and',`${tokens[0]} ${tokens.at(-1)}`);
  const field=Object.entries(doc.filters).find(([,values])=>Array.isArray(values)&&values.length);
  if(field&&index%4===0)add('sampled-source-term',term,{[field[0]]:field[1][0]!});
 }
 const sources=new Map<string,{key:string;value:string}>();for(const doc of sorted)for(const [key,values]of Object.entries(doc.filters))for(const value of values)sources.set(`${key}\0${value}`,{key,value});
 const sourceValues=[...sources.values()].sort((a,b)=>a.key.localeCompare(b.key)||a.value.localeCompare(b.value));const count=Math.min(32,sourceValues.length);
 for(let index=0;index<count;index++){const source=sourceValues[Math.floor(index*(sourceValues.length-1)/Math.max(1,count-1))]!;add('source-only',null,{[source.key]:source.value});}
 return queries;
}
async function worker(experiment:string,mode:string,queryFile:string,output:string,focused=false):Promise<void> {
 const roots=mode==='baseline'?[join(experiment,'results/official-100-solo/index')]:[join(experiment,'results/official-25/index'),...['1','2','3'].map(n=>join(experiment,`results/shard-${n}/index`))];
 const stored=JSON.parse(await readFile(join(experiment,'merged-id-maps.json'),'utf8')) as Record<string,{ids:Record<string,string>;ambiguous:string[]}>;const state=stored[mode];assert.ok(state);const maps=new Map(Object.entries(state.ids));const ambiguous=new Set(state.ambiguous);
 for(const root of roots)await writeFile(join(root,'package.json'),'{\"type\":\"module\"}\n');
 const queries=JSON.parse(await readFile(queryFile,'utf8')) as Query[];
 Object.defineProperty(globalThis,'document',{value:{currentScript:null,querySelector:()=>({getAttribute:()=> 'zh-hans'}),documentElement:{lang:'zh-hans'}},configurable:true});
 const stats=empty();const originalFetch=globalThis.fetch;
 globalThis.fetch=async(input,init)=>{const url=String(input);if(!url.startsWith('file:'))return originalFetch(input,init);const bytes=await readFile(new URL(url));const kind=url.includes('/fragment/')?'fragment':url.includes('/filter/')?'filter':url.endsWith('.pf_index')?'term-index':url.endsWith('.pf_meta')?'metadata':url.endsWith('.pagefind')?'wasm':'entry';stats.requests++;stats.bytes+=bytes.length;const type=stats.byType[kind]??={requests:0,bytes:0};type.requests++;type.bytes+=bytes.length;return new Response(new Uint8Array(bytes).buffer);};
 // Verbose mode exposes token diagnostics but prints every scored result; keep that bulk trace out of child stdout.
 if(focused)console.log=()=>{};
 const bundle=await import(pathToFileURL(join(roots[0]!,'pagefind.js')).href) as Bundle;await bundle.options({baseUrl:'/',language:'zh-hans'});
 const beforeInit=copy(stats);await bundle.filters();for(const root of roots.slice(1))await bundle.mergeIndex(pathToFileURL(root).href,{baseUrl:'/',language:'zh-hans'});
 const initialization=delta(beforeInit,copy(stats));const beforeFilters=copy(stats);const filters=await bundle.filters();const filterInitialization=delta(beforeFilters,copy(stats));const results:Result[]=[];
 try{for(const query of queries){
  const options=focused?{filters:query.filters??{},verbose:true}:query.filters?{filters:query.filters}:undefined;const before=copy(stats);const started=performance.now();const response=await bundle.search(query.q,options);const firstMilliseconds=performance.now()-started;
  const urls=await Promise.all(response.results.map(async handle=>{if(ambiguous.has(handle.id)||!maps.has(handle.id))return (await handle.data()).url;return maps.get(handle.id)!;}));
  let focusData:Result['focused'];if(focused){const reference=new Set(query.referenceURLs??[]);const selected=urls.map((url,index)=>({url,index})).filter(({url})=>!reference.has(url)).slice(0,3);if(!selected.length)selected.push(...urls.slice(0,3).map((url,index)=>({url,index})));const examples=[];for(const {url,index}of selected){const actual=await response.results[index]!.data();assert.equal(actual.url,url,'ID-to-URL mapping differs from native result data');examples.push({id:response.results[index]!.id,expectedURL:url,actualURL:actual.url,contentCharacters:actual.content.length,contentSha256:digest(actual.content),contentStart:actual.content.slice(0,400),excerpt:actual.excerpt.slice(0,1400)});}focusData={urls,searchKeywords:response.search_keywords,queryTermIdfs:response.query_term_idfs,examples};}
  const after=copy(stats);const repeatStarted=performance.now();const repeated=await bundle.search(query.q,options);const repeatMilliseconds=performance.now()-repeatStarted;assert.equal(repeated.results.length,response.results.length);
  for(const url of urls)assert.ok(url.startsWith('/'),`Unexpected canonical path ${url}`);
  results.push({...query,count:urls.length,uniqueCount:new Set(urls).size,membershipHash:digest([...urls].sort().join('\n')),orderedHash:digest(urls.join('\n')),top10:urls.slice(0,10),responseFilterHash:digest(stable({filters:response.filters,totalFilters:response.totalFilters})),first:delta(before,after),repeat:delta(after,copy(stats)),firstMilliseconds,repeatMilliseconds,...(focusData?{focused:focusData}:{})});
 }}finally{await bundle.destroy();}
 const report:WorkerResult={mode,cacheMethod:queries.length===1?'Fresh process with eager filters; query is cold, immediate repetition is warm.':'One fresh process; eager filters, then reproducible progressive-cache query sequence and immediate warm repetitions. After the first, first-attempt query measurements are not cold.',initialization,filterInitialization,filters,results,ambiguousIds:ambiguous.size};await writeFile(output,JSON.stringify(report,null,2)+'\n');
}
const mean=(values:number[])=>values.length?values.reduce((a,b)=>a+b,0)/values.length:0;
async function main(experiment:string):Promise<void> {
 const docs=await inventory(join(experiment,'results/official-100-solo/index'),true);const queries=generate(docs);assert.ok(queries.length>=50);const queryFile=join(experiment,'merged-queries.json');await writeFile(queryFile,JSON.stringify(queries,null,2)+'\n');
 const shardRoots=[join(experiment,'results/official-25/index'),...['1','2','3'].map(n=>join(experiment,`results/shard-${n}/index`))];const union=new Map<string,string>();let shardPages=0;
 const shardDocs:Doc[]=[];for(const root of shardRoots)for(const doc of await inventory(root)){shardPages++;assert.ok(!union.has(doc.url),`Duplicate partition URL ${doc.url}`);union.set(doc.url,doc.payloadHash);shardDocs.push(doc);}
 const ids=(values:Doc[])=>{const map:Record<string,string>={},ambiguous=new Set<string>();for(const doc of values){if(map[doc.hash]&&map[doc.hash]!==doc.url)ambiguous.add(doc.hash);map[doc.hash]=doc.url;}return {ids:map,ambiguous:[...ambiguous]};};
 await writeFile(join(experiment,'merged-id-maps.json'),JSON.stringify({baseline:ids(docs),merged:ids(shardDocs)}));
 assert.equal(shardPages,docs.length);assert.equal(union.size,docs.length);for(const doc of docs)assert.equal(union.get(doc.url),doc.payloadHash,`Fragment changed ${doc.url}`);
 const script=fileURLToPath(import.meta.url);const run=async(mode:string,input:string,name:string)=>{await exec(process.execPath,[...process.execArgv,script,'--worker',experiment,mode,input,join(experiment,name)],{maxBuffer:1_000_000});return JSON.parse(await readFile(join(experiment,name),'utf8')) as WorkerResult;};
 const a=await run('baseline',queryFile,'merged-baseline.json');const b=await run('merged',queryFile,'merged-four-shards.json');const differences=[];const rankings=[];
 for(let index=0;index<queries.length;index++){
  const x=a.results[index]!,y=b.results[index]!;assert.equal(x.id,y.id);const overlap=x.top10.length?x.top10.filter(url=>y.top10.includes(url)).length/x.top10.length:y.top10.length?0:1;rankings.push({id:x.id,kind:x.kind,top10Overlap:overlap,exactTop10:stable(x.top10)===stable(y.top10),sameOrder:x.orderedHash===y.orderedHash});
  if(x.count!==y.count||x.membershipHash!==y.membershipHash||x.responseFilterHash!==y.responseFilterHash||y.uniqueCount!==y.count)differences.push({id:x.id,q:x.q,kind:x.kind,counts:[x.count,y.count],membershipEqual:x.membershipHash===y.membershipHash,responseFiltersEqual:x.responseFilterHash===y.responseFilterHash,duplicates:y.count-y.uniqueCount});
 }
 const cold=[];
 for(const query of queries.slice(0,6)){
  const file=join(experiment,`merged-cold-${query.id}-query.json`);await writeFile(file,JSON.stringify([query]));const x=await run('baseline',file,`merged-cold-${query.id}-baseline.json`);const y=await run('merged',file,`merged-cold-${query.id}-four.json`);
  cold.push({id:query.id,q:query.q,filters:query.filters,baseline:{initialization:x.initialization,filterInitialization:x.filterInitialization,query:x.results[0]!.first,warm:x.results[0]!.repeat},merged:{initialization:y.initialization,filterInitialization:y.filterInitialization,query:y.results[0]!.first,warm:y.results[0]!.repeat},queryByteRatio:x.results[0]!.first.bytes?y.results[0]!.first.bytes/x.results[0]!.first.bytes:null,initializationAndQueryByteRatio:(y.initialization.bytes+y.filterInitialization.bytes+y.results[0]!.first.bytes)/(x.initialization.bytes+x.filterInitialization.bytes+x.results[0]!.first.bytes)});
 }
 const report={method:'Offline Node execution of actual generated browser bundles. File-fetch counts and compressed bytes approximate requested assets, excluding HTTP headers and JavaScript module load. This is not a browser latency, HTTP cache or mobile-memory benchmark. Query membership uses URL sets mapped from fragment IDs; ranking uses returned order. The full query sequence and six separate cold-process measurements are retained.',queries:queries.length,coverage:{baselinePages:docs.length,shardPages,uniqueShardURLs:union.size,identicalFragmentPayloads:docs.length},allGlobalFilterCountsEqual:stable(a.filters)===stable(b.filters),membershipOrFilterDifferences:differences,rankings:{exactTop10:rankings.filter(r=>r.exactTop10).length,meanTop10Overlap:mean(rankings.map(r=>r.top10Overlap)),meanTop10OverlapNonemptyBaseline:mean(rankings.filter((_,i)=>a.results[i]!.top10.length>0).map(r=>r.top10Overlap)),overlapDefinition:'Shared URLs divided by baseline top-ten length; both-empty is 1, empty-baseline/nonempty-merged is 0. Nonempty-baseline mean is also reported.',exactFullOrder:rankings.filter(r=>r.sameOrder).length,sourceOnly:rankings.filter(r=>r.kind==='source-only'),perQuery:rankings},coldQueries:cold,progressiveCacheFirstFetchBytes:{baseline:a.results.reduce((sum,r)=>sum+r.first.bytes,0),merged:b.results.reduce((sum,r)=>sum+r.first.bytes,0)},warmRepeatFetchBytes:{baseline:a.results.reduce((sum,r)=>sum+r.repeat.bytes,0),merged:b.results.reduce((sum,r)=>sum+r.repeat.bytes,0)}};
 await writeFile(join(experiment,'merged-summary.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,rankings:{...report.rankings,perQuery:undefined},coldQueries:cold.map(r=>({id:r.id,queryByteRatio:r.queryByteRatio}))},null,2));
}
async function focusSuite(experiment:string):Promise<void>{
 const queries=JSON.parse(await readFile(join(experiment,'merged-queries.json'),'utf8')) as Query[];const script=fileURLToPath(import.meta.url);const cases=[];
 const run=async(mode:string,query:Query,suffix:string)=>{const input=join(experiment,`merged-focus-${query.id}-${suffix}-query.json`),output=join(experiment,`merged-focus-${query.id}-${suffix}.json`);await writeFile(input,JSON.stringify([query]));await exec(process.execPath,[...process.execArgv,script,'--worker',experiment,mode,input,output,'--focus'],{maxBuffer:1_000_000});return (JSON.parse(await readFile(output,'utf8')) as WorkerResult).results[0]!;};
 for(const id of ['q006','q117','q132']){const query=queries.find(q=>q.id===id);assert.ok(query);const baseline=await run('baseline',query,'baseline');assert.ok(baseline.focused);const merged=await run('merged',{...query,referenceURLs:baseline.focused.urls},'four');assert.ok(merged.focused);const removed=baseline.focused.urls.filter(url=>!merged.focused!.urls.includes(url));const reversed=removed.length?await run('baseline',{...query,referenceURLs:merged.focused.urls},'removed'):null;cases.push({id,q:query.q,coldBaselineCount:baseline.count,coldMergedCount:merged.count,addedCount:merged.focused.urls.filter(url=>!baseline.focused!.urls.includes(url)).length,removedCount:removed.length,baselineKeywords:baseline.focused.searchKeywords,mergedKeywords:merged.focused.searchKeywords,baselineTermIdfs:baseline.focused.queryTermIdfs,mergedTermIdfs:merged.focused.queryTermIdfs,addedExamples:merged.focused.examples.filter(example=>!baseline.focused!.urls.includes(example.actualURL)),verifiedCommonExamples:merged.focused.examples.filter(example=>baseline.focused!.urls.includes(example.actualURL)),removedExamples:reversed?.focused?.examples??[]});}
 await writeFile(join(experiment,'merged-focused-summary.json'),JSON.stringify({method:'Fresh process per query and mode with eager filters and verbose Pagefind search. Example IDs are verified against actual result.data().url and content. These counts may differ from the progressive-cache suite; report both contexts.',cases},null,2)+'\n');console.log(JSON.stringify(cases.map(({addedExamples,removedExamples,...rest})=>rest),null,2));
}
if(process.argv[2]==='--worker'){const [root,mode,input,output,focus]=process.argv.slice(3);assert.ok(root&&mode&&input&&output);await worker(resolve(root),mode,input,output,focus==='--focus');}else if(process.argv[2]==='--focus-suite'){assert.ok(process.argv[3]);await focusSuite(resolve(process.argv[3]));}else{assert.ok(process.argv[2],'Expected experiment root');await main(resolve(process.argv[2]));}
