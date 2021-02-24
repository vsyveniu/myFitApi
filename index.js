const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

//Database connect
//mongoose.connect(process.env.DB_CONNECT, ()=> console.log('connected to database'));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(process.env.PORT, () => console.log('Server is running'));