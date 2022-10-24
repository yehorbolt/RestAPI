
// import
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// body parser
app.use(bodyParser.json())

// Import routes
const usersRoute = require('./routes/users.router')
const mainPageRoute = require('./routes/mainPage.router')

// Use imported routes
app.use('/users', usersRoute)

// Main page
app.use('/',mainPageRoute)

// Connect to Cloud DB
mongoose.connect('Use your url')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error message: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Used port
app.listen(3000)