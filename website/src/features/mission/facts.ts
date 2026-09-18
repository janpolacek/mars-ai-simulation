/**
 * Mission at-a-glance facts.
 *
 * Every value is wording the Preparing homepage already publishes. Changing one
 * is an editorial change, not a code change.
 */
export interface MissionFact {
    label: string;
    value: string;
    /** Renders across the full width of the fact grid. */
    wide?: boolean;
}

export const missionIntro = {
    eyebrow: 'Mission brief',
    title: 'The programme at a glance',
    description:
        'A clear public record of a fictional Mars mission, from early programme planning to the work of its first surface vehicle.',
};

export const missionFacts: readonly MissionFact[] = [
    { label: 'Name', value: 'Red Horizon' },
    { label: 'Current state', value: 'Mission architecture' },
    { label: 'Launch date', value: 'To be announced' },
    { label: 'Landing date', value: 'To be announced' },
    {
        label: 'Objective',
        value: 'Map local terrain, examine rocks in context, and test careful remote operations on Mars.',
        wide: true,
    },
];
