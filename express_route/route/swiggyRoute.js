const express = require('express'); 
const way = express.Router(); 

way.get('/', (req, res)=> {
    res.send("<h1> swiggy is food app you can expore different pages here. </h1>")
})

way.get('/home', (req, res)=> {
    res.send("<h1> I am food delivery app swiggy home page. </h1>")
})

way.get('/about', (req, res)=> {
    res.send("<h1> swiggy is food app to order delicious food </h1>")
})

way.get('/food', (req, res)=> {
    res.send("<h1> pizza, burger, chowmeen etc these are swiggy food </h1>")
})

way.get('/order', (req, res)=> {
    res.send("<h1> swiggy you have to first choose food to eat </h1>")
}) 

module.exports = way 

