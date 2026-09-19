# Asset manifest: 008-landing

Card: `t_c9fb9550` (Create visual assets: 008-landing) — stage `visuals`, **reuse only**.
Article: `website/news/008-landing.mdx` — route `/news/008-landing/` once published; currently `publication: draft`.
Linked release-order step: `008-landing` (locked milestone row `docs/SCENARIO.md:197` — `16 September 2031 | Atmospheric entry and landing at Asteria Field`; the row is this step's own record, released by this article, not a spoiler).

## Decision

**No new imagery: reuse `docs/area/asteria-field-01-mars-locator.png` (AF-01) and/or
`docs/area/asteria-field-02-regional-context.png` (AF-02) for landing-target context only.**
AF-03 (`docs/area/asteria-field-03-local-operations.png`) is **not** reused.

The card body fixes the brief: reuse the exact plates already cleared for the released Asteria
Field wiki leaf (`website/wiki/asteria-field.mdx`, `media: asteria-plates`) and article 001; no
landed-rover or platform scene — the first surface imagery belongs to step 009; allowed is
landing-target context and map framing; forbidden are rover/egress/surface-ops depiction,
documentary framing, and institution marks.

No `image_generate` call was made (provider `openai-codex`, model `gpt-image-2-medium` **not**
invoked), no ComfyUI server was started, no prompt was written, and no local generator or image
tool was used. There is nothing in the profile image cache for this slug, and no
`imagegen_request_id` exists for any candidate here; a reuse-only card needs no backend probe
because there is no generation to authorise.

## Manifest metadata

| Field         | Value                                                                                                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug          | `008-landing`                                                                                                                                                                                                                                  |
| Timeline step | `008-landing` — locked milestone row `docs/SCENARIO.md:197` (`16 September 2031 \| Atmospheric entry and landing at Asteria Field`); rows `:198+` are the spoiler boundary and are never named or dated here                                   |
| Brief         | `.agents/work/briefs/008-landing.md` §Images and asset decision — `no new imagery: reuse docs/area/asteria-field-01-mars-locator.png and/or docs/area/asteria-field-02-regional-context.png` for landing-target context only; AF-03 not reused |
| Source pack   | `.agents/work/sources/008-landing.md` — claim C12 and the Asset finding (:187-232) verify the reuse decision, the plate hashes, and the placement constraint                                                                                   |
| Draft         | `website/news/008-landing.mdx` — SHA-256 `8547bf5ab8a0b8087f8cd9714d7268225ee84f8776e18b0b04c08c41227945c0`, 4,280 B, 78 lines, `publication: draft`, `simulatedDate` unset, **no `media*` field** (verified by grep)                          |
| Decision      | `no new imagery: reuse AF-01 and/or AF-02` for landing-target context; AF-03 excluded                                                                                                                                                          |
| Placement     | `none` in the current draft (text-only, no media key); **proposed/pending** per the chain decision — see §Placement                                                                                                                            |
| Candidates    | `0` — none generated, none proposed for selection; two already-released plates referenced for reuse                                                                                                                                            |
| Generation    | None. `image_generate`, ComfyUI, and the retired local generator were **not** used.                                                                                                                                                            |
| Card          | `t_c9fb9550` — `mars-ai-simulator-visuals`, run 340, 2026-09-19                                                                                                                                                                                |
| Status        | Manifest complete; reuse verified; placement decision routed to reviewer `t_d83264ae` and dev `t_ba8e974b`                                                                                                                                     |
| Downstream    | Editorial final gate `t_d83264ae` (owns the release decision; reads this manifest; assigns/verifies `simulatedDate: 2031-09-16` from `docs/SCENARIO.md:197`) → dev `t_ba8e974b` (commit-and-push)                                              |

## Subject and moment

The fictional mission's landing target, Asteria Field, at map scale only. This step's own record
is row `docs/SCENARIO.md:197` — landing confirmed at Asteria Field on 16 September 2031. The two
reused plates carry exactly the released cartography for that target: AF-01 the whole-planet
locator with the `ASTERIA FIELD` callout inside `MARGARITIFER TERRA`, AF-02 the regional planning
envelope with its terrain classes and centre marker. Their intended alt meaning is map/locator
context for the landing target, **not** mission photography or a documentary record — both plates
carry explicit generated-map framing (`RED HORIZON: MISSION PLANNING MAP … FOR CONTEXT ONLY` /
`FICTIONAL SCENARIO GEOMETRY`), confirmed on the pixels by this card (§Validation).

No landed-rover, no platform, no egress, no surface-ops depiction: the first surface imagery
belongs to step 009 and its own cards.

## Reference assets (reused / barred)

| Plate | Canonical source                                  | SHA-256                                                            | Size · pixels · ratio                | Reuse status                                                                                                                                                                                                                                    |
| ----- | ------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AF-01 | `docs/area/asteria-field-01-mars-locator.png`     | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` | 2,333,852 B · 1536 × 1024 RGB · 3:2  | **reused** (landing-target context)                                                                                                                                                                                                             |
| AF-02 | `docs/area/asteria-field-02-regional-context.png` | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` | 3,311,859 B · 1536 × 1024 RGB · 3:2  | **reused** (landing-target context)                                                                                                                                                                                                             |
| AF-03 | `docs/area/asteria-field-03-local-operations.png` | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 3,492,102 B · 1448 × 1086 RGBA · 4:3 | **barred** — local operations frame carries the landing ellipse, P0 touchdown zone, science zones, hazards, and traverses: landing-design facts withheld from prose, alt, and captions (`docs/SCENARIO.md:279` gate; `docs/area/AREA.md:18-19`) |

Hashes, sizes, and pixel formats re-verified on disk 2026-09-19 by this card (`sha256sum`, `ls -l`,
`file`). All three plates are `GPT Image generation, 2026-09-16; generated terrain and
cartographic overlays` (`docs/area/AREA.md:237-239`, §Map package); `docs/area/AREA.md:245`
records that the PNGs reproduce no NASA, ESA, USGS, HiRISE, CTX or MOLA imagery.

**Crop notes: no crop is proposed.** The current draft places no image; any future placement via a
media key would use the site's own plate renderer (`MediaPlates.astro`, `width={1152}` webp,
height auto — the wiki-asteria-field manifest §Reference assets verified this), which ships the
full frame. Should a dev change introduce a 1–2 plate key, the full 1536 × 1024 frame is the
released pixel set; nothing is cropped, re-encoded, relabelled, or re-titled.

## Placement

**None in the current draft.** `website/news/008-landing.mdx` carries **no `media*` field**
(grep-verified, exit 1): it is a text-only capsule that links the released wiki leaf
`/wiki/area/asteria-field/` (`008-landing.mdx:48`) for visual context — the exact precedent of the
released 006 pages.

**Placement is proposed/pending, not closed.** The news media registry (`website/src/lib/media.ts`)
knows no 1–2 plate key for AF-01/AF-02: `asteria-plates` (`media.ts:42`) is locked to
`plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true`, and
`website/test/news-media.test.mjs` asserts each key resolves to exactly its plateCount. A
frontmatter `media: asteria-plates` on this article would render all three plates — including
AF-03, which this brief forbids. The chain decision (source pack Asset finding; planner comment on
this card) therefore leaves the actual placement to one of:

1. A small site-source change registering a new media key (e.g. `asteria-field-locator` resolving
   AF-01 and/or AF-02) in `src/lib/media.ts`, `src/features/news/media.ts`, and the news-media
   test — owned by **dev `t_ba8e974b`**, not by this manifest's mandate; or
2. A text-only article linking `/wiki/area/asteria-field/` (the current draft already does this).

The card's clause — _"If the plates fail verification, record and do not place"_ — is satisfied in
the positive direction: the files **verify cleanly** (hashes and dimensions above match the
released records byte-for-byte), so reuse is available; the only open question is the site
contract for placement, which belongs to the reviewer (`t_d83264ae`) and dev (`t_ba8e974b`) per
the chain decision. The manifest records the alt/caption strings below as the released templates
to use **if** the dev change lands; until then the article is text-only and nothing is placed.

## Allowed canon facts (in any future alt / caption / label)

- The planning region is fictional; the parent geography is Margaritifer Terra.
- The planning centre is 17.80°S, 332.20°E; the planning envelope spans 12.5–24.0°S and
  327.0–338.0°E (`docs/area/AREA.md` control record; released via article 001 and the wiki leaf).
- The plates are generated visualizations for Red Horizon scenario planning, not orbital imagery.
- The landing target is Asteria Field (released name-only; `website/wiki/asteria-field.mdx`).

## Forbidden / spoiler facts (do NOT add to alt, caption, label, slug, commit)

- Landing-design material: no ellipse geometry, no P0 touchdown zone, no science-zone plan, no
  hazard inventory, no traverse logic, *_no AF-_ unit identifier** (the AF-02 pixels print
  `AF-H0 … AF-E4` terrain-class codes — they are released _as depiction_ on the plate by the H1
  decision `docs/SCENARIO.md:279`, but no code may be written into alt, caption, or prose).
- No later-step fact or milestone name/date (rows `docs/SCENARIO.md:198`–`:207`): no first
  engineering health packet, no platform panorama, no egress, no drive, no samples, no discovery.
- No real institution, provider, operator, facility or agency name; no partnership, no
  endorsement. No launcher or launch-vehicle designation in any asset string (the article prose
  names Ariane 64 only inside its released non-endorsement disclosure; no media string repeats
  it).
- No documentary framing: any caption/alt must keep the map/locator meaning and the "generated
  visualization, not orbital imagery" statement — never a photograph, orbital image, or mission
  record.
- No `docs/timeline/` path; no steps 007/009+ content.

## Alt text and caption (proposed, mirrored from the released templates)

The card's intended alt meaning — _map/locator context for the fictional mission's landing
target, not mission photography_ — is exactly what the released templates say; these are the same
strings already shipped on the Asteria Field wiki leaf (`website/wiki/asteria-field.mdx:9-17`) and
cleared for article 001 (`website/news/001-project-announcement.mdx:10-19`). They are recorded
here as the **proposed** values for any future 008 placement (frontmatter `mediaAlt` /
`mediaCaption` under a new key), pending the chain's placement decision.

| Plate | Alt text (proposed, per released template)                                                                                                                                    | Caption (proposed, per released template)                                 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| AF-01 | "AF-01. Whole-planet Mars view marking the fictional Asteria Field planning region inside Margaritifer Terra; a generated visualization, not orbital imagery."                | "The fictional target region on Mars, at planet scale."                   |
| AF-02 | "AF-02. Regional view of the fictional Asteria Field planning envelope with its working terrain classes and a centre marker; a generated visualization, not orbital imagery." | "The planning envelope drawn across the region, at roughly 200 km scale." |

Every entry carries the "generated visualization, not orbital imagery" statement, which is the
mechanism that keeps the intended alt meaning (map, not mission photography) and satisfies the
card's forbidden-documentary-framing rule. If a new media key is added, its plate labels follow
the released registry naming (`AF-01 · Mars locator`, `AF-02 · Regional context` —
`src/features/news/media.ts:37-38`) and the set provenance sentence **must not** be duplicated in
`mediaCaption` (`src/features/news/media.ts:35`: "Generated visualization for Red Horizon scenario
planning, 2026-09-16. Not orbital imagery." — printed by the composer `plateCaptionText`).
`mediaLabel`, if the key requires one, mirrors the released `"Red Horizon // fictional Asteria
Field planning plates"`. All of this is proposed/pending — the current draft places none of it.

## Provenance

- Both plates: `GPT Image generation, 2026-09-16; generated terrain and cartographic overlays`
  (`docs/area/AREA.md:237-239`). Not orbital imagery; not third-party imagery; the PNGs reproduce
  no agency product (`docs/area/AREA.md:245` — that line names agencies only to deny their
  provenance; no agency or provider appears on any public surface).
- The plates' generation prompts and raw candidates belong to the generation workspace and are not
  in this repository; this card created no candidate and no `imagegen_request_id`.

## Rights and release record

The plates are **already-released** material; this card neither creates nor extends a release and
does not treat the plates as newly approved canon.

1. Human story owner, 2026-09-17: the three `docs/area/` plates were released for article 001 with
   the bar that they "must not be reused on any other article, card, or asset surface without a
   new human decision" (recorded in `.agents/work/assets/001-project-announcement/assets.md`
   §Release record).
2. `docs/SCENARIO.md:279` — the controlling record: the article-001 partial release plus the wiki
   area-page exception; the landing-design withhold survives for prose, alt text, and captions
   (option i: the plate _images_ may carry the depiction; no landing-design fact may be written
   into public strings).
3. The 008 brief and this card (planner decisions): reuse AF-01 and/or AF-02 for landing-target
   context **only**; AF-03 excluded; the card's own brief authorises the reuse scope for this
   article. The 008 landing milestone is itself this step's released event, which is what mooted
   the 005-era objection to naming row `:197` (recorded in the source pack §Canonical source
   notes).
4. **What is not approved here:** no `publication: published` flip, no `website/` byte, no new
   media key, no `docs/` edit, no commit, no push, no build, no deploy, no new canon. Nothing is
   placed. The article ships only when the editorial gate `t_d83264ae` records its release
   decision, and any media key would additionally require the dev change `t_ba8e974b`.

## Findings (routed, not decided here)

1. **Placement needs a site-side change no card in this chain carries** (source pack Asset
   finding; planner comment on this card). `asteria-plates` is locked at 3 plates
   (`src/lib/media.ts:42`), the news-media test asserts plateCount per key, and no 1–2 plate key
   exists. The visuals manifest's mandate is to record and verify; the choice (new key vs
   text-only) is the reviewer's (`t_d83264ae`) and the dev's (`t_ba8e974b`).
2. **AF-02's pixels carry the terrain-class unit codes (`AF-H0`…`AF-E4`) and AF-03 carries the
   landing-design overlays.** They are released _as depiction_ by the H1 decision
   (`docs/SCENARIO.md:279`); no code, ellipse geometry, P0, science-zone, hazard, or traverse fact
   may enter alt, caption, label, or prose. This manifest complies — the proposed alt for AF-02
   names "working terrain classes" only, mirroring the released template. Owner: reviewer
   `t_d83264ae` (canon confirmation).
3. **The released 006 pages are the text-only precedent** for option 2 above; the current draft
   already follows it (no media field, links the wiki leaf). No drift from that contract observed.

## Validation performed

All rows run 2026-09-19 against the live shared tree (`dir:/home/janpolacek/Projects/mars-ai-simulator`).

| Check                       | Method                                                                                               | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AF-01 hash                  | `sha256sum docs/area/asteria-field-01-mars-locator.png`                                              | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` — **matches** the released record and the source pack                                                                                                                                                                                                                                                                                                                                                                     |
| AF-02 hash                  | `sha256sum docs/area/asteria-field-02-regional-context.png`                                          | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` — **matches**                                                                                                                                                                                                                                                                                                                                                                                                             |
| AF-03 hash                  | `sha256sum docs/area/asteria-field-03-local-operations.png`                                          | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` — present on disk, **barred** from reuse                                                                                                                                                                                                                                                                                                                                                                                  |
| Dimensions / format         | `file` + `ls -l`                                                                                     | AF-01 1536 × 1024 RGB (2,333,852 B), AF-02 1536 × 1024 RGB (3,311,859 B), AF-03 1448 × 1086 RGBA (3,492,102 B); all `Sep 16 14:39`, no re-encode, no derivative                                                                                                                                                                                                                                                                                                                              |
| Draft media presence        | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)' website/news/008-landing.mdx` | **no media field** (grep exit 1) — text-only confirmed                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Released alt/caption anchor | `read_file website/wiki/asteria-field.mdx`                                                           | `:9-17` holds the released templates; **anchor still valid** (byte-intact)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Registry constraint         | `read_file website/src/lib/media.ts`                                                                 | `asteria-plates` at `:42` = `{plateCount: 3, altCount: 3, captionCount: 3, requiresLabel: true}`; no 1–2 plate key exists — placement needs a dev change or text-only                                                                                                                                                                                                                                                                                                                        |
| Alt text vs the pixels      | `vision_analyze` on both canonical plates, 2026-09-19                                                | AF-01: whole-planet Mars globe, `ASTERIA FIELD` callout inside `MARGARITIFER TERRA` (`17.80°S / 332.20°E`, "FICTIONAL PLANNING DESIGNATION"), `RED HORIZON: MISSION PLANNING MAP … FOR CONTEXT ONLY` — **every alt cue confirmed**; AF-02: regional view, planning envelope with coordinate ticks, five labelled terrain classes, centre crosshair, 0–200 km scale bar, "FICTIONAL SCENARIO GEOMETRY" — **every alt cue confirmed**; both are clearly generated cartography, not photography |
| Research-pack verification  | `read_file .agents/work/sources/008-landing.md`                                                      | C12 + Asset finding (`:187-232`) match this card's verified values                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Card graph                  | `kanban_show`                                                                                        | child review gate `t_d83264ae` waits on this card; parent draft `t_ceec8357` done; dev `t_ba8e974b` downstream of the reviewer                                                                                                                                                                                                                                                                                                                                                               |
| Repository hygiene          | `git status --short`                                                                                 | this card writes only `.agents/work/assets/008-landing/assets.md`; nothing committed                                                                                                                                                                                                                                                                                                                                                                                                         |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, adds no media
  placement, and changes no public byte. The reused plates are already-released material; the
  article's public facts are the locked milestone row (`docs/SCENARIO.md:197`) plus released
  context. The presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no row `:198+` milestone name or date, no
  landing-design fact (ellipse, P0, science zones, hazards, traverses, AF-* unit codes), no real
  facility/operator/agency name, and no later-step fact appears in any alt, caption, label, or
  proposed media string — the proposed strings are the released wiki templates verbatim. AF-03 is
  referenced here only to record the bar, never placed or relabelled.
- **Review outstanding:** `mars-ai-simulator-reviewer` (child gate `t_d83264ae`) must confirm the
  event mapping to row `:197`, the plate-reuse decision and exclusion of AF-03, the proposed
  alt/caption strings against released canon, and the placement decision (new media key via dev
  `t_ba8e974b`, or text-only link to the wiki leaf — precedent: 006 pages); reviewer assigns and
  verifies `simulatedDate: 2031-09-16` from `docs/SCENARIO.md:197` on the built page.
- **Next owner/action:** reviewer `t_d83264ae`; no dev/build work is required for any media while
  the article remains text-only — a media key would be an additional dev change owned by
  `t_ba8e974b`, not by this card.
