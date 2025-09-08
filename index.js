const http = require("http"); 

http.createServer((req, res) => {
    res.write( "This is our first </br> Node js class"); 
    
    res.end("  the servers is end!"); 
}).listen(8000); 