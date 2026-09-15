# Project source content

`content/` is the single source root for the Red Horizon project. It holds the
versioned article handoffs, approved reusable media, identity artwork, and
article asset manifests; `website/` only contains the Astro application and its
generated public copies.

The article workflow keeps handoffs in versioned Markdown rather than in agent
chat history. A workflow command creates these paths for each valid article slug:

```text
content/briefs/<slug>.md       Request, scope, timeline step, and constraints
content/sources/<slug>.md      Claim-by-claim canonical source pack
content/articles/<slug>.md     Draft article and stable front matter
content/reviews/<slug>.md      Editorial gate record
content/assets/<slug>/assets.md Per-article asset manifest only
content/media/<filename>        Approved publication images and videos
content/brand/identity/         Approved logos and identity marks
content/brand/favicon/          Stable source artwork for application favicons
```

`content/assets/` holds the tracked manifest only, not candidate media. Keep
candidate files, detailed prompts, and raw generation records in
`tools/visual-generator/`; the manifest points to that private evidence. After
human media approval, copy a selected stable file to `content/media/`; the
website build syncs that canonical public media directory to
`website/public/media/`. It also syncs `content/brand/identity/` to
`website/public/brand/`. Do not put drafts, unapproved images, prompts, or
private scenario material in
`website/public/`.

Favicon exports are application files under `website/public/`; their stable
source artwork remains in `content/brand/favicon/`.

See [the workflow runbook](../docs/CONTENT_WORKFLOW.md) for the Beads creation
sequence, artifact requirements, and worker lifecycle.
