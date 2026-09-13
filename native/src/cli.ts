import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, symlink, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { prepare, restore } from './prepare.js';

const [operation, ...args] = process.argv.slice(2);
function arg(index: number): string { const v=args[index]; if (!v) throw new Error(`Missing argument ${index}`); return resolve(v); }
if (operation === 'source') {
  await mkdir(arg(1),{recursive:true});
  await symlink(join(arg(0),'src'),join(arg(1),'src'),'dir');
}
else if (operation === 'prepare') await prepare(arg(0),arg(1),args[2] ? arg(2) : undefined);
else if (operation === 'restore') await restore(arg(0),arg(1));
else if (operation === 'build') {
  const site = args[0] ? arg(0) : resolve('..');
  const parent = resolve('../.native-build'); await mkdir(parent,{recursive:true});
  const run = await mkdtemp(join(parent,'run-')); const staging=join(run,'staging'); const output=join(run,'public');
  await prepare(site,staging);
  execFileSync('hugo',['--source',staging,'--destination',output],{stdio:'inherit'});
  await restore(staging,output);
  execFileSync('pnpm',['exec','pagefind','--site',output],{stdio:'inherit'});
  await writeFile(join(parent,'latest.json'),JSON.stringify({output}));
  console.log(`Native output: ${output}`);
} else throw new Error(`Unknown operation: ${operation}`);
