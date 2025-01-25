const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const userRoute = require('./routes/auth.route');
const comicRoute = require('./routes/comic.route');
const cookieParser = require('cookie-parser');

db.connect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/user', userRoute);
app.use('/api/comic', comicRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;