
const http = require('http'); 
const fs = require('fs');  

http.createServer((req, res)=> {

    res.write("<h1>  Hey this is my first text in node js with fs module....</h1>")

    fs.readFile( 'raj.txt', (err, data) => {
        if(err) throw err; 
        res.write(data); 
        res.end(); 
    })
}).listen(8888, ()=> console.log("our server ran at 8888"))
