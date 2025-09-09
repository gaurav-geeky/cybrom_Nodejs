// uppercase , exp module in tag, fs module 

const http = require("http"); 
const uc = require("uppercase") 
const indmod = require("./Cybrom");  


http.createServer( (req, res)=> {

    res.write("<h1 style='font-size: 50px;'> HelLo wORld <br>"); 
    res.write(uc("<h3 style='color: blue; background-color: yellow;'> HelLo wORld runs only when we install uppercase use like other module it use outside which is to change. <br> ")); 
    res.write("<h1 style='font-size: 30px; color: red;  '>" + indmod.mycollege() + "</h1>"); 
    res.write(`<h1> cybrom ki fees __ ${indmod.myfees()} <br>`) 

    
    res.end("<br>now end"); 

}).listen(8200, ()=> {
    console.log("server run successfully.")
})



