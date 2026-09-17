/**
 * About page copy and document head for `/about/`.
 *
 * The `about` object is transcribed **verbatim** from the approved block in
 * `.agents/work/drafts/about-method.md` (section "Transcribable strings for
 * `website/src/lib/about.ts`", block sha256
 * `9ab39b70b32b2389f4aea8e53b58c59dd1fb6e695bf14c622c1b6c91606e6a62`), which
 * `.agents/work/reviews/about-method.md` names as the approved copy.
 *
 * The string values are frozen: do not reword, reorder, re-punctuate, or merge
 * a section, and do not add or drop a string. A copy change needs a writer card
 * and a new editorial verdict.
 */
export const about = {
    eyebrow: 'About',
    title: 'About Red Horizon and how it is made.',
    standfirst: 'A fictional Mars mission, published one step at a time, in the order it happens.',
    sections: [
        {
            heading: 'What this is',
            paragraphs: [
                'Red Horizon is a fictional Mars exploration programme. Its partners, its mission, and its findings are invented. The Mars it describes is real.',
                'The fiction is produced by a real project, Mars AI Simulation: an experiment in whether AI agents can research, write, design, build, and check a website as a coordinated team, with people holding the decisions. Every page here came through that process.',
            ],
        },
        {
            heading: 'How a page is made',
            paragraphs: [
                "Each page starts from an approved brief that states what may be said. Agents draft it, check every material claim against the project's reference material, review the title and description it will carry in search results, and test it against the mission's own continuity. An editorial pass follows, and then a person decides whether the page is published at all. Agents do not approve canon, and agents do not publish.",
            ],
        },
        {
            heading: 'How the record moves',
            paragraphs: [
                "The record follows the mission's own order. A decision is not described here before the part of the story it belongs to, and no page hints at what comes later. When something published turns out to be wrong, the correction is explicit and dated rather than quietly rewritten.",
                'Images and video made for the project are illustrations of the fiction. They are never presented as mission photography, and they are not evidence of anything on Mars.',
            ],
        },
        {
            heading: 'What is public today',
            paragraphs: [
                'The public record opens with the programme announcement. Ten national programme teams have agreed to build one uncrewed lander and rover together, with a mineralogy mission: to work out whether an ancient equatorial landscape once held water, and whether the conditions there could once have supported life as science understands it. The mission does not search for life, and it does not claim to have found any.',
                "The announcement also set the programme's schedule and budget frames, and the partner teams vote equally, whatever each contributes. The technical work is still ahead: what the rover carries, who builds what, and how the mission reaches Mars are not settled, and this site will say so until they are.",
            ],
        },
        {
            heading: 'What this is not',
            paragraphs: [
                'Red Horizon is not a real space programme, agency, or launch. It is not affiliated with or endorsed by any real space agency, and its partner teams are fictional national teams, not real institutions. Real places and published science are used to keep the fiction technically grounded, and using them implies no participation or approval.',
            ],
        },
        {
            heading: 'Where to start',
            paragraphs: [
                'The home page carries the current state of the mission and the latest updates. The newsroom collects everything published so far.',
            ],
        },
    ],
    links: [
        { label: 'home page', href: '/' },
        { label: 'newsroom', href: '/news/' },
    ],
} as const;

/**
 * Document head for `/about/`: the SEO package's recommended pair (adopted by
 * the editorial verdict). Neither string is visible copy, and neither carries a
 * date, a figure, an instrument, a vehicle, or a provider.
 */
export const aboutMetadata = {
    title: 'About Red Horizon | How a fictional Mars mission is made',
    description:
        'What Red Horizon is: a fictional Mars mission made by Mars AI Simulation. How a page is written, checked, and released, and what is public today.',
} as const;

/** One run of a paragraph: plain text, or one of the copy's internal links. */
export type AboutInline = { text: string; } | { label: string; href: string; };

/**
 * Split one paragraph into plain-text runs and the copy's internal links.
 *
 * The draft places both links **inside** the last paragraph ("home page",
 * "newsroom"), so they render as anchors around those words and never as a
 * second link list under a paragraph that already names both. A label that does
 * not occur in the paragraph is ignored.
 */
export function inlineLinks(
    paragraph: string,
    links: readonly { label: string; href: string; }[] = about.links,
): AboutInline[] {
    let parts: AboutInline[] = [{ text: paragraph }];

    for (const link of links) {
        const next: AboutInline[] = [];
        for (const part of parts) {
            if (!('text' in part)) {
                next.push(part);
                continue;
            }
            const at = part.text.indexOf(link.label);
            if (at === -1) {
                next.push(part);
                continue;
            }
            const before = part.text.slice(0, at);
            const after = part.text.slice(at + link.label.length);
            if (before.length > 0) next.push({ text: before });
            next.push({ label: link.label, href: link.href });
            if (after.length > 0) next.push({ text: after });
        }
        parts = next;
    }

    return parts;
}
