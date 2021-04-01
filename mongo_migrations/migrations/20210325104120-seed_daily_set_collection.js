module.exports = {
    async up(db) {
        await db.collection('dailies').insertMany([
            {
                owner: 'suggestion',
                type: 'power',
                id: 1,
                set: [
                    { exercise_id: 1 },
                    { exercise_id: 2 },
                    { exercise_id: 3 },
                    { exercise_id: 4 },
                ],
            },
            {
                owner: 'suggestion',
                id: 2,
                type: 'aero',
                set: [
                    { exercise_id: 1 },
                    { exercise_id: 2 },
                    { exercise_id: 3 },
                    { exercise_id: 4 },
                ],
            },
            {
                owner: 'suggestion',
                type: 'power',
                id: 3,
                set: [
                    { exercise_id: 1 },
                    { exercise_id: 2 },
                    { exercise_id: 3 },
                    { exercise_id: 4 },
                ],
            },
            {
                owner: 'suggestion',
                type: 'static',
                id: 4,
                set: [
                    { exercise_id: 1 },
                    { exercise_id: 2 },
                    { exercise_id: 3 },
                    { exercise_id: 4 },
                ],
            },
        ]);
    },

    async down(db) {
        db.collection('daily').remove({});
    },
};
