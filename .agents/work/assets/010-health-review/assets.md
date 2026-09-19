# Asset manifest: 010-health-review

**Card**: `t_76d8a4b2` (Create visual assets: 010-health-review) — stage `IMAGES`, **text-only**.
**Article**: `website/news/010-health-review.mdx` — route `/news/010-health-review/` once published.
**Timeline step**: `010-operations-and-discovery` — page 4 of 4 (this card; pages 1–3 are the released first-sample, stratigraphy, and one Mars year records). Locked milestone row `docs/SCENARIO.md:204` (`16 September 2034 | Three Earth years after landing; final-year health review`).

> Supersedes: the writer's short decision record for this slug (written by parent
> `t_9a9f1b7f`; part of the draft package). Its decision — `no new imagery: text-only`,
> `placement: none` — is unchanged and re-confirmed here; this visuals card completes
> the manifest in the full form used by the sibling 010 cards.

## Decision

**No new imagery: text-only.**

The brief (`.agents/work/briefs/010-operations-and-discovery.md` §Assets and image decision `:40`) fixes `no new imagery: text-only` for this step. The source pack (`.agents/work/sources/010-health-review.md` C11, Asset finding) verified:

- The health review is procedural — a systematic check of power, thermal, communications, and mechanical wear after three Earth years on the surface
- No approved health-review plate exists; the 010 family has no imagery tradition for a health review
- Generating a health-review scene would invent hardware-condition evidence the released assets do not support (source-pack C9, C10: the review stays at the released observable level, no diagnosis, no damage assessment, no achieved-wear claims)
- The article `website/news/010-health-review.mdx` carries **no `media` key** and no image of any kind (verified: grep for `media*` fields returns exit 1)

The single 8 GB GPU stays free; ComfyUI stays stopped and the hosted image path is not used; no `image_generate` call was made (provider `openai-codex`, model `gpt-image-2-medium` **not** invoked). There is nothing in the profile image cache for this slug, and no `imagegen_request_id` exists for any candidate here. A text-only card needs no backend probe because there is no generation to authorise.

**No candidate exists.** No generation, no reuse, no probe — the article resolves as a text-only final-year health update.

## Reuse candidates (reviewer-sanctioned only)

**None.** No approved plate exists for a health review. The 010 family plates (Asteria Field area plates, rover canonical plate) are all tied to earlier, different moments (sample, stratigraphy, anniversary) and none depicts a health-review subject. No reuse is sanctioned by the brief or the source pack; the health review is documented in prose only.

## Manifest metadata

|| Field | Value | ||-------|-------|
|| Slug | `010-health-review` |
|| Timeline step | `010-operations-and-discovery` — page 4 of 4 (this card); locked milestone row `docs/SCENARIO.md:204` (`16 September 2034 \ Three Earth years after landing; final-year health review`) |
|| Proposed `simulatedDate` | `2034-09-16` (proposal only — reviewer `t_c1ebe852` verifies from the locked row) |
|| Brief | `.agents/work/briefs/010-operations-and-discovery.md` §Assets and image decision (`:40` — no new imagery: text-only) |
|| Source pack | `.agents/work/sources/010-health-review.md` (C11 = Imagery: `no new imagery: text-only`) |
|| Canonical source | `docs/SCENARIO.md:204`; source pack C11 |
|| Draft | `website/news/010-health-review.mdx` — SHA-256 `5f113868e7121ebb3dea0eda43e5c0d8d3dc0c633c57a203f8294f06f87f1ed5`, 6,900 B, 54 lines, `publication: draft`, `simulatedDate` unset, **no `media*` field** (verified) |
|| Decision | `no new imagery: text-only` |
|| Placement | `none` — no media key, no figure, no card art, no OG image |
|| Candidates | `0` — none generated, none proposed, none selected |
|| Generation | None. `image_generate`, ComfyUI, and the retired local generator were **not** used. No backend probe performed — text-only card needs no authorisation. |
|| Card | `t_76d8a4b2` — `mars-ai-simulator-visuals`, run 410, 2026-09-19 |
|| Status | Manifest complete; reviewer records the release decision and confirms the `010-operations-and-discovery` page-4 mapping |
|| Downstream | Reviewer `t_c1ebe852` (owns the release decision; confirms page-4 mapping, `simulatedDate: 2034-09-16` from `docs/SCENARIO.md:204`, and the text-only asset decision); Dev `t_8cafd2f9` (commit-and-push message `t_8cafd2f9: publish 010 health-review update`) |

## Candidate record

|| Field | Value | ||-------|-------|
|| Candidate count | **0** (none) |
|| Proposed stable filename | — (none) |
|| Subject / story step | — (none; the private milestone is the 16 September 2034 three-Earth-years final-year health review, released in fiction by this page's own draft, not by an image) |
|| Caption | — (no caption: no media) |
|| Alt text | — (no alt: no media) |
|| Private provenance | — (no `imagegen_request_id`, no cache file; there is no candidate to provenance) |
|| Rights / permission | — (no generated work; no plate reused) |

The absence of candidates is the deliverable: the article resolves as a text-only final-year health review on the `/news/` index and its own route, rendering no figure, card image, or carousel slide.

## Forbidden / relabel boundary

- No new imagery is generated, so there is no candidate to leak private timeline content, unreleased milestone data, or later-step facts through.
- No `docs/timeline/` path, no real facility/operator name (Kourou, Europe's Spaceport, Arianespace, ArianeGroup, ESA), no trajectory parameters, no telemetry, no delta-v / burn-time figure, no landing ellipse, no invented figure, and no later-step fact (rows `:205`–`:207`: two Mars years completed, listening campaign, archive) appears in any asset string, caption, or alt text — there are no assets, so there is no surface for a leak.
- The health review stays at the released observable level per source-pack C9 and C10: no diagnosis, no damage assessment, no achieved-wear claims, no "mature operations" or "late mission" stage assertions. The prose vocabulary (baseline, early surface operations, mature operations, late mission) describes the wear the design provides for, not events that have happened.
- The `docs/vehicles/pathfinder/` vehicle dossier (canonical silhouette, six-wheel geometry) and `docs/area/` plates are referenced in prose only; no image is cropped, relabelled, or repurposed from these dossiers for this step.
- The Ariane 64 mention in the article's disclosure paragraph (line 50) is a launcher designation and stays within its released scope; it does not introduce a real operator or facility into any asset string.

## Validation performed

All rows run 2026-09-19 against the live shared tree.

|| Check | Method | Result | ||-------|--------|--------|--------|
|| Draft media presence | `grep -nE '^(media\|mediaAlt\|mediaCaption\|mediaLabel\|image\|video)'` | **no `media*` field** — text-only confirmed (grep exit 1) |
|| Forbidden strings in draft | `grep -niE 'kourou\|arianespace\|arianegroup\|esa\|spaceport\|telemetry\|delta-v\|burn time\|landing ellipse\|traverse distances\|docs/timeline\|travelling-to-mars'` | **no matches** (grep exit 1) — no real facility/operator, no invented telemetry, no later-step fact, no relabel surface |
|| Draft hash | `sha256sum` | `5f113868e7121ebb3dea0eda43e5c0d8d3dc0c633c57a203f8294f06f87f1ed5` (6,900 B, 54 lines) |
|| Generation backend | role rule + skill | **not probed** — deliberately: no generation on a text-only card; nothing to authorise |
|| Brief alignment | Read `.agents/work/briefs/010-operations-and-discovery.md` :40 | `no new imagery: text-only` confirmed |
|| Source pack alignment | Read `.agents/work/sources/010-health-review.md` C11 | `no new imagery: text-only` confirmed; health review is procedural, no generation, no reuse required |
|| Card graph | `kanban_show` child `t_c1ebe852` | Reviewer gate waits on this card; parent draft done |
|| Repository hygiene | `git status --short` | this card rewrites `.agents/work/assets/010-health-review/assets.md` only; nothing committed |

## Public / canon impact and confidentiality check

- **Canon impact:** none. This card creates no image, authorizes no new canon, and adds no media placement. The page's public facts are the locked milestone row (`docs/SCENARIO.md:204`) plus released step-010-first-sample and step-010-stratigraphy context; the presence or absence of a visual has no canonical consequence.
- **Confidentiality:** no private timeline path, no real facility/operator name, no unreleased milestone value, no trajectory parameter, and no later-step fact appears in any asset string — there are no assets, captions, or alt texts to leak.
- **Review outstanding:** `mars-ai-simulator-reviewer` (`t_c1ebe852`) must confirm the `010-operations-and-discovery` page-4 mapping, the `2034-09-16` milestone wording from `docs/SCENARIO.md:204`, and the text-only asset decision, and record the release decision.
- **Next owner/action:** reviewer (`t_c1ebe852`); no dev/build work is required for any media — the article publishes text-only with no guard flip and no media-key wiring.
