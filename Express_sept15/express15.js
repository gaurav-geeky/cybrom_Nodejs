
const express = require('express') 
const app = express(); 

app.get('/', (req, res)=> {
    res.send("<h1> Welcome to my Website. </h1>")
})

app.get('/home', (req, res)=> {
    res.send("<h2> Welcome to Home page. </h2>")
})

app.get('/images/photo', (req, res)=> {
    res.send("<h3> Welcome to my Photo Gallery. </h3>")
})

app.get('/address/contact', (req, res)=> {
    res.send("<h1> Welcome to Contact us page. </h1>")
})

app.listen(7000, ()=> {
    console.log("Our server running port 7000"); 
}) 

