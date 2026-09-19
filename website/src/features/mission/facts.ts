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
        "A clear public record of a fictional Mars mission, from early programme planning through surface operations to the completion of the calibrated science archive and final engineering report — closing the mission's public record.",
};

export const missionFacts: readonly MissionFact[] = [
    { label: 'Name', value: 'Red Horizon' },
    { label: 'Current state', value: 'Calibrated science archive and final engineering report completed' },
    { label: 'Launch date', value: '17 Feb 2031' },
    { label: 'Landing date', value: '16 Sep 2031' },
    {
        label: 'Objective',
        value: 'Map local terrain, examine rocks in context, and test careful remote operations on Mars.',
        wide: true,
    },
];
