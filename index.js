const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mysql = require("mysql2");

//Import Routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

//Database connect
//mongoose.connect(process.env.DB_CONNECT, ()=> console.log('connected to database'));
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(process.env.PORT, () => console.log("Server is running"));
