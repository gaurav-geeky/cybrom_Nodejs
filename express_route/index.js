const express = require('express'); 
const app = express();  
const port = 4567; 
const stuRoute = require('./route/studentRoute');  
const empRoute = require('./route/employRoute'); 
const swiggyRoute = require('./route/swiggyRoute'); 

app.use("/student", stuRoute); 
app.use('/employee', empRoute) 
app.use("/swiggy", swiggyRoute)

app.listen(port, ()=> {
    console.log(`our port is running over : ${port}`)
})

 