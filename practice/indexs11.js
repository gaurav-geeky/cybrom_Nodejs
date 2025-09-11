let http = require('http');
let fs = require('fs');


http.createServer((req, res) => {

    res.write("<h1> this is our server and we are writing here file system fs module method appendfile,  open, writeFile methods </h1>")

    fs.readFile('gaurav.txt', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
        // file should be there to use. 
    })
}).listen(3400, () => console.log("req success....!"))

