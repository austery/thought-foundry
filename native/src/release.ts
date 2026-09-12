import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
import {mkdir, readdir, lstat, realpath, writeFile, readFile, cp} from 'node:fs/promises';
import {execFileSync, spawnSync} from 'node:child_process';
import {join, dirname, basename, sep} from 'node:path';

const shaPattern=/^[a-f0-9]{40}$/;
export async function stageProductionSource(site:string,destination:string):Promise<void> {
  await mkdir(destination);
  await cp(join(site,'src'),join(destination,'src'),{recursive:true,filter:path=>!['.git','raw_subtitles','cleaned_subtitles'].includes(basename(path))});
}
export async function sha256(file:string):Promise<string> {
  const hash=createHash('sha256');
  for await(const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
export async function outputManifest(root:string):Promise<Record<string,string>> {
  const result:Record<string,string>=Object.create(null) as Record<string,string>;
  async function walk(relative:string):Promise<void> {
    for(const entry of await readdir(join(root,relative),{withFileTypes:true})) {
      if(entry.name.toLowerCase()==='.git')throw new Error('Output contains Git metadata');
      const path=relative?`${relative}/${entry.name}`:entry.name;
      if(entry.isDirectory())await walk(path);
      else if(entry.isFile())result[path]=await sha256(join(root,path));
      else throw new Error(`Unsupported output entry: ${path}`);
    }
  }
  await walk('');
  return Object.fromEntries(Object.entries(result).sort(([a],[b])=>a<b?-1:a>b?1:0));
}
export async function verifySite(root:string):Promise<void> {
  for(const name of ['index.html','pagefind/pagefind.js','css/main.css','js/post.js']) {
    const info=await lstat(join(root,name));
    if(!info.isFile()||info.size===0)throw new Error(`Missing release entry point: ${name}`);
  }
}
export async function preparePublication(root:string):Promise<void> {
  await verifySite(root);
  const marker=join(root,'.nojekyll');
  try {await writeFile(marker,'',{flag:'wx'});}
  catch(error) {
    if((error as NodeJS.ErrnoException).code!=='EEXIST')throw error;
    if(!(await lstat(marker)).isFile())throw new Error('Invalid Pages marker');
  }
}
export async function verifyManifest(root:string,manifestFile:string):Promise<void> {
  const expected:unknown=JSON.parse(await readFile(manifestFile,'utf8'));
  const actual=await outputManifest(root);
  if(!expected||typeof expected!=='object'||Array.isArray(expected))throw new Error('Invalid output manifest');
  const entries=Object.entries(expected);
  if(entries.length!==Object.keys(actual).length||entries.some(([path,hash])=>typeof hash!=='string'||actual[path]!==hash))throw new Error('Restored output differs from manifest');
}

// Produces a portable archive and proves restoration before reporting success.
// The caller owns durable storage and final production revision selection.
export async function backupOutput(output:string,destination:string):Promise<string> {
  const source=await realpath(output);
  const target=join(await realpath(dirname(destination)),basename(destination));
  if(target===source||target.startsWith(source+sep))throw new Error('Backup destination overlaps source');
  await verifySite(source);
  const before=await outputManifest(source);
  await mkdir(destination);
  const manifest=join(destination,'manifest.json');
  await writeFile(manifest,JSON.stringify(before,null,2)+'\n',{flag:'wx'});
  const staging=join(destination,'staging');
  await mkdir(staging);
  await mkdir(join(staging,'public'));
  execFileSync('rsync',['-a',source+sep,join(staging,'public')+sep],{stdio:'pipe'});
  await verifyManifest(join(staging,'public'),manifest);
  const archive=join(destination,'output.tar.gz');
  execFileSync('tar',['-czf',archive,'-C',staging,'public'],{stdio:'pipe'});
  const checksum=await sha256(archive);
  const restored=await extractApprovedArchive(archive,checksum,join(destination,'restore'));
  await verifyManifest(restored,manifest);
  await verifyManifest(source,manifest);
  await writeFile(join(destination,'verification.json'),JSON.stringify({archiveSha256:checksum,manifestSha256:await sha256(manifest),files:Object.keys(before).length,restoreVerified:true},null,2)+'\n',{flag:'wx'});
  return archive;
}
export async function extractApprovedArchive(archive:string,expectedHash:string,destination:string):Promise<string> {
  if(!/^[a-f0-9]{64}$/.test(expectedHash)||await sha256(archive)!==expectedHash)throw new Error('Archive checksum mismatch');
  const options={encoding:'utf8' as const,maxBuffer:64*1024*1024};
  const names=execFileSync('tar',['-tzf',archive],options).trimEnd().split('\n');
  const details=execFileSync('tar',['-tvzf',archive],options).trimEnd().split('\n');
  if(!names.length||details.length!==names.length||details.some(line=>!/^[-d]/.test(line)))throw new Error('Archive contains links or special entries');
  for(const name of names) {
    if((name!=='public'&&name!=='public/'&&!name.startsWith('public/'))||/[\\\r\x00]/.test(name)||name.split('/').some(p=>p==='..'||p==='.'||p.toLowerCase()==='.git'))throw new Error(`Unsafe archive path: ${name}`);
  }
  await mkdir(destination);
  execFileSync('tar',['--no-same-owner','--no-same-permissions','-xzf',archive,'-C',destination],{stdio:'pipe'});
  const output=join(destination,'public');
  await verifySite(output);
  await outputManifest(output);
  return output;
}
function git(checkout:string,args:string[]):string {
  return execFileSync('git',['-C',checkout,...args],{encoding:'utf8'}).trim();
}
export function productionOrigin(origin:string):boolean {
  return /^(git@github\.com:|https:\/\/github\.com\/)austery\/austery\.github\.io(?:\.git)?$/.test(origin);
}
export async function publishDirectory(output:string,checkout:string,expectedHead:string,expectedOrigin:string,message:string):Promise<string> {
  if(!shaPattern.test(expectedHead))throw new Error('Expected exact published SHA');
  const source=await realpath(output), target=await realpath(checkout);
  if(source===target||source.startsWith(target+sep)||target.startsWith(source+sep))throw new Error('Output overlaps publishing checkout');
  if(await realpath(git(target,['rev-parse','--show-toplevel']))!==target)throw new Error('Expected checkout root');
  if(git(target,['remote','get-url','origin'])!==expectedOrigin)throw new Error('Unexpected publication target');
  if(git(target,['rev-parse','HEAD'])!==expectedHead||git(target,['ls-remote','origin','refs/heads/main']).split(/\s/)[0]!==expectedHead)throw new Error('Published head changed');
  if(git(target,['status','--porcelain']))throw new Error('Publishing checkout is dirty');
  await verifySite(source); await outputManifest(source);
  if(!(await lstat(join(source,'.nojekyll'))).isFile())throw new Error('Missing Pages marker');
  // Only an isolated publishing checkout is modified; the old output needs a verified archive.
  execFileSync('rsync',['-a','--checksum','--delete','--exclude=/.git/',source+sep,target+sep],{stdio:'pipe'});
  git(target,['add','--all']);
  const diff=spawnSync('git',['-C',target,'diff','--cached','--quiet']);
  if(diff.status===0)return expectedHead;
  if(diff.status!==1)throw new Error('Cannot inspect publication diff');
  const tree=git(target,['write-tree']);
  const commit=git(target,['commit-tree',tree,'-m',message]);
  // Preserve the existing orphan-history policy, but refuse a changed remote head.
  git(target,['push',`--force-with-lease=refs/heads/main:${expectedHead}`,'origin',`${commit}:refs/heads/main`]);
  return commit;
}

export interface ReleaseIdentity {runId:string;attempt:string;codeSha:string;contentSha:string}
function record(value:unknown):Record<string,unknown> {
  if(!value||typeof value!=='object'||Array.isArray(value))throw new Error('Invalid release evidence');
  return value as Record<string,unknown>;
}
export function verifyReleaseEvidence(run:unknown,manifest:unknown,before:unknown,after:unknown,gate:unknown,identity:ReleaseIdentity):void {
  if(!/^\d+$/.test(identity.runId)||!/^\d+$/.test(identity.attempt)||!shaPattern.test(identity.codeSha)||!shaPattern.test(identity.contentSha))throw new Error('Invalid release identity');
  const r=record(run),m=record(manifest),b=record(before),a=record(after),g=record(gate),env=record(m.environment);
  if(r.status!=='completed'||r.conclusion!=='success'||String(r.id)!==identity.runId||String(r.run_attempt)!==identity.attempt||r.head_sha!==identity.codeSha||r.path!=='.github/workflows/validate-native-release-input.yml')throw new Error('Validation run does not match release');
  if(m.candidateSha!==identity.codeSha||m.contentSha!==identity.contentSha||env.runId!==identity.runId||env.attempt!==identity.attempt)throw new Error('Report identity mismatch');
  if(b.sha!==identity.contentSha||typeof b.fingerprint!=='string'||!/^[a-f0-9]{64}$/.test(b.fingerprint)||a.unchanged!==true||a.before!==b.fingerprint||a.after!==b.fingerprint)throw new Error('Source preservation evidence failed');
  if(g.passed!==true||!Array.isArray(g.failures)||g.failures.length!==0)throw new Error('Native acceptance failed');
}
