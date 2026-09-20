---
id: 347ea1f2
date: 2026-09-17T13:21:07Z
category: decision
tags: mars-ai-simulator,kanban,profiles,editorial,record-date,policy
source: tool
---

# mars-ai-simulator simulated record dates (operator instruction 2026-09-17: "edit

mars-ai-simulator simulated record dates (operator instruction 2026-09-17: "editor should verify news articles and add 'simulated' dates of writing article so it roughly matches 'timeline'"): every published news article carries ONE simulated record date — the in-fiction date of writing — as frontmatter `simulatedDate` (YYYY-MM-DD) in website/news/<slug>.mdx. The merged editorial role (mars-ai-simulator-editor) alone assigns and verifies it, and must draw it from the locked milestone table in docs/SCENARIO.md ("Launch and mission dates") for the released step; an invented day/month/year is new scenario canon and stays with the human story owner, and "roughly matching the timeline" means sitting on a locked milestone in timeline order. No locked milestone → leave unset and name the gap. The published page states it under the label "Simulated record date" and never as a real publication date or a machine date (datePublished/lastmod/OG).

Surfaces moved in one pass: profile SOUL ~/.hermes/profiles/mars-ai-simulator-editor/SOUL.md; repo commits 6cc2f37 (AGENTS.md content-workflow bullet, docs/INSTRUCTIONS.md canon-safety bullet, .agents/README.md catalog, .agents/skills/editorial-review (new section "The simulated record date"), create-article-workflow (DRAFT/REVIEW/DEPLOY card bodies + "Record dates in the graph"), article-drafting, copy-editing) — committed locally by the operator, not pushed. Cards: t_de785d99 (dev, schema src/content.config.ts + render ArticleView/NewsCard + tests, push) → t_531698d9 (editor, apply 001=2026-10-12, 002=2027-03-19, 003=2029-07-13 recommended, record release decision) → t_1059c973 (dev, build/verify/push the values, live check).
