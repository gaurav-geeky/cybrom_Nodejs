const fs = require('fs'); 

fs.appendFile('shyam.txt', ' hello I am shyam younger brother of Shree Ram. __ ram lives in ayoudhya  ---', (err)=> {
    if (err) throw err; 
    console.log('so new file is created...'); 
})

// append (create) to add text 

// open also to create file  but  1st to open it. 