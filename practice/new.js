let fs = require('fs'); 

fs.writeFile("new.txt", "I am a new text.", (err)=> {
    if (err) throw err; 
    console.log("new file created"); 
})