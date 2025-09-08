var http = require("http"); 
const myClass = require("./Cybrom")

http.createServer( (req, res)=> {

    res.write("<h1 style='color: red; '>  this is our second programme of node js </h1>")
    res.write(myClass.mycollege());  
    res.write(" <br> "); 
    res.write( myClass.myfees() + "<br>"); 
    res.write( ` cybrom ki fees hai   ${myClass.myfees()}  <br>  `)
    
    res.end(" server end"); 

}).listen(4000, ()=> { console.log("here listen at 4000..."); })







