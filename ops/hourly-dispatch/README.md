# Hourly dispatch Worker

A Cloudflare Worker with a Cron Trigger. Each hour at minute 23 (UTC) it calls the GitHub `workflow_dispatch` endpoint for `.github/workflows/deploy.yml` on `main`. The workflow then runs a normal publication with its default inputs (`search_engine=configured`, `content_ref=main`, `dry_run=false`).

Why it exists: since 2026-08-26, GitHub delivers this repository's `schedule` events only about 4–5 times per day. Many unrelated repositories show the same platform-side pattern, and cron changes, new workflow IDs and disable/enable do not help. Manual dispatch runs start within seconds. Evidence: [differential evidence](../../docs/research/2026-11-03-schedule-differential-evidence.md), [public reports](../../docs/research/2026-11-github-schedule-degradation.md), [issue 23](https://github.com/austery/thought-foundry/issues/23).

The GitHub `schedule` trigger in `deploy.yml` stays as a fallback. When both fire in the same hour, the `pages-deployment` concurrency group queues the second publication; it does not cancel or overlap the first.

## Credential

Create a fine-grained personal access token on the `austery` account:

- Repository access: only `austery/thought-foundry`.
- Repository permissions: `Actions: Read and write`. Nothing else (`Metadata: Read` is added automatically).
- Expiration: choose a date and record it. The Worker fails with HTTP 401 after expiry.

The token cannot read or change code, secrets or the Pages repository. It can still do more than the Worker does:

- Dispatch `deploy.yml` with any inputs. For example `content_ref=<old commit>` publishes old content to the live site. The Worker sends only `ref`, but the token itself has no such limit.
- Cancel or re-run workflow runs, delete runs, logs and artifacts (including the 90-day publication evidence), and enable or disable workflows.

Treat a leaked token as able to change the live site. Store it only as a Worker secret, never commit it or paste it into chat, and revoke it at once if exposed.

## Deploy

Run from this directory with Node 22.19.0:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm exec wrangler login
pnpm exec wrangler secret put GITHUB_TOKEN
pnpm run deploy
```

`wrangler secret put` prompts for the token, so it does not enter shell history. If the Worker does not exist yet, it first asks to create it; accept. `workers_dev` and preview URLs are disabled; the Worker has no public HTTP endpoint.

## Verify

1. Wait for the next minute 23 UTC.
2. In the Cloudflare dashboard, open the Worker, then **Logs**. Find an `event: "dispatched"` line with `status` 204 or 200.
3. Confirm the matching run:

   ```sh
   gh run list --repo austery/thought-foundry --workflow deploy.yml \
     --event workflow_dispatch --limit 5 \
     --json databaseId,createdAt,status,conclusion,headSha
   ```

4. Confirm the publication and the separate Pages deployment as described in the [acceptance contract](../../docs/acceptance/hourly-schedule-recovery.md).

For the 24-hour acceptance, start at the first planned `:23` slot after deployment and run:

```sh
pnpm run audit-slots --start 2026-11-04T15:23:00Z
```

A slot passes only when a `workflow_dispatch` run on `main` was created within 10 minutes after the planned time and concluded `success`. Each slot reports `published`, `running`, `open`, `missing` or `run_failed`, with the triggering actor. Exit codes: 0 every slot published, 1 a slot failed, 2 no failure yet but slots pending, 64 invalid arguments, 70 run history unavailable. It reads history through the authenticated `gh` CLI.

The audit cannot tell a Worker run from a manual dispatch by the token owner; compare run creation times with the Worker logs. A cancelled run fails its slot; override it manually only if the run that replaced it on the same revision published.

There is no automatic alert. An expired or revoked token stops dispatches silently until someone reads the Worker logs or runs the audit, so put the token expiry date in a calendar.

A `dispatch_failed` log line means the Worker could not confirm a dispatch. A network failure can occur after GitHub accepts a request, so inspect run history before requesting another publication. 401 means the token expired or was revoked. 404, or 403 without rate-limit headers, means the token lacks `Actions: Read and write` on this repository. 422 means the ref or workflow is invalid.

The Worker retries HTTP 429, 5xx, 403 with `retry-after` or `x-ratelimit-remaining: 0`, and network errors, up to 3 attempts. It honors `retry-after` seconds and `x-ratelimit-reset`. Rate limits without a valid wait header use waits of 60 and 120 seconds. If a server wait exceeds 120 seconds, the Worker fails that slot instead of retrying early. This follows [GitHub's rate-limit guidance](https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api#handle-rate-limit-errors-appropriately). A retry after an ambiguous 5xx or network failure can create up to two extra runs; `pages-deployment` serializes publication, but GitHub can replace a pending run.

Changes under `ops/` are not in the `paths-ignore` list of `deploy.yml`, so merging them to `main` triggers one push publication.

## Stop or roll back

- Pause: remove the cron in the Cloudflare dashboard (Worker, then **Settings**, then **Triggers**), or delete the Worker with `pnpm exec wrangler delete`.
- Revoke the token in GitHub settings. This stops all dispatches at once.
- Stopping the Worker leaves the GitHub `schedule` fallback and push and manual triggers unchanged.
