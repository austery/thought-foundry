import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readdir,readFile,mkdir,link,writeFile,stat} from 'node:fs/promises';
import {join,dirname,resolve} from 'node:path';
import {load} from 'cheerio';
interface Page {path:string; bytes:number; group:number; kind:string; htmlSha256:string;}
const [inputArg,outputArg]=process.argv.slice(2);
if(!inputArg||!outputArg)throw new Error('Expected input HTML root and experiment output root');
const input=resolve(inputArg),output=resolve(outputArg);
async function walk(root:string):Promise<string[]>{
 const found:string[]=[];
 for(const item of await readdir(root,{withFileTypes:true})){
  if(item.isDirectory())found.push(...(await walk(join(root,item.name))).map(p=>join(item.name,p)));
  else if(item.isFile()&&item.name.endsWith('.html'))found.push(item.name);
 }
 return found;
}
const pages:Page[]=[];
for(const path of (await walk(input)).sort()){
 const html=await readFile(join(input,path),'utf8');
 const document=load(html);
 if(!document('[data-pagefind-body]').length)continue;
 const hash=createHash('sha256').update(path).digest();
 pages.push({path,bytes:Buffer.byteLength(html),group:hash.readUInt32BE(0)%4,kind:path.split('/')[1]??'standalone',htmlSha256:createHash('sha256').update(html).digest('hex')});
}
const samples=[];
for(const [label,groups] of [['25',[0]],['50',[0,1]],['100',[0,1,2,3]],['shard-0',[0]],['shard-1',[1]],['shard-2',[2]],['shard-3',[3]]] as const){
 const selected=pages.filter(p=>(groups as readonly number[]).includes(p.group));
 const root=join(output,`input-${label}`);await mkdir(root,{recursive:true});
 for(const page of selected){const target=join(root,page.path);await mkdir(dirname(target),{recursive:true});try {await link(join(input,page.path),target);} catch(error:unknown) {if(!error||typeof error!=='object'||!('code' in error)||error.code!=='EEXIST')throw error;const [sourceStat,targetStat]=await Promise.all([stat(join(input,page.path)),stat(target)]);assert.equal(targetStat.dev,sourceStat.dev);assert.equal(targetStat.ino,sourceStat.ino,'Existing input is not the expected task hardlink');}}
 const lengths=selected.map(p=>p.bytes).sort((a,b)=>a-b);
 const kinds:Record<string,number>={};for(const p of selected)kinds[p.kind]=(kinds[p.kind]??0)+1;
 samples.push({label,root,pages:selected.length,htmlBytes:lengths.reduce((a,b)=>a+b,0),medianBytes:lengths[Math.floor(lengths.length*.5)],p95Bytes:lengths[Math.floor(lengths.length*.95)],maxBytes:lengths.at(-1),kinds});
}
await writeFile(join(output,'corpus.json'),JSON.stringify({input,method:'SHA-256 of original relative HTML path modulo 4; nested whole-document subsets; only explicit data-pagefind-body pages; HTML bytes include markup and are not token counts.',eligiblePages:pages.length,pages,samples},null,2)+'\n');
console.log(JSON.stringify(samples));
