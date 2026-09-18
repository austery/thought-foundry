import {test} from 'node:test';
import assert from 'node:assert/strict';
import {additionalPassages} from '../../src/js/search-passages.mjs';

test('Chinese passages retain indexed word boundaries and highlight distant hits', () => {
  const words = Array.from({length: 130}, (_, i) => i === 5 || i === 70 ? '教育' : '词');
  const passages = additionalPassages({raw_content: words.join('\u200b'), locations: [5,70], excerpt: words.slice(0,30).join('').replace('教育','<mark>教育</mark>')});
  assert.equal(passages.length,1);
  assert.ok(passages[0]?.includes('<mark>教育</mark>'));
  assert.ok(!passages[0]?.includes('\u200b'));
});
test('passages preserve encoded text, merge nearby hits, cap output, and tolerate missing data', () => {
  const words = Array.from({length: 240}, (_,i) => `word${i}`); words[70]='&lt;script&gt;';
  const result={raw_content:words.join(' '),locations:[5,70,72,120,170,220],excerpt:words.slice(0,30).join(' ')};
  const passages=additionalPassages(result);
  assert.equal(passages.length,3);
  assert.match(passages[0]!, /<mark>&lt;script&gt;<\/mark>/);
  assert.match(passages[0]!, /<mark>word72<\/mark>/);
  assert.deepEqual(additionalPassages({excerpt:''}),[]);
  assert.deepEqual(additionalPassages({raw_content:'text',locations:[-1,100],excerpt:''}),[]);
});
