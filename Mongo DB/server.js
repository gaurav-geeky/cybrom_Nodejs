const express = require('express'); 
const app = express(); 
const stuRoute = require('./routes/stuRoute'); 
const mongoose = require('mongoose'); 
const bodyparser = require('body-parser'); 

mongoose.connect("mongodb://127.0.0.1:27017/studataCrud").then(()=> {
    console.log("DB connected successfully....."); 
})

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json()) 

app.set("view engine", "ejs"); 
app.use("/", stuRoute); 

app.listen(9500, ()=> {
    console.log("Our server running at 9500 port."); 
})
