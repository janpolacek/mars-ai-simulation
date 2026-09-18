# Live-origin attribution

What a push to `main` deploys, and how to attribute the bytes the origin serves to your own
build rather than to whatever the shared machine last put there.

- **A push to `main` is the automatic production deploy** (human instruction
  2026-09-17, recorded in `AGENTS.md`; `main` is wired to the Cloudflare Workers
  Build), so a dev card's commit/push publishes the build output. Anything Astro
  emits into `dist/` goes public with it — including a statically imported asset
  that no route references — and the deploy _action_ stays out of reach (no
  `wrangler`, no credentials, no DNS). After every push, verify the live origin
  rather than assuming: fetch the emitted asset path and a route, and compare a
  hashed asset's byte size against your own build to prove the deployed bundle is
  yours. Report a push as a deploy when it deploys, and say plainly when
  approved-but-unreleased media reaches `dist/` before you push it.

- Attribute the live origin by **hashing the served bytes against a known local
  build**, never by byte count: inside a page on the origin, `fetch(path, { cache:
  'no-store' })` each path and digest it (`crypto.subtle.digest('SHA-256', …)`) — the
  document _and_ every `<link rel=stylesheet>` it names — then compare those hashes
  with your own `website/dist/` files and poll until the deployed bytes match. A
  shared-machine rebuild window can serve a _running card's uncommitted worktree
  build_ byte-for-byte while `origin/main` stands still, so count or content alone
  proves nothing about which commit is live. Measured 2026-09-17: the hostname served
  17,397 B / `eed47af2…` (card `t_e4cc3b9f`'s worktree build, in no commit, with
  `origin/main` at `e67b970`), and only after card `t_cc2dfd29`'s push did the origin
  serve 17,792 B /
  `ef1466f4aa9789ef2095da9100a4c47a5ae0c2a2078924e25ecf90bcf903e032` — byte-identical
  to that card's own build, both stylesheets matching too (`_astro/index.BWVFYATM.css`
  `1ca71364…` 6,489 B, `_astro/BaseLayout.BGZGfQ2B.css` `3edd31f4…` 5,280 B). Say
  which build your numbers belong to.

- Confirm which server produced your preview evidence. `npm run preview` falls
  back to another port when the requested one is busy (a long-running
  `astro dev --host 0.0.0.0` server usually holds 4321 in this project), and it
  refuses to start at all — "Another astro preview server is already running" —
  while another `astro preview` holds the lock, so a `--port` value it never bound
  is easy to mistake for your own run. Check `ss -ltnp | grep -E "432[0-9]"`, read
  the bound port, and when the lock is held by another worker's server, serve the
  built `dist/` yourself on a free port with a plain static file server instead of
  forcing theirs down. A dev server serves the source and `public/`, which is
  useful, but it is not the built `dist/`; say which one you measured. A static
  server you start yourself can also fail to bind silently: when a sibling
  worker's node static server already holds the port, your own server exits with
  "Address already in use" and that port keeps serving their build, so every
  number you read belongs to another checkout. Before trusting a measurement,
  hash the served bundle against your own — read the page's stylesheet link and
  compare that file's sha256 and byte length with `website/dist/` — and confirm
  that `ss -ltnp` names your own PID on the port you chose.

- Measure image presentation instead of inferring it. Read the rendered box,
  `object-fit` and natural size in the browser, compute the visible source
  rectangle per breakpoint, and, where a cue's visibility matters, match its
  colours inside a crop of the rendered panel. A screenshot alone is weak
  evidence: without waiting for the page's `opacity` transition to finish, a
  capture of this site renders at roughly 30% brightness.

- Prove the release build without leaving an artefact behind: `SITE_URL=https://<approved-origin>
  npm run build` is the command the record hands to the human, so run it and show the
  `<link rel="canonical">` it emits on each route, then rebuild with `SITE_URL` unset and
  re-check that the placeholder origin is gone (0 hits in `dist/`, canonical count back to 0).
  An `--outDir` outside the repository fails with `EXDEV: cross-device link not permitted`
  when the target is on another filesystem (`/tmp` here), so build into the default `dist/`
  (gitignored) and restore it rather than aiming the build elsewhere.

- Make your own build the last one before the handoff. Other profiles build into the same
  `website/dist/` on this shared checkout, so a file you hashed after your build can already
  be a sibling's output; snapshot the source mtimes next to the `dist/` hashes and confirm
  your build is newer than every source edit, not merely that it succeeded.

- Re-verify anything you measured before completing the card if the evidence came
  from a shared checkout: other profiles edit `website/`, `docs/`, and the working
  tree in place during a run. A sibling card can also move `origin/main` with a
  **content** change mid-card, and then part of your before/after table is measured
  against a tree that no longer exists: the simulated-record-date line published
  under card `t_e4cc3b9f` lengthened every news card's copy column and moved the
  copy-driven numbers (900x800 carousel 457.7 -> 516.1, 390x844 707.8 -> 747) while
  the plate-driven ones (1600-1024) did not move at all. Rebase, then keep **two**
  private worktrees — one at the new `origin/main` for the before column, one with
  your commit — build both with the same command, and sweep both in a single
  browser session, so both columns come from one harness and one browser state.

- Attribute a deploy over **every route the push creates**, not one page. Build the expected
  map from your own `website/dist/` and compare it in the same process that drives the
  browser: the browser tool's `code` cell runs on the host, so read the local files, then
  in-page `fetch(path, { cache: 'no-store' })` each route and
  `crypto.subtle.digest('SHA-256', …)` the response bytes. 12/12 routes byte-identical (the
  new article page, the index pages, the emitted assets) is what proves the live build is that
  commit; carry the withheld-marker scan over the same sweep so one pass answers both "is it
  my build?" and "is anything private in it?". Measured publish → live window on 2026-09-17:
  push 17:44:14Z, the previous build still served at 17:45:06Z, the new build live by
  17:45:23Z — a check run immediately after a push may still see the old bytes, so re-poll
  before concluding the deploy failed.

- **A push that changes no emitted bytes has no byte-level attribution — attribute it by CI run
  and remote ref, and say so.** A comment-only, skill-only or docs-only commit emits a `dist/`
  byte-identical to its parent's, so the live-origin sweep cannot say _which_ commit the edge is
  serving: every route hashes the same either way, and a byte-identical result is evidence only
  that the deploy is healthy. Attribute the push itself — `git ls-remote origin refs/heads/main`
  must equal your commit, plus `gh run list --commit <sha> --json
  databaseId,headSha,status,conclusion` — and pass the **full 40-hex SHA**, because the
  abbreviated form silently answers `[]`, which reads as "no run exists" (measured 2026-09-17 on
  the pushed tip). Probe the origin from inside a page on it (`fetch(path, { cache: 'no-store'
  })` plus `crypto.subtle.digest('SHA-256', …)`, as the live-origin bullets above describe),
  since a shell probe of that host is refused in this session.
