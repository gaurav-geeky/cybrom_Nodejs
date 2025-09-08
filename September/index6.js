const http = require("http");  

http.createServer( (req, res)=> {
    res.write( " <h1> Hello this is our second class of Node js <h1> <br> this is line after break tag." ); 
    res.end(); 
}).listen(7000, ()=> { console.log("server port 7000 successful")}); 





