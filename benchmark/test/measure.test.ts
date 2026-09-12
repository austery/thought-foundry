import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { measure, inventory, fingerprint } from '../src/evidence.js';

test('a failed build leaves a machine-readable failure record and log', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tf-measure-'));
  const result = await measure('failure', process.execPath, ['-e', 'console.log("known failure");process.exit(7)'], dir, dir);
  assert.equal(result.exitCode, 7);
  assert.ok(result.seconds >= 0);
  assert.match(await readFile(join(dir, 'failure.log'), 'utf8'), /known failure/);
  assert.equal(JSON.parse(await readFile(join(dir, 'failure.json'), 'utf8')).exitCode, 7);
});
test('inventory separates indexed documents and listings and preserves case in URLs', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tf-inventory-'));
  await mkdir(join(dir, 'Case'), { recursive: true });
  await writeFile(join(dir, 'Case/index.html'), '<title>中文</title><main data-pagefind-body><h2 id="a">Text</h2><a href="/other/">Other</a></main>');
  await writeFile(join(dir, 'index.html'), '<div data-pagefind-ignore>Listing</div>');
  const result = await inventory(dir);
  assert.deepEqual(result.pages.map(p => p.url), ['/Case/', '/']);
  assert.deepEqual(result.pages.filter(p => p.indexable).map(p => p.url), ['/Case/']);
  assert.equal(result.pages[0]?.text, 'Text Other');
  assert.equal(result.pages[0]?.title, '中文');
});
test('source fingerprints detect byte changes with stable traversal', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tf-source-'));
  await writeFile(join(dir, 'note.md'), 'original');
  const before = await fingerprint(dir);
  assert.equal(await fingerprint(dir), before);
  await writeFile(join(dir, 'note.md'), 'changed');
  assert.notEqual(await fingerprint(dir), before);
});

test('an unavailable build command records a nonzero result instead of losing evidence', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tf-missing-'));
  const result = await measure('missing', 'definitely-not-a-real-build-command', [], dir, dir);
  assert.notEqual(result.exitCode, 0);
  assert.ok((await readFile(join(dir, 'missing.json'), 'utf8')).includes('exitCode'));
});

test('an invalid working directory still leaves failure evidence', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'tf-cwd-'));
  const result = await measure('invalid-cwd', process.execPath, ['-e', 'process.exit(0)'], join(dir, 'absent'), dir);
  assert.notEqual(result.exitCode, 0);
  assert.equal(JSON.parse(await readFile(join(dir, 'invalid-cwd.json'), 'utf8')).exitCode, result.exitCode);
});
