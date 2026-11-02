import {readFile, writeFile} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {pathToFileURL} from 'node:url';
interface ResultData {url:string; excerpt:string; meta:Record<string,string>; sub_results?: {url:string; title:string; excerpt:string}[]; locations?:number[];}
interface Bundle {options(value:{baseUrl:string}):Promise<void>; filters():Promise<Record<string,Record<string,number>>>; search(query:string|null,options?:{filters:Record<string,string>}):Promise<{results:{id:string;data():Promise<ResultData>}[]}>; destroy():Promise<void>;}
const directory=resolve(process.argv[2]!);
// Node 22 detects the generated ES module without writing into the index directory.
Object.defineProperty(globalThis,'document',{value:{currentScript:null,querySelector:()=>({getAttribute:()=> 'zh-hans'}),documentElement:{lang:'zh-hans'}},configurable:true});
const originalFetch=globalThis.fetch;
globalThis.fetch=async (input,init)=>String(input).startsWith('file:')?new Response(new Uint8Array(await readFile(new URL(String(input)))).buffer):originalFetch(input,init);
const bundle=await import(pathToFileURL(join(directory,'pagefind.js')).href) as Bundle;
await bundle.options({baseUrl:'/'});
const queries:{q:string;filters?:Record<string,string>}[]=[{q:'家庭关系'},{q:'"家庭关系"'},{q:'教育'},{q:'极寒末世',filters:{speaker:'梁州令'}},{q:'Futu',filters:{x_author:'858124064476479488'}},{q:'"zzzxqvnonexistenttermzzzxqv"'}];
const output=[];
for(const {q,filters}of queries){const r=await bundle.search(q,filters?{filters}:undefined);output.push({q,filters,count:r.results.length,first:await Promise.all(r.results.slice(0,5).map(async r=>r.data()))});}
const report={filters:await bundle.filters(),queries:output};
await writeFile(process.argv[3]!,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(output.map(r=>({q:r.q,count:r.count,first:r.first.map(p=>p.url)})),null,2));
await bundle.destroy();
