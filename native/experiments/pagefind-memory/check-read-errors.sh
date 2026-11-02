#!/bin/sh
set -eu
if [ "$#" -ne 1 ]; then echo 'Usage: check-read-errors.sh PAGEFIND_LOG' >&2; exit 2; fi
if [ ! -f "$1" ]; then echo 'Missing Pagefind log' >&2; exit 2; fi
if grep -Eq '([0-9]+ files? failed to index|Failed to read .* after retries:)' "$1"; then
  echo 'Search input read failure; publication refused' >&2
  exit 1
fi
