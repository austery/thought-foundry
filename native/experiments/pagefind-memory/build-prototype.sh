#!/bin/sh
set -eu
if [ "$#" -ne 1 ]; then echo 'Usage: build-prototype.sh EXPERIMENT_ROOT' >&2; exit 2; fi
mkdir -p "$1"
root=$(cd "$1" && pwd -P)
repo=$(cd "$(dirname "$0")/../../.." && pwd -P)
if [ -e "$root/crate" ]; then echo 'Prototype source already exists; use a fresh experiment root' >&2; exit 2; fi
mkdir -p "$root/crate" "$root/toolchain" "$root/binaries/baseline" "$root/binaries/batched"
curl --fail --location --retry 3 https://crates.io/api/v1/crates/pagefind/1.5.2/download --output "$root/pagefind-1.5.2.crate"
printf '%s  %s\n' aa7d3c661e0e18b6c9eec1305908baf2bd9564af247727f9e7f4b4d25cd2da39 "$root/pagefind-1.5.2.crate" | sha256sum --check
tar -xzf "$root/pagefind-1.5.2.crate" --strip-components=1 -C "$root/crate"
curl --fail --location --retry 3 https://dl-cdn.alpinelinux.org/alpine/v3.23/main/x86_64/make-4.4.1-r3.apk --output "$root/toolchain/make.apk"
printf '%s  %s\n' db47019dc9ebbfec1c0224efb8c30b3e26f22728b6f433b492af57da622787d5 "$root/toolchain/make.apk" | sha256sum --check
tar -xzf "$root/toolchain/make.apk" -C "$root/toolchain"
mkdir "$root/crate/.cargo"
cat > "$root/crate/.cargo/config.toml" <<'CONFIG'
[env]
PATH = { value = "/work/toolchain/usr/bin:/usr/local/cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin", force = true }
CONFIG
image=rust@sha256:606fd313a0f49743ee2a7bd49a0914bab7deedb12791f3a846a34a4711db7ed2
# Compiler and dependencies stay in a task container and task-local directories.
docker run --name tf-pf-prototype-build-baseline --platform linux/amd64 --cpus 4 --memory 6g --memory-swap 6g \
  -v "$root:/work" -w /work/crate -e CARGO_HOME=/work/cargo-home "$image" sh -c \
  'cargo build --locked --release --features extended > /work/build-source-baseline-success.log 2>&1'
cp "$root/crate/target/release/pagefind" "$root/binaries/baseline/pagefind"
patch -d "$root/crate" -p1 < "$repo/docs/experiments/pagefind-memory/pagefind-1.5.2-cli-consume.patch"
patch -d "$root/crate" -p1 < "$repo/docs/experiments/pagefind-memory/pagefind-1.5.2-bounded-intermediates.patch"
docker run --name tf-pf-prototype-build-batched --platform linux/amd64 --network none --cpus 4 --memory 6g --memory-swap 6g \
  -v "$root:/work" -w /work/crate -e CARGO_HOME=/work/cargo-home "$image" sh -c \
  'set -e; cargo build --offline --locked --release --features extended > /work/build-batched.log 2>&1; cargo test --offline --locked --release --features extended > /work/unit-tests-batched.log 2>&1'
cp "$root/crate/target/release/pagefind" "$root/binaries/batched/pagefind"
sha256sum "$root/binaries/baseline/pagefind" "$root/binaries/batched/pagefind" > "$root/binary-checksums.txt"
