const fs = require('fs'); 

fs.rename("jeevan.txt", "jeevan.pdf", (err)=> {
    if (err) throw err; 

    console.log("renamed success...."); 
}) 

//  to change the file name or it's extension only   if it exists. 

 