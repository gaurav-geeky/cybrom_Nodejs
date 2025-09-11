
const fs = require('fs'); 

fs.writeFile("monu.pdf", "hello I am a monu text in pdf", (err) => {
    if (err) throw err; 
    console.log("file created..."); 
})


// write file no internal change only created new  or  replace old.   

// update   rite file,  append. 