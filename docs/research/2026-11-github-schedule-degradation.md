# GitHub Actions `schedule` degradation since late August 2026

Date: 2026-11-03
Status: Research only; no workflow, setting or variable was changed by this note.
Scope: Public evidence on whether GitHub Actions `on: schedule` events became heavily delayed or dropped for many users from about 2026-08-26, as observed for `austery/thought-foundry` `.github/workflows/deploy.yml` (about 23 scheduled runs/day through 2026-08-25; 2-7 runs/day with gaps above 10 hours from the afternoon of 2026-08-26; push and `workflow_dispatch` unaffected).

## Conclusion

- A widespread degradation of `schedule` event delivery on github.com is well supported by public reports. A common step change on 2026-08-26/27 is supported: at least ten independent reporters date the onset to 2026-08-26/27, and at least seven of them give before/after run timing. They report it on public and private repositories, Free and paid accounts, and off-peak cron minutes.
- The 2026-08-26/27 change is the first documented step change, not the only one. Later waves are reported from 2026-09-30/10-01 and 2026-11-02. Thread volume peaked in October, not August. Behavior differs across repositories: some recovered within days; others are still late or dropped as of 2026-11-03.
- GitHub has published no acknowledgement. No GitHub status incident, availability report, changelog post or documentation change mentions `schedule` delivery in this period. No GitHub staff reply appears in any of the 140 community threads checked.
- The onset coincides with the 2026-08-26 Actions incident (15:02-17:40 UTC impact), which GitHub attributes to write saturation on the database of the service that processes workflow triggers, recovered with throttling. This is a time correlation only; GitHub's postmortem does not mention scheduled workflows.
- The reported pattern matches this repository: runs are created hours late or not at all; when a run is created it starts within seconds (`created_at` equals `run_started_at`); `workflow_dispatch` is unaffected; changing the cron minute does not help.

## 1. Public reports

### Method and volume

The GitHub Community "Actions" category (`community/community`, category ID `DIC_kwDOEfmk4M4CALJ4`) was listed through the GraphQL API on 2026-11-03, newest first, back to 2026-06-11 (900 discussions). Titles were matched against `sched|cron` and obvious unrelated matches (feature requests, visibility scheduling, concurrency, URL checks) were removed. This is a lower bound: it misses threads whose title lacks those words and reports in other categories.

| Month (2026) | Actions threads | Schedule/cron threads | Share |
| --- | ---: | ---: | ---: |
| July | 129 | 17 | 13% |
| August | 191 | 15 | 8% |
| September | 178 | 25 | 14% |
| October | 319 | 69 | 22% |
| November 1-3 | 30 | 9 | 30% |

Within August: 7 schedule threads in 25 days (Aug 1-25), then 11 in 6 days (Aug 26-31). Ten threads explicitly cite 2026-08-26/27 (or "late August") as the onset in the body or comments.

### Distinct cohorts

1. **Before the onset (July to mid-August): "never fired" on new repositories.** Most July threads describe a schedule that never fired on a newly created, often private Free, repository, for example [#201436](https://github.com/orgs/community/discussions/201436) (2026-07-09), [#202034](https://github.com/orgs/community/discussions/202034) (2026-07-16), [#202602](https://github.com/orgs/community/discussions/202602) (2026-07-22). This is a different symptom (never worked) from the later one (worked, then degraded). [#204985](https://github.com/orgs/community/discussions/204985) (2026-08-15) reports 15-40 minute delays at :00/:30 on a `*/5` cron, within the documented best-effort behavior.
2. **Step change on 2026-08-26/27 for established schedules.** This cohort matches `deploy.yml`. See the dated reports below.
3. **Later waves.** Reports of new onsets on 2026-09-30/10-01 and 2026-11-02, also listed below.

### Dated reports with an Aug 26/27 onset

- [#206019](https://github.com/orgs/community/discussions/206019), opened 2026-08-27 23:53 UTC, 18 upvotes, 14 comments. Title: "Scheduled (cron) workflows stopped firing. No run is created at all since 2026-08-26." Public repository, `state: active`. From 2026-08-22 to 08-26, runs were created 15-41 minutes after each slot. Then: 08-26 08:30 slot +39 min (last normal); 08-26 21:30 slot +3 h 27 min; 08-27 08:30 slot +10 h 41 min; 08-27 21:30 and 22:30 slots no run. `workflow_dispatch` starts within seconds. The repository is pushed to daily, so the 60-day inactivity rule does not apply. Independent confirmations in the same thread:
  - joelnwalkley, 2026-08-28: `30 8 * * *` created 3.5 hours late on two consecutive days.
  - kort0881, 2026-08-29: four repositories with off-peak minutes (:15, :23, :38, :47) stopped creating runs around Aug 26-27.
  - SPTeamGarciaDataOps, 2026-08-31: an 08:30 UTC pipeline ran within 30-60 minutes up to and including 2026-08-26; from 08-27, 8-12 hours late.
  - jfarroios, 2026-09-01: private repository, personal Free account. Daily `0 23 * * *` backup: 10-16 minutes late from 08-19 to 08-25 (and 10-30 minutes back to 08-07), then 5 h 08, 7 h 25, 4 h 57. Multi-slot `17 6,10,13,16 * * 1-5` delivered 1 of 4 slots on 08-27, 08-28, 08-31.
  - yehudamber, 2026-09-02: `0 * * * *` runs at random times (for example 18:57, 21:33, 23:38, 01:48, 06:34 UTC).
  - TyceHerrman, 2026-09-02: scheduled runs created hours after their slot, but jobs started 2-4 seconds after creation.
  - tp322d, 2026-10-07: "Same pattern on our side since late August"; recommends external `workflow_dispatch`.
- [#205976](https://github.com/orgs/community/discussions/205976), 2026-08-27 14:10 UTC, 8 upvotes: several scheduled pipelines not starting "since today (2026-08-27)"; a test `*/5` workflow also did not fire.
- [#205984](https://github.com/orgs/community/discussions/205984), 2026-08-27 15:10 UTC, 14 upvotes: schedules never fired on a new account (created 2026-08-26). Comment by redfalcon6, 2026-08-28: "my chronned workflows have worked thousands of times and now are not firing." The original poster's new-account case may belong to cohort 1.
- [#206027](https://github.com/orgs/community/discussions/206027), 2026-08-28: private Free repository, `23 * * * *`; last scheduled run 2026-08-26 17:37 UTC, then none. Five other users confirm in private and public repositories on 2026-08-28. **Counter-evidence:** the poster reports on 2026-08-30 that scheduled workflows "have started running normally again".
- [#206134](https://github.com/orgs/community/discussions/206134), 2026-08-29: "Scheduled (cron) workflows not triggering since Aug 26 — multiple repositories affected"; off-peak crons such as `47 6,9,12,15,18,21 * * *`; still failing on 2026-08-30.
- [#206287](https://github.com/orgs/community/discussions/206287), 2026-08-31: six daily slots fired 5-45 minutes late from Aug 21 to 25; from Aug 26-27, runs fire at times unrelated to any slot.
- [#207346](https://github.com/orgs/community/discussions/207346), 2026-09-09: "Scheduled (cron) workflow runs dropped and delayed by hours since 2026-08-26". Private repository, `0 7,12,16 * * *`. Before: 88 consecutive days with all 3 runs, each about 40 minutes late. Since 2026-08-27: 0-2 runs per day, about 4-5 hours late. "in every run created_at == run_started_at to the second". No commits between Aug 23 and Aug 29. Renaming the workflow file, disable/enable via REST and pushes did not help. Further comments:
  - schurq-dave, 2026-09-25: a weekly `0 2 * * 0` schedule kept firing after Aug 26, but 4.5-5.5 hours late; a newly added `*/10` workflow produced no runs.
  - kwmr, 2026-10-25: `22 20 * * *` was 19-45 minutes late from 08-08 to 08-26, then 1 h 42 min to 8 h 00 min from 08-27 to 10-23; other schedules in the same repository changed on the same day.
- [#207370](https://github.com/orgs/community/discussions/207370), 2026-09-09: private repository, schedules not firing or hours late while `workflow_dispatch` starts in the same minute.
- [Stvad/knowledge-medium#1458](https://github.com/Stvad/knowledge-medium/issues/1458), 2026-10-28, public repository. `23 6 * * *` was 25-60 minutes late until 2026-08-26, then 4-9 hours late from 08-29. Hourly `17 * * * *` dropped from about 24 runs/day (until 08-23) to 4-6 runs/day. This is the closest match to `deploy.yml`.
- [James Howard, "GitHub's Ongoing Actions Outage"](https://jameshoward.us/2026/09/10/githubs-ongoing-actions-outage/), blog, 2026-09-10: own bots drifted from 2026-08-26/27; a 6 AM Eastern job started about ten hours late on 08-27; status page showed Actions operational.

### Later reports and waves

- [#209332](https://github.com/orgs/community/discussions/209332), 2026-10-02: few-minute delays until 2026-09-29, hours late from 09-30, missing on 10-02.
- erikfransson in [#207346](https://github.com/orgs/community/discussions/207346), 2026-10-02: since 2026-10-01, an hourly `17 * * * *` cron got 3 runs in about 24 hours; a new public repository's `*/5` cron got none.
- [#210111](https://github.com/orgs/community/discussions/210111), 2026-10-12: since 2026-10-01, runs hours away from `0 2,6,10 * * *`, some missing.
- [#210875](https://github.com/orgs/community/discussions/210875), 2026-10-21: account-wide suppression before 2026-09-23; recovered 2026-10-02; one repository silent again for 14 days. Support ticket #4816841 got no human reply.
- [#210361](https://github.com/orgs/community/discussions/210361), 2026-10-15/21: Support ticket #4872628 closed as self-service only, with no scheduler findings.
- [#210888](https://github.com/orgs/community/discussions/210888), 2026-10-21: normal from 2026-09-07; more than 5 hours late since early October.
- [ktronicsdev/IoTDeviceMonitor#31](https://github.com/ktronicsdev/IoTDeviceMonitor/issues/31), 2026-10-20: about 30 requested runs/day, 11-13 delivered (2026-10-14 to 10-19).
- [dvystrcil/homelab-heartbeat#10](https://github.com/dvystrcil/homelab-heartbeat/issues/10), 2026-10-29: `0 */6 * * *`, last 200 runs from 2026-09-04: delay p50 225 min, p95 322 min, about 5% of slots dropped.
- [Extra-Chill/extrachill#1092](https://github.com/Extra-Chill/extrachill/issues/1092), 2026-11-02: `7,37 * * * *` (off-peak) delivers about 5 of 48 runs/day.
- [#211839](https://github.com/orgs/community/discussions/211839), 2026-11-02: hourly `5 * * * *` schedule (same minute as `deploy.yml` before 2026-11-03) silent after 02:10 UTC on 2026-11-02; ihorbovkit, 2026-11-03: similar since 2026-11-02 on a years-old repository.
- [#211632](https://github.com/orgs/community/discussions/211632), 2026-10-30: gaps occur before run creation; runners start 2-4 seconds after creation.

### Other channels

- Hacker News (Algolia search, stories and comments since 2026-07-01): one story, ["GitHub Actions scheduled (cron) workflows have been late or dropped since August"](https://news.ycombinator.com/item?id=49992667), 2026-10-07, 2 points, 1 comment; it links to #206019. One comment, [49732117](https://news.ycombinator.com/item?id=49732117), 2026-09-16: "For months now I've had scheduled GH Actions workflows that don't run on time, sometimes not at all."
- Reddit (r/github, r/devops) and X: nothing relevant found through web search. Not searched directly; absence is not proven.
- `actions/runner` and `github/docs` issues since 2026-07-01: no matching issues.

## 2. GitHub Status incidents

No incident in this period mentions scheduled workflows, cron or `schedule` events.

- [Incident with Actions, y1t7p9fzrlj2](https://www.githubstatus.com/incidents/y1t7p9fzrlj2), 2026-08-26 15:11-18:01 UTC (primary source). Postmortem: Actions jobs failed to start 15:02-15:45 UTC; runs delayed more than 5 minutes until 17:40 UTC. Cause: write saturation on the database primary used by the service that processes triggers for Actions workflows; failover did not fully recover it. Inbound traffic was throttled; throttles were set about 10% too high and raised gradually 15:54-17:22; work flowed under "per-customer concurrency limits" (17:32 update). Follow-up: scalability changes "will be complete within the next 24 hours", plus "more graceful degradation". No mention of `schedule`.
- [Disruption with some GitHub services, hcbtzksccj2f](https://www.githubstatus.com/incidents/hcbtzksccj2f), 2026-08-26 15:09-16:07 UTC: the upstream event-processing issue; points to y1t7p9fzrlj2.
- "Incident with Actions and Pull Requests", 2026-08-26 21:55-23:58 UTC: 2.6% of pull-request-triggered runs delayed (peak about 25%). Seen only through the third-party mirror [Pulsetic #6741](https://pulsetic.com/status/github/incidents/6741/); the primary incident ID was not retrieved.
- [GitHub availability report: August 2026](https://github.blog/news-insights/company-news/github-availability-report-august-2026/), published 2026-09-09: lists the 2026-08-26 15:11 UTC incident ("A burst of incoming events arrived on top of an already-high load and pushed the database past its tipping point"; planned automatic circuit breaker). No mention of scheduled workflows.
- [GitHub availability report: September 2026](https://github.blog/news-insights/company-news/github-availability-report-september-2026/), published 2026-10-14: incidents on 09-13 and 09-28; no mention of scheduled workflows.
- [githubstatus incidents API](https://www.githubstatus.com/api/v2/incidents.json), read 2026-11-03 (incidents 2026-10-12 to 11-03): Actions incidents on 10-19, 10-22, 10-23, 10-26 and 10-30; none mention schedules. No Actions incident for 2026-11-02. The 2026-10-01 Actions job-start incident is known only through [@githubstatus on X](https://x.com/githubstatus/status/2108676923530383867).
- [The Register, 2026-08-26](https://www.theregister.com/devops/2026/08/26/github-actions-was-down-yet-again/5292679): reports the incident and 23 Actions-related incidents in August as of that date; GitHub did not respond to questions.

## 3. Changelog and policy changes

No changelog post from August to early November 2026 announces schedule throttling, load shedding, per-account or per-repository limits on scheduled runs, Free plan or public repository changes, or changes to inactive-repository auto-disable.

- Checked index pages: [August 2026](https://github.blog/changelog/2026/08/) (70 posts), [September 2026](https://github.blog/changelog/2026/09/) (87 posts), [Actions label](https://github.blog/changelog/label/actions/) (October-November).
- Opened as the most plausible candidates, none relevant: ["GitHub Actions: Early September 2026 updates"](https://github.blog/changelog/2026-09-03-github-actions-early-september-2026-updates/) (2026-09-03), ["Workflow execution protections ... generally available"](https://github.blog/changelog/2026-09-17-workflow-execution-protections-in-github-actions-generally-available/) (2026-09-17; actor/event allowlists, `pull_request_target` default block on 2026-12-02), ["GitHub Actions adds multi-cloud compute to improve reliability"](https://github.blog/changelog/2026-10-28-github-actions-adds-multi-cloud-compute-to-improve-reliability/) (2026-10-28; runner capacity, not trigger delivery).
- The only 2026 schedule feature change found: [timezone support for cron](https://github.blog/changelog/2026-03-19-github-actions-late-march-2026-updates/), 2026-03-19. It predates the onset by five months.

## 4. Official documentation

Source text was read from `github/docs` on 2026-11-03.

[Events that trigger workflows, `schedule`](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule), from `data/reusables/actions/schedule-delay.md`:

> The `schedule` event can be delayed during periods of high loads of GitHub Actions workflow runs. High load times include the start of every hour. If the load is sufficiently high enough, some queued jobs may be dropped. To decrease the chance of delay, schedule your workflow to run at a different time of the hour.

The same section also says:

> Scheduled workflows will only run on the default branch.

> In a public repository, scheduled workflows are automatically disabled when no repository activity has occurred in 60 days.

The reusable's last change was 2024-03-06 (commit `6e33ce1553`). The "may be dropped" wording is not new.

[Troubleshooting workflows](https://docs.github.com/en/actions/how-tos/troubleshoot-workflows), "Scheduled workflows running at unexpected times" repeats the delay text. A new section was added on 2026-10-08 (commit `3f90de1c4d`, PR #63762):

> A scheduled (`cron`) workflow can stop running even though it is still enabled and manual or `workflow_dispatch` runs still work.
>
> This can happen when the workflow's associated `actor` account is suspended, deleted, or deprovisioned. To restart it, a user with `write` access to the repository can commit a change to the `cron` schedule.

Documented mitigations: a different minute of the hour; workflow on the default branch; re-enable after inactivity; commit a `cron` change to reset the actor. There is no documented way to inspect schedule registration or tick delivery.

GitHub staff responses: none found. All 140 schedule threads were fetched with comments and replies. Every author association was `NONE`; the only GitHub-side reply is the `github-actions` bot's automatic "Your Product Feedback Has Been Submitted" message (108 threads). Users report that Free accounts cannot open tickets for this problem ([#205984](https://github.com/orgs/community/discussions/205984)) or that tickets were closed as self-service ([#210361](https://github.com/orgs/community/discussions/210361)).

## Community speculation (unverified)

These claims appear in threads without a source. Do not treat them as evidence.

- `:00`/`:30` congestion as the cause (satiricalguru in #206019, 2026-08-28). Contradicted by off-peak reports (#206134, kort0881, Stvad#1458, Extra-Chill#1092) and by #207346's five cron values.
- "Scheduler queue partitioning" (#210888), "queue throttling suppresses `*/5`" (#211470), and "Free accounts always get gaps" (#211632). No source given.
- "Per-repository scheduler registration stayed broken after the incident" (#207346). Contradicted by new repositories with the same symptom (#207346 comments, #209378).
- The 2026-08-26 incident as the cause: time correlation only (see Conclusion).

## Relevance to `deploy.yml`

- The repository's observations match the Aug 26/27 cohort: same onset, hourly schedule reduced to a few runs per day, run created late or not at all, push and `workflow_dispatch` immediate. The 2026-11-03 move from `5` to `23` matches reports that minute changes do not help.
- The 60-day inactivity rule does not explain the change. The commit-free window (April 18 to September 12) passed 60 days around June 17, yet full-rate scheduled runs continued until 2026-08-25. After the onset the workflow stayed `active` and runs continued at a reduced rate; a disabled workflow produces no runs. Which events GitHub counts as "repository activity" is not documented, so this inference rests on the observed run history, not on the docs. The Oct 8 actor-account cause is ruled out because the 2026-11-03 cron commit (the documented fix) changed nothing.
- The workaround reported most often is an external clock calling `workflow_dispatch`, with `schedule` kept as a fallback (#206019 tp322d; #207346; Stvad#1458; Extra-Chill#1092). This note does not evaluate or adopt it.
