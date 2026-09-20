---
id: c7815169
date: 2026-09-17T13:20:17Z
category: project
tags: mars-ai-simulator,website,progress-log,kanban,planner,homepage
source: tool
---

# Mars AI Simulator — homepage progress section, round 2 (operator commission, 202

Mars AI Simulator — homepage progress section, round 2 (operator commission, 2026-09-17 15:15). Human complaint verbatim: "make planner update 'progress log' section on homepage, it does not make sense .. prefer better naming; rough dates if available, clickable links to articles". Operator filed planner card t_5cccaad6 (workspace dir:/home/janpolacek/Projects/mars-ai-simulator); the planner (Story coordinator, role title, profile mars-ai-simulator-planner) confirmed all four defects against the live record and created a parent-gated chain: t_b634310c writer (brand-voice, copy-editing) → t_906be0fb SEO → t_c4bd0c0d editorial gate → t_cc2dfd29 dev (site-deployment, commits+pushes; push to main = auto Cloudflare deploy). Key planner decisions: rename the eyebrow + header nav label "Progress" + section id `timeline` together (id verified referenced only by src/lib/navigation.ts:63 and a BaseLayout comment, no article inbound links); add `link` to step 2 for 002/003 via routes.newsArticle(); move `current: true` from "Mission architecture" to "Surface operations"; date audit found the ONLY released date token in the whole public record is "a 2031 launch window" (001 summary+line 65; 002 lines 104-105 reaffirm it and state no launch/landing date is being stated; 003 line 69 repeats no launch date) — docs/SCENARIO.md calendar and docs/timeline/ stay private. Four escalations left for the human story owner: dated framing for step 2, reconciliation of facts.ts "Launch date: To be announced" with the released 2031 window, authorisation of the eyebrow/nav/id rename, and whether to ship the launch-window token on step 1. No continuity card: that profile was deleted when the editor role absorbed continuity (mars-ai-simulator-editor is Editor-in-chief).
