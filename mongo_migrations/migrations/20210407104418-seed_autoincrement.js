module.exports = {
    async up(db) {
        await db.collection('counters').insertMany([
            {
                _id: 'daily_id',
                seq: 4,
            },
            {
                _id: 'exercise_id',
                seq: 4,
            },
        ]);
    },

    async down(db) {
        db.collection('counters').remove({});
    },
};
