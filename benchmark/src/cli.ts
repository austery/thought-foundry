import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, cp, readFile, writeFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { measure, inventory, fingerprint, gitSha, environment } from './evidence.js';

const [operation, ...args] = process.argv.slice(2);
function arg(index: number): string { const value = args[index]; if (!value) throw new Error(`Missing argument ${index}`); return value; }
if (operation === 'summarize') {
  const { readCompletedPair, summarize, experimentIdentity, requireSameExperiment } = await import('./summary.js');
  const { files } = await import('./evidence.js');
  const root = resolve(arg(0));
  const pairs = []; const identities: string[] = [];
  for (const name of await files(root)) if (name.endsWith('/pair.json') || name === 'pair.json') {
    const dir=dirname(join(root,name));
    const json=async (file:string):Promise<unknown>=>JSON.parse(await readFile(join(dir,file),'utf8'));
    identities.push(experimentIdentity(await json('run-manifest.json'),await json('source-after.json'),await json('versions.json'),await json('measured-hugo-versions.json')));
    pairs.push(readCompletedPair(await json('pair.json')));
  }
  const identity=JSON.parse(requireSameExperiment(identities)) as Record<string,string>;
  const result = summarize(pairs);
  await writeFile(resolve(arg(1)),JSON.stringify({identity,pairs,...result},null,2));
  console.log(JSON.stringify(result));
} else if (operation === 'pair') {
  const { runPair } = await import('./pair.js');
  await runPair(arg(0), Number(arg(1)), resolve(arg(2)), resolve(arg(3)), resolve(arg(4)));
} else if (operation === 'candidate') {
  const { buildCandidate } = await import('./candidate.js');
  console.log(await buildCandidate(resolve(arg(0)), resolve(arg(1)), resolve(arg(2))));
} else if (operation === 'adapt') {
  const { adapt } = await import('./adapter.js');
  console.log(await adapt(resolve(arg(0)), resolve(arg(1))));
} else if (operation === 'measure') {
  const result = await measure(arg(0), arg(3), args.slice(4), resolve(arg(1)), resolve(arg(2)));
  process.exitCode = result.exitCode;
} else if (operation === 'prepare') {
  const source = resolve(arg(0)); const site = resolve(arg(1)); const reports = resolve(arg(2));
  await mkdir(reports, { recursive: true });
  const config: { contentSha: string; baselineSha: string } = JSON.parse(await readFile(new URL('../config.json', import.meta.url), 'utf8'));
  if (gitSha(source) !== config.contentSha) throw new Error('Content SHA does not match experiment pin');
  await writeFile(join(reports, 'source-before.json'), JSON.stringify({ sha: gitSha(source), fingerprint: await fingerprint(source), environment: environment() }, null, 2));
  await writeFile(join(reports, 'run-manifest.json'), JSON.stringify({ ...config, candidateSha: gitSha(resolve('..')), environment: environment(), siteLockHash: createHash('sha256').update(await readFile(join(site, 'pnpm-lock.yaml'))).digest('hex'), toolsLockHash: createHash('sha256').update(await readFile('pnpm-lock.yaml')).digest('hex'), pnpm: execFileSync('pnpm', ['--version'], { encoding: 'utf8' }).trim(), pagefindVersionSource: 'Pinned site pnpm-lock.yaml; runtime version recorded by Pagefind stage log', htmlInventoryScope: 'DOM eligibility, not actual indexed URLs' }, null, 2));
  await cp(source, join(site, 'src/content'), { recursive: true, filter: path => !['.git', 'raw_subtitles', 'cleaned_subtitles'].includes(path.split('/').at(-1)!) });
} else if (operation === 'prepare-candidate') {
  const { prepareCandidateSource } = await import('./adapter.js');
  await prepareCandidateSource(resolve(arg(0)), resolve(arg(1)));
  if (args[2]) await cp(resolve(arg(2)), join(resolve(arg(1)), '.eleventy-cache.json'), { errorOnExist: true, force: false });
} else if (operation === 'restore-paths') {
  const { restoreLegacyPaths } = await import('./adapter.js');
  await restoreLegacyPaths(resolve(arg(0)), resolve(arg(1)));
} else if (operation === 'compare') {
  const { compareInventories, indexedPages, compareIndexes } = await import('./compare.js');
  const baseline = resolve(arg(0)); const candidate = resolve(arg(1)); const reports = resolve(arg(2));
  const comparison = compareInventories(await inventory(baseline), await inventory(candidate));
  const indexes = compareIndexes(await indexedPages(baseline), await indexedPages(candidate));
  await writeFile(join(reports, 'comparison.json'), JSON.stringify({ comparison, indexes }, null, 2));
  console.log(JSON.stringify({ comparison, indexes }));
} else if (operation === 'versions') {
  const site = resolve(arg(0));
  const versions: Record<string, string> = {};
  for (const name of ['@11ty/eleventy', 'pagefind']) {
    const pkg: { version: string } = JSON.parse(await readFile(join(site, 'node_modules', name, 'package.json'), 'utf8'));
    versions[name] = pkg.version;
  }
  await writeFile(resolve(arg(1)), JSON.stringify(versions, null, 2));
} else if (operation === 'inventory') {
  const result = await inventory(resolve(arg(0)));
  await writeFile(resolve(arg(1)), JSON.stringify(result));
  console.log(JSON.stringify({ bytes: result.bytes, fileCount: result.fileCount, html: result.pages.length, indexable: result.pages.filter(p => p.indexable).length }));
} else if (operation === 'verify-source') {
  const before: { fingerprint: string } = JSON.parse(await readFile(resolve(arg(1)), 'utf8'));
  const after = await fingerprint(resolve(arg(0)));
  await writeFile(resolve(arg(2)), JSON.stringify({ unchanged: after === before.fingerprint, before: before.fingerprint, after }, null, 2));
  if (after !== before.fingerprint) throw new Error('Source bytes changed during the experiment');
  console.log(`Source unchanged: ${after}`);
} else throw new Error(`Unknown operation: ${operation}`);
