const express = require('express'); 
const app = express();  
const port = 9000; 
const stuRoute = require('./route/studentRoute');  

app.use("/student", stuRoute); 

app.listen(port, ()=> {
    console.log(`our port is running over : ${port}`)
})

