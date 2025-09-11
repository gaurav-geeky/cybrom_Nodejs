const fs = require('fs'); 

fs.unlink('raj.txt', (err)=> {
    if (err) throw err; 
    console.log( "file deleted..."); 
}) 


//  delete file if it is  or  err.