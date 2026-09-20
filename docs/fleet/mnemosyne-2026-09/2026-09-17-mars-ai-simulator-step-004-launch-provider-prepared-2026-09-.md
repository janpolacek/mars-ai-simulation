---
id: 23f64bb9
date: 2026-09-17T13:42:05Z
category: project
tags: mars-ai-simulator,kanban,step-004,launch-provider,canon,wiki,lesson,human-gates
source: tool
---

# mars-ai-simulator step 004 (launch provider) — prepared 2026-09-17 by operator c

mars-ai-simulator step 004 (launch provider) — prepared 2026-09-17 by operator commission t_5fbd61ee (planner, done in 493s). Three human asks relayed verbatim: "make planner prepare news article 4 - launch provider; prepare canon; create a new vehicle / rocket -> will be part of wiki". Artifacts on disk (uncommitted): .agents/work/briefs/004-launch-provider-canon.md (proposal, NOT canon: Option A locked canon stands = Ariane 64 from Europe's Spaceport near Kourou / Option B new fictional provider+launch vehicle / Option C hybrid; fill-in canon table human-only; real-provider wording rules per SCENARIO.md:281), .agents/work/briefs/004-launch-provider.md, .agents/work/sources/004-launch-provider.md (355 lines, canon-agnostic).

Chain A (authoritative) on the kanban board: gate ledger t_4d1b3041 (editor, BLOCKED awaiting human Gates 004-A launch-provider canon / 004-B real-provider wording / 004-C release-order advance to step 004 + launch-vehicle wiki node publication state / 004-D public title+byline / 004-E SCENARIO.md amendment list) -> t_1ff6a809 draft (writer) -> t_acea152d SEO -> t_6fde5f04 visuals -> t_35061463 editorial -> t_de6e9055 build/deploy (dev, commit+push authority) -> t_1105aa0d release (editor); article container t_0abfd5b6 is the child of the release card; t_67b1463e research done; dossier card t_c4da077b (docs/vehicle/<slug>.md) and wiki vehicle-page parent t_fea1e735 both parent-gated on t_4d1b3041. Nothing can start before Gate 004-A: fail-closed defaults verified on the live origin (/news/004-launch-provider/ 404, /wiki/* 404, zero withheld-token hits).

Lesson (filed as corrective card t_4d6a4ca0): the Article container card, when created by a commission run, is itself dispatched as a planner worker — with `t_<...>` placeholders in its body it REBUILDS the graph beside the existing one (run 150 on t_0abfd5b6 duplicated everything: gate t_9e59c235, research t_24585e00, chain t_81bc2b83/t_94887702/t_8db78a76/t_655341e8/t_1e366ff0/t_5fa67915; operator archived all eight with duplicate comments). Rule to encode: a dispatched container body must carry the real child ids and an explicit "graph already exists, verify, create nothing" line.

Open items the editorial gate raised on t_4d1b3041: C3 the wiki `vehicle` section is already assigned to RH-01 Pathfinder, so the launch-vehicle page is either a second leaf or a new top-level section (recorded as a planner decision on t_fea1e735); C6 published 002/003 both say in the present tense that no launch vehicle has been named, so they need the record dates or a scoped wording corrective before the 004 flip; C7 step 004 has no locked milestone row for a record date (simulatedDate) — a gap for the human story owner.
