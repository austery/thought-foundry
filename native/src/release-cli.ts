import {execFileSync} from 'node:child_process';
import {appendFile,writeFile,readFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {extractApprovedArchive,outputManifest,publishDirectory,productionOrigin,sha256,backupOutput,verifyManifest,stageProductionSource,verifyReleaseEvidence,preparePublication} from './release.js';

const [command,...args]=process.argv.slice(2);
function arg(index:number):string {const v=args[index];if(!v)throw new Error(`Missing argument ${index}`);return v;}
if(command==='prepare-publication') {
  await preparePublication(resolve(arg(0)));
} else if(command==='verify-evidence') {
  const json=async(path:string):Promise<unknown>=>JSON.parse(await readFile(path,'utf8'));
  const reports=resolve(arg(1));
  verifyReleaseEvidence(await json(resolve(arg(0))),await json(join(reports,'run-manifest.json')),await json(join(reports,'source-before.json')),await json(join(reports,'source-after.json')),await json(join(reports,'native-acceptance.json')),{runId:arg(2),attempt:arg(3),codeSha:arg(4),contentSha:arg(5)});
  console.log('Release evidence verified');
} else if(command==='stage-source') {
  await stageProductionSource(resolve(arg(0)),resolve(arg(1)));
} else if(command==='backup') {
  console.log(await backupOutput(resolve(arg(0)),resolve(arg(1))));
} else if(command==='verify') {
  await verifyManifest(resolve(arg(0)),resolve(arg(1)));
  console.log('Output manifest verified');
} else if(command==='extract') {
  const output=await extractApprovedArchive(resolve(arg(0)),arg(1),resolve(arg(2)));
  console.log(output);
  if(process.env.GITHUB_OUTPUT)await appendFile(process.env.GITHUB_OUTPUT,`directory=${output}\n`);
} else if(command==='manifest') {
  const manifest=await outputManifest(resolve(arg(0)));
  await writeFile(resolve(arg(1)),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});
  console.log(await sha256(resolve(arg(1))));
} else if(command==='publish') {
  const checkout=resolve(arg(1));
  const origin=execFileSync('git',['-C',checkout,'remote','get-url','origin'],{encoding:'utf8'}).trim();
  if(!productionOrigin(origin))throw new Error('Not the approved production repository');
  const published=await publishDirectory(resolve(arg(0)),checkout,arg(2),origin,arg(3));
  console.log(`Published: ${published}`);
  if(process.env.GITHUB_OUTPUT)await appendFile(process.env.GITHUB_OUTPUT,`published_sha=${published}\n`);
} else throw new Error('Expected stage-source, backup, verify, extract, manifest, or publish');
