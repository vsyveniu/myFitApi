module.exports = {
  async up(db) {
    await db.createCollection('chains', {});
  },

  async down(db) {
    await db.collection('chains').drop();
  }
};
