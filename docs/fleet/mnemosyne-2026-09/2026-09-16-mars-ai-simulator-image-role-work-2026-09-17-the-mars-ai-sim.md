---
id: e2fa103e
date: 2026-09-16T22:37:33Z
category: decision
tags: mars-ai-simulator,role-agent,comfyui,planner,visuals
source: tool
---

# Mars AI Simulator image role work (2026-09-17): the `mars-ai-simulator-visuals`

Mars AI Simulator image role work (2026-09-17): the `mars-ai-simulator-visuals` profile already existed (Visual creator) so it was upgraded rather than duplicated. Its SOUL.md now mandates the ComfyUI studio lifecycle (comfyctl start at task start, one job at a time, comfyctl stop before kanban_complete, report comfyctl status), lists the existing assets to reuse (docs/vehicle/*, docs/area/maps/asteria-field-*, docs/brand/logo*), names the two generation paths (native image_generate plugin; tools/visual-generator staged pipeline) and forbids faking an image with PIL/ImageMagick when the backend is down. New profile skill `mars-visual-studio` (skills/creative/mars-visual-studio/SKILL.md) holds the runbook: comfyctl commands, model inventory, both generation paths, manifest fields, pitfalls. Planner (`mars-ai-simulator-planner`) SOUL gained a "Planning the image work" section + `.agents/skills/create-article-workflow/SKILL.md` and docs/CONTENT_WORKFLOW.md now require the IMAGES card body to be a visual brief (subject, placement, count, aspect, reference asset paths, allowed/forbidden canon, alt-text intent, manifest path) with `no new imagery: reuse <path>` as the reuse case, one image card per article, serialised on the single GPU. `.agents/skills/image-generation/SKILL.md` also carries the lifecycle + no-fake-image rules.
