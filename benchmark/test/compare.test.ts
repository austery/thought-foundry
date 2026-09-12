import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { gzipSync } from 'node:zlib';
import { indexedPages, compareIndexes } from '../src/compare.js';

test('actual fragment evidence detects missing search documents and validates the format', async () => {
  const root = await mkdtemp(join(tmpdir(), 'tf-index-')); const dir = join(root, 'pagefind/fragment'); await mkdir(dir, {recursive:true});
  await writeFile(join(dir, 'first.pf_fragment'), gzipSync('pagefind_dcd'+JSON.stringify({url:'/kept/',content:'中文\u200b正文'})));
  const actual = await indexedPages(root);
  assert.equal(actual[0]?.url, '/kept/');
  const diff = compareIndexes(actual, []) as { missing: string[] }; assert.deepEqual(diff.missing, ['/kept/']);
  await writeFile(join(dir, 'bad.pf_fragment'), gzipSync('unexpected'));
  await assert.rejects(indexedPages(root), /Unsupported Pagefind/);
});
