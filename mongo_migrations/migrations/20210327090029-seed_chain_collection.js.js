module.exports = {
    async up(db) {
        await db.collection('chains').insertMany([
            {
                owner: 'suggestion',
                set: [
                    { daily_id: 1 },
                    { daily_id: 2 },
                ],
            },
            {
                owner: 'vsyveniu',
                set: [
                    { daily_id: 1 },
                    { daily_id: 2 },
                ],
            },
        ]);
    },

    async down(db) {
        db.collection('chain').remove({});
    },
};
