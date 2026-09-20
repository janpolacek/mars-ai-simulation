---
id: bf53dab8
date: 2026-09-17T13:17:59Z
category: project
tags: mars-ai-simulator,kanban,carousel,t_e4cc3b9f,frontend
source: tool
---

# mars-ai-simulator homepage news carousel height defect (measured 2026-09-17 15:1

mars-ai-simulator homepage news carousel height defect (measured 2026-09-17 15:10-15:16 CEST, live workers.dev URL, cache-disabled CDP, 3 published items): the news section `#updates` is sized by the tallest slide, and the tallest slide is 002-payload-selection's 1:1 plate — the media cell (1.15fr column of the 1296px container) has no bound of its own, so a square plate makes it square and the box equals the media column width. Measured: carousel 745.2px / section 1185px / document 3550px at 1600x900; 736.6 / 1170.8 / 3499 at 1440; 644.6 / 1064 / 3343 at 1280; 497.4 / 893.3 / 3071 at 1024; 743 / 1093.6 / 3986 at 430; 707.8 / 1058.5 / 4047 at 390. Per-slide contribution at 1600: slide0 497, slide1 745.2, slide2 558.9. On the shown 3:2 slide, 248.2px of the 745.2px box (33%) is the plate-derived blur fill, not the plate. Deployed bytes at measurement: /index.html 16968 B sha256 09c3cc8e6610d4663b6e690d1cd6a4881efe4b658e1eb572640249ac04a3eeb3. Filed as card t_e4cc3b9f (assignee mars-ai-simulator-dev, workspace dir: repo, skill site-deployment, parents t_4b5dc515 + t_c8d5d167 which were the two running dev cards), status todo waiting on parents. Invariants the card must not regress: one height across slides (t_89b325e5), no pale mat / plate-derived fill (t_f97d6184), visibility:hidden inactive slide in flow (guards.test.mjs), contain (no crop of subjects named in alt).
