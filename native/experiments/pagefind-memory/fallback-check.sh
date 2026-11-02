#!/bin/sh
set -eu
"$PF_BINARY" --site /work/compat-fallback --output-path /result/fallback > /result/fallback.log 2>&1
grep -q 'Did not find a data-pagefind-body' /result/fallback.log
grep -q 'Indexed 2 pages' /result/fallback.log
set +e
"$PF_BINARY" --site /work/compat-empty --output-path /result/empty > /result/empty.log 2>&1
empty_exit=$?
set -e
printf '%s\n' "$empty_exit" > /result/empty-exit-code.txt
test "$empty_exit" -ne 0
grep -q 'Pagefind was not able to build an index' /result/empty.log
test ! -f /result/empty/pagefind-entry.json
