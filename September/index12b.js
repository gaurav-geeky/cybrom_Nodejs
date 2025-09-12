// resolve path 

const path = require('path'); 

console.log(path.resolve('file.txt')); 


// resolve multiple segment
console.log(path.resolve("/users", "docs", "total.txt")); 
// it adds in current directory 


console.log(path.resolve("/users", "/docs", "images" , "total.txt"));  
//  it starts from  docs.  takes last one    right to left.. 


console.log(path.resolve( __dirname, "onebyone", "docs", "total.txt")); 



