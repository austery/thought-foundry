import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { writeFile, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { measure } from './evidence.js';

export async function buildNativeCandidate(site: string, staging: string, reports: string, prefix = 'hugo', cacheSeed?: string): Promise<string> {
  const native = fileURLToPath(new URL('../../native/', import.meta.url));
  const source = join(staging,'legacy'); const output = join(staging,'public'); const generated = join(staging,'generated');
  await writeFile(join(reports,`${prefix}-versions.json`),JSON.stringify({hugo:execFileSync('hugo',['version'],{encoding:'utf8'}).trim(),renderer:'native-hugo',nativeLockHash:createHash('sha256').update(await readFile(join(native,'pnpm-lock.yaml'))).digest('hex')}));
  const stages: [string,string,string[]][] = [
    [`${prefix}-prepare`,process.execPath,['--import','tsx','src/cli.ts','source',site,source]],
    [`${prefix}-adapt`,process.execPath,['--import','tsx','src/cli.ts','prepare',source,generated,...(cacheSeed?[cacheSeed]:[])]],
    [prefix,'hugo',['--source',generated,'--destination',output]],
    [`${prefix}-paths`,process.execPath,['--import','tsx','src/cli.ts','restore',generated,output]],
    [`${prefix}-pagefind`,'pnpm',['exec','pagefind','--site',output]],
  ];
  for (const [stage,command,args] of stages) {
    const result = await measure(stage,command,args,native,reports);
    if (result.exitCode !== 0) throw new Error(`Native stage failed: ${stage}`);
    if (stage === `${prefix}-adapt`) await cp(join(generated,'adaptation.json'),join(reports,`${prefix}-adaptation.json`));
  }
  return output;
}
