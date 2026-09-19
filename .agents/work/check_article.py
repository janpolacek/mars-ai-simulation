import yaml, sys

with open("website/news/006-cruise-first-correction.mdx") as f:
    content = f.read()

frontmatter = yaml.safe_load(content.split("---")[1])

title = frontmatter["title"]
print(f'Title: "{title}" ({len(title)} chars) - {"OK" if len(title) <= 60 else "TOO LONG"}')

summary = frontmatter["summary"]
print(f'Summary: "{summary}" ({len(summary)} chars) - {"OK" if len(summary) <= 155 else "TOO LONG"}')

print(f"simulatedDate present: {'simulatedDate' in frontmatter}")
print(f"publication: {frontmatter['publication']}")
print(f"media present: {'media' in frontmatter}")

body = content.split("---")[2]

forbidden = [
    "210.7",
    "delta-v",
    "burn time",
    "trajectory parameters",
    "landing ellipse",
    "traverse",
    "sample",
    "egress",
    "16 September",
    "September 2031",
    "transfer",
]
for term in forbidden:
    if term.lower() in body.lower():
        print(f'FORBIDDEN TERM FOUND: "{term}"')

real_insts = ["NASA", "JPL", "ESA", "SpaceX", "Blue Origin"]
for inst in real_insts:
    if inst in body:
        print(f'REAL INSTITUTION FOUND: "{inst}"')

later_steps = [
    "step 007",
    "step 008",
    "step 009",
    "step 010",
    "step 011",
    "atmospheric entry",
    "surface operations",
    "rover condition",
]
for step in later_steps:
    if step.lower() in body.lower():
        print(f'LATER-STEP TERM FOUND: "{step}"')

# Check for markdown links
import re

links = re.findall(r"\[.*?\]\((.*?)\)", body)
print(f"\nInternal links: {links}")

print("\n--- All checks complete ---")
