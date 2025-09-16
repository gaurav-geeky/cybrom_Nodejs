const express = require('express'); 
const route = express.Router(); 

route.get("/home", (req, res)=> {
    res.send("<h1> this is our students home page </h1>")
})

route.get("/class", (req, res)=> {
    res.send("<h1> student classes available nursery to 12th  </h1>")
})

route.get("/subject", (req, res)=> {
    res.send("<h1> various subjects of student english, math, computer etc. </h1>")
})

route.get("/grade", (req, res)=> {
    res.send("<h1> our student grade % is above 90%. </h1>")
})

module.exports = route 


