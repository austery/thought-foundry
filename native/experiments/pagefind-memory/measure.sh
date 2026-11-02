#!/bin/sh
set -u
mkdir -p /result
printf 'epoch_ms\tcgroup_current\tcgroup_swap\tanon\tfile\tprocess_rss_kib\tprocess_swap_kib\tphase\n' > /result/samples.tsv
start=$(date +%s)
RAYON_NUM_THREADS=4 "$PF_BINARY" --site "$PF_SITE" --output-path /result/index > /result/engine.log 2>&1 &
child=$!
while kill -0 "$child" 2>/dev/null; do
 current=$(cat /sys/fs/cgroup/memory.current)
 swap=$(cat /sys/fs/cgroup/memory.swap.current)
 anon=$(awk '$1=="anon" {print $2}' /sys/fs/cgroup/memory.stat)
 file=$(awk '$1=="file" {print $2}' /sys/fs/cgroup/memory.stat)
 rss=$(awk '$1=="VmRSS:" {print $2}' /proc/$child/status 2>/dev/null || true)
 process_swap=$(awk '$1=="VmSwap:" {print $2}' /proc/$child/status 2>/dev/null || true)
 phase=$(grep -E '^\[|^Finished in' /result/engine.log | tail -1 | tr '\t' ' ')
 printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n' "$(date +%s%3N)" "$current" "$swap" "$anon" "$file" "${rss:-0}" "${process_swap:-0}" "$phase" >> /result/samples.tsv
 sleep 1
done
wait "$child"
result=$?
printf '%s\n' "$result" > /result/exit-code.txt
printf '%s\n' "$(($(date +%s)-start))" > /result/wall-seconds.txt
cat /sys/fs/cgroup/memory.peak > /result/cgroup-peak.txt
cat /sys/fs/cgroup/memory.events > /result/memory-events.txt
cat /result/engine.log
exit "$result"
