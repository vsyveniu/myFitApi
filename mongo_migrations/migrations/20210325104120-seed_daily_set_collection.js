module.exports = {
  async up(db) {
      await db.collection('daily').insertMany([
          {
           owner: 'suggestion',
           set:{
             1: 1,
             2: 2,
             3: 3,
             4: 4,
           }
         }
        ]);
  },

  async down(db) {
    db.collection('daily').remove({});
  },
};
