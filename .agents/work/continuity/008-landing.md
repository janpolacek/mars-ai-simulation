# Continuity verdict: 008-landing

Card: t_d83264ae (Editorial final gate: 008-landing)
Reviewer: mars-ai-simulator-reviewer
Date: 2026-09-19 (session), run 341
Draft: `website/news/008-landing.mdx`, SHA-256 `8547bf5ab8a0b8087f8cd9714d7268225ee84f8776e18b0b04c08c41227945c0`, 4,280 B, 78 lines, `publication: draft`, `simulatedDate` unset
Step: `008-landing` — locked milestone row `docs/SCENARIO.md:197` (`16 September 2031 | Atmospheric entry and landing at Asteria Field`)

## Verdict

**`continuity clear`.** Every claim agrees with the released step and the locked scenario;
landing success is ordered after basic power, communications, and rover-survival confirmation;
no later-step fact (first engineering health packet and platform panorama, egress, drive,
samples, mineral results, end-of-life) appears in any of: text, summary, status, category,
frontmatter, link text, link targets, or asset metadata; the date fits a locked milestone
row and is the row this step releases. The article's record date is assigned at `2031-09-16`
(`docs/SCENARIO.md:197`) and the draft carries no `simulatedDate` value until the reviewer
sets it in the gate record. The release decision is recorded on the card.

## Chronology and canon

| # | Check                                                                                                | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                                        |
| - | ---------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | The page covers the milestone this step releases.                                                    | Pass   | `docs/SCENARIO.md:197` is the locked row for this step; the article names "16 September 2031" (`:15, :64`) and "Asteria Field" (`:12, :15, :18, :48, :64`). The 005-era objection to naming row `:197` (`.agents/work/continuity/005-launch.md:115, :136`) is moot — this step is the step that releases it.                                                                                    |
| 2 | Calendar days in the body trace to locked rows only.                                                 | Pass   | `16 September 2031` × 3 (`:6, :15, :64`) — the page's own row; `17 February 2031` × 1 (`:16`) — the released launch row `:193`. No date after 16 Sep 2031 appears in the article.                                                                                                                                                                                                               |
| 3 | Landing success is reported only after basic power, communications, and rover-survival confirmation. | Pass   | `:25-33` — "the first confirmations from the surface … power is established, communications with Earth through the relay architecture are stable, and the rover is alive and responding. These three factors … are what the programme reports before describing the landing as successful." This is the hard ordering the brief and source-pack C5 require; the article holds it.               |
| 4 | Known → to-check → expected-operations order.                                                        | Pass   | Section headings are exactly that order: "What is confirmed" (`:23-33`) → "What remains to be checked" (`:35-42`) → "First expected surface operations" (`:44-52`).                                                                                                                                                                                                                             |
| 5 | No later-step fact leaks.                                                                            | Pass   | No `egress` / `POV` / `panorama` / `samples` / `drive` claim. The phrase "before the rover leaves the platform" (`:39, :47`) is the released "rover deployment" / "rover leaving the platform" vocabulary from `website/wiki/ariane-64.mdx:35`; no later-step milestone name or date is named.                                                                                                  |
| 6 | EDL/relay description stays at the released level.                                                   | Pass   | The article does NOT describe the EDL sequence (atmosphere, parachute, TRN, terminal descent); it only references the relay architecture from `004-launch-provider.mdx:37-43` (`:30-33`), mirroring the released "platform … returns data to Earth over a steerable X-band downlink … short-range link … low-rate direct-to-Earth health connection" wording. No real-mission numbers imported. |
| 7 | Destination geometry is name-only.                                                                   | Pass   | "Asteria Field" appears 5× in the body, always as the released destination name; no ellipse, no P0, no science-zone plan, no hazard inventory, no traverse logic, no AF-* unit identifier; coordinates beyond the released planning centre do not appear. The wiki leaf is linked for context.                                                                                                  |
| 8 | Ariane 64 reference keeps the released non-endorsement framing.                                      | Pass   | `:16` names Ariane 64 inside the released journey-context sentence; `:68-73` repeats the released non-endorsement disclosure (no real agency/operator/facility is a partner); `:75-78` repeats the page-level disclaimer. No new architecture or operator claim.                                                                                                                                |
| 9 | Fiction disclosure is present and prominent.                                                         | Pass   | First sentence (`:14`) and final italicised paragraph (`:75-78`); same boilerplate as the released 001–006 pages.                                                                                                                                                                                                                                                                               |

## Spoiler safety

| Family                                                        | Step file / row                            | Status on this page | Notes                                                                    |
| ------------------------------------------------------------- | ------------------------------------------ | ------------------- | ------------------------------------------------------------------------ |
| First engineering health packet and platform panorama         | `:198` (17 Sep 2031)                       | Not referenced      | No date, name, or image                                                  |
| RH-01 egress                                                  | `:199` (23 Sep 2031)                       | Not referenced      | "Egress" has 0 hits; "before the rover leaves the platform" used instead |
| First controlled drive and mobility assessment                | `:200` (30 Sep 2031)                       | Not referenced      | No drive language at all                                                 |
| First onboard sample collection and mineral analysis          | `:201` (31 Oct 2031)                       | Not referenced      | No "sample", "mineral", or analysis language                             |
| First mineral-stratigraphy campaign                           | `:204` (18 Apr 2032)                       | Not referenced      | No campaign wording                                                      |
| One-Mars-year / three-Earth-year / end-of-life / archive rows | `:205`–`:207`                              | Not referenced      | None named                                                               |
| Step 007 landing-preparation briefing content                 | `docs/timeline/007-landing-preparation.md` | Not referenced      | This page is post-event confirmation, not pre-event preparation          |
| Landing-design geometry                                       | `docs/SCENARIO.md:279` gate                | Not referenced      | Name-only Asteria Field                                                  |

`docs/timeline/` content or paths appear nowhere in the article, the frontmatter, the asset
metadata, or the link text; the private timeline file for this step is referenced only in
the source pack, which is working material.

## Plausibility

- Real-world framing: matches a generic EDL-confirmation capsule. The factual claims are
  confined to the locked milestone row + the released relay architecture. No invented
  telemetry, no signals or tones, no schedules, no health values, no masses or altitudes.
- The "rover responding" claim (`:27`) is observable behaviour (the rover replies on its
  short-range and direct-to-Earth links) and matches the released architecture
  (`004-launch-provider.mdx:37-43`).
- The early-uncertainty open question (`:54-60`) is generic and uncaused: "Whether the
  commissioning sequence will complete entirely on the nominal plan remains an open
  question." This is consistent with the brief (`source-pack C9`: "at most one early
  uncertainty … only as an open question with no premature cause") and the released 006
  pages' future-status pattern (`006-cruise-final-approach.mdx:47-52`).

## First-public-wording scan (released-route scan)

| Token                        | Hits in this draft                     | Released-route hits (2026-09-19) | Verdict                                                             |
| ---------------------------- | -------------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| `ramp`/`ramps`               | 1 (`:39`: "the ramps will be checked") | 0                                | Allowed by brief; count and deployment method not stated; safe form |
| `egress`                     | 0                                      | 0                                | Not used; safe                                                      |
| `touchdown`                  | 0                                      | 0 (code comment only)            | Not used; "landed"/"landing confirmed" used; safe                   |
| `survival`                   | 0                                      | 0                                | Not used; "rover is alive and responding" used; safe                |
| `commission`/`commissioning` | 3 (`:38, :56, :65`)                    | 0 (test fixture only)            | Allowed generic term; safe                                          |
| `panorama`                   | 0                                      | 2 (payload-scope only)           | Not used; safe (no first surface image claim)                       |
| `POV` / `point of view`      | 0                                      | 0                                | Not used; safe                                                      |

## Internal-link resolution

All 6 internal links resolve to released public routes (`/news/006-cruise-final-approach/`,
`/news/004-launch-provider/`, `/news/005-launch/`, `/wiki/area/asteria-field/`,
`/wiki/vehicle/rh-01-pathfinder/`, `/#mission`). The Asteria Field wiki leaf
(`/wiki/area/asteria-field/`) is built and serves the three plates; the released
`/wiki/asteria-field/` link anomaly on `ariane-64.mdx:63` is not copied here.

## Image / asset decision

- **No image placement in the current draft.** The article is text-only (no `media*`
  field, grep-verified, exit 1) and links the released wiki leaf `/wiki/area/asteria-field/`
  for visual context — the same precedent as the released 006 pages
  (`006-cruise-checkout.mdx`, `006-cruise-final-approach.mdx`,
  `006-cruise-first-correction.mdx`, all text-only).
- The asset manifest (`.agents/work/assets/008-landing/assets.md`, SHA-256
  `d59682bd2424c15e5f218ad81ec4941635ed078d85b585b1670d15430a2efb51`) verifies the
  AF-01 (`f12c58f5…`) and AF-02 (`25378457…`) hashes/dimensions on disk; AF-03 is barred.
- The placement constraint is recorded in the manifest and source pack: the news media
  registry (`src/lib/media.ts:42`) locks `asteria-plates` to `plateCount: 3`, so a
  frontmatter `media: asteria-plates` would render AF-03 — which the brief forbids.
  Resolution: text-only article (chosen path), with the new-media-key alternative
  flagged for dev `t_ba8e974b` if a future card wants the locator plates inline.
- AF-02's pixels carry `AF-H0`…`AF-E4` terrain-class codes (released as depiction by the
  H1 decision `docs/SCENARIO.md:279`); no code enters this article's alt/caption/prose
  because no image is placed. Safe by construction.

## Surface and metadata

- `website/news/008-landing.mdx` frontmatter:
  - `title`: "Red Horizon One has landed at Asteria Field" — declarative of the row's own
    event; no superlatives, no premature cause, no imagery claim.
  - `category: Landing 08`, `status: Landing confirmed`, `linkLabel: Landing confirmation`
    — consistent with the 005/006 precedent (`Cruise 06`/`Launch 05`); no later-step
    milestone named.
  - `summary` (`:6`): carries the row's date and the three confirmation factors (power,
    communications, rover responding) and explicitly says "commissioning and surface
    operations remain ahead" — no later-step fact.
  - `order: 8` — slot in the release order matches the step number.
  - `publication: draft` — fail-closed default until the release decision flips it.
  - `simulatedDate` — unset; reviewer assigns `2031-09-16` from
    `docs/SCENARIO.md:197` and the dev card carries the flip in the same change as
    `publication: published`.
- No `datePublished`, `lastmod`, or schema-banned field present; the schema
  (`src/content.config.ts:23, :45`) accepts `simulatedDate` as an optional
  `simulatedDatePattern`-constrained string, and `2031-09-16` is exactly that pattern.
- The `dist/` tree carries 5 published news routes (001, 002, 003, 004, 005, plus the
  three 006 routes, plus the two milestone capsules); no `008-landing` route exists yet
  (the slug is `draft`). The text-only link target `/wiki/area/asteria-field/` is built
  (`website/dist/wiki/area/asteria-field/index.html`).

## Coordination observations (not blockers)

- The shared checkout is clean of `git status` modifications for this slug — only the
  untracked `website/news/008-landing.mdx` and the `008-landing` working papers exist.
- The dev card `t_ba8e974b` waits on this gate; its body scopes the push to the
  `t_ba8e974b: publish 008 landing confirmation` message. The release decision recorded
  here will be the editorial approval the build card requires before it commits and
  pushes.

## Validation performed (2026-09-19, run 341)

- Re-hashed the draft at `8547bf5ab8a0b8087f8cd9714d7268225ee84f8776e18b0b04c08c41227945c0`
  — unchanged from the writer handoff.
- Re-hashed `docs/SCENARIO.md` at `99206373bbb6140bac1202dc6cc5e80c6315bec649e49e223b61f305b636bc54`
  — row `:197` holds `16 September 2031 | Atmospheric entry and landing at Asteria Field`.
- Verified every released-article line citation in the source pack against current bytes
  (`001-project-announcement.mdx:10-19, :53-60`; `004-launch-provider.mdx:33-43, :58-61`;
  `005-launch.mdx:16-18, :42-43, :50-53`; `006-cruise-final-approach.mdx:13-19, :30-36,
  :47-52, :61-64`); all hold.
- Verified the wiki leaf `/wiki/area/asteria-field/` is built
  (`website/dist/wiki/area/asteria-field/index.html`).
- First-public-wording scan complete; no banned token introduced.
- Confidential scan complete: no `docs/timeline/` path, no later-step date, no
  landing-design fact, no real institution/operator/agency name beyond the released
  Ariane 64 non-endorsement disclosure.

## Findings

None. No material canon, chronology, plausibility, spoiler, or surface failure.

## Outcome

The package is `continuity clear`. The release decision is recorded on the review card.
