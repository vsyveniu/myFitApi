module.exports = {
    async up(db, client) {
        await db.collection('exercises').insertMany([
            {
                id: 1,
                type: 'power',
                title: 'bench press',
                structure: 'pyramid',
                description:
                    'squeezing a bunch of shit lying on a bench and whimpering shamefully',
                icon: 'somewhere',
                owner: 'suggestion',
                sets: {
                    1: {
                        reps: 30,
                        weight: 20,
                        action: 60,
                        rest: 60,
                    },
                    2: {
                        reps: 20,
                        weight: 30,
                        action: 60,
                        rest: 60,
                    },
                    3: {
                        reps: 12,
                        weight: 50,
                        action: 60,
                        rest: 120,
                    },
                    4: {
                        reps: 6,
                        weight: 60,
                        action: 60,
                        rest: 180,
                    },
                    5: {
                        reps: 4,
                        weight: 65,
                        action: 60,
                        rest: 180,
                    },
                },
                chronic: {
                    date: '20.03.2021:62',
                },
                total_weight: 0,
            },
            {
                id: 2,
                type: 'power',
                title: 'deadlift',
                structure: 'pyramid',
                description:
                    "daym boy, you better pray to devil, cause even god can't keep his shit in when lift this stuff",
                icon: 'somewhere',
                owner: 'suggestion',
                sets: {
                    1: {
                        reps: 20,
                        weight: 30,
                        action: 60,
                        rest: 60,
                    },
                    2: {
                        reps: 15,
                        weight: 50,
                        action: 60,
                        rest: 60,
                    },
                    3: {
                        reps: 12,
                        weight: 60,
                        action: 60,
                        rest: 120,
                    },
                    4: {
                        reps: 6,
                        weight: 80,
                        action: 60,
                        rest: 180,
                    },
                },
                chronic: {
                    date: '20.03.2021:62',
                },
                total_weight: 0,
            },
            {
                id: 3,
                type: 'aero',
                title: 'star jump',
                structure: '45_sec_action',
                description:
                    'daym boy this shit is pulling my fucking heart off the body trough a damn arse',
                icon: 'somewhere',
                owner: 'suggestion',
                sets: {
                    1: {
                        action: 45,
                        rest: 15,
                    },
                },
                chronic: {
                    date: '20.03.2021:0',
                },
                total_weight: 0,
            },
            {
                id: 4,
                type: 'cycling',
                title: 'katun',
                structure: 'ride',
                description: 'cycle this boy GT ogo horoshiy',
                icon: 'somewhere',
                owner: 'suggestion',
                sets: {
                    1: {
                        distance: 150,
                    },
                },
                chronic: {
                    date: '20.03.2021:132',
                },
                total_weight: 0,
            },
        ]);
    },

    async down(db, client) {
        db.collection('exercises').remove({});
    },
};
