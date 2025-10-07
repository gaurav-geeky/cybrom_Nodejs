const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoute = require('./route/studentRoute');
const bodyparser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/studentData").then(() => {
    console.log("db connected successfully....");
})

// Configure body-parser middleware
app.use(bodyparser.json()); // To parse JSON-encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.set("view engine", 'ejs')  // to use ejs
app.use("/student", studentRoute);

app.listen(8000, () => {
    console.log("our server of controller runs at 8000.");
})

// local host is alphabetic work so we have to convet it  127.0.0.1

