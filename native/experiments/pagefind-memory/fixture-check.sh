#!/bin/sh
set -eu
cp -R /work/fixture /result/site
RAYON_NUM_THREADS=4 "$PF_BINARY" --site /result/site > /result/fixture.log 2>&1
grep -q 'pre-1.0 compatibility mode' /result/fixture.log
grep -q 'Default UI' /result/fixture.log
node --input-type=module -e 'import assert from "node:assert/strict"; import fs from "node:fs"; assert.deepEqual(JSON.parse(fs.readFileSync("/result/site/pagefind/pagefind-entry.json")),JSON.parse(fs.readFileSync("/result/site/_pagefind/pagefind-entry.json")));'
node /work/test-dist/service-check.js /wrapper/lib/index.js /result/service
