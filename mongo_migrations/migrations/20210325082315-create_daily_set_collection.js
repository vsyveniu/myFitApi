module.exports = {
  async up(db) {
    await db.createCollection('daily', {});
  },

  async down(db) {
    await db.collection('daily').drop();
  }
};
