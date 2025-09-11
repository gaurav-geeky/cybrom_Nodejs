let newfile = require('fs');  

newfile.open( "ranu.txt", "w", (err, file)=> {
    if (err) throw err; 

    console.log("new file created.")
} )

// to open file 
// append   adds text 

//  write file   create a new file if it is not
//   or replace that existing file 