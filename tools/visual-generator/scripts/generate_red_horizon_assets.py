#!/usr/bin/env python3
"""Generate local Red Horizon logo and RH-01 review candidates through ComfyUI."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from generate_story_set_via_api import download, image_info, request, run, upload
from workflow_factory import build


def save(root: Path, server: str, name: str, graph: dict, output: str, destination: Path) -> Path:
    runs = root / "assets" / "red-horizon" / "runs"
    runs.mkdir(parents=True, exist_ok=True)
    (runs / f"{name}.api.json").write_text(json.dumps(graph, indent=2) + "\n")
    (runs / f"{name}.inputs.json").write_text(
        json.dumps({"graph_sha256": hashlib.sha256(json.dumps(graph, sort_keys=True).encode()).hexdigest()}, indent=2)
        + "\n"
    )
    record = run(server, graph, job_path=runs / f"{name}.job.json")
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_bytes(download(server, image_info(record, output)))
    (runs / f"{name}.history.json").write_text(json.dumps(record, indent=2) + "\n")
    print(f"{name}: {destination}", flush=True)
    return destination


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--server", default="http://127.0.0.1:8188")
    parser.add_argument("--stage", choices=["all", "logo", "canonical", "scene"], default="all")
    parser.add_argument("--variants", type=int, help="Limit the number of configured variants per stage.")
    parser.add_argument(
        "--canonical", type=Path, help="Selected local RH-01 canonical candidate required for mission-scene generation."
    )
    args = parser.parse_args()
    root, server = args.root.resolve(), args.server.rstrip("/")
    config = json.loads((root / "red_horizon_assets.json").read_text())
    queue = request(f"{server}/queue")
    if queue["queue_running"] or queue["queue_pending"]:
        raise RuntimeError("ComfyUI queue is busy; wait for it to empty before starting a Red Horizon asset run.")

    brand, rover = config["brand"], config["rh01"]
    assets = root / "assets" / "red-horizon"

    def selected(variants: list[str]) -> list[str]:
        if args.variants is None:
            return variants
        if args.variants < 1:
            parser.error("--variants must be at least 1")
        return variants[: args.variants]

    if args.stage in ("all", "logo"):
        for index, variation in enumerate(selected(brand["variants"]), start=1):
            graph, output = build(
                brand["identity"],
                f"{brand['instruction']}\n\nVariation: {variation}",
                brand["style"],
                [],
                f"mars-ai-stories/red-horizon/logo/mars-horizon-circle-{index:02d}",
                seed=920400 + index,
            )
            save(
                root,
                server,
                f"logo-mars-horizon-circle-{index:02d}",
                graph,
                output,
                assets / "logo" / f"logo-mars-horizon-circle-{index:02d}.png",
            )
    if args.stage in ("all", "canonical"):
        for index, variation in enumerate(selected(rover["canonical_variants"]), start=1):
            graph, output = build(
                rover["identity"],
                f"{rover['canonical_instruction']}\n\nVariation: {variation}",
                rover["reference_style"],
                [],
                f"mars-ai-stories/red-horizon/rh01/canonical-{index:02d}",
                seed=910200 + index,
            )
            save(
                root,
                server,
                f"rh01-canonical-{index:02d}",
                graph,
                output,
                assets / "rh01" / f"canonical-{index:02d}.png",
            )
    if args.stage == "scene":
        if not args.canonical:
            parser.error("--canonical is required for mission-scene generation after human selection.")
        canonical_path = args.canonical if args.canonical.is_absolute() else root / args.canonical
        canonical_path = canonical_path.resolve()
        if not canonical_path.exists():
            raise RuntimeError(f"Selected canonical candidate is missing: {canonical_path}")
        remote_reference = upload(
            server, canonical_path.read_bytes(), "canonical.png", "mars-ai-stories/red-horizon/rh01/references"
        )
        for index, variation in enumerate(selected(rover["scene_variants"]), start=1):
            graph, output = build(
                rover["identity"],
                f"{rover['scene_instruction']}\n\nVariation: {variation}",
                rover["scene_style"],
                [remote_reference],
                f"mars-ai-stories/red-horizon/rh01/mission-field-check-{index:02d}",
                seed=910300 + index,
                scene=True,
            )
            save(
                root,
                server,
                f"rh01-mission-field-check-{index:02d}",
                graph,
                output,
                assets / "rh01" / f"mission-field-check-{index:02d}.png",
            )


if __name__ == "__main__":
    main()
