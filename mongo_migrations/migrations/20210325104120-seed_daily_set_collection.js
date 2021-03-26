module.exports = {
  async up(db) {
      await db.collection('daily').insertMany([
          {
           owner: 'suggestion',
           set: [
             {id: 1},
             {id: 2},
             {id: 3},
             {id: 4},
           ]
         }
        ]);
  },

  async down(db) {
    db.collection('daily').remove({});
  },
};
