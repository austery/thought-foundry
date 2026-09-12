import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { writeFile, cp } from 'node:fs/promises';
import { measure } from './evidence.js';

export async function buildCandidate(site: string, staging: string, reports: string, prefix = 'hugo', cacheSeed?: string): Promise<string> {
  const tools = fileURLToPath(new URL('..', import.meta.url));
  const source = join(staging, 'legacy');
  const output = join(staging, 'public');
  const generated = join(staging, 'generated');
  const versions = { hugo: execFileSync('hugo', ['version'], { encoding: 'utf8' }).trim() };
  await writeFile(join(reports, `${prefix}-versions.json`), JSON.stringify(versions));
  const stages: [string, string, string, string[]][] = [
    [`${prefix}-prepare`, tools, process.execPath, ['--import','tsx','src/cli.ts','prepare-candidate',site,source,...(cacheSeed ? [cacheSeed] : [])]],
    [`${prefix}-adapt`, tools, process.execPath, ['--import','tsx','src/cli.ts','adapt',source,generated]],
    [prefix, generated, 'hugo', ['--destination',output]],
    [`${prefix}-paths`, tools, process.execPath, ['--import','tsx','src/cli.ts','restore-paths',generated,output]],
    [`${prefix}-pagefind`, site, 'pnpm', ['exec','pagefind','--site',output]],
  ];
  for (const [name,cwd,command,args] of stages) {
    const result = await measure(name, command, args, cwd, reports);
    if (name === `${prefix}-adapt` && result.exitCode === 0) await cp(join(generated,'adaptation.json'),join(reports,`${prefix}-adaptation.json`));
    if (result.exitCode !== 0) throw new Error(`Candidate stage failed: ${name}`);
  }
  return output;
}
