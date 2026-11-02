import assert from 'node:assert/strict';
import {readdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {gunzipSync} from 'node:zlib';
type Value=number|string|Value[];
const [left,right,output]=process.argv.slice(2);if(!left||!right||!output)throw new Error('Expected two index directories and report path');
async function files(root:string):Promise<string[]>{const out:string[]=[];for(const entry of await readdir(root,{withFileTypes:true})){if(entry.name==='package.json')continue;if(entry.isDirectory())out.push(...(await files(join(root,entry.name))).map(p=>`${entry.name}/${p}`));else out.push(entry.name);}return out.sort();}
const hash=(value:Uint8Array|string)=>createHash('sha256').update(value).digest('hex');
function decode(data:Buffer):Value {
 let offset=0;
 function item():Value{const byte=data[offset++];assert.notEqual(byte,undefined);const major=byte!>>5,additional=byte!&31;let size:number;
  if(additional<24)size=additional;else {const bytes=2**(additional-24);assert.ok(bytes<=8);size=bytes===8?Number(data.readBigUInt64BE(offset)):data.readUIntBE(offset,bytes);offset+=bytes;assert.ok(Number.isSafeInteger(size));}
  if(major===0)return size;if(major===1)return -size-1;
  if(major===3){const value=data.subarray(offset,offset+size).toString('utf8');offset+=size;return value;}
  if(major===4)return Array.from({length:size},()=>item());
  throw new Error(`Unsupported CBOR major type ${major}`);
 }
 const value=item();assert.equal(offset,data.length);return value;
}
const unpack=async(root:string,path:string)=>decode(gunzipSync(await readFile(join(root,path))).subarray(12));
async function normalized(root:string){
 const paths=await files(root);const stable:Record<string,string>={};const filters:Record<string,{name:string;data:Value}>={};const fragments:Record<string,string>={};
 for(const path of paths){
  if(path.startsWith('filter/')){const data=await unpack(root,path);assert.ok(Array.isArray(data)&&typeof data[0]==='string'&&Array.isArray(data[1]));const values=[...data[1]];assert.ok(values.every(v=>Array.isArray(v)&&typeof v[0]==='string'));values.sort((a,b)=>String((a as Value[])[0]).localeCompare(String((b as Value[])[0])));filters[path.slice(7,-10)]={name:data[0],data:[data[0],values]};continue;}
  if(path.endsWith('.pf_meta')||path==='pagefind-entry.json')continue;
  const bytes=await readFile(join(root,path));stable[path]=hash(path.endsWith('.pagefind')?gunzipSync(bytes):bytes);
  if(path.startsWith('fragment/')){const data=gunzipSync(bytes).subarray(12);const value:unknown=JSON.parse(data.toString());assert.ok(value&&typeof value==='object'&&'url' in value&&typeof value.url==='string');assert.ok(!(value.url in fragments),'Duplicate canonical URL');fragments[value.url]=hash(data);}
 }
 const metadata:Record<string,Value>={};const entry:unknown=JSON.parse(await readFile(join(root,'pagefind-entry.json'),'utf8'));assert.ok(entry&&typeof entry==='object'&&'languages' in entry&&entry.languages&&typeof entry.languages==='object');
 for(const [language,details] of Object.entries(entry.languages)){
  assert.ok(details&&typeof details==='object'&&'hash' in details&&typeof details.hash==='string');
  const meta=await unpack(root,`pagefind.${details.hash}.pf_meta`);assert.ok(Array.isArray(meta)&&Array.isArray(meta[3]));
  meta[3]=meta[3].map(filter=>{assert.ok(Array.isArray(filter)&&typeof filter[0]==='string'&&typeof filter[1]==='string');const match=filters[filter[1]];assert.ok(match);assert.equal(match.name,filter[0]);return [filter[0],hash(JSON.stringify(match.data))] as Value;}).sort((a,b)=>String((a as Value[])[0]).localeCompare(String((b as Value[])[0])));
  metadata[language]=meta;details.hash='verified-normalized-metadata';
 }
 return {paths,stable,fragments,metadata,entry,filters:Object.values(filters).map(f=>f.data).sort((a,b)=>String((a as Value[])[0]).localeCompare(String((b as Value[])[0])))};
}
const a=await normalized(left),b=await normalized(right);
const changed=Object.keys(a.stable).filter(path=>a.stable[path]!==b.stable[path]);const added=Object.keys(b.stable).filter(path=>!(path in a.stable));assert.equal(changed.length+added.length,0,`Changed stable payloads: ${[...changed,...added].slice(0,20).join(', ')}`);assert.deepEqual(b.fragments,a.fragments,'Canonical fragment map differs');assert.deepEqual(b.filters,a.filters,'Decoded filter content differs');assert.deepEqual(b.metadata,a.metadata,'Metadata differs beyond filter order/hash references');assert.deepEqual(b.entry,a.entry,'Entry metadata differs beyond verified metadata hash');assert.equal(a.paths.length,b.paths.length);
await writeFile(output,JSON.stringify({left,right,totalFiles:a.paths.length,exactStablePayloadMatches:Object.keys(a.stable).length,exactFragmentMatches:Object.keys(a.fragments).length,canonicalURLCount:Object.keys(a.fragments).length,decodedFilterMatches:a.filters.length,normalizedMetadataEqual:true,normalizedEntryEqual:true,normalization:'Only filter value ordering, meta filter ordering, and their verified hash references. Pagefind 1.5.2 index/mod.rs has an explicit TODO to stabilize filter hashes. The packaged WASM gzip header may differ; its decompressed payload is byte-identical. Every fragment, term-index chunk and other browser asset remains byte-identical.'},null,2)+'\n');
console.log(`Exact fragments: ${Object.keys(a.fragments).length}; exact stable files: ${Object.keys(a.stable).length}; decoded filters: ${a.filters.length}`);
