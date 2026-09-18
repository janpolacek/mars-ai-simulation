# Media and layout contracts

Derived and presented media, and the layout and interaction contracts a card may claim
only by measuring them.

- A card, deck or gate that argues from **character count** about layout ("one
  character shorter, so it cannot overflow") is stating a hypothesis: measure it by
  swapping the string in the live DOM at the width the claim is about
  (`link.textContent = '<other label>'`, then read the nav's and the label's
  `getBoundingClientRect().right` and `documentElement.scrollWidth` against
  `innerWidth`), and report the measured delta and the margin that remains even when
  the outcome still holds. Measured 2026-09-17 on the built homepage at 320 px, with
  nothing edited in the source: the 7-character `Roadmap` renders **4.5 px wider**
  than the 8-character `Progress` — 191.77 px against 187.27 px, right edges 315.91 px
  against 311.41 px, because uppercase `M`/`A` beat `E`/`S` — still inside the page's
  20 px gutter with 4.09 px to spare, and `documentElement.scrollWidth` stayed 320 =
  the viewport either way. The count-based reasoning was wrong; only the measurement
  settled the outcome.

- An image swap is proved from the emitted files, not from the component: Astro
  emits one asset per (source, `width`/`height`, `format`) and drops the previous
  one, so list `dist/_astro/` with byte sizes — the old 896 px black-field
  `logo-bg-black.*.webp` disappearing proves no other placement still renders it —
  and grep each route's `<img>` tags for the src you expected there (header 72 px,
  splash 352 px, hero 896 px). Report `sharp(<emitted>).metadata()` `format`,
  `channels` and `hasAlpha` for the file the built HTML actually points at.

- Prove a derived asset round-trips, and prove the proof has teeth: recomposite
  the variant over the field colour its source was flattened onto and compare per
  channel (`alpha = max(R,G,B)/255`, `colour = (P − field × (1 − alpha))/alpha`
  for a source that is the mark over `#010000`), then run the _same_ function
  against a known-bad file (the rejected RGBA derivative: 190 LSB) and require it
  to fail. A green assertion that was never shown red is not evidence.

- A card body's prescribed render snippet can be defeated by a positional
  selector: appending `<p class="timeline-link">` after a detail paragraph styled
  by `… > p:last-child` moves the styled element and silently restyles that one
  step. When a gate names parity as the constraint, give the element a class and
  key the rule on it, then measure `getComputedStyle` parity across every sibling
  (`font-size | color | max-width`) in the browser — the class change is the fix,
  not a scope violation.

- A gate can record a hash over a string payload whose encoding is not
  reconstructible ("15 literals, newline-joined, 710 bytes"): verify the card's
  _stated_ acceptance instead — extract the deck's fenced block and assert the
  file equals `import line + block` byte-for-byte, and re-derive the length claims
  from the built DOM — then report the unreproducible payload hash as an open
  question rather than a failure.

- The homepage's loading screen is gated at runtime on an exact `/` (card
  `t_15a027cf`): `BaseLayout` emits an inline `data-splash-skip` gate for a
  non-empty `location.hash` — and for a document served at another path — and
  `layout.css` keys the marker rules on it. Verify a deploy of it with `fetch`,
  never by eyeballing the served HTML: extract the gate with a whitespace-tolerant
  pattern (`/<script>[\s\S]*?location\.pathname[\s\S]*?<\/script>/`), because the
  script is templated and its indentation moves with the layout, compare it
  whitespace-normalised against your own `dist/index.html`, check the stylesheet
  the homepage links for both `html[data-splash-skip]` rules, and confirm no other
  route carries the gate. Straight after the push the edge can still answer from
  the previous deployment (`cf-cache-status: HIT`, served document a different
  length): poll until the served byte count equals your own build rather than
  reporting a stale copy.

- Measure a first-paint decision with `Page.addScriptToEvaluateOnNewDocument`: a
  sampler installed before navigation records `getComputedStyle`, `window.scrollY`
  and `document.elementFromPoint` at fixed times, which is what proves "never
  painted" and that the fragment jump happened. `Page.captureScreenshot` times out
  in this headless session, so it cannot be used to force frames, and CSS
  animation clocks can sit frozen (`playState: running`, `currentTime: 0`) — a
  state that depends on an animation finishing then reads exactly like the bug.
  Measure the before and the after build in one session, and report which
  properties needed no frame (`display`, `scrollY`, the hit test).

- A section that must keep one height across slides is built by stacking: make
  the container a grid and give every slide one placement (`grid-area: 1 / 1`,
  card `t_89b325e5`), then hide an inactive slide with `visibility: hidden`
  rather than `display: none` so its box still sets the row. Sending an inactive
  slide out of the flow hands the section's height back to whichever slide is
  active and moves the whole page — measured on the built homepage at 1280px:
  461px/3,159px against 645px/3,343px, 184px per switch — and a JS measurement
  taken once on init would paint the first slide's height and then resize. The
  `visibility` form keeps every accessibility property (`Tab` skips the inactive
  slide's link, `Accessibility.getFullAXTree` has no node for its heading or its
  label, `a.focus()` leaves `document.activeElement` where it was), but a
  `guards.test.mjs` case that pinned the old `display: none` must be
  re-expressed — assert `visibility: hidden` present _and_ `display: none`
  absent, and say so in the handoff rather than dropping the check.

- A slide that stays in the layout does **not** fetch its `loading="lazy"` image,
  and showing it changes no geometry, so nothing re-triggers that decision: the
  picture stays blank (measured, fresh cache-disabled session). Promote the image
  of the slide the client is showing to `loading="eager"` — assigning
  `img.loading = 'eager'` does start the fetch (new resource entry,
  `naturalWidth` 1024). To measure a below-the-fold section at all, raise the
  emulated viewport (`Emulation.setDeviceMetricsOverride`, 1280x3200) instead of
  scrolling: `window.scrollTo` and `scrollIntoView` leave `window.scrollY` at 0
  in this headless session. Accessibility-tree names follow `text-transform`, so
  the inactive slide's label is found as the uppercased `ANNOUNCEMENT SUMMARY` —
  a case-sensitive count returns 0 for the _visible_ slide too and reads as a
  false pass.
