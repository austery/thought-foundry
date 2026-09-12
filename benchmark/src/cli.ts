import { mkdir, cp, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { measure, inventory, fingerprint, gitSha, environment } from './evidence.js';

const [operation, ...args] = process.argv.slice(2);
function arg(index: number): string { const value = args[index]; if (!value) throw new Error(`Missing argument ${index}`); return value; }
if (operation === 'measure') {
  const result = await measure(arg(0), arg(3), args.slice(4), resolve(arg(1)), resolve(arg(2)));
  process.exitCode = result.exitCode;
} else if (operation === 'prepare') {
  const source = resolve(arg(0)); const site = resolve(arg(1)); const reports = resolve(arg(2));
  await mkdir(reports, { recursive: true });
  const config: { contentSha: string } = JSON.parse(await readFile(new URL('../config.json', import.meta.url), 'utf8'));
  if (gitSha(source) !== config.contentSha) throw new Error('Content SHA does not match experiment pin');
  await writeFile(join(reports, 'source-before.json'), JSON.stringify({ sha: gitSha(source), fingerprint: await fingerprint(source), environment: environment() }, null, 2));
  await cp(source, join(site, 'src/content'), { recursive: true, filter: path => !['.git', 'raw_subtitles', 'cleaned_subtitles'].includes(path.split('/').at(-1)!) });
} else if (operation === 'inventory') {
  const result = await inventory(resolve(arg(0)));
  await writeFile(resolve(arg(1)), JSON.stringify(result));
  console.log(JSON.stringify({ bytes: result.bytes, fileCount: result.fileCount, html: result.pages.length, indexable: result.pages.filter(p => p.indexable).length }));
} else if (operation === 'verify-source') {
  const before: { fingerprint: string } = JSON.parse(await readFile(resolve(arg(1)), 'utf8'));
  const after = await fingerprint(resolve(arg(0)));
  if (after !== before.fingerprint) throw new Error('Source bytes changed during the experiment');
  console.log(`Source unchanged: ${after}`);
} else throw new Error(`Unknown operation: ${operation}`);
