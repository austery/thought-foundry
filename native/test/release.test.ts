import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,symlink,cp,access} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
import {extractApprovedArchive,outputManifest,sha256,productionOrigin,backupOutput,verifyManifest,stageProductionSource,publishDirectory,verifyReleaseEvidence,preparePublication} from '../src/release.js';
import {prepare,restore} from '../src/prepare.js';

test('production staging excludes subtitle Markdown without changing source',async()=>{
  const root=await mkdtemp(join(tmpdir(),'native-production-source-'));
  const source=join(root,'source');
  for(const dir of ['notes','raw_subtitles','cleaned_subtitles']) {
    await mkdir(join(source,'src/content',dir),{recursive:true});
    await writeFile(join(source,'src/content',dir,'fixture.md'),'---\ntitle: Fixture\nlayout: post.njk\ndate: 2026-09-12\n---\nBody');
  }
  for(const dir of ['css','js'])await cp(resolve('../src',dir),join(source,'src',dir),{recursive:true});
  const staged=join(root,'staged');
  await stageProductionSource(source,staged);
  const generated=join(root,'generated'),output=join(root,'public');
  await prepare(staged,generated);
  execFileSync('hugo',['--source',generated,'--destination',output],{stdio:'pipe'});
  await restore(generated,output);
  await access(join(output,'content/notes/fixture/index.html'));
  for(const dir of ['raw_subtitles','cleaned_subtitles']) {
    await access(join(source,'src/content',dir,'fixture.md'));
    await assert.rejects(access(join(output,'content',dir,'fixture/index.html')),/ENOENT/);
  }
});

test('approved archive round-trip preserves Unicode paths and checks every file',async()=>{
  const root=await mkdtemp(join(tmpdir(),'native-release-'));
  const site=join(root,'public');
  for(const path of ['index.html','pagefind/pagefind.js','css/main.css','js/post.js','中文/Case/index.html','__proto__']) {
    await mkdir(join(site,path,'..'),{recursive:true});
    await writeFile(join(site,path),`fixture: ${path}`);
  }
  const archive=join(root,'site.tar.gz');
  execFileSync('tar',['-czf',archive,'-C',root,'public']);
  const checksum=await sha256(archive);
  await assert.rejects(extractApprovedArchive(archive,'0'.repeat(64),join(root,'wrong')),/checksum/);
  const restored=await extractApprovedArchive(archive,checksum,join(root,'restored'));
  assert.deepEqual(await outputManifest(restored),await outputManifest(site));
  const backup=join(root,'backup');
  await assert.rejects(backupOutput(site,join(site,'backup')),/overlaps/);
  await backupOutput(site,backup);
  await verifyManifest(join(backup,'restore/public'),join(backup,'manifest.json'));
  await writeFile(join(backup,'restore/public/__proto__'),'corrupted');
  await assert.rejects(verifyManifest(join(backup,'restore/public'),join(backup,'manifest.json')),/differs/);
  await writeFile(join(backup,'restore/public/__proto__'),'fixture: __proto__');
  await writeFile(join(backup,'restore/public/index.html'),'corrupted');
  await assert.rejects(verifyManifest(join(backup,'restore/public'),join(backup,'manifest.json')),/differs/);
  await writeFile(join(backup,'restore/public/extra.html'),'unexpected');
  await assert.rejects(verifyManifest(join(backup,'restore/public'),join(backup,'manifest.json')),/differs/);
  await assert.rejects(extractApprovedArchive(archive,checksum,join(root,'restored')),/EEXIST/);
});

test('archive extraction rejects links before extracting',async()=>{
  const root=await mkdtemp(join(tmpdir(),'native-release-link-'));
  await mkdir(join(root,'public'));
  await symlink('/tmp',join(root,'public','escape'));
  const archive=join(root,'bad.tar.gz');
  execFileSync('tar',['-czf',archive,'-C',root,'public']);
  await assert.rejects(extractApprovedArchive(archive,await sha256(archive),join(root,'restored')),/links/);
});

test('production identity matches only the exact approved repository',()=>{
  assert.equal(productionOrigin('git@github.com:austery/austery.github.io.git'),true);
  assert.equal(productionOrigin('https://github.com/austery/austery.github.io'),true);
  for(const origin of ['https://github.com/other/austery.github.io','https://github.com/austery/austery.github.io.evil','https://github.com.evil/austery/austery.github.io'])assert.equal(productionOrigin(origin),false);
});

test('release evidence rejects failed runs, stale identity and changed source',()=>{
  const identity={runId:'123',attempt:'1',codeSha:'a'.repeat(40),contentSha:'b'.repeat(40)};
  const run={id:123,run_attempt:1,status:'completed',conclusion:'success',head_sha:identity.codeSha,path:'.github/workflows/validate-native-release-input.yml'};
  const manifest={candidateSha:identity.codeSha,contentSha:identity.contentSha,environment:{runId:'123',attempt:'1'}};
  const before={sha:identity.contentSha,fingerprint:'c'.repeat(64)};
  const after={unchanged:true,before:before.fingerprint,after:before.fingerprint};
  const gate={passed:true,failures:[]};
  verifyReleaseEvidence(run,manifest,before,after,gate,identity);
  assert.throws(()=>verifyReleaseEvidence({...run,conclusion:'failure'},manifest,before,after,gate,identity),/run/);
  assert.throws(()=>verifyReleaseEvidence(run,manifest,before,after,gate,{...identity,attempt:'2'}),/run/);
  assert.throws(()=>verifyReleaseEvidence(run,{...manifest,contentSha:'d'.repeat(40)},before,after,gate,identity),/identity/);
  assert.throws(()=>verifyReleaseEvidence(run,manifest,before,{...after,after:'e'.repeat(64)},gate,identity),/Source/);
  assert.throws(()=>verifyReleaseEvidence(run,manifest,before,after,{passed:true,failures:['missing URL']},identity),/acceptance/);
});

test('isolated publication retains orphan policy and rejects stale output heads',async()=>{
  const root=await mkdtemp(join(tmpdir(),'native-local-publish-'));
  const remote=join(root,'remote.git'),checkout=join(root,'checkout'),output=join(root,'output');
  const git=(cwd:string,args:string[])=>execFileSync('git',['-C',cwd,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
  execFileSync('git',['init','--bare','--initial-branch=main',remote],{stdio:'pipe'});
  execFileSync('git',['clone',remote,checkout],{stdio:'pipe'});
  git(checkout,['config','user.name','Release fixture']);
  git(checkout,['config','user.email','fixture@example.invalid']);
  await writeFile(join(checkout,'index.html'),'old');
  await writeFile(join(checkout,'.nojekyll'),'');
  git(checkout,['add','.']);git(checkout,['commit','-m','Old output']);git(checkout,['push','origin','main']);
  const old=git(checkout,['rev-parse','HEAD']);
  for(const path of ['index.html','pagefind/pagefind.js','css/main.css','js/post.js','content/notes/_example/index.html']) {
    await mkdir(join(output,path,'..'),{recursive:true});await writeFile(join(output,path),'new');
  }
  await assert.rejects(publishDirectory(output,checkout,old,remote+'-wrong','New output'),/target/);
  await assert.rejects(publishDirectory(output,checkout,old,remote,'New output'),/ENOENT/);
  await preparePublication(output);
  assert.ok(Object.hasOwn(await outputManifest(output),'.nojekyll'));
  const published=await publishDirectory(output,checkout,old,remote,'New output');
  assert.equal(git(remote,['rev-parse','main']),published);
  assert.equal(git(remote,['rev-list','--parents','-n','1','main']),published);
  assert.equal(git(remote,['show','main:index.html']),'new');
  assert.equal(git(remote,['show','main:.nojekyll']),'');
  assert.equal(git(remote,['show','main:content/notes/_example/index.html']),'new');
  // Use a fresh clean checkout so rejection specifically tests the remote revision contract.
  const stale=join(root,'stale');execFileSync('git',['clone',remote,stale],{stdio:'pipe'});
  await assert.rejects(publishDirectory(output,stale,old,remote,'Unexpected replacement'),/head changed/);
  assert.equal(git(remote,['rev-parse','main']),published);
});
