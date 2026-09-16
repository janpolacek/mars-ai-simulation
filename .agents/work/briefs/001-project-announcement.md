# Brief: 001-project-announcement (revision)

## Release goal

Expand the published step-001 project-announcement article to give it more substance
on three axes requested by the human (2026-09-17): (a) what the mission targets and
why that class of terrain, (b) where it goes and what can honestly be said about
position before any site release, and (c) how long the programme and the surface
mission are designed to last. All additions stay inside the step-001 allowance;
nothing from a later step appears.

## Article

`website/news/001-project-announcement.mdx` — rewrite in place; `publication: published`
preserved; `order: 1` preserved; `accent: oxide` preserved; `media: /assets/logo.png`
preserved.

## Timeline step

`site-foundation` / step 001 (project announcement). Canonical authority:
`docs/timeline/001-project-announcement.md` ("Allowed public angle" lines 27-34) and
`docs/SCENARIO.md` ("Continuity and release controls" lines 272-282).

## Target length

**Aim 400-550 words of body text.** The current draft is 252 words. Above 600 words
requires a recorded reason. No minimum is set — quality of added detail takes priority
over word count.

## Three depth areas and the specific questions each added paragraph answers

### 1. What the mission targets and why that class of terrain

The existing article names the mineralogy goal and the Margaritifer Terra region but
does not explain why that terrain class — ancient cratered highlands cut by valleys,
preserving aqueous-alteration minerals — is the right place to ask the habitability
question. The added paragraph should answer: what geological logic selects a
highland-basin transition region with layered aqueous minerals as a test of ancient
habitability, without naming a specific landing site, coordinates, or unit.

Allowed facts (all real Mars grounding, not Red Horizon programme facts):
- Margaritifer Terra is an equatorial-to-mid-latitude highland region with a documented
  record of valley networks, basin deposits, and aqueous mineral signatures (clays,
  sulfates) identified from orbit.
- Clay and sulfate minerals are useful because they form in or are altered by water;
  their distribution and mineralogical associates record past environmental conditions.
- A highland-to-basin transition preserves multiple evidence classes in proximity:
  basement rock, transported sediment, and layered deposits — allowing the rover to
  compare altered and unaltered material.
- The question is not whether life existed but whether conditions were once compatible
  with life as science understands it.

Sources: USGS SIM 3041, SIM 3209, SIM 3489; NASA orbital spectroscopy context
(`docs/SCENARIO.md` lines 289-294).

Forbidden from this paragraph:
- Any coordinates, landing site name, or site-specific unit (Asteria Field is HELD).
- Any mention of a specific rover, vehicle design detail, or instrument.

### 2. Where it goes — geographic setting and what can honestly be said about position

The existing article names "Margaritifer Terra region" but says nothing about what that
means geographically. The added paragraph should answer: what kind of place is
Margaritifer Terra, why is it equatorial, what is known about its past water activity
at regional scale, and what honest framing is possible before any landing-site release
— including what a public reader would reasonably want to know and what the step-001
gate keeps private.

Allowed facts (all from released step-001 canon or real Mars grounding):
- Margaritifer Terra is an equatorial Martian region (roughly 10°S to 25°S, 320°E
  to 355°E) in the ancient southern highlands, named after a classical river feature
  on Earth (Margaritifer Terra = "Pearl-bearing land").
- Regionally it is characterised by impact craters, valley networks, basin deposits,
  and mineralogical evidence of past water activity documented in USGS maps.
- The mission's stated target is the Margaritifer Terra region — not a named crater,
  valley, or landing site — which is the permitted level of geographic specificity at
  step 001.
- No coordinate, no site name, no map, and no local operations frame may appear.

Sources: USGS Gazetteer of Planetary Nomenclature (Margaritifer Terra, Feature 3701);
USGS SIM 3041, SIM 3209, SIM 3489; `docs/SCENARIO.md` lines 289-294.

Forbidden:
- Any coordinate (17.80°S / 332.20°E or any other specific value).
- "Asteria Field" (HELD — `docs/SCENARIO.md` line 21, 279).
- Any map or planning-envelope reference (`docs/area/AREA.md` public status: no
  publication, route, metadata, or media release approved).
- The unexplained coordinate from `index.astro` line 58 (18°42′S / 226°14′E) — not
  used in the article, flagged as a separate corrective item.

### 3. Programme and surface mission design lifetime

The existing article states the launch window (2031) and the lifecycle budget
(€2.10bn) but does not address how long the surface mission is designed to operate.
The human has asked for more detail on programme and mission longevity. The added
paragraph should answer: what the lifecycle budget frame means (concept through archive
implies a multi-year programme), that the surface mission is designed for sustained
operations rather than a brief flyby, and — if the human approves — the specific
duration in Mars years that the scenario uses as its design anchor.

Allowed facts (from step-001 canon and SCENARIO.md):
- The lifecycle budget covers "concept work through the final science archive" —
  implying a programme that begins before launch and continues after the surface
  mission ends.
- The surface mission is designed for extended operations, not a short-lived lander.
- The programme operates under an equal governance model that plans for sustained
  science return.
- If the human approves releasing the design lifetime: "The surface mission is
  designed to operate for two Mars years — approximately 1,375 Earth days — which
  corresponds to a full seasonal cycle and provides the minimum time needed to
  characterise an ancient aqueous environment across a Martian year." Source:
  `docs/SCENARIO.md` line 25 ("Two Mars years, ending 21 June 2035") — this fact is
  currently private canon; release requires human approval.

Sources: `docs/SCENARIO.md` lines 20, 25, 216-217; NASA Mars-year explanation
(`docs/SCENARIO.md` line 293).

Forbidden:
- "21 June 2035" — the absolute end date is gated.
- Any specific surface mission end date.
- "Asteria Field" as a site name.

## HELD — needs human release

The following exact sentences are prepared and ready to paste. They may NOT be written
into the article without a recorded human approval reference on this card's comment
thread. One "yes, release X" on this card is enough for a follow-up card to apply the
change with no new research.

### HELD item 1: Surface mission design lifetime

**Question for the human:** May the article state that the surface mission is designed
for two Mars years (~1,375 Earth days)? This is the scenario design anchor
(`docs/SCENARIO.md` line 25). Not releasing it means the article stays vaguer on
longevity; releasing it gives readers a concrete operational scale.

**Sentence to paste (insert after the sentence about sustained operations):**

"The surface mission is designed to operate for two Mars years — approximately 1,375
Earth days — providing at least one full seasonal cycle to characterise an ancient
aqueous environment and its mineralogical record."

**Canon source:** `docs/SCENARIO.md` line 25.

### HELD item 2: Landing site name — Asteria Field

**Question for the human:** May "Asteria Field" be used as the mission's target
designation in the article? This is the fictional Red Horizon operational region
(`docs/SCENARIO.md` line 21; `docs/area/AREA.md` control record). Not releasing it
means the article refers only to the region ("Margaritifer Terra"); releasing it adds
a named target without revealing coordinates or maps.

**Sentence to paste (insert in the geographic-setting paragraph):**

"The mission targets Asteria Field, a designated operational region within
Margaritifer Terra."

**Canon source:** `docs/SCENARIO.md` line 21; `docs/area/AREA.md`.

### HELD item 3: Map or position graphic

**Question for the human:** May a map or annotated position graphic showing the
mission's target region be created for this article? This requires a separate human
release decision because maps of the target region are currently gated
(`docs/SCENARIO.md` line 279; `docs/area/AREA.md` public status: no publication,
route, metadata, or media release approved). If approved, the visuals agent should
receive a brief for a regional context map only (no landing site marker, no
coordinates overlaid), approved by continuity before publication.

## Forbidden token set

The following terms must not appear in the revised article. Verify with grep before
closing the draft card.

```
asteria|Asteria
ariane64|ariane 64|Ariane 64|Kourou
RH-01|Pathfinder|pathfinder
payload[ -]selection|instrument[ -]selection
FEI STU|fei stu
17 February|16 September|21 June|february 20|september 20|2035
guiana|French Guiana
sample[ -]return
crew|crewed
spectrometer|raman|isotope[ -]power|americium|radioisotope
```

Grep command: `grep -iE "asteria|ariane64|ariane 64|RH-01|pathfinder|FEI STU|17 february|16 september|21 june|guiana|sample.return|crewed|spectrometer|raman|isotope.power|americium|radioisotope" website/news/001-project-announcement.mdx`

## Existing review record

`.agents/work/reviews/001-project-announcement.md` exists (verdict `changes_requested`,
corrective items already assigned to `t_fc952c7d`). The editorial gate for this
revision appends a new dated section to that file; it does not delete or overwrite
the retro record.

## Sequencing

The retro chain (`t_16c7ba1c` running → `t_0b3434e8` todo → `t_8059da5f` todo)
verifies the current 252-word text. The revised draft may not land while those cards
are running. Recommended sequencing:

1. The revised DRAFT card is a child of `t_8059da5f` (retro editorial gate), so it
   waits for the retro chain to close before starting.
2. The revision chain (DRAFT → SEO → IMAGES → CONTINUITY → REVIEW → BUILD) runs
   serially after that.
3. The article parent for this revision (`t_0a26f1e8`) is reused as the child of the
   BUILD card, not replaced.

## Escalation items for human decision (three items, one "yes" each unlocks)

1. **Surface mission design lifetime** — two Mars years (~1,375 Earth days) as
   stated design anchor. Approving this adds one factual sentence to section 3.
2. **"Asteria Field" as a named target** — using the fictional operational
   designation in the article. Approving this adds a site name without coordinates.
3. **Map or position graphic** — a regional context map for the article. Requires
   a recorded human release and a separate brief to visuals with no site marker,
   no coordinate overlay.

No other canon, publication, or deployment decisions are pending from this brief.
