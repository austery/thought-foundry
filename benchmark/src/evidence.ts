import { spawn, execFileSync } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { readdir, readFile, stat, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { cpus, totalmem, platform } from 'node:os';
import { load } from 'cheerio';

export async function files(root: string, prefix = ''): Promise<string[]> {
  const result: string[] = [];
  for (const entry of (await readdir(join(root, prefix), { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name, 'en'))) {
    if (entry.name === '.git') continue;
    const name = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) result.push(...await files(root, name));
    else if (entry.isFile()) result.push(name);
    else throw new Error(`Unsupported source entry: ${name}`);
  }
  return result;
}
export async function fingerprint(root: string): Promise<string> {
  const hash = createHash('sha256');
  for (const name of await files(root)) {
    const bytes = await readFile(join(root, name));
    hash.update(JSON.stringify([name, bytes.length])); hash.update(bytes);
  }
  return hash.digest('hex');
}
export interface Measurement { stage: string; command: string[]; seconds: number; exitCode: number; signal: string | null; peakMemoryKiB: number | null; }
export async function measure(stage: string, command: string, args: string[], cwd: string, reports: string): Promise<Measurement> {
  if (!/^[\w.-]+$/.test(stage)) throw new Error('Invalid stage identifier');
  await mkdir(reports, { recursive: true });
  const log = createWriteStream(join(reports, `${stage}.log`));
  const started = performance.now();
  const linux = platform() === 'linux';
  const memoryFile = join(reports, `${stage}.memory`);
  const invocation = linux ? ['/usr/bin/time', '-f', '%M', '-o', memoryFile, command, ...args] : [command, ...args];
  const child = spawn(invocation[0]!, invocation.slice(1), { cwd, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, NODE_ENV: '', OPTIMIZE_SEARCH: '', NODE_OPTIONS: '--max-old-space-size=8192', TZ: 'UTC' } });
  child.stdout.pipe(log, { end: false }); child.stderr.pipe(log, { end: false });
  const result = await new Promise<Measurement>(resolve => {
    let error: Error | undefined;
    child.on('error', e => { error = e; log.write(String(e)); });
    child.on('close', (code, signal) => resolve({ stage, command: [command, ...args], seconds: (performance.now() - started) / 1000, exitCode: error ? 127 : code ?? 128, signal, peakMemoryKiB: null }));
  });
  await new Promise<void>(resolve => log.end(resolve));
  if (linux) {
    try {
      const lines = (await readFile(memoryFile, 'utf8')).trim().split('\n');
      const value = Number(lines.at(-1)); result.peakMemoryKiB = Number.isFinite(value) ? value : null;
    } catch { /* A missing timing file must not hide the command failure. */ }
  }
  await writeFile(join(reports, `${stage}.json`), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
  return result;
}
export interface PageEvidence { url: string; title: string; indexable: boolean; text: string; textHash: string; readingTextHash: string; headings: string[]; links: string[]; images: string[]; }
export interface Inventory { bytes: number; fileCount: number; pages: PageEvidence[]; }
export async function inventory(root: string): Promise<Inventory> {
  const result: Inventory = { bytes: 0, fileCount: 0, pages: [] };
  for (const name of await files(root)) {
    result.fileCount++; result.bytes += (await stat(join(root, name))).size;
    if (!name.endsWith('.html')) continue;
    const $ = load(await readFile(join(root, name), 'utf8'));
    const body = $('[data-pagefind-body]');
    const indexable = body.length > 0 && $('html[data-pagefind-ignore], body[data-pagefind-ignore]').length === 0;
    const textNode = body.clone(); textNode.find('[data-pagefind-ignore], script, style').remove();
    textNode.find('p,div,h1,h2,h3,h4,h5,h6,li,br,pre,td,th').append(' ');
    const text = textNode.text().replace(/\s+/gu, ' ').trim();
    const reading = ($('#content-body').length ? $('#content-body') : $('body')).clone();
    reading.find('script,style').remove();
    reading.find('p,div,h1,h2,h3,h4,h5,h6,li,br,pre,td,th').append(' ');
    const readingTextHash = createHash('sha256').update(reading.text().replace(/\s+/gu, ' ').trim()).digest('hex');
    const url = '/' + name.replace(/(?:^|\/)index\.html$/, match => match.startsWith('/') ? '/' : '');
    result.pages.push({ url, title: $('title').text(), indexable, text, readingTextHash, textHash: createHash('sha256').update(text).digest('hex'), headings: $('h1,h2,h3,h4,h5,h6').map((_,el) => `${$(el).attr('id') ?? ''}:${$(el).text()}`).get(), links: $('a[href]').map((_,el) => $(el).attr('href')!).get(), images: $('img[src]').map((_,el) => $(el).attr('src')!).get() });
  }
  return result;
}
export function gitSha(cwd: string): string { return execFileSync('git', ['rev-parse', 'HEAD'], { cwd, encoding: 'utf8' }).trim(); }
export function environment(): object { return { node: process.version, platform: platform(), cpu: cpus()[0]?.model, cpuCount: cpus().length, totalMemory: totalmem(), runnerImage: process.env.ImageOS, runnerImageVersion: process.env.ImageVersion, runId: process.env.GITHUB_RUN_ID, attempt: process.env.GITHUB_RUN_ATTEMPT }; }
