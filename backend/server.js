const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
var fs = require('fs')
var morgan = require('morgan')
require('dotenv').config();

var logFile = fs.createWriteStream('./myLogFile.log', {flags: 'a'}); 
const app = express();
app.use(express.json());
app.use(morgan('combined', {stream: logFile}))
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true });
const connection = mongoose.connection;
connection.once('open', () => { 
	console.log("MongoDB connection stablished");
});

const rankRouter = require('./routes/rank');
const rankhistoryRouter = require('./routes/rankhistory');
const matchhistoryRouter = require('./routes/matchhistory');

app.use('/rank', rankRouter);
app.use('/rankhistory', rankhistoryRouter);
app.use('/matchhistory', matchhistoryRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});