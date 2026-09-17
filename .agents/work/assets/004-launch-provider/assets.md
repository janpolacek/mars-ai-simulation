# Asset manifest: 004-launch-provider

## Manifest metadata

| Field             | Value                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Slug              | `004-launch-provider`                                                                                                                                                                                                                                                                                                                                                   |
| Brief             | `.agents/work/briefs/004-launch-provider.md` (§Media; the new-vs-reuse decision and the visual brief)                                                                                                                                                                                                                                                                   |
| Canon proposal    | `.agents/work/briefs/004-launch-provider-canon.md` (withheld-fact list, accurate / non-endorsing rules)                                                                                                                                                                                                                                                                 |
| Timeline step     | `004-launch-provider` (`docs/timeline/004-launch-provider.md`)                                                                                                                                                                                                                                                                                                          |
| Gate ledger       | `t_4d1b3041` — discharged 2026-09-17 19:02 CEST; **004-A Option A** (the launch-vehicle designation locked canon carries is cleared for public copy), **004-B recorded as "not required — no real provider or institution named"** with the operator's two constraints, 004-C release-order advance approved, 004-D title deferred with no byline, 004-E not applicable |
| Continuity anchor | `docs/vehicle/ariane-64.md` — SHA-256 `b1b1c01c9b1f0bdf36321572b8663971ece143145829767edabad0e6147b1922`, 31,761 B, §Visual identity and silhouette / §Operating appearance item 1 / §What the vehicle must never be said to be                                                                                                                                         |
| Draft             | `website/news/004-launch-provider.mdx` — SHA-256 `4ac5647bc8695e81100953c136501a1d7a10ba7ebaf1cb3e75f473fbdab18f33`, 3,991 B, `publication: draft`                                                                                                                                                                                                                      |
| Card (this pass)  | `t_6fde5f04` — `mars-ai-simulator-visuals`, run 170, 2026-09-17 19:07–19:2x CEST                                                                                                                                                                                                                                                                                        |
| Status            | `complete as a candidate only` — **new imagery produced**: one candidate rendered on the local GPU; **not approved, not placed, not copied into `docs/`**; private provenance only                                                                                                                                                                                      |

## Determination

**`new imagery is needed`** — no asset in the repository carries this step's moment, and the card
body supplies the visual brief for a new one (one candidate, 4:3, schematic / diagram / labelled
integration only, no scene).

The card's reuse check was run first, across every dossier, before any GPU work:

| Dossier         | What it holds                                                                                                                                                               | Usable for step 004? | Why                                                                                                                                                                                                                                                        |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/vehicle/` | `ariane-64.md` (this step's dossier) + the six RH-01 **surface-vehicle** renders (`canonical`, `front-left`, `side-view`, `rear-right`, `contact-arm`, `contact-arm-scene`) | **No**               | The released plates are the surface vehicle, not the launcher; no plate of the launcher exists. `contact-arm-scene.png` stays withheld (`website/scripts/guards.mjs` `gatedFilePathSegments`), and it is a scene image for a different subject in any case |
| `docs/area/`    | Asteria Field plates AF-01/AF-02/AF-03                                                                                                                                      | **No**               | Released **for article 001 only** (`docs/SCENARIO.md:279`); barred here by the brief, and they depict no launcher                                                                                                                                          |
| `docs/brand/`   | identity mark (`logo-bg-black.png`), transparent derivative, `logo.png`, `BRAND.md`                                                                                         | **No**               | The programme mark is already the `programme-identity` key and the 002 reuse; it carries no launch architecture, and each new public placement is its own decision under `BRAND.md`'s Publication boundary                                                 |
| `docs/payload/` | `payload-sensor-illustration.png`                                                                                                                                           | **No**               | The 002 article's illustration, behind the `payload-sensor-illustration` key; depicts no launcher                                                                                                                                                          |

Nothing generated or derived was reused, copied, cropped, re-encoded or upscaled. `docs/` is
untouched by this card.

### Why the candidate is an engineering-reference plate and not a labelled schematic

The card lets the visual be "a labelled schematic that names only the already-released elements".
This card rendered the launcher itself, at the engineering-reference level the step's own dossier
defines, and records why:

1. **The dossier already defines this plate.** `docs/vehicle/ariane-64.md` §Operating appearance
   item 1: "**Design decision (step 004):** the programme documents the Ariane 64 as the launch
   vehicle for Red Horizon One. The vehicle is shown at the engineering-reference level: a clean
   studio silhouette, no launch-site context, no campaign activity, no integration equipment." The
   dossier is the continuity anchor the card names, and it is the more specific of the two
   planner-authored documents.
2. **A text-bearing diagram is not renderable verifiably with the installed models.** The only
   text-to-image model here is `flux-2-klein-base-4b`. Burned-in labels come back garbled or
   invented, and a garbled technical label is exactly the defect this role must reject (embedded
   captions; visual facts that cannot be verified). A diagram without legible labels carries no
   verifiable meaning at all.
3. **The labelling belongs to the site, not to the pixels.** The news card draws its label chip and
   the article prints its `figcaption` from `mediaLabel`, and the reader gets the architecture's
   meaning from the article prose. Burning text into the plate would duplicate that surface with an
   unverifiable one.
4. **The launcher is the step's own subject.** Step 004 decides the architecture; the only element
   of it with released visual canon is the launcher. The cruise stage, aeroshell and landing platform
   have no approved visual identity, and inventing one here would be new visual canon from this role.

The plate is therefore **not a scene and makes no flight claim**: no pad, no tower, no gantry, no
smoke, no flame, no plume, no in-transit stack, no launch day, no site, no people, no integration
equipment, no ground support equipment.

## Candidate — plate 1 (the only candidate)

| Field                     | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Candidate id              | `01-ariane64-engineering-reference`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Proposed stable filename  | `docs/vehicle/ariane-64-engineering-reference.png` — a **proposal only**; the copy is the site engineer's act on the human's selection, never this card's                                                                                                                                                                                                                                                                                                                   |
| SHA-256 (candidate bytes) | `cb09992c4b1a374b7c41b6cb6e31bd1cfb82121fc0a38feaf9c70d2e07b14546`                                                                                                                                                                                                                                                                                                                                                                                                          |
| Bytes / pixels / format   | 687,296 B · 1152 × 864 · PNG, 8-bit RGB, non-interlaced · mtime 2026-09-17 19:12                                                                                                                                                                                                                                                                                                                                                                                            |
| Aspect ratio              | **4:3 (1.333)** — the ratio the 003 defect fix pinned; the canonical stage renders 1152 × 864, which is exactly 4:3                                                                                                                                                                                                                                                                                                                                                         |
| Subject                   | The launch vehicle at engineering-reference level: a white uncrewed heavy-lift launcher, one central core that rises above the boosters, **four strap-on boosters — two on each side, one high and one low** — each with a rounded nose and a dark nozzle, five dark engine bells visible at the base (four booster plus the core), a short white fairing on top, on a seamless neutral studio floor with a faint grounded shadow                                           |
| Story step                | `004-launch-provider` (the architecture decision; the launcher is the element this step releases)                                                                                                                                                                                                                                                                                                                                                                           |
| Placement                 | Once per article, near the architecture decision: the news-card media band of `website/news/004-launch-provider.mdx`, and the article's lead `<figure class="article-media">` once the article is released. Both resolve from the `media:` key, never from a URL                                                                                                                                                                                                            |
| Label                     | `Ariane 64 · engineering reference` (U+00B7 MIDDLE DOT, as the 003 label uses — must not be normalised)                                                                                                                                                                                                                                                                                                                                                                     |
| Caption                   | **none.** Recommended key requirement `captionCount: 0`, mirroring `vehicle-references`: `plates.ts` `plateCaptionText()` then prints the label alone, and `ArticleView.astro` prints `mediaLabel` as the `figcaption`. If the editorial gate wants a printed caption instead, that is a key-contract change for the dev card, not a silent addition here                                                                                                                   |
| Alt text (verbatim)       | "Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied." — 347 characters, ASCII-only (0 non-ASCII bytes; verified), written from the produced pixels                  |
| Tool / model              | Local ComfyUI via `tools/visual-generator/` canonical stage: `flux-2-klein-base-4b.safetensors` + `qwen_3_4b.safetensors` (`type: flux2`) + `flux2-vae.safetensors`; 20 steps, CFG 5.0, euler, `Flux2Scheduler`, seed `410101`, empty negative prompt (Base CFG), 1152 × 864; ComfyUI prompt id `0945dc19-c066-4f2f-9302-c02ac4dbbf25`, graph SHA-256 `3fc1378e…`                                                                                                           |
| Rights                    | Generated on this machine for this fictional programme: no third-party, stock, scraped or agency imagery, no insignia, no real-person likeness, no recognisable real hardware markings. The launcher **designation** is real and is released canon for this step (Gate 004-A); the artwork is **illustrative, not a photograph and not an engineering drawing**. `tools/visual-generator/LICENSE` is MIT and grants no rights to third-party models or to generated content |
| Approval status           | **private provenance only** — a candidate. The human selects the authoritative file; the merged editorial role records the release decision; nothing here is approved canon                                                                                                                                                                                                                                                                                                 |
| Placement status          | **withheld by this card** — the draft is untouched, no `media` field is written, no `docs/` file is created                                                                                                                                                                                                                                                                                                                                                                 |
| Generation required       | yes — produced this pass                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### The media key contract this plate would render through

`newsMediaKeys` today is `['programme-identity', 'asteria-plates', 'payload-sensor-illustration',
'vehicle-references']` (`website/src/lib/media.ts:17-22`). **None of them matches a launcher plate**,
so the plate cannot be placed until the dev card adds a key. Recommended contract, mirroring
`vehicle-references`:

| Field               | Value                                                                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Key (proposed name) | `launch-vehicle-reference` — the dev card owns the final name                                                                                                                                                                                                                                    |
| Requirement tuple   | `{ plateCount: 1, altCount: 1, captionCount: 0, requiresLabel: false }`                                                                                                                                                                                                                          |
| Resolver            | add to `website/src/features/news/media.ts` `newsMedia` — one plate, `src` importing the new export from `src/lib/assets.ts`, label `Ariane 64 · engineering reference`, no `provenance` line (this key renders no caption, so the illustrative statement reaches the reader through `mediaAlt`) |
| Asset import        | add to `website/src/lib/assets.ts` — `../../../docs/vehicle/ariane-64-engineering-reference.png`                                                                                                                                                                                                 |
| Tests               | `website/test/news-media.test.mjs` asserts every key resolves to exactly `plateCount` plates                                                                                                                                                                                                     |

Frontmatter to apply **when** the key lands (and only then):

```yaml
media: launch-vehicle-reference
mediaAlt: "Illustrative artwork, not a photograph: a white uncrewed heavy-lift launcher with one central core and four strap-on boosters, two on each side, five dark engine bells at its base and a short fairing on top, standing on a plain studio floor. A stand-in for the launcher this fictional mission is planned around; no real agency is named or implied."
mediaLabel: Ariane 64 · engineering reference
# no mediaCaption — the key renders no per-plate caption and the schema rejects one
```

`media` is a key, not a URL, and the content schema fails the build on an unknown key or a missing
`mediaAlt`, so a mistyped key cannot silently drop the plate.

### Placement, crop and accessibility notes

- **News card** — `.news-image { min-height: 22rem; overflow: hidden; background: var(--rh-surface-plate) }`
  with the image at `width={1024}`, `width: 100%; height: 100%; object-fit: contain`
  (`website/src/features/news/NewsCard.astro`). The 4:3 plate is **contained, never cropped**; the
  leftover area is the light plate `--rh-surface-plate: #eeebe5` (`website/src/styles/tokens.css`),
  which sits close to the render's own near-white studio field, so the letterbox reads as a
  continuation of the studio floor rather than as a band.
- **Article lead figure** — `.article-media img { width: 100%; max-width: 24rem; height: auto }`
  (`ArticleView.astro`): natural 4:3 at up to 24rem wide, **no crop**.
- **Label overlay** — the card draws `.image-label` bottom-right on `rgba(1, 0, 0, 0.78)`; the chip
  supplies its own dark ground, so contrast does not depend on the pixels beneath it.
- **No crop note is needed anywhere**: the whole vehicle sits inside the frame with margin above the
  fairing and below the nozzles (confirmed by the vision pass), and nothing is cropped on either
  placement.
- **Assumed image** — the launcher's boosters and fairing look slightly smoother and cleaner than the
  dossier's "fine surface variation … small panel boundaries" sentence implies. The plate is
  illustrative artwork and does not claim to be an accurate depiction of real hardware.

## Rejected during this pass (kept in private scratch, so the decision is auditable)

| Attempt                                   | Private provenance                                                                                                                                                                                                                                                                 | Rejected because                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `01-attempt1-REJECTED-two-booster-config` | `tools/visual-generator/stories/ariane-64/candidates/01-attempt1-REJECTED-two-booster-config.png` · SHA-256 `40ad89e0b60b318269bf34bc5872b87f504a55d2a1f11dfc5478f89cdf94ceed` · 629,739 B · 1152 × 864 · ComfyUI prompt `fd143712-d175-43d9-a9be-5854b15fec3f`, graph `a720b173…` | The vision pass counted **two** strap-on boosters (one per side) and **three** dark nozzles at the base — the two-booster reading. `docs/vehicle/ariane-64.md` makes the four-booster configuration the defining feature that distinguishes the documented vehicle from the two-booster variant of its family, so the render contradicted vehicle canon and was rejected in full |

The corrective render changed the composition concept rather than fighting the model: the prompt now
makes the booster count visually explicit (exactly four, two per side, one high and one low, five
nozzles at the base) and uses a nearly straight-on view so the pairs read separately. It is the single
deliverable candidate; the rejected file is kept only so the decision is auditable, and it is not
offered for selection.

## Findings (routed, not decided here)

1. **No media key exists, so the plate cannot be placed today.** `newsMediaKeys` holds four keys and
   none matches a launcher plate (verified `website/src/lib/media.ts:17-22` at 19:0x CEST). The dev
   card on this pipeline must add the key, its resolver, the `assets.ts` import and the test
   assertions — and it is parent-gated on an **approved** asset under `docs/`, which does not exist
   until a human selects this candidate and the site engineer copies it. Owner: the dev card.
2. **One corrective render was needed, and that is a deviation from the card's "1 candidate".** The
   card says one candidate (or fewer) is generated. Two renders were made: the first was rejected for
   depicting the wrong booster configuration, and one corrective render produced the deliverable.
   Total deliverable candidates: **one**. The alternative — shipping a plate that contradicts the
   vehicle dossier — was not acceptable, and this card did not want a third attempt to "look busy".
   Reported rather than hidden so the planner can decide whether the card's wording needs a clause
   for a canon-failing first attempt.
3. **Booster-pair geometry in the accepted render is a soft deviation.** The vision pass reads the
   four boosters as two per side but **staggered** (the outer pair higher and longer, the inner pair
   lower and shorter), while `docs/vehicle/ariane-64.md` describes pairs arranged "two on each side
   of the core, top-and-bottom on each side". The count, the single-stick configuration and the
   absence of extra or hidden boosters are all correct. Owner of the call: the merged
   editorial/continuity gate — accept the plate as an illustrative reference or ask for a further
   render; this card does not rewrite the dossier and did not re-roll for a cosmetic difference.
4. **The `docs/vehicle/` withhold is already retired; the dev card still owns the build proof.**
   `website/scripts/guards.mjs` now sets `gatedDirectoryNames = ['timeline']` and withholds exactly
   one vehicle file (`docs/vehicle/contact-arm-scene.png`); `gatedTextMarkers` is
   `['18° 42', '226° 14']`. The proposed filename, label and alt text carry no marker and no real
   institution name, and the proposed name stem collides with no withheld file. Confirmed by reading
   the guard module; the dev card runs the build and `scripts/check-dist.mjs` on the real change.
5. **The documented ComfyUI start recipe does not hold the server.** The recipe in
   `.agents/skills/image-generation/SKILL.md` and in this role's profile skill —
   `systemd-run --user --unit=comfyui-server … comfyctl start` — leaves **no server running**: the
   transient unit's main process is the `comfyctl` wrapper, so when it exits after reporting ready,
   systemd tears the unit (and the server inside it) down. Measured at 19:08 CEST: `systemd-run`
   returned "Running as unit: comfyui-server.service", then `comfyctl status` → `running: no`,
   `systemctl --user status comfyui-server.service` → _unit could not be found_, `pgrep -af main.py`
   → empty, and the log ends after "To see the GUI go to: http://127.0.0.1:8188". **Workaround used
   for this card** (server process itself as the unit's main process, still outside the worker's
   4 GiB cgroup):

   ```sh
   systemd-run --user --unit=comfyui-server --collect --property=MemoryAccounting=yes \
       --property=MemoryMax=infinity --working-directory=$HOME/Applications/ComfyUI \
       /bin/bash -lc 'exec .venv/bin/python main.py --listen 127.0.0.1 --port 8188 --disable-auto-launch >> $HOME/.cache/comfyui-server.log 2>&1'
   ```

   Verified `running: yes  pid: 1090176 1090179  queue: running=0 pending=0`, unit
   `MemoryMax=infinity`. **This card did not edit the project skill** (no repository change beyond
   this manifest) — the fix belongs in the project skill by its owner, and this role's profile skill
   was updated with the measured recipe.

## Barred media (must not appear on this article)

- `docs/vehicle/contact-arm-scene.png` — withheld scene image (`guards.mjs` `gatedFilePathSegments`).
- The other five `docs/vehicle/` RH-01 renders — the surface vehicle, a different subject; the 003
  release placed only `canonical.png`, and this article places none of them.
- `docs/area/` plates AF-01/AF-02/AF-03 — released for article 001 only.
- `docs/payload/payload-sensor-illustration.png` — the 002 illustration.
- Any real **institution, operator or facility** name in a filename, label, caption, alt text, slug
  or commit message: the fail-closed default of Gate 004-B binds, and the cleared scope is exactly
  the launch-vehicle designation the locked canon carries.
- Any launch day, time or date beyond the 2031 launch window; any statement that the vehicle is in
  transit, integrated at the pad or flight-ready; Mars surface imagery, a landing site, or Asteria
  Field material beyond article 001; any unapproved performance, mass, cost or specification figure;
  any step 005–011 fact.

## Validation performed

All rows run 2026-09-17 between 19:07 and 19:2x CEST against the live shared tree.

| Check                                                   | Command / source                                                                                   | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server up in its own uncapped unit before the first job | `comfyctl status`; `systemctl --user show comfyui-server.service -p MemoryMax -p MemoryAccounting` | `running: yes  url: http://127.0.0.1:8188  pid: 1090176 1090179  queue: running=0 pending=0  gpu_used: 2370 MiB`; `MemoryAccounting=yes`, `MemoryMax=infinity`; this worker's scope is `hermes-worker-kanban-t_6fde5f04-run-170.scope`, so no model was loaded inside its 4 GiB cap                                                                                                                                                                                                                                                                                                       |
| One job at a time                                       | `curl /queue` before each submission (the runner refuses a busy queue)                             | Empty before both submissions; two renders, serial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Candidate matches the dossier                           | `vision_analyze` full-frame read of the accepted PNG                                               | Confirmed: one central core, **four** strap-on boosters (two left, two right), five dark nozzles at the base, short white fairing on top, whole vehicle in frame, seamless neutral studio field with a grounded shadow, **no** landscape, sky, horizon, pad, tower, gantry, smoke, flame or plume, **no** letters, numbers, words, captions, logos, flags or insignia including tiny technical text, **no** crew hardware (capsule, escape tower, windows, access arm), **no** recovery hardware (landing legs, grid fins), no people, no duplicated or floating hardware, no second core |
| Reject rules applied                                    | the vision read of attempt 1                                                                       | Two-booster / three-nozzle configuration → rejected before write-up (see §Rejected)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Alt text vs pixels and length                           | the accepted render's vision read; `wc -c`; `grep -P '[^\x00-\x7F]'`                               | Every cue the alt names exists in the pixels; 347 characters; **0** non-ASCII bytes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Alt and label carry nothing withheld                    | `grep -c -i` for the institution/operator/facility families over the proposed alt and label        | 0 hits for each; the only match is the word "agency" inside the standard disclaimer "no real agency is named or implied", the same wording the 002 and 003 alts use. The launcher designation is named in the **label** only (cleared canon, Gate 004-A) and deliberately not in the alt                                                                                                                                                                                                                                                                                                  |
| Aspect, placement, crop                                 | `NewsCard.astro`, `ArticleView.astro`, `tokens.css`                                                | 1152 × 864 is exactly 4:3; contained on the card band, natural 4:3 within 24rem on the article figure; no crop on either placement, so no crop note and no safe-area caveat                                                                                                                                                                                                                                                                                                                                                                                                               |
| The key genuinely does not exist yet                    | `website/src/lib/media.ts:17-22`                                                                   | Four keys, none for a launcher; no `launch-vehicle-reference` requirement, no resolver entry, no `assets.ts` import — the dev card's work (finding 1)                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Guard state                                             | `website/scripts/guards.mjs:41`, `:60-62`, `:83`                                                   | Withheld directory `timeline`; withheld file `docs/vehicle/contact-arm-scene.png`; markers `['18° 42', '226° 14']`. Nothing in the proposed filename, label or alt text matches any of them                                                                                                                                                                                                                                                                                                                                                                                               |
| Draft untouched                                         | `grep -n '^media\|publication' website/news/004-launch-provider.mdx`; `sha256sum`                  | `publication: draft`, **no** `media` field; SHA-256 `4ac5647b…`, 3,991 B — no build, route, alt text or crop change follows from this manifest                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Repository hygiene                                      | `git check-ignore -v …`; `git status --short`                                                      | The spec and the whole render tree are ignored (`tools/visual-generator/.gitignore:15` `spec.json`, `:17` `stories/`); this card's only new tracked file is this manifest; nothing committed                                                                                                                                                                                                                                                                                                                                                                                              |
| No build run, deliberately                              | —                                                                                                  | No site source file was changed by this card, so a build would prove nothing; the dev card runs the build and `scripts/check-dist.mjs` on the real change                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ComfyUI released at the end                             | `comfyctl stop`; `comfyctl status`                                                                 | See §Handoff — reported in the card comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

**Review outstanding:** the **human's selection** of the candidate (the authoritative file), the
**editorial gate** `t_35061463` (approval, and the call on findings 2 and 3), the **site engineer's**
copy into `docs/vehicle/` on that selection, the **dev card's** media key plus build proof, and the
article **release card's** release decision. **Nothing in this manifest is approved, placed, or
published.**

## Private provenance and repository hygiene

- **Candidate (real path).** `tools/visual-generator/stories/ariane-64/candidates/01-ariane64-engineering-reference.png`,
  SHA-256 `cb09992c…`, 687,296 B, 1152 × 864; the same bytes are at
  `tools/visual-generator/stories/ariane-64/references/canonical.png`. Sidecars beside the candidate:
  `.api.json` (exact ComfyUI graph), `.inputs.json` (resolved prompt and reference hashes),
  `.job.json` (prompt id `0945dc19…`, graph SHA-256), `.history.json` (execution record). The batch
  record is `tools/visual-generator/stories/ariane-64/runs/t_6fde5f04-runs.json` (prompt, prompt id,
  graph hash, seed, bytes, SHA-256 for **both** renders, rejected one included).
- **Spec.** `tools/visual-generator/spec.json`, written from `docs/vehicle/ariane-64.md`; git-ignored
  scratch, deletable at any time.
- **Nothing was committed.** No candidate, prompt, workflow, run record, model file or media entered
  the repository; the scratch tree is ignored, and this manifest is the only file this card added.
- **No input had to be copied out of `docs/`** — text-only prompts, no reference images.

## Handoff

- **Next recommended owner:** the human story owner (or the operator relaying them) — **select the
  authoritative file**: candidate `01-ariane64-engineering-reference` (SHA-256 `cb09992c…`), or ask
  for a further render (finding 3), or decline imagery for this article entirely.
- **Then:** the site engineer copies the selected file to `docs/vehicle/ariane-64-engineering-reference.png`
  unchanged (hash it on copy) — a `docs/` write only that role performs — and the merged editorial
  role records the approval on `t_35061463`.
- **Then:** the dev card adds the media key, the resolver and the `assets.ts` import, runs the build
  and `scripts/check-dist.mjs`, and writes the frontmatter strings recorded above verbatim.
- **Not this card's to do:** no `docs/` file written, no canon edited, no `website/` change, no build,
  no commit, no push, no deploy, no publication.
