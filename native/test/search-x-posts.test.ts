import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, readFile, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createIndex, close} from 'pagefind';
import {matchingXPosts, type SearchAnchor} from '../../src/js/search-x-posts.mjs';

interface SearchData {url: string; anchors: SearchAnchor[]; locations: number[];}
interface SearchBundle {
  options(options: {baseUrl: string}): Promise<void>;
  search(query: string): Promise<{results: {data(): Promise<SearchData>}[]}>;
}

test('real Pagefind queries resolve non-heading X matches to the correct saved posts', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'tf-x-search-'));
  const {index} = await createIndex();
  assert.ok(index);
  const entry = (id: string, text: string) => `<article id="x-post-${id}"><span id="x-post-heading-${id}"></span><div id="x-post-time-${id}">2026-09-18 ${id}:00</div><div>${text}</div></article>`;
  await index.addHTMLFile({url: '/collection/', content: `<html lang="en"><body><main data-pagefind-body><h1>CollectionOnly</h1>${entry('11', 'Mercury is mentioned here.')}${entry('22', 'This is from Futu, not official. Mercury also appears here.')}${entry('33', 'An unrelated final post.')}</main></body></html>`});
  await index.writeFiles({outputPath: directory});
  await writeFile(join(directory, 'package.json'), '{"type":"module"}');
  const originalFetch = globalThis.fetch;
  // Run the shipped browser search bundle with file-backed responses; neither
  // the index, query engine, token locations nor adapter input are mocked.
  globalThis.fetch = async (input, init) => String(input).startsWith('file:')
    ? new Response(new Uint8Array(await readFile(new URL(String(input)))).buffer) : originalFetch(input, init);
  try {
    const bundle = await import(pathToFileURL(join(directory, 'pagefind.js')).href) as SearchBundle;
    await bundle.options({baseUrl: '/'});
    const query = async (term: string) => {
      const response = await bundle.search(term);
      assert.equal(response.results.length, 1);
      return matchingXPosts(await response.results[0]!.data());
    };
    assert.deepEqual(await query('Futu'), [{title: '2026-09-18 22:00', url: '/collection/#x-post-22'}]);
    assert.deepEqual((await query('Mercury')).map(p => p.url), ['/collection/#x-post-11', '/collection/#x-post-22']);
    assert.deepEqual(await query('CollectionOnly'), []);
    assert.deepEqual(matchingXPosts({url: '/ordinary/', locations: [0]}), []);
  } finally {
    globalThis.fetch = originalFetch;
    await close();
  }
});
