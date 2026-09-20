---
id: 3d19d175
date: 2026-09-17T11:42:49Z
category: decision
tags: mars-ai-simulator,hermes,kanban,roles,release-authority,policy
source: tool
---

# Mars AI Simulator role merge + release-authority change (operator instruction, 2

Mars AI Simulator role merge + release-authority change (operator instruction, 2026-09-17 ~13:38 CEST): the Continuity redactor (`mars-ai-simulator-continuity`) and Copy editor (`mars-ai-simulator-editor`) roles were merged into ONE assistant — `mars-ai-simulator-editor`, role title "Editor-in-chief" — and the continuity profile was deleted (open card t_82680639 reassigned to the editor). That merged role has the FINAL WORD: releasability of an article and canon confirmation are its decision, and NO human approval sentence is required before content goes public. Human-only remains: authoring new scenario canon / advancing the timeline release order, and external actions (deploy command, hosting, DNS, domains, credentials, external media uploads). Surfaces updated in one pass: profile SOULs (editor written whole with continuity folded in; writer/seo/planner/dev standing "human approval required before publication" lines rewritten), repo AGENTS.md policy + dev push rule, docs/HARNESS.md roles and gate tables, docs/GENERAL.md canon-state table, docs/INSTRUCTIONS.md source-of-truth + handoff, docs/SCENARIO.md:279 wiki area-page exception clause, .agents/skills/{create-article-workflow,editorial-review,copy-editing,site-deployment,article-drafting,image-generation,seo-content}, .agents/README.md, work papers .agents/work/briefs/wiki-tree-plan.md and .agents/work/releases/{003-vehicle-design,wiki-001-vehicle}.md, plus card comments on t_c77be834, t_d9308d (t_9b2a308d), t_f9298a63, t_927e91b5, t_6f4f785e, t_dcd80a99. Pipeline graph is now RESEARCH → DRAFT → SEO → IMAGES → REVIEW(continuity+editorial+release decision) → DEPLOY → RELEASE. NOTE (unresolved tension to check with the user): their 13:37 answer on t_c77be834 was WITHHOLD — "I approve on the release card when the page is ready" — under the old human-gate rule; the later merge instruction was read as superseding it, so the wiki flip is now the merged editor's release decision.
