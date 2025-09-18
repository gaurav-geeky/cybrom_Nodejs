const express = require('express'); 
const route = express.Router(); 

route.get("/home", (req, res)=> {
    res.send("<h1> welcome to home page </h1>")
})
route.get("/about", (req, res)=> {
    res.send("<h1> about my company </h1>")
})
route.get("/courses", (req, res)=> {
    res.send("<h1> our company courses !! </h1>")
})
route.get("/fees", (req, res)=> {
    res.send("<h1> Our total fees !!</h1>")
})

module.exports = route ;