const path = require('path');  

console.log(__dirname);  // gives directory name only. no need path

console.log(__filename);  // gives file name only no need path. 


const joindir = path.join(__dirname, "new.txt"); 
console.log(joindir);  

const newjoin = path.join(__dirname, "gaurav.txt"); 
console.log(newjoin);

const mypath = path.join(__dirname, "photos", "uploads", "gaurav.txt"); 
console.log(mypath); 


const path1 = path.dirname(__filename); 
console.log(path1); 




// ext name require path 

const myext1 = path.extname("raj.pdf"); 
console.log(myext1); 

const myext2 = path.extname("raj.md"); 
console.log(myext2); 

const myext3 = path.extname("raj"); 
console.log(myext3); 

const myext4 = path.extname("raj.txt.md"); 
console.log(myext4); 



