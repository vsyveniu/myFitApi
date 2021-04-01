module.exports = {
  async up(db) {
    await db.createCollection('dailies', {});
  },

  async down(db) {
    await db.collection('dailies').drop();
  }
};
