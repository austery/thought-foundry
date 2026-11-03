# Hourly dispatch Worker

A Cloudflare Worker with a Cron Trigger. Each hour at minute 23 (UTC) it calls the GitHub `workflow_dispatch` endpoint for `.github/workflows/deploy.yml` on `main`. The workflow then runs a normal publication with its default inputs (`search_engine=configured`, `content_ref=main`, `dry_run=false`).

Why it exists: since 2026-08-26, GitHub delivers this repository's `schedule` events only about 4–5 times per day. Many unrelated repositories show the same platform-side pattern, and cron changes, new workflow IDs and disable/enable do not help. Manual dispatch runs start within seconds. Evidence: [differential evidence](../../docs/research/2026-11-03-schedule-differential-evidence.md), [public reports](../../docs/research/2026-11-github-schedule-degradation.md), [issue 23](https://github.com/austery/thought-foundry/issues/23).

The GitHub `schedule` trigger in `deploy.yml` stays as a fallback. When both fire in the same hour, the `pages-deployment` concurrency group queues the second publication; it does not cancel or overlap the first.

## Credential

Create a fine-grained personal access token on the `austery` account:

- Repository access: only `austery/thought-foundry`.
- Repository permissions: `Actions: Read and write`. Nothing else (`Metadata: Read` is added automatically).
- Expiration: choose a date and record it. The Worker fails with HTTP 401 after expiry.

This token can start and read workflow runs. It cannot read or change code, secrets or the Pages repository. Store it only as a Worker secret. Never commit it or paste it into chat.

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

It prints every slot and exits 0 (all passed), 1 (a slot failed) or 2 (no failure yet, slots still open). Defaults: 24 hours, 10-minute tolerance, `workflow_dispatch` events of `deploy.yml`. It reads history through the authenticated `gh` CLI.

There is no automatic alert. An expired or revoked token stops dispatches silently until someone reads the Worker logs or runs the audit, so put the token expiry date in a calendar.

A `dispatch_failed` log line means no run was requested for that hour. 401 means the token expired or was revoked. 403 or 404 means the token lacks `Actions: Read and write` on this repository. The Worker retries only HTTP 429, 5xx and network errors, up to 3 attempts.

## Stop or roll back

- Pause: remove the cron in the Cloudflare dashboard (Worker, then **Settings**, then **Triggers**), or delete the Worker with `pnpm exec wrangler delete`.
- Revoke the token in GitHub settings. This stops all dispatches at once.
- Stopping the Worker leaves the GitHub `schedule` fallback and push and manual triggers unchanged.
