
const express = require('express');  
const app = express(); 

app.get("/home", (req, res)=> {
    res.send("<h1> Hello, I am home page and we are using express framework to create server. </h1> <h3>  here no need to write create server </h3>")
}) 

app.get("/about", (req,res)=> {
    res.send("<h3> About page. this is our node js class which is a total MERN class here we will learn about node, express, and mongo DB. </h3>")
}) 

app.get("/contact", (req, res)=> {
    res.send("<h4> contact page. To learn node js you can contact cybrom tch pvt ltd. MP nagar zone - 1 Bhopal </h4>")
})

app.listen(8800, ()=> {
    console.log("Server is running over  8800")
}) 

