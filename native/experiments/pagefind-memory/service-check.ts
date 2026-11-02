import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {mkdir,writeFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';
interface File {path:string;content:Uint8Array;}
interface Reply {errors?:unknown[];files?:File[];}
interface Index {addHTMLFile(value:{url:string;content:string}):Promise<Reply>;getFiles():Promise<Reply>;writeFiles(value:{outputPath:string}):Promise<Reply>;deleteIndex():Promise<void>;}
interface API {createIndex():Promise<{index?:Index;errors?:unknown[]}>;close():Promise<void>;}
const api=await import(process.argv[2]!) as API;
const output=process.argv[3]!;await mkdir(output,{recursive:true});
function check<T extends {errors?:unknown[]}>(reply:T):T {assert.deepEqual(reply.errors??[],[]);return reply;}
function fragments(files:File[]):{url:string;content:string}[]{return files.filter(f=>f.path.startsWith('fragment/')).flatMap(f=>{const data:unknown=JSON.parse(gunzipSync(f.content).subarray(12).toString());assert.ok(data&&typeof data==='object'&&'url' in data&&typeof data.url==='string'&&'content' in data&&typeof data.content==='string');return [{url:data.url,content:data.content}];}).sort((a,b)=>a.url.localeCompare(b.url));}
function hashes(files:File[]):Record<string,string>{return Object.fromEntries(files.map(f=>[f.path,createHash('sha256').update(f.content).digest('hex')]).sort(([a],[b])=>a!.localeCompare(b!)));}
const states=[];const boundaryStates:Record<string,Record<string,string>>={};
try {
 const index=check(await api.createIndex()).index;assert.ok(index);
 check(await index.addHTMLFile({url:'/first/',content:'<html lang="zh-hans"><body><article data-pagefind-body><h1>家庭关系</h1>教育 alpha café</article></body></html>'}));
 const first=check(await index.getFiles()).files;assert.ok(first);assert.deepEqual(fragments(first).map(f=>f.url),['/first/']);states.push(hashes(first));
 const repeat=check(await index.getFiles()).files;assert.ok(repeat);assert.deepEqual(hashes(repeat),hashes(first));
 check(await index.writeFiles({outputPath:output+'/written'}));
 check(await index.addHTMLFile({url:'/second/',content:'<html lang="zh-hans"><body><article data-pagefind-body>第二篇 gamma 数据库</article></body></html>'}));
 const second=check(await index.getFiles()).files;assert.ok(second);assert.deepEqual(fragments(second).map(f=>f.url),['/first/','/second/']);states.push(hashes(second));
 check(await index.addHTMLFile({url:'/first/',content:'<html lang="zh-hans"><body><article data-pagefind-body>替换文章 beta 新内容</article></body></html>'}));
 const replaced=check(await index.getFiles()).files;assert.ok(replaced);const bodies=fragments(replaced);assert.equal(bodies.length,2);assert.ok(bodies.find(f=>f.url==='/first/')?.content.includes('beta'));assert.ok(!bodies.find(f=>f.url==='/first/')?.content.includes('alpha'));states.push(hashes(replaced));
 await index.deleteIndex();
 const afterDelete=await index.getFiles();assert.ok(afterDelete.errors?.length);
 const boundary=check(await api.createIndex()).index;assert.ok(boundary);
 for(let i=0;i<255;i++)check(await boundary.addHTMLFile({url:`/boundary/${i}/`,content:`<html lang="en"><body><article data-pagefind-body>batch boundary alpha ${i}</article></body></html>`}));
 for(const count of [255,256,257]){
  if(count>255)check(await boundary.addHTMLFile({url:`/boundary/${count-1}/`,content:`<html lang="en"><body><article data-pagefind-body>batch boundary alpha ${count-1}<span data-pagefind-meta="late">late metadata</span><span data-pagefind-filter="source">Late source</span></article></body></html>`}));
  const boundaryFiles:File[]|undefined=check(await boundary.getFiles()).files;assert.ok(boundaryFiles);assert.equal(fragments(boundaryFiles).length,count);boundaryStates[String(count)]=hashes(boundaryFiles);const repeatedFiles:File[]|undefined=check(await boundary.getFiles()).files;assert.ok(repeatedFiles);assert.deepEqual(hashes(repeatedFiles),hashes(boundaryFiles));
 }
 check(await boundary.writeFiles({outputPath:output+'/boundary-written'}));
 check(await boundary.addHTMLFile({url:'/boundary/256/',content:'<html lang="en"><body><article data-pagefind-body>replacement beta</article></body></html>'}));
 const updated=check(await boundary.getFiles()).files;assert.ok(updated);assert.equal(fragments(updated).length,257);assert.ok(fragments(updated).find(f=>f.url==='/boundary/256/')?.content.includes('beta'));
 await boundary.deleteIndex();

 await writeFile(output+'/service-check.json',JSON.stringify({repeatBuild:true,writeThenAdd:true,replaceExistingURL:true,deleteInvalidates:true,batchBoundaryCounts:[255,256,257],boundaryStates,states},null,2)+'\n');
 console.log('Service lifecycle checks passed');
} finally {await api.close();}
