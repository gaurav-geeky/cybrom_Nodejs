//  join method  concate things

const path = require('path'); 

const joindir = path.join(__dirname, "pathfile.txt"); 
console.log("joindir : ",joindir); 

const multijoin = path.join(__dirname, "photos", "lake.jpg"); 
console.log("multijoin : ", multijoin); 

console.log(" "); 
