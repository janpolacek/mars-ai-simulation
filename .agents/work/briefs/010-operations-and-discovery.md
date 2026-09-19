# Brief: 010 operations and discovery (four timed pages)

Timeline step: `010-operations-and-discovery`; dependency: step 009 (first surface checks). Public-safe goal: regular, modest mission updates plus science milestones recorded on the four dated milestone rows: first onboard sample and mineral analysis, first stratigraphy campaign, one Mars year, and the three-Earth-years final-year health review. The discovery must emerge in stages (observation → corroboration → cautious interpretation → stated limitation) and is never evidence of extant life.

## Pages in this brief

| Page slug           | Locked milestone row                                                    | SCENARIO line | Proposed `simulatedDate` |
| ------------------- | ----------------------------------------------------------------------- | ------------- | ------------------------ |
| `010-first-sample`  | 31 Oct 2031 — First onboard sample collection and mineral analysis      | :201          | 2031-10-31               |
| `010-stratigraphy`  | 18 Apr 2032 — First mineral-stratigraphy campaign completed             | :202          | 2032-04-18               |
| `010-one-mars-year` | 3 Aug 2033 — One Mars year of surface operation completed               | :203          | 2033-08-03               |
| `010-health-review` | 16 Sep 2034 — Three Earth years after landing; final-year health review | :204          | 2034-09-16               |

## Allowed facts (per page)

- **First sample (31 Oct):** the contact tool abraded a weathered surface, captured no more than one cubic centimetre of loose material, and analysed it inside the tool's reusable chamber; the material was then returned to the ground near its source. Report the mineral analysis at the cautious, released level (no life-detection claim; no cache, ascent vehicle, or Earth-return — the mission carries none). "Sample" must always mean a locally collected and onboard-analysed portion of Martian material.
- **Stratigraphy (18 Apr 2032):** layered outcrop observations and a completed first mineral-stratigraphy campaign — a grounded sedimentary/mineral interpretation built on corroborated observations; stated limitation included.
- **One Mars year (3 Aug 2033):** the rover has completed one Mars year (≈687 Earth days) of surface operation: total presence, durability, and the science gathered so far; routine ops detail (wheel routes, scan targets, weather, power) makes the mission feel alive.
- **Health review (16 Sep 2034):** three Earth years after landing; a final-year health review of power, thermal, communications, and mechanical wear — operational degradation is acknowledged only at the level later mitigation/EOL can credibly address.

## Common allowed framing

- Red Horizon is a fictional, AI-assisted Mars exploration programme; keep the standard disclosure present and prominent.
- Plain, jargon-light science writing; define terms on first use.
- Modest detection language: "consistent with", "suggests", "we are checking", never certainty beyond the evidence.

## Forbidden / spoiler facts

- Evidence or claim of extant life; world-changing claims; a full repair; terminal failure; mission conclusion.
- Cache/sealed samples, ascent vehicle, Earth-return capsule, or biological life-detection experiments (the rover carries none — never imply they exist).
- Exact drive distances, telemetry, sol counts, or technical numbers not present in released canon.
- Landing-ellipse geometry, hazards, or surface targets beyond the released destination; real facility/operator/agency/partner claims; documentary framing.
- Any later-step event (011); private timeline text or paths; turning artwork into a photograph or documentary record.

## Assets and image decision

- **First sample (31 Oct):** prefer verified reuse of an approved payload instrument plate — `docs/payload/01-spectral-sampling.png` (and/or `04-dust-and-contact-closeup.png`) IF the payload dossier records it as approved/released; otherwise one new bounded candidate of the contact tool abrading a weathered rock surface (close-up, no collected-material/cache/Earth-return imagery). One candidate max, 4:3, hosted path with probe (`hermes auth status openai-codex`) + per-candidate `imagegen_request_id` + cache filename; hosted-unavailable → local ComfyUI fallback rules, report final `comfyctl status`. Write `.agents/work/assets/010-first-sample/assets.md`. Forbidden in pixels: return/cache imagery, life framing, later-step scenery, institution marks.
- **Stratigraphy (18 Apr 2032):** `no new imagery: reuse approved Asteria Field area plates` (e.g. `docs/area/asteria-field-03-local-operations.png`) for terrain context; manifest `.agents/work/assets/010-stratigraphy/assets.md` records reuse.
- **One Mars year (3 Aug 2033):** `no new imagery: reuse approved rover plate` (`docs/vehicles/pathfinder/canonical.png`) as the commemorative visual; manifest `.agents/work/assets/010-one-mars-year/assets.md`.
- **Health review (16 Sep 2034):** `no new imagery: text-only`; manifest `.agents/work/assets/010-health-review/assets.md` records the decision.

## Draft contract (each page)

- Target: `website/news/<page-slug>.mdx`, `publication: draft`; `simulatedDate` unset (reviewer assigns per the table above).
- Writer owns the integrated SEO pass; no separate SEO card.
- Regular updates stay modest; the stratigraphy page may be the deeper science explainer; date-scoped language; accessible structure.

## Acceptance criteria

- Every material claim traces to a canonical source or explicit unresolved note in `.agents/work/sources/<page-slug>.md`.
- Discovery staging is respected; no life claim; no return-cache implication; stated limitations present.
- No later-step fact, private timeline text, or invented figure; confidentiality scan clean.
- Visual decision explicit per page (reuse/generate/text-only manifest written).
- Reviewer checks chronology/canon/confidentiality, verifies each exact `simulatedDate` line, and records the release decision before dev validation.
- No public file, canon change, release decision, commit, or push in this plan.
