const express = require('express'); 
const app = express(); 
const stuRoute = require("./Routes/studentRoute"); 

app.use("/student", stuRoute); 

app.listen(8000, ()=> {
    console.log("app run on port 8000!"); 
})
