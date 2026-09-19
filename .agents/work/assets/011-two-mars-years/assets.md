# Asset manifest: 011-two-mars-years

**Card**: `t_b61cdd02` (Create visual assets: 011-two-mars-years) — stage `IMAGES`, **reuse**.
**Article**: `website/news/011-two-mars-years.mdx` — route `/news/011-two-mars-years/` once published.
**Timeline step**: `011-repair-and-end-of-life` — page 1 of 3 (this card; two Mars years completed; supported surface operations end). Locked milestone row `docs/SCENARIO.md:205` (`21 June 2035 | Two Mars years completed; supported surface operations end`).

> Supersedes: the writer's short decision record for this slug (written by parent
> `t_8e5548f8`; part of the draft package). Its decision — `no new imagery: reuse
> approved rover plate` — is unchanged and re-confirmed here; this visuals card
> completes the manifest in the full form used by the sibling 010 cards.

## Decision

**No new imagery: reuse approved rover plate (`docs/vehicles/pathfinder/canonical.png`) as the commemorative visual.**

The brief (`.agents/work/briefs/011-repair-and-end-of-life.md` §Assets and image decision `:39`) fixes `no new imagery: reuse approved rover plate` for this step, conditional on the reviewer sanction. The source pack (`.agents/work/sources/011-two-mars-years.md` C10, Asset finding) verified the candidate against the image index (`.agents/work/image-index.md`) and the site's media resolution chain:

- The `vehicle-references` media key already exists in `website/src/lib/media.ts` (`plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false`)
- It resolves via `website/src/features/news/media.ts` to `vehicleStudioReference`, which imports `docs/vehicles/pathfinder/canonical.png` (`website/src/lib/assets.ts:13`)
- The article frontmatter already declares `media: vehicle-references` with the correct `mediaAlt` entry (verified in `website/news/011-two-mars-years.mdx`)
- **No site-engineering change is needed** — the key, the import, and the article declaration are all already in place

**The `vehicle-references` key already resolves to exactly this plate. Reuse costs no generation, no new media key, and no `website/` byte.**

## Source verification

|| Field | Value | ||-------|-------|
|| Plate | `docs/vehicles/pathfinder/canonical.png` |
|| SHA-256 | `8dbb33d5d5e778a76849d5a1f21350c15220b3a3f1f6c17f9093a8a117912267` |
|| Dimensions | 1448 × 1086 (4:3) |
|| Bytes | 1,889,350 |
|| Format | 8-bit RGB, non-interlaced PNG |
|| Image-index status | `released — placed on 003 (vehicle-references)` |
|| Release authority | Editorial gate `t_1e84c815` (step `003-vehicle-design`, `.agents/work/reviews/003-vehicle-design.md` §2, §8.1) |
|| Site import | `website/src/lib/assets.ts:13` → `vehicleStudioReferenceSource` |
|| Media key | `vehicle-references` (`website/src/lib/media.ts:64`, `website/src/features/news/media.ts:82-84`) |
|| Already placed on | `/wiki/vehicle/rh-01-pathfinder/` (wiki leaf, `media: vehicle-references`) |
|| Article frontmatter | `media: vehicle-references` + one `mediaAlt` entry (verified in `website/news/011-two-mars-years.mdx:10-12`) |

## Placement

**Placement option chosen: A (zero site change).** The article already declares `media: vehicle-references` in its frontmatter (line 10), with one `mediaAlt` entry (line 11-12). The `vehicle-references` key resolves to `canonical.png` mechanically through the existing site modules — no new key, no new import, no new file.

The article carries **no new media fields** beyond what it already has. The `mediaAlt` string must remain the studio-reference description already present (the plate depicts RH-01 in its clean baseline configuration, not after a Mars year of operation — per C10, the alt/caption must keep the studio-reference meaning and must NOT claim dust, wear, or an Asteria Field scene).

**No `image_generate`, ComfyUI, or local generator was invoked.** `hermes auth status openai-codex` returned `logged in` but was not needed — there is no generation to authorise. There is nothing in the profile image cache for this slug, and no `imagegen_request_id` exists for any candidate here.

## Candidate record

|| Field | Value | ||-------|-------|
|| Candidate count | **0** (none generated) |
|| Proposed stable filename | — (reuse of existing plate; no new file) |
|| Subject | RH-01 Pathfinder in its studio baseline configuration — the commemorative visual for two Mars years of surface operation completed |
|| Story step | `011-repair-and-end-of-life` — page 1 of 3 (this card; 21 June 2035: two Mars years completed; supported surface operations end) |
|| Placement target | `media: vehicle-references` — article lead figure |
|| Alt text | As already declared in `website/news/011-two-mars-years.mdx` (studio reference; illustrative artwork, not mission photography) — **must not be modified to show dust/wear/a Mars-year scene** |
|| Caption | none (the `vehicle-references` key renders no per-plate caption) |
|| Aspect ratio | 4:3 (1448 × 1086) |
|| Tool | `image_generate`, provider `openai-codex`, model `gpt-image-2-medium` — **not used; reuse only** |
|| Private provenance | `imagegen_request_id`: N/A — no generation performed |
|| Cache filename | N/A — no generation performed |
|| Rights / permission | Released by editorial gate `t_1e84c815` (step 003-vehicle-design); already placed on the RH-01 Pathfinder wiki leaf; further public placement confirmed by this card's recorded release decision |

## Continuity check

- Article frontmatter `media: vehicle-references` matches the existing media key in `website/src/lib/media.ts` and resolves through `website/src/features/news/media.ts` to `docs/vehicles/pathfinder/canonical.png`
- The article's `mediaAlt` entry matches the existing studio-reference alt text (verified against the draft bytes)
- `website/src/lib/assets.ts` imports `vehicleStudioReferenceSource` from `docs/vehicles/pathfinder/canonical.png` — the site's only import of it
- The plate's SHA-256 (`8dbb33d5…`) matches the image-index row and `assets.ts:115` exactly
- **Alt text boundary**: the plate is illustrative studio artwork of the rover in its CLEAN baseline configuration (no dust, no wear, no scene — `VEHICLE.md:11`, `rh-01-pathfinder.mdx:108-115`). The alt text must keep the studio-reference meaning and must NOT claim the image shows the rover after two Mars years, with dust/wear, or at Asteria Field; the article prose carries the anniversary, not the image
- The `vehicle-references` key already carries `captionCount: 0` and `requiresLabel: false` — no caption or label is expected or added

## Forbidden / relabel boundary

- The plate is illustrative studio artwork of the rover in its CLEAN baseline configuration. It must NOT be described as showing a Mars-weathered rover, dust accumulation, or an Asteria Field scene — the article prose provides the anniversary context, the image stays as the released studio reference
- No new imagery is generated, so there is no candidate to leak private timeline content, unreleased milestone data, or later-step facts through
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no telemetry, no delta-v / burn-time figure, no landing ellipse, no invented figure, and no later-step fact (rows `:206`–`:207`) appears in any asset string, caption, or alt text — there are no generated assets, so there is no surface for a leak
- The `docs/vehicles/pathfinder/contact-arm-scene.png` stays withheld (`scripts/guards.mjs` fails the build on a reference to it); this card does not reference it
- The dossier's other four studio renders are approved canonical references that nothing places; only `canonical.png` is reused via the `vehicle-references` key

## Manifest metadata

|| Field | Value | ||-------|-------|-------|
|| Slug | `011-two-mars-years` |
|| Timeline step | `011-repair-and-end-of-life` — page 1 of 3 (this card); locked milestone row `docs/SCENARIO.md:205` (`21 June 2035 | Two Mars years completed; supported surface operations end`) |
|| Proposed `simulatedDate` | `2035-06-21` (proposal only — reviewer `t_eda18653` verifies from the locked row) |
|| Brief | `.agents/work/briefs/011-repair-and-end-of-life.md` §Assets and image decision (`:39` — no new imagery: reuse approved rover plate) |
|| Source pack | `.agents/work/sources/011-two-mars-years.md` (claims C1–C12; C10 = Asset finding) |
|| Canonical source | `docs/SCENARIO.md:205`; source pack C10; image-index `.agents/work/image-index.md`; `website/src/lib/assets.ts:13`; `website/src/lib/media.ts:64` |
|| Draft | `website/news/011-two-mars-years.mdx` — `publication: draft`, `simulatedDate` unset, **`media: vehicle-references` already declared** (verified) |
|| Decision | `no new imagery: reuse approved rover plate` (`docs/vehicles/pathfinder/canonical.png` via `vehicle-references` key) |
|| Placement | `media: vehicle-references` — article lead figure (already wired in the draft; no site-engineering change needed) |
|| Candidates | `0` — none generated, none proposed, none selected |
|| Generation | None. `image_generate`, ComfyUI, and the retired local generator were **not** used. `hermes auth status openai-codex` = `logged in`; not invoked. |
|| Card | `t_b61cdd02` — `mars-ai-simulator-visuals`, run 418, 2026-09-19 |
|| Status | Manifest complete; reviewer records the release decision and confirms the `011-repair-and-end-of-life` page-1 mapping |
|| Downstream | Reviewer `t_eda18653` (owns the release decision; confirms page-1 mapping, `simulatedDate: 2035-06-21` from `docs/SCENARIO.md:205`, and the `vehicle-references` reuse); Dev `t_3242d709` (commit-and-push message `t_3242d709: publish 011 two-Mars-years update`) |

## Validation performed

All rows run 2026-09-19 against the live shared tree.

||| Check | Method | Result | ||-------|--------|--------|--------|
||| Article media declaration | `grep -n 'media:' website/news/011-two-mars-years.mdx` | **`media: vehicle-references` present** (line 10), with one `mediaAlt` entry (lines 11-12) |
||| Media key validity | `newsMediaIssues()` via `website/src/lib/media.ts` | `vehicle-references` is a valid key; `plateCount: 1`, `altCount: 1`, `captionCount: 0`, `requiresLabel: false` — all satisfied by the article's frontmatter |
||| Key resolution chain | `website/src/features/news/media.ts` → `website/src/lib/assets.ts:13` | `vehicle-references` → `vehicleStudioReference` → `docs/vehicles/pathfinder/canonical.png` — confirmed |
||| Plate hash and identity | `sha256sum`, `stat -c`, `file` on `docs/vehicles/pathfinder/canonical.png` | `8dbb33d5…`, 1,889,350 B, 1448 × 1086, 8-bit RGB, non-interlaced; matches image-index row and `assets.ts:115` |
||| Image-index status | `.agents/work/image-index.md` row for `canonical.png` | `released — placed on 003 (vehicle-references)` — confirmed |
||| Release authority | `website/src/lib/assets.ts:110-125` comment | Release: step 003 (2026-09-17), editorial gate `t_1e84c815` (`.agents/work/reviews/003-vehicle-design.md` §2, §8.1) — confirmed |
||| No forbidden strings in draft | `grep -niE 'kourou\\|arianespace\\|arianegroup\\|esa\\|spaceport\\|telemetry\\|delta-v\\|burn time\\|landing ellipse\\|traverse distances\\|docs/timeline\\|travelling-to-mars'` | **no matches** (grep exit 1) — no real facility/operator, no invented telemetry, no later-step fact, no relabel surface |
||| Alt text boundary | Read draft `mediaAlt` + `VEHICLE.md:11`, `rh-01-pathfinder.mdx:108-115` | Studio-reference meaning preserved; no dust/wear/Mars-year claims in the image description |
||| Generation backend | role rule + skill | **not probed** — deliberately: no generation on a reuse card; nothing to authorise |
||| Card graph | `kanban_show` child `t_eda18653` | Reviewer gate waits on this card; parent draft done |
||| Repository hygiene | `git status --short` | this card rewrites `.agents/work/assets/011-two-mars-years/assets.md` only; nothing committed |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, and adds no media placement beyond what the article already declares. The `vehicle-references` key was already released for the wiki leaf (step 003); this card confirms its further public placement on the anniversary article. The page's public facts are the locked milestone row (`docs/SCENARIO.md:205`) plus released step-010-first-sample and step-010-stratigraphy context.
- **Confidentiality:** no private timeline path, no real facility/operator name, no unreleased milestone value, no trajectory parameter, and no later-step fact appears in any asset string — there are no generated assets, captions, or alt texts to leak. The plate stays as the released studio reference; the alt text must not claim two-Mars-year wear.
- **Review outstanding:** `mars-ai-simulator-reviewer` (`t_eda18653`) must confirm the `011-repair-and-end-of-life` page-1 mapping, the `2035-06-21` milestone wording from `docs/SCENARIO.md:205`, and the `vehicle-references` reuse.
- **Next owner/action:** reviewer (`t_eda18653`); no dev/build work is required for any media — the article already declares `media: vehicle-references` and the key resolves mechanically. If the reviewer confirms, the dev card commits with no media-related changes (the wiring is already in place).

## Handoff

- **Next recommended owner:** `mars-ai-simulator-reviewer` (`t_eda18653`) — confirms canon, verifies `simulatedDate: 2035-06-21` from `docs/SCENARIO.md:205`, and records the release decision for the `vehicle-references` reuse on this page
- **Then:** `mars-ai-simulator-dev` (`t_3242d709`) — the media wiring is already in place; the dev card commits with no media-related source changes
- **Not this card's to do:** no `docs/` or `website/` file written, no canon decided, no release decision made, no commit, no push, no build, no deploy. Nothing in this manifest is approved, placed or published.
