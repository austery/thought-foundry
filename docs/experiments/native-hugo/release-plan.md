# Native Hugo release and rollback proposal

Status: proposal only. No hosted preview, workflow disable/enable, merge, or production publication has been executed by this migration task.

## Verified targets and frozen validation inputs

- Site repository: `austery/thought-foundry`; production workflow: `.github/workflows/deploy.yml` on `main`.
- Current publisher: hourly at minute 05, manual dispatch, and qualifying `main` pushes. Concurrency group: `pages-deployment`; current job cancels older runs.
- Published output: `austery/austery.github.io`, branch `main`, root paths. Existing publisher uses `ACTIONS_DEPLOY_KEY` and `force_orphan: true`, so remote Git history is not a rollback archive.
- Output branch observed during this task: `398b31af32319c2a6f06823cc842e067f97042d6`. This is an observation, not a durable backup or a guarantee it remains current.
- Frozen baseline site: `8acbf0d1ef8652fb5153341e6a47f9f73204a4b4`; frozen content: `f8a8939248be4c1d4af6072381c06a4a79d00223`.
- Native validation implementation: `3f5b5eb22447249bfcb0a7c707a3610dd801c4a3`; run `34701335727`. Final performance disposition belongs in the validation report, not this operational proposal.
- Retained experiment checkpoint: `a5ea99693335f475db2a69f8ee99098146f8be99`. Native implementation is reviewed as a stacked change above experiment PR #7. Do not merge the native PR into the retained comparison branch. After separately approved integration of #7, retarget the native PR to `main` and verify its resulting diff/ancestry before requesting its merge.

## Local acceptance and hosted preview boundary

Local candidate: `http://127.0.0.1:8098/`; baseline: `http://127.0.0.1:8096/`. These are loopback services, not public deployments.

A hosted preview needs a separately selected root-domain target, verified ownership/credentials, and explicit publication authorization. Do not deploy this root-relative site below an arbitrary repository subpath: existing CSS, JavaScript, search, and article links start with `/`. Do not reuse the production output repository for a preview. No preview hostname or account has been provisioned by this task.

Before proposing that publication, attach the exact candidate code SHA, content SHA, output checksum manifest, target hostname, credential identity (never its value), and immutable artifact. Validate the hosted artifact's entry point, unusual Unicode/case paths, Pagefind fetches, and root asset paths. Re-run the browser acceptance matrix against that hostname. An archive that exists in Actions is not evidence that a hosted site works.

## Authorized cutover sequence to prepare later

The following commands are a proposed operation, not instructions to execute without the user's separate release approval.

1. Freeze a fresh content commit and the final reviewed implementation SHA. Rebuild both engines on that fresh input and require the complete compatibility gate. The September 12 frozen corpus is a benchmark, not content freshness evidence.
2. After approval, pause the scheduled publisher and inspect running jobs:

   ```sh
   gh workflow disable deploy.yml --repo austery/thought-foundry
   gh api --paginate 'repos/austery/thought-foundry/actions/workflows/deploy.yml/runs?per_page=100' \
     --jq '.workflow_runs[] | select(.status != "completed") | {id,status,head_sha}' 
   ```

   Check every non-completed state, including queued/waiting/pending jobs. Wait for active and queued publishers to finish; cancellation needs explicit operational judgment because publication may already have begun. Verify no run can overwrite the release before recording the final published SHA. Re-read the content repository head after pausing; if it differs from the approved frozen content SHA, rebuild and revalidate the new snapshot before offering the final output for publication approval.
3. Capture the actual production output into a new, uniquely named local checkout and external durable archive. Record the branch SHA, all file SHA-256 checksums, archive SHA-256, file counts, and entry-point checks. Restore that archive into a second directory and compare checksums before proceeding. Do not rely on the orphan output branch retaining its predecessor.
4. Prepare a separate release PR that changes the actual deployment command to the native build, installs Hugo `0.165.0` with checksum verification, uses `native/pnpm-lock.yaml`, and passes the exact isolated native output directory to publication. Remove the obsolete Eleventy cache step from that release workflow. Do not silently reuse production caches for Hugo. Keep the existing target identity and root paths. Include a separate manual-only `release-output.yml` workflow, with no push/schedule triggers, the same production concurrency group, and explicit code/content/output checksum inputs. It must publish only the approved prebuilt artifact after checksum verification; do not rebuild from a floating content branch.
5. Review the concrete deployment diff and exact output manifest with the user. Merge and dispatch the separate manual-only `release-output.yml` only with explicit approval for that PR and publication. A disabled workflow cannot be dispatched: keep `deploy.yml` disabled and use the independently enabled manual release workflow until post-publication checks finish. A feature PR merge alone is not authorization to publish.
6. Read back the new public branch SHA and verify live homepage, representative old URLs (including case/Unicode), assets, Chinese positive/negative search, index scope, and content freshness. Record both the source and public output revisions.
7. Re-enable the hourly publisher only after those checks pass and the release approval covers resumption:

   ```sh
   gh workflow enable deploy.yml --repo austery/thought-foundry
   ```

## Rollback

Triggers: missing legacy URLs, missing indexed articles, leaked excluded content, broken root assets/Pagefind loading, semantic body loss, or a materially unusable reading interaction introduced by the release.

Keep the publisher disabled while investigating. Restore the verified pre-cutover archive to a new directory and recheck its manifest. Publish that exact old output with the reviewed manual-only `release-output.yml`, verified archive checksum, and separately authorized production credentials; verify the live site and output revision afterward. Revert the release workflow change through a normal reviewed commit/PR, never by force-resetting shared source history. Resume scheduled publishing only after the old code/output pairing is verified.

Rollback does not rewrite the content repository. Keep both artifact manifests, the release and rollback output SHAs, and all validation reports. Do not delete worktrees, archives, branches, or failed-run evidence as part of this proposal.

## Corrected inherited preview claim

The retained SPEC-056 experiment report offered downloadable previews, but this session could not find the claimed preview artifact in that run. Its checkpoint remains unchanged. SPEC-057 packages into the non-hidden `artifacts/native-previews/` directory, checks both `public/index.html` entries, and treats missing uploads as errors. This session actually downloaded artifact `10300283333` from run `34701335727` and verified both archives contain the homepage, Pagefind module, stylesheet, and article JavaScript. Checksums, sizes, and expiry are recorded in `preview-verification.json`. Preview retention is three days; report retention is fourteen days, so neither is a durable release backup.
