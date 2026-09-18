# Release records and reconciliation

Publishing a record whose bytes are cited elsewhere, and reading a card body that
contradicts its own acceptance list.

- A card body can contradict itself: one section commissions an import of the
  selected asset from the canonical `docs/` export while the acceptance list says
  no `docs/` file is written. When the key cannot build without a real file under
  `docs/`, read it as "do not author `docs/` prose or frontmatter", make the
  mechanical copy, commit the asset (a clean clone cannot build without it), and
  record the reading on the card.

- **A working paper whose recorded hashes are cited elsewhere gets published as
  authored, not reflowed.** When a card publishes `.agents/work/` papers that `dprint check`
  flags (exit 20: a hand-rewritten Markdown table the plugin wants re-padded), the
  pre-commit hook rewrites the bytes it publishes — and those bytes are usually the
  revision the owning card recorded and that its sibling papers and card comments
  cite by sha256 and byte count. Measured 2026-09-17 on card `t_7e3b87f4`: a reflow
  would have moved 6,501 B over 87 lines of the writer deck (`8fc9a181…` /
  59,689 B) and 9,585 B over 238 lines of the SEO paper (`424a44ff…` / 35,380 B),
  falsifying six board comments across four cards — including a release-authorising
  gate's PASS rows — in the very commit that published them. Decide explicitly and
  say which you chose: `git commit --no-verify` preserves the recorded revisions
  (alphanumeric-run sequences are identical either way, so no word changes), then
  report each published path's `dprint check` status; accept the reflow only where
  no recorded hash or byte count keys on the file. Measure the candidate reflow on
  scratch copies (`dprint fmt --config <repo>/dprint.json <copy>`), never in the
  shared tree, and never `git stash` or reset the shared checkout to get there.

- A release can break a suite that **counts cells rather than asserting a claim**, and the
  repair belongs in the matcher, never in the count. Publishing the first item that carries
  **no `media` key** broke `website/test/news-plate-fill.test.mjs`: `NewsCard` emits a cell's
  class through `class:list`, so the placeholder reaches the document as
  `class="news-placeholder placeholder-amber"` while an image cell stays bare
  (`class="news-image"`); `cellsIn()` matched only an attribute that closed straight after the
  cell's own class, recognised **3** cells on a homepage rendering **4**, and the two count
  assertions then compared a number that no longer described the page. Prove the failure
  red-first before touching it — 5/5 green on a clean `origin/main` worktree with no such
  article, 2 failures with the publication flip alone — then read the class attribute as a
  **class list** and take the kind from its first token, and add a build-independent fixture
  case over the emitted markup (`<div class="news-placeholder placeholder-amber" …>`) so the
  matcher is covered without a build. Loosening the count is not a fix.
