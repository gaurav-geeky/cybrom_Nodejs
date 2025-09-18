const express = require('express'); 
const app = express(); 
const teacherRoute = require('./route/teacherRoute'); 

app.set("view engine", 'ejs')  // to use ejs

app.use("/teacher", teacherRoute); 

app.listen(8000, ()=> {
    console.log("our server of controller runs at 8000."); 
})

