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
const chainRoute = require('./routes/chain');
const dayRoute = require('./routes/day');

dotenv.config();

app.use(
    cors({
        exposedHeaders: ['authtoken'],
    })
);
app.options('*', cors());
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/chain', chainRoute);
app.use('/api/posts', postsRoute);
app.use('/api/day', dayRoute);

app.listen(process.env.PORT, () => console.log('Server is running'));
