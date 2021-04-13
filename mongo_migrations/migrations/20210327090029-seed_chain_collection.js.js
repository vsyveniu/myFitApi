module.exports = {
    async up(db) {
        await db.collection('chains').insertMany([
            {
                owner: 'suggestion',
                set: [
                    { daily_id: 1 },
                    { daily_id: 2 },
                    { daily_id: 3 },
                    { dayli_id: 4 },
                ],
            },
        ]);
    },

    async down(db) {
        db.collection('chain').remove({});
    },
};
