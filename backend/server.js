const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const boxesRouter = require('./routes/boxes');
const usersRouter = require('./routes/users');

app.use('/boxes', boxesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});