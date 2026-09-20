---
id: d0c6d92c
date: 2026-09-17T08:33:54Z
category: project
tags: mars-ai-simulator,deployment,cloudflare-workers,kanban,gate2,push-policy
source: tool
---

# mars-ai-simulator deployment fact (human statement 2026-09-17, verbatim: "deploy

mars-ai-simulator deployment fact (human statement 2026-09-17, verbatim: "deployment is made automatically by commit/push"): the public site deploys automatically from push to `main` via the connected Cloudflare Workers Build (production branch main, root website, build `npm run build`, output dist) — no agent runs `wrangler deploy`. Consequence applied on 2026-09-17: a dev-role push is a production publication, so a push carrying a content release needs the human gate recorded on the release card first. Corrected surfaces: repo AGENTS.md line ~103 (was "A push is never a deploy" — commit 73b1fd6, unpushed at the time) and profile ~/.hermes/profiles/mars-ai-simulator-dev/SOUL.md (two places, "a push is still not a deploy"/"never a deploy"). Recorded on cards t_dd78c8e6 (Required 1 answer) and t_a5abca85. Gate 2 for 002-payload-selection was approved in the same message and recorded on t_5a62fb28, which was unblocked with a new parent edge t_4b49346b (media key) so the flip cannot precede the media key.
