const http = require("http");

http.createServer((req, res) => { 
    res.write( " <h1 style='color: blue; font-size: 60px ;' > this is our first <br>  webpage using Node js.  </h1>");
    res.end();
}).listen(3200);



