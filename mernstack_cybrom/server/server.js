const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');  
const stuRoute = require('./routes/stuRoutes'); 
const cors = require('cors');  

const PORT = 9500; 

mongoose.connect("mongodb://127.0.0.1:27017/StuDatafromReact").then( ()=> {
    console.log("DB Mongoose connected successfully.."); 
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); 
 
app.use("/", stuRoute);

app.listen(PORT, () => {
    console.log(`Server running at  port.. ${PORT}`);
}) 
