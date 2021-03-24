const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mysql = require('mysql2');
const db = require('./dbconnect');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const cors = require('cors');

mongoose.connect(process.env.MONGO_CONNECT, () =>
    console.log('connected to mongo')
);
//Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

//const user = new User("fuck", "suck", "dick");

//user.save();
//Middleware
app.use(
    cors({
        exposedHeaders: ['authorization'],
    })
);
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(process.env.PORT, () => console.log('Server is running'));
