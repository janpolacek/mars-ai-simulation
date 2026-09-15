# Content workflow artifacts

The article harness keeps handoffs in versioned Markdown rather than in agent
chat history. A workflow command creates these paths for each valid article slug:

```text
content/briefs/<slug>.md       Request, scope, timeline step, and constraints
content/sources/<slug>.md      Claim-by-claim canonical source pack
content/articles/<slug>.md     Draft article and stable front matter
content/reviews/<slug>.md      Editorial gate record
assets/articles/<slug>/        Candidate visual files and assets.md manifest
```

`assets/articles/` holds the tracked manifest only, not candidate media. Keep
candidate files, detailed prompts, and raw generation records in
`~/Projects/mars-image-gen`; the manifest points to that private evidence. After
human media approval, copy a selected stable file to `assets/media/`; the website
build syncs that canonical public media directory to `website/public/media/`. Do
not put drafts, unapproved images, prompts, or private scenario material in
`website/public/`.

Create a workflow with:

```sh
fnm exec --using website/.node-version node scripts/article-workflow.mjs create \
  --title "Example article" --slug example-article \
  --brief "Describe the requested article." --timeline-step site-foundation
```

See [the workflow runbook](../docs/CONTENT_WORKFLOW.md) for the worker lifecycle
and the dispatch command.
