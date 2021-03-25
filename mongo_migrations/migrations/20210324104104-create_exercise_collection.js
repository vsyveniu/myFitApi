module.exports = {
  async up(db) {
    await db.createCollection('exercises', {});
  },

  async down(db) {
    await db.collection('exercises').drop();
  }
};
