module.exports = {
  up:
    "CREATE TABLE users ( user_id INT NOT NULL AUTO_INCREMENT, UNIQUE KEY user_id (user_id), name CHAR(42) NOT NULL UNIQUE, email CHAR(42) NOT NULL, password VARCHAR(255) NOT NULL)",
  down: "DROP TABLE users",
};
