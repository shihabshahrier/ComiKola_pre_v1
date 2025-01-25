const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const authRoute = require('./routes/auth.route');
const comicRoute = require('./routes/comic.route');
const userRoute = require('./routes/user.route');
const cookieParser = require('cookie-parser');

db.connect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/user', authRoute);
app.use('/api/comic', comicRoute);
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;