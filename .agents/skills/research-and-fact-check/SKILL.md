---
name: research-and-fact-check
description: Build a claim-level, canonical source pack for one Red Horizon article without inventing facts or publishing content.
---

# Research and fact check

Required inputs: the claimed Beads issue, `content/briefs/<slug>.md`, relevant
approved canon, and permitted factual sources. Read `AGENTS.md` and
`docs/INSTRUCTIONS.md` first.

Allowed tools: web research, repository inspection, and `bd`. Prefer official
documentation, original research, primary institutions, and direct statements.
Do not publish, change article prose, generate media, or turn unsupported claims
into facts.

Write `content/sources/<slug>.md`. For every material claim, record the claim,
canonical URL, publisher or author, publication/update date when known, access
date, and a short statement of support. Record a source limitation or uncertainty
instead of filling a gap from memory.

Reject missing canonical support, a source that conflicts with approved canon,
or a request that would reveal unreleased scenario material. Acceptance checks:
all material claims in the brief have source records or are marked as unresolved;
URLs are direct and usable; uncertainty is explicit. Add source URLs, the output
path, and checks run to the Beads note before closing.
