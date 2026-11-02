#!/bin/sh
set -eu
if [ "$#" -ne 6 ]; then
  echo 'Usage: run.sh EXPERIMENT_ROOT LABEL BINARY_RELATIVE_PATH SITE_RELATIVE_PATH RAM_LIMIT TOTAL_RAM_AND_SWAP_LIMIT' >&2
  exit 2
fi
root=$(cd "$1" && pwd -P)
label=$2
case "$label" in *[!a-z0-9-]*|'') echo 'Invalid run label' >&2; exit 2;; esac
script=$(cd "$(dirname "$0")" && pwd -P)/measure.sh
result="$root/results/$label"
# A label is immutable. Never let a failed rerun reuse an earlier success receipt.
if [ -e "$result" ]; then echo 'Result directory already exists; use a new label' >&2; exit 2; fi
mkdir -p "$result"
image=node@sha256:bfb78a64f53d36c691f27dceecc9d4e73b3526411e1cee6fdf8d981d06fb2eb7
sha256sum "$root/$3" > "$result/binary-sha256.txt"
if [ -f "$root/corpus.json" ]; then sha256sum "$root/corpus.json" > "$result/corpus-manifest-sha256.txt"; fi
date -u '+%Y-%m-%dT%H:%M:%SZ' > "$result/started-at.txt"
if ! docker image inspect "$image" > "$result/image-config.json" 2>/dev/null; then
  docker pull --platform linux/amd64 "$image"
  docker image inspect "$image" > "$result/image-config.json"
fi
container="tf-pf-scale-$label"
# Inputs are read-only. Each run gets a fresh cgroup and one owned output directory.
docker create --name "$container" --platform linux/amd64 --network none --cpus 4 \
  --memory "$5" --memory-swap "$6" --read-only --tmpfs /tmp:rw,size=256m \
  -v "$root:/work:ro" -v "$result:/result" -v "$script:/measure.sh:ro" \
  -e "PF_BINARY=/work/$3" -e "PF_SITE=/work/$4" \
  "$image" sh /measure.sh > "$result/container-id.txt"
docker inspect "$container" > "$result/run-config.json"
set +e
docker start -a "$container"
run_exit=$?
set -e
docker inspect "$container" > "$result/container-final.json"
if [ ! -f "$result/exit-code.txt" ]; then echo 'No completed measurement receipt' >&2; exit 1; fi
measured_exit=$(cat "$result/exit-code.txt")
case "$measured_exit" in ''|*[!0-9]*) echo 'Invalid measurement exit code' >&2; exit 1;; esac
if [ "$run_exit" -ne 0 ]; then exit "$run_exit"; fi
exit "$measured_exit"
