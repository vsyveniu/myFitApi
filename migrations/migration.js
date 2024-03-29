const mysql = require("mysql2");
const dotenv = require("dotenv");
const migration = require("mysql-migrations");

dotenv.config({ path: "../.env" });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

migration.init(connection, __dirname, () => {
  console.log("migrations finished");
});
