/**
 * Copy for the error route (`/404`).
 *
 * Transcribed **verbatim** from the approved block in
 * `.agents/work/drafts/about-method.md` (section "Optional `/404` copy", block
 * sha256 `15bd4ce3e8ac4b41f4e1c99cfb39e23a67d76f5fae4111f2448cf4aa0f320a61`),
 * which `.agents/work/reviews/about-method.md` approves **conditionally**: the
 * route may be built only together with the `BaseLayout` head opt-out that
 * suppresses its canonical and marks it `robots: noindex`. The copy carries no
 * mission fact of any kind.
 *
 * The string values are frozen: a change needs a writer card and a new
 * editorial verdict.
 */
export const notFound = {
    title: 'Page not found | Red Horizon',
    heading: 'This page isn\u2019t here.',
    paragraphs: [
        'The address may be mistyped, or the link may be out of date. The home page carries the current state of the mission, and the newsroom lists everything published so far.',
    ],
    links: [
        { label: 'Home page', href: '/' },
        { label: 'Newsroom', href: '/news/' },
    ],
} as const;
