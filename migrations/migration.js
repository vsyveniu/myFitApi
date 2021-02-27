const mysql = require("mysql2");
const dotenv = require("dotenv");
const migration = require("mysql-migrations");

dotenv.config();

/* const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
}); */

const connection = mysql.createPool({
  host: "192.168.99.102",
  port: "3306",
  user: "vsyveniu",
  password: "42424242",
  database: "myFit",
  connectionLimit: 10,
});

migration.init(connection, __dirname, () => {
  console.log("migrations finished");
});
