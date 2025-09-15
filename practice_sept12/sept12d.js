//  resolve method 

const path = require('path'); 

console.log(path.resolve( 'oneway.txt')); 

console.log("resolve : " , path.resolve("user", "photos", "building.pdf")); 
// adds in directory  Automtically. 

console.log("resolve 1 : " , path.resolve("/app", "folder", "game.md"));
// make new path start from app  in  C drive

console.log("resolve 2 : " , path.resolve( "/MP","/bhopal", "tulsi nagar", "colony.md")); 
//  starts from  last  frwrd  / 

console.log("resolve wih dirname : " , path.resolve( __dirname, "onebyone", "docs", "total.txt")); 

console.log(" "); 


