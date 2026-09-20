---
id: ae3133f9
date: 2026-09-17T08:03:14Z
category: project
tags: mars-ai-simulator,kanban,readme,public-repo
source: tool
---

# mars-ai-simulator README/public-repo task pair, created 2026-09-17 10:02 on the

mars-ai-simulator README/public-repo task pair, created 2026-09-17 10:02 on the Hermes kanban board (board auto-dispatches: a card created with --assignee started running within seconds, no manual `hermes kanban dispatch` needed):

- t_4a7b95b8 (ready/running, mars-ai-simulator-dev, workspace dir:/home/janpolacek/Projects/mars-ai-simulator, skill project-documentation): rewrite README.md as the public front door — live URL https://mars-ai-simulation.janpolacek.workers.dev/ (verified HTTP 200, title "Red Horizon | A Mars mission in progress"), project target (multi-agent test harness), AI/autonomous disclosure, brief Mars-rover-mission topic, repo + docs tree, project-structure explanation; remove the above-mission detail (principles bullets, Start-here internal rows, kanban/release-authority section) and route each item to its existing owner, creating docs/HARNESS.md for the harness/tooling story (indexed in docs/README.md + docs/GENERAL.md §Purpose).
- t_cc5688ba (todo, parent = t_4a7b95b8, dev, workspace scratch, skill site-deployment): outside-in verification after the rewrite — clean clone builds by following the README only, SITE_URL canonical behaviour both ways, live-vs-clone comparison, README link check, bounded public-exposure scan of the tracked tree (report-only, no history rewrite).

Measured facts behind the cards: README.md was 94 lines/5920 B with no workers.dev string; two stale claims (build "refreshes the generated local media copy" — no such step; website "copies release-cleared PNGs into website/public/assets/" — retired, assets.ts imports canonical PNGs straight from docs/ and Astro emits /_astro/*). A clean clone (fnm use, npm ci, SITE_URL=... npm run build) builds green: 5 routes (/404.html, /about/, /, /news/, /news/001-project-announcement/) and check-dist passes; article 002 is not in the built route set. GitHub still reported the repo **private** with description/homepage/license all null at check time, so visibility + repo metadata remain a human action; docs/timeline/ and SCENARIO.md (private canon) also become repo-readable if the repo goes public — flagged to the human, no agent card created for it.
