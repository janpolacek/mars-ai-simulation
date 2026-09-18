# Editorial gate: Form A programme rename — mission facts

Slug: `coalition-rename-facts` (data module `website/src/features/mission/facts.ts`).
Card `t_e136b820` (`mars-ai-simulator-reviewer`), stage: editorial gate on the Form A wording
substitution. Mission-timeline step: `site-foundation` / public mission brief (the homepage's
section-description copy), advances **no** timeline step. This gate scopes to **one** data-module
string in `facts.ts:18`. The four sibling rename lanes
(001:77, 002:87, 004:14, Hero.astro:12) live behind their own cards; this record does not adjudicate them.

Form A is the human story owner's choice on `t_8e8364e4` (2026-09-18): substitute `programme` for
`coalition` on five public surfaces. This file covers only the `facts.ts:18` surface.

## Review metadata

| Field | Value |
| --- | --- |
| Card / stage | `t_e136b820` — editorial gate on the Form A wording substitution. Parent SEO `t_42a7a9f5` (`done`); child dev card `t_9becc851` (`todo`, awaits this verdict) |
| Package under review | `website/src/features/mission/facts.ts` — sha256 `270d79617cba5abb45e9bf260faa808d97d5df526f91beaa1caecf568d7ee8c8`, 1,020 B, 31 lines |
| R3 (this pass) hash | `270d79617cba…` (the on-disk state at verdict time) |
| Pre-rename hash | `7cf85ec83214…` (the bytes at `origin/main` commit `1d6adff`, the published-tree state for this file) |
| SEO pass recorded | `.agents/work/seo/coalition-rename-facts.md` (paragraphs 1–11), APPROVED AS PROPOSED — re-hashed and matched here |
| File-size delta | 1,020 B → 1,020 B (both words 9 bytes; character-neutral substitution) |
| Byte-delta vs published tree | exactly 9 bytes in line 18: `…from early coalition planning…` → `…from early programme planning…`. Reconstruction by byte-replacing `programme` → `coalition` on line 18 of the on-disk file reproduces the published-tree hash (`7cf85ec8…`, 1,020 B) |
| Simulated record date | **not applicable** — `facts.ts` is a TypeScript data module, not an `MDX` collection page; the content schema (`website/src/content.config.ts`) has no `simulatedDate` field for this collection and this card carries no frontmatter. The `editorial-review` rule requires a milestone-table date only for news articles. Recorded as `absence by design` per the skill |
| Release decision | **approved as the published correction to the live homepage mission-brief section description**. The description renders at `/` inside `<section id="mission">` (`website/src/features/mission/MissionPanel.astro:12` → `SectionHeading.astro:17`) and at `/#mission` for in-page navigation. This gate authorises `t_9becc851` to push exactly the `facts.ts` rename as one hunk on one line. The renamed bytes **may** ship when the dev card lands in the serialised `001 → 002 → 004 → facts → hero` publication order the planner set on `t_8e8364e4` |
| Evidence boundary | HEAD = origin/main = `1d6adff` at verdict time; `facts.ts` re-hashed immediately before this verdict; sibling lanes are concurrent but write only their own files, so the `facts.ts` reading is local and stable |
| Verdict | **`approved`** — one authorised Form A substitution; no other change; no new canon, no new release scope |

## 1. Scope of the gate

Per the card body, this gate verifies:

1. Exactly one approved Form A wording substitution is present in `facts.ts`.
2. All other `facts.ts` strings, the `MissionPanel.astro` render path, `SectionHeading.astro`,
   and the page-level metadata sources are preserved verbatim.
3. No `docs/timeline/` or later-step material is introduced.
4. No images, alt text, captions, labels, slugs, routes, or metadata changes.

The data module feeds one visible string on the homepage ("Mission brief → The programme at a
glance") and the schema-level `missionFacts` table. Only `missionIntro.description` is touched
by this rename; the rest of the file is byte-identical to `origin/main`.

## 2. The wording substitution — verified

`grep -n "coalition" website/src/features/mission/facts.ts` → **zero matches remain** (the
post-rename file contains only `programme` references). `grep -c "programme"` → 2 instances on
lines 16 and 18 — both are in `missionIntro`, and both already read `programme` on this file
(the title and the description are aligned after this gate; previously only the title did).

The single-line diff against `origin/main`:

```diff
--- a/website/src/features/mission/facts.ts
+++ b/website/src/features/mission/facts.ts
@@ -15,7 +15,7 @@ export const missionIntro = {
     eyebrow: 'Mission brief',
     title: 'The programme at a glance',
     description:
-        'A clear public record of a fictional Mars mission, from early coalition planning to the work of its first surface vehicle.',
+        'A clear public record of a fictional Mars mission, from early programme planning to the work of its first surface vehicle.',
 }

 export const missionFacts: readonly MissionFact[] = [
```

The substitution mirrors the parallel phrase in `004:14` ("The programme has selected a
delivery architecture") and `001:77` ("with a shared objective, a programme") — every Form A
lane lands on the same in-universe noun for the same body of work (Red Horizon as a programme).
It also matches `steps.ts:33` ("Programme and purpose"), the round-3 renamed roadmap heading
recorded in commit `1e7784b`.

## 3. Surface

| Surface | Value | Status |
| --- | --- | --- |
| `missionIntro.description` (line 18) | "A clear public record of a fictional Mars mission, from early programme planning to the work of its first surface vehicle." | Renamed — the only change |
| `missionIntro.title` (line 16) | "The programme at a glance" | Unchanged |
| `missionIntro.eyebrow` (line 15) | "Mission brief" | Unchanged |
| `missionFacts` table (lines 21–30) | Name "Red Horizon"; Current state "Mission architecture"; Launch date "To be announced"; Landing date "To be announced"; Objective copy verbatim | Unchanged |
| Page meta description (`site.defaultDescription`, `site.ts:17`) | "Red Horizon is a fictional, AI-assisted Mars exploration project tracked from first planning to the surface." | Unchanged (`site.ts` was not modified in this gate) |
| Page title (`site.defaultTitle`, `site.ts:15`) | "Red Horizon \| A Mars mission in progress" | Unchanged |
| `<h2>` id | `mission-title` (`MissionPanel.astro`) | Unchanged |
| `SectionHeading` rendering | eyebrow / h2 / `<p class="section-description">{description}</p>` (`SectionHeading.astro:14–18`) | Unchanged |
| Internal link from hero (`Hero.astro:15`) | anchor `#updates` | Unchanged; out of scope here |

The description string flows to one place on the live surface: inside
`<section id="mission">` on the homepage. The `from early programme planning` copy sits under
the existing h2 `The programme at a glance` and above the `missionFacts` definition list. No
new route, no new selector, no new component.

## 4. Continuity check (run inline)

Per the `editorial-review` skill's rule on reuse: an upstream continuity record does not exist
for the post-Form-A `facts.ts` bytes, so this gate runs the continuity check inline. The four
axes:

- **Chronology** — the rename introduces no date, order, or sequence. "Early programme
  planning" is the same temporal window the file already described.
- **Canon consistency** — the description string is terminological, not factual. The renamed
  noun refers to the same body of work `docs/SCENARIO.md` calls the programme, the same body
  the council-charter (`docs/SCENARIO.md:182`) calls the coalition of partners, and the same
  body the published wiki pages already call `programme` in their headings. No canonical lock
  (`docs/SCENARIO.md`, `docs/area/AREA.md`, vehicle dossiers) is referenced or paraphrased.
- **Plausibility** — the renamed sentence reads as a homepage mission-brief lead: a clear,
  composed statement that the site tracks a fictional programme from planning to surface work.
  No register or voice drift.
- **Spoiler safety** — no withheld fact enters the public surface. No launch day, no landing
  site, no partner institutions, no later-step designation, no instrument name. The string is
  one sentence long and names nothing the step has not released.

**Verdict: `continuity clear`.**

## 5. Confidentiality check

- No `docs/timeline/` content was read or quoted into this verdict. The milestone table was
  consulted only enough to confirm `simulatedDate` does not apply to a non-article surface.
- No partner institution is named in `facts.ts` (the module deliberately holds no partner
  strings; that load is carried by `news/001-project-announcement.mdx`).
- No asset, alt text, caption, label, slug, or route is touched.
- The rename does not enter any commit message, metadata, manifest, sitemap entry, or build
  cache — only the one string in `facts.ts:18`.
- The private timeline reference in the parent SEO record (`docs/timeline/`) is purely a
  scan-not-quote step; this gate did the same one pass and recorded it as nil.

## 6. Validation

| # | Check | Verdict | Evidence |
| -- | --- | --- | --- |
| 1 | Exactly one approved Form A wording substitution present | PASS | §2 |
| 2 | "coalition" entirely absent from `facts.ts` | PASS | `grep -n "coalition" website/src/features/mission/facts.ts` returns zero matches |
| 3 | `missionFacts` table preserved verbatim | PASS | the diff above touches only line 18; lines 21–30 byte-identical to `7cf85ec8…` |
| 4 | Page meta description unchanged | PASS | `site.ts:17` not touched by this gate; `site.defaultDescription` unchanged in git status |
| 5 | Page title unchanged | PASS | `site.ts:15` not touched |
| 6 | Internal links unchanged | PASS | the description carries no links; the only link in the surface (`#updates`) is in `Hero.astro`, an out-of-scope sibling |
| 7 | No image, alt text, caption, label, or asset change | PASS | data module owns no image; `missionFacts` table changes no label string |
| 8 | No `docs/timeline/` or later-step material introduced | PASS | §4 spoiler safety, §5 confidentiality |
| 9 | Continuity check (chronology / canon / plausibility / spoiler) | PASS | §4 — `continuity clear` |
| 10 | Confidentiality (no partner name, no withheld fact, no asset change) | PASS | §5 |
| 11 | `simulatedDate` applicability | n/a | not a news article; no schema field for this collection; the skill's milestone requirement does not bind. Recorded as `absence by design` |
| 12 | Article-hash-equivalent reconstruction matches `origin/main` | PASS | byte-replace `programme` → `coalition` on line 18 reproduces `7cf85ec8…` at 1,020 B |
| 13 | Headlines (`h1`/`h2` selectors) unchanged in `SectionHeading` | PASS | section heading structure unchanged (`<h2 id="mission-title">`) |
| 14 | No commit / push / deploy performed by this card | PASS | gate is read-only; dev card `t_9becc851` owns the commit per the planner amendment at 2026-09-18 20:45 |

**Final status: `approved`.** One authorised Form A substitution, no other change, no new
canon, no new release scope.

## 7. Release decision

**Release decision (the editorial gate's recorded sentence):**

The Form A rename on `website/src/features/mission/facts.ts:18` is approved as the published
correction to the live homepage mission-brief section description. The renamed string ships
inside an already-public surface (`missionIntro.description` is rendered on `/` at
`/#mission` through `MissionPanel.astro` and `SectionHeading.astro`). No new content is
published by this gate; the rename is a wording correction on a live surface that was already
served by the previous `coalition` copy. No new canon is established, no partner name is
touched, no date or coordinate changes, no asset or alt-text change, no metadata change. The
public scope of the change is **one string on one line in one data module**, which propagates
into one paragraph on one section of one route (`/#mission`).

The dev card `t_9becc851` is unblocked by this verdict and may commit and push the renamed
bytes in the serialised publication order set on `t_8e8364e4`. The commit message must begin
exactly `t_9becc851: Form A programme rename — mission facts` per the planner amendment on
`t_9becc851` at 2026-09-18 20:45 CEST; the trailer must name planner decision `t_8e8364e4`
and gate `t_e136b820`; only `website/src/features/mission/facts.ts` may be staged by this
card.

## 8. Out of scope, flagged for the wiki lane

`website/wiki/red-horizon.mdx` still uses `coalition` in four places (lines 6, 16, 38, 48) —
in its `summary`, in the body ("built and operated by a coalition as a single mission"),
and in two inline references ("the coalition that carries it", "the mission's purpose, the
coalition, and the schedule"). The wiki is a separate collection and is not part of this
card's scope. **Observation, not blocker:** the Form A decision on `t_8e8364e4` named five
public surfaces (001, 002, 004, facts.ts, Hero.astro). The wiki is a sixth surface that still
carries `coalition`; it would need its own writer/SEO/gate chain to align. Flagged here so a
planner or the operator can route the wiki surface as a follow-up; not in this gate's scope
and not a publish blocker.

## 9. Handoff

- **Card:** `t_e136b820` (editorial gate, mission-timeline step `site-foundation`).
- **Inputs:** SEO package `.agents/work/seo/coalition-rename-facts.md` (APPROVED AS PROPOSED),
  writer handoff on `t_86b37fa1` (line-18 only, byte identical apart from the noun), human
  Form A decision on `t_8e8364e4` (2026-09-18). No `docs/timeline/` or later-step material
  used.
- **Output:** this file, `.agents/work/reviews/coalition-rename-facts.md`. No website/ edit.
- **simulatedDate:** not applicable; data module; recorded as `absence by design` per the
  schema and the skill's milestone rule.
- **Public / canon impact:** one noun on one line, on one live page section. Partner names,
  facts, dates, budget, surface-life, coordinates, providers — all unchanged. No new canon
  is established.
- **Confidentiality:** clean; no unreleased material in this verdict, in `facts.ts`, in any
  asset or alt text, in any link, or in the SEO record. The wiki cross-reference is named in
  §8 as an observation, not a finding.
- **Validation completed:** file hash matches SEO "after" (`270d7961…`); byte-delta proof
  reconstructs `origin/main` exactly; surface check confirms the description renders only on
  `/#mission`; no built `dist/` work performed (read-only gate); no commit / push / deploy
  on this card.
- **Release decision:** `approved as the published correction on the live mission-brief
  section description`. Public scope: one string, one line, one route section. Recorded
  sentence: see §7. The dev lane may push in the order set by the planner.
- **Next owner:** `mars-ai-simulator-dev` via `t_9becc851`. Plan: rebase after the prior
  dev card, stage only `website/src/features/mission/facts.ts`, commit with the
  planner-amended message (`t_9becc851: Form A programme rename — mission facts`), name
  `t_8e8364e4` and `t_e136b820` in the trailer, push, report commit SHA, branch `main`,
  origin/main SHA, validation results, clean `git status --short`, empty
  `git log origin/main..HEAD`. Push is publication. The article path is a hotspot for the
  parallel dev lanes (001, 002, 004, hero) — coordinate via the publication order on
  `t_8e8364e4` and let that file's dev card include `facts.ts` in its push, after the four
  sibling lanes already approved.
