# Scheduled-run differential across public repositories

Date: 2026-11-03
Status: Diagnosis evidence, not a repair or production decision
Scope: Why `.github/workflows/deploy.yml` stopped receiving hourly `schedule` runs ([issue 23](https://github.com/austery/thought-foundry/issues/23)).

## Conclusion

The degradation is on the GitHub side and affects many unrelated public repositories. It is not caused by this repository's code, the native Hugo migration, or PRs 19–22. The exact internal cause is not observable from the public API.

- Onset: 2026-08-26, roughly 14:00–16:00 UTC, in every sampled repository at the same time.
- After onset, sampled repositories split into two dominant modes. One mode returned to its configured cadence within days. The other mode stays at about 4–5 `schedule` runs per workflow per day, regardless of the configured cron.
- This repository is in the second mode. Its last commit before onset was 2026-04-18, so no repository change coincides with the onset.

## Feedback loop

All data comes from the public REST endpoint `repos/{owner}/{repo}/actions/runs?event=schedule&created=<range>` with `gh api`. The authenticated `gh` account was not the repository owner, so account plans were not observable.

## Evidence

### This repository's daily `schedule` run count (cron `5 * * * *`)

| Days | Runs per day |
| --- | --- |
| 2026-08-08 to 2026-08-25 | 17–23 |
| 2026-08-26 | 17 (gaps grow after 14:42 UTC) |
| 2026-08-27 to 2026-11-02 | 2–8 |
| 2026-11-03, after cron change to `23 * * * *` | 1 run (02:01 UTC, before the change) by 13:45 UTC |

Run numbers 6167–6196 are consecutive and completed; each run takes about 10 minutes. Missing runs were never created, not cancelled.

### Independent repository with the same pattern

`abusaeeidx/IPTV-Scraper-Zilla` has nine scheduled workflows with different crons. Every workflow fell to the same count on the same days:

| Workflow | Aug 23 | Aug 25 | Aug 26 | Aug 27 | Aug 28 | Oct 28 |
| --- | --- | --- | --- | --- | --- | --- |
| `M.yml` (`0 * * * *`) | 23 | 23 | 17 | 3 | 2 | 4 |
| `W.yml` (sub-hourly) | 54 | 40 | 24 | 3 | 2 | 5 |
| `Chdmarge.yml` (sub-hourly) | 49 | 36 | 22 | 3 | 2 | 4 |

Workflows with hourly and sub-hourly crons converge on the same floor. This is the most diagnostic fact: the limit does not follow the cron expression.

### Sample of active `git-scraping` repositories

Two-day `schedule` run totals per repository (topic search, pushed after 2026-11-01, at least 30 runs on Aug 24–25):

| Mode | Repositories | Aug 24–25 | Aug 28–29 | Oct 29–30 |
| --- | --- | --- | --- | --- |
| Recovered | `patricktrainer/entergy-outages`, `richardsondev/rmp-outages`, `richardsondev/pse-outages`, `richardsondev/yellowstone-seismic-events`, `laurenz-glueck/charging-station-usage-history`, `gerritjandebruin/knmi-10min`, `simonw/pge-outages`, `simonw/scrape-fema-shelters`, `simonw/scrape-hacker-news-by-domain`, `mfa/gelbekarten_stuttgart`, `captn3m0/india-mutual-fund-ter-tracker`, `captn3m0/photon-os-advisories` | 48–188 | reduced (32–209) | at or above pre-onset |
| Stuck at floor | `drzax/top-stories`, `drzax/ausgrid-outages`, `drzax/queensland-traffic-conditions`, `MrFlynn/mcbroken-archive`, `RyanBalfanz/scrape-discord-help`, `RyanBalfanz/scrape-reddit-help`, `outages/vultr-outages`, `OSUKED/Nuke-Watch`, `aravindballa/rss-digests`, `cal-itp/cal-itp.github.io`, `rvaughan/grid_watch`, `102/belgrade-weather`, `102/omsk-weather`, `mcmullarkey/co-xcel-outages-history`, `nmpowell/carbon-intensity-forecast-tracking`, `bowtie-json-schema/report-history`, `Cadarn/uk-ea-flood-history`, `markschaver/White-House-PR`, `markschaver/State-Department-PR`, `sebsebmc/helldivers-history`, `TobiX/flat-stoerungen` | 41–80 | 7–10 | 8–10 |

The split is not perfectly clean. `simonw/pge-outages` (`*/10`) already received about half its configured runs before onset. `rdmurphy/actblue-ticker-tracker` went from 63 to 8 to 0. Treat these as two dominant modes, not two exact classes.

### Onset timing on 2026-08-26 (UTC)

Gaps widen in all sampled repositories during the same afternoon, including repositories that later recovered:

- `austery/thought-foundry`: 13:53, 14:42, 16:16, 19:00, 21:41, then 02:57 next day.
- `102/belgrade-weather`: 14:28, 16:05, 18:26, 21:16, then 02:14.
- `MrFlynn/mcbroken-archive`: 14:23, 16:02, 18:19, 21:09, then 01:01.
- `captn3m0/india-mutual-fund-ter-tracker` (recovered later): 14:50, 16:02, 16:50, 18:08, 19:15, then longer gaps overnight.

On 2026-11-02, stuck repositories received runs at unrelated times (for example 01:17/08:55/19:13 here, 00:41/06:51/16:45/23:45 for `drzax/top-stories`). There is no shared global batch moment; each workflow has its own multi-hour cycle.

## Hypotheses tested and rejected

| Hypothesis | Prediction | Result |
| --- | --- | --- |
| A repository code change caused it | A commit near Aug 26 | No commit between 2026-04-18 and 2026-09-12 |
| Editing the cron re-registers the schedule | Recovered repositories edited their workflow after onset; stuck ones did not | Rejected. `patricktrainer/entergy-outages` recovered without edits since 2024; this repository edited its cron on 2026-11-03 and stays stuck |
| Owner type or account age | Stuck repositories share an owner attribute | Rejected. Users and organizations, accounts from 2009 to 2024, appear in both modes |
| Global synchronized batch delivery | Stuck repositories receive runs at the same moments | Rejected |

## Not yet tested

- Whether the stuck state belongs to the workflow ID, or whether disabling and re-enabling `deploy.yml` resets it. Not tested in this repository. [Community discussion 207346](https://github.com/orgs/community/discussions/207346) (2026-09-09) reports that renaming the workflow file (new workflow ID), disable plus enable, cron-minute changes and pushes all failed for an affected repository. A probe here would therefore most likely fail. See [the public-report research](2026-11-github-schedule-degradation.md).
- Account plan as a discriminator. The owner reports that `austery` has GitHub Pro through the student program, and this repository is stuck. So a simple "Free plan only" throttle does not explain this repository, unless GitHub treats student Pro differently from paid Pro. Plans of the other sampled accounts are not observable.
