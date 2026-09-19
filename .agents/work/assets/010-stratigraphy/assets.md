# Asset manifest: 010-stratigraphy

**Card**: `t_a1c3c339` (Create visual assets: 010-stratigraphy) — stage `visuals`, **reuse (INDEX-CORRECTED)**.
**Article**: `website/news/010-stratigraphy.mdx` — route `/news/010-stratigraphy/` once published.
**Timeline step**: `010-operations-and-discovery` — page 2 of 4 (this card; pages 3–4 are later records: one Mars year, final-year health review). Locked milestone row `docs/SCENARIO.md:202` (`18 April 2032 | First mineral-stratigraphy campaign completed`).

**Supersedes**: the writer's short decision record for this slug (written by parent
`t_ce8be64d`; part of the draft package). Its decision — `no new imagery: reuse
approved Asteria Field area plates` — is unchanged and re-confirmed here; this
visuals card completes the manifest in the full form used by the sibling 010 cards.

## Decision

**No new imagery: reuse approved Asteria Field area plate AF-02.**

The brief (`.agents/work/briefs/010-operations-and-discovery.md` §Assets and image
decision `:38`) fixes `no new imagery: reuse approved Asteria Field area plates`
for this step. The source pack (`.agents/work/sources/010-stratigraphy.md`
C11, Asset finding) verified the candidate plates against the single image index
(`.agents/work/image-index.md`, committed fde9f54 / card `t_b30fae21`):

| Plate     | Path                                              | SHA-256                                                            | Dimensions      | Status                                    | Terrain context?                                                                                                          |
| --------- | ------------------------------------------------- | ------------------------------------------------------------------ | --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **AF-02** | `docs/area/asteria-field-02-regional-context.png` | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` | 1536×1024 (3:2) | **`released`**                            | **PRIMARY** — regional terrain-class context, closest match to brief intent                                               |
| AF-01     | `docs/area/asteria-field-01-mars-locator.png`     | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` | 1536×1024 (3:2) | `released`                                | Alternative — planet-scale locator with Asteria Field callout                                                             |
| AF-03     | `docs/area/asteria-field-03-local-operations.png` | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 1448×1086 (4:3) | **`released-as-depiction; NOT reusable`** | **BARRED** — carries landing ellipse, P0, science zones, hazards, traverses, comms shoulder; land-design facts would leak |

The brief's example plate (AF-03) is **barred from reuse** by the image-index
convention. It was cleared for the Asteria Field wiki leaf only; its pixels print
landing-design material (ellipse geometry, P0 touchdown zone, science-zone plan,
hazard inventory, traverse logic, AF-* unit identifiers) that must stay withheld
from every public string (`docs/SCENARIO.md:279`; `docs/area/AREA.md:18-19`;
H1 decision 2026-09-17 option i). **AF-02 substitutes as the primary reusable plate;
AF-01 as the alternative.** Flagged to the reviewer gate.

**AF-02 aids comprehension.** The article describes layered outcrop observations
across Asteria Field and a completed mineral-stratigraphy campaign (`C4`).
AF-02 is the regional satellite-style view of the scenario envelope with the five
working terrain classes and a centre marker at ~200 km scale — it gives the reader
the geographic and geological setting in which the campaign's layered-outcrop
targets sit. AF-01 (locator) is an alternative if the reviewer prefers planet-scale
context. The `asteria-plates` 3-plate key is **NOT usable** here: it would place
the barred AF-03.

**Placement option chosen: A (zero site change).** The article carries **no `media` key**
(no `media*` field — verified by grep). Instead, the article text links the released
wiki leaf (`/wiki/area/asteria-field/`) for terrain context, as the 008-landing
precedent established. A new single-plate news key for AF-02 (Option B) would be a
site-engineering change requiring a dev card with the reviewer's blessing; it is not
requested by this card. No generation, no new media key, no `website/` byte.

The article `website/news/010-stratigraphy.mdx` carries **no `media` key** and no image
of any kind (verified: grep for `media*` fields returns exit 1). The draft is
`publication: draft` with `simulatedDate` unset (reviewer assigns `2032-04-18` from
`docs/SCENARIO.md:202` on the review card `t_8625a8df`).

**No candidate exists.** No `image_generate` call was made (provider `openai-codex`,
model `gpt-image-2-medium` **not** invoked), no ComfyUI server was started, no prompt
was written, and no local generator or image tool was used. `hermes auth status
openai-codex` returned `logged in` but was not needed — there is no generation to
authorise. There is nothing in the profile image cache for this slug, and no
`imagegen_request_id` exists for any candidate here.

## Reuse candidates (reviewer-sanctioned only)

|           | Path                                              | Dimensions | SHA-256                                                            | Origin                        | Terrain context?                                        | Reusable?                                                   |
| --------- | ------------------------------------------------- | ---------- | ------------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------- | ----------------------------------------------------------- |
| **AF-02** | `docs/area/asteria-field-02-regional-context.png` | 1536×1024  | `253784572f441738c305c2d481c1ece785872b305113e373371a9f5af4f357e0` | 001 + wiki (`asteria-plates`) | **Yes** — regional terrain-class context, ~200 km scale | **Yes — PRIMARY reuse candidate**                           |
| AF-01     | `docs/area/asteria-field-01-mars-locator.png`     | 1536×1024  | `f12c58f57d3315f6446bcea61fb5258e4731192fb7fa2f9390dfe3d06a48085c` | 001 + wiki (`asteria-plates`) | Alternative — planet-scale locator                      | Yes — alternative                                           |
| AF-03     | `docs/area/asteria-field-03-local-operations.png` | 1448×1086  | `2890e34343bf7f5441ae3352d681039fc4383edbb7fabdebad7aab875c451c23` | 001 + wiki (`asteria-plates`) | **Barred** — landing-design overlays                    | **No — index status `released-as-depiction; not reusable`** |

AF-02's printed terrain-class unit codes must **never** be written into alt, caption,
prose, or any public string (index row). Landing-design facts (ellipse geometry, P0,
science zones, hazards, traverses, comms shoulder) must stay out of every public
string (H1 decision 2026-09-17 option i; `SCENARIO.md:279`).

## Manifest metadata

|                          | Field                                                                                                                                                                                                                                                                                                      | Value |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Slug                     | `010-stratigraphy`                                                                                                                                                                                                                                                                                         |       |
| Timeline step            | `010-operations-and-discovery` — page 2 of 4 (this card); locked milestone row `docs/SCENARIO.md:202` (`18 April 2032 \| First mineral-stratigraphy campaign completed`)                                                                                                                                   |       |
| Proposed `simulatedDate` | `2032-04-18` (proposal only — reviewer `t_8625a8df` verifies from the locked row)                                                                                                                                                                                                                          |       |
| Brief                    | `.agents/work/briefs/010-operations-and-discovery.md` §Assets and image decision (`:38` — no new imagery: reuse approved Asteria Field area plates)                                                                                                                                                        |       |
| Source pack              | `.agents/work/sources/010-stratigraphy.md` (claims C1–C12; C11 = Asset finding, INDEX-CORRECTED)                                                                                                                                                                                                           |       |
| Canonical source         | `docs/SCENARIO.md:202`; source pack C11; image-index `.agents/work/image-index.md`                                                                                                                                                                                                                         |       |
| Draft                    | `website/news/010-stratigraphy.mdx` — `publication: draft`, `simulatedDate` unset, **no `media*` field** (verified by grep)                                                                                                                                                                                |       |
| Decision                 | `no new imagery: reuse approved Asteria Field area plate AF-02` (INDEX-CORRECTED: AF-03 barred; AF-02 primary, AF-01 alternative)                                                                                                                                                                          |       |
| Placement                | `none` on the article — no `media` key, no figure, no card image; article links `/wiki/area/asteria-field/` for terrain context                                                                                                                                                                            |       |
| Candidates               | `0` — none generated, none proposed, none selected                                                                                                                                                                                                                                                         |       |
| Generation               | None. `image_generate`, ComfyUI, and the retired local generator were **not** used. `hermes auth status openai-codex` = `logged in`; not invoked.                                                                                                                                                          |       |
| Card                     | `t_a1c3c339` — `mars-ai-simulator-visuals`, run 395, 2026-09-19                                                                                                                                                                                                                                            |       |
| Status                   | Manifest complete; reviewer records the release decision and confirms the `010-operations-and-discovery` page-2 mapping and the AF-02/AF-01 reuse substitution                                                                                                                                             |       |
| Downstream               | Reviewer `t_8625a8df` (owns the release decision; confirms page-2 mapping, `simulatedDate: 2032-04-18` from `docs/SCENARIO.md:202`, and the AF-02/AF-01 reuse substitution for the brief's barred AF-03 example); Dev `t_dc71c195` (commit-and-push message `t_dc71c195: publish 010-stratigraphy update`) |       |

## Candidate record

|                                | Field                                                                                                                          | Value |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ----- |
| Candidate count                | **0** (none)                                                                                                                   |       |
| Proposed stable filename       | — (none; placement=none, no media key)                                                                                         |       |
| Subject / story step           | — (no media; the milestone is 18 April 2032 first mineral-stratigraphy campaign, released in fiction by this page's own draft) |       |
| Caption                        | — (no caption: no media)                                                                                                       |       |
| Alt text                       | — (no alt: no media)                                                                                                           |       |
| Private provenance             | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance)                                               |       |
| Rights / permission            | — (no generated work; AF-02/AF-01 are released plates, not newly approved)                                                     |       |
| Reuse plate (documented)       | AF-02 `docs/area/asteria-field-02-regional-context.png` — `released`, SHA `25378457…`, 1536×1024 (3:2)                         |       |
| Alternative plate (documented) | AF-01 `docs/area/asteria-field-01-mars-locator.png` — `released`, SHA `f12c58f5…`, 1536×1024 (3:2)                             |       |
| Barred plate (documented)      | AF-03 `docs/area/asteria-field-03-local-operations.png` — `released-as-depiction; NOT reusable`                                |       |

The absence of generated candidates is the deliverable: the article resolves with no
figure of its own, linking the released wiki leaf (`/wiki/area/asteria-field/`) for
terrain context.

## Forbidden / relabel boundary

- AF-03 is **barred from reuse**. Its pixels carry landing-design overlays (ellipse,
  P0, science zones, hazards, traverses, comms shoulder). Placing or describing it
  anywhere in public strings would leak landing-design facts (`docs/SCENARIO.md:279`;
  H1 decision 2026-09-17 option i). The substitution to AF-02/AF-01 needs the
  reviewer's confirmation.
- AF-02's printed terrain-class unit codes must never be written into alt, caption,
  prose, or any public string (image-index row; `asteria-field.wiki:115-119`).
- No new imagery is generated, so there is no candidate to leak private timeline
  content, unreleased milestone data, or later-step facts through.
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's
  Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no telemetry,
  no delta-v / burn-time figure, no landing ellipse, no invented figure, and no
  later-step fact (rows `:203`–`:207`) appears in any asset string, caption, or alt
  text — there are no generated assets, so there is no surface for a leak.
- Landing-design facts (ellipse geometry, P0, science-zone plan, hazard inventory,
  traverse logic, AF-* unit identifiers) are withheld from all public strings.
- The `docs/vehicles/pathfinder/` vehicle dossier and `docs/area/` plates are
  referenced in prose only; no image is cropped, relabelled, or repurposed from these
  dossiers for this step.
- The `asteria-plates` 3-plate key is NOT usable (it would place the barred AF-03).

## Validation performed

All rows run 2026-09-19 against the live shared tree.

|                            | Check                                                                                                              | Method                                                                                                        | Result         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------- |
| Draft media presence       | `grep -nE '^(media\\                                                                                               | mediaAlt\\                                                                                                    | mediaCaption\\ | mediaLabel\\ | image\\ | video)'` | **no `media*` field** — text-only confirmed (grep exit 1) |
| Forbidden strings in draft | `grep -niE 'kourou\\                                                                                               | arianespace\\                                                                                                 | arianegroup\\  | esa\\ | spaceport\\ | telemetry\\ | delta-v\\ | burn time\\ | landing ellipse\\ | traverse distances\\ | sample collection\\ | mineral results\\ | stratigraphy\\ | diagnosis\\ | docs/timeline\\ | travelling-to-mars'` | **no matches** (grep exit 1) — no real facility/operator, no invented telemetry, no later-step fact, no relabel surface |
| Reuse candidate hashes     | `sha256sum` on `docs/area/asteria-field-02-regional-context.png` and `docs/area/asteria-field-01-mars-locator.png` | Both match image-index digests (`253784572f…` and `f12c58f5…`)                                                |                |
| Barred plate hash          | `sha256sum` on `docs/area/asteria-field-03-local-operations.png`                                                   | Matches index `2890e343…` — confirmed barred                                                                  |                |
| Reuse candidate dimensions | PNG header parse                                                                                                   | AF-02: 1536×1024 (3:2); AF-01: 1536×1024 (3:2) — confirmed                                                    |                |
| Image-index status         | `.agents/work/image-index.md` rows for all three plates                                                            | AF-01 `released`, AF-02 `released`, AF-03 `released-as-depiction; not reusable` — confirmed                   |                |
| Brief alignment            | Read `.agents/work/briefs/010-operations-and-discovery.md` :38                                                     | `no new imagery: reuse approved Asteria Field area plates` confirmed; example plate AF-03 superseded by index |                |
| Source pack alignment      | Read `.agents/work/sources/010-stratigraphy.md` C11                                                                | INDEX-CORRECTED decision: AF-03 barred; AF-02 primary / AF-01 alternative; options A/B/C documented           |                |
| Draft hash                 | `sha256sum`                                                                                                        | Verified against live tree                                                                                    |                |
| Generation backend         | role rule + skill                                                                                                  | **not probed** — deliberately: no generation on a reuse card; nothing to authorise                            |                |
| Card graph                 | `kanban_show` child `t_8625a8df`                                                                                   | Reviewer gate waits on this card; parent draft done                                                           |                |
| Repository hygiene         | `git status --short`                                                                                               | this card rewrites `.agents/work/assets/010-stratigraphy/assets.md` only; nothing committed                   |                |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, and
  adds no media placement. The page's public facts are the locked milestone row
  (`docs/SCENARIO.md:202`) plus released step-010-first-sample context; the presence
  or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator name, no
  unreleased milestone value, no trajectory parameter, and no later-step fact appears
  in any asset string — there are no generated assets, captions, or alt texts to leak.
  AF-03's landing-design overlays stay in `docs/area/` untouched; the substitution to
  AF-02/AF-01 is flagged to the reviewer.
- **Review outstanding:** `mars-ai-simulator-reviewer` (`t_8625a8df`) must confirm the
  `010-operations-and-discovery` page-2 mapping, the `2032-04-18` milestone wording
  from `docs/SCENARIO.md:202`, the AF-02/AF-01 reuse substitution for the brief's
  barred AF-03 example, and record the release decision.
- **Next owner/action:** reviewer (`t_8625a8df`); no dev/build work is required for
  any media — the article publishes with no guard flip and no media-key wiring.
  If the reviewer sanctions a media placement, a dev card must create a new single-plate
  news key for AF-02 (Option B) or the article must stay text-only (Option A, as
  decided here).
