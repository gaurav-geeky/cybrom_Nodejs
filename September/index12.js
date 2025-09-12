const path = require('path');  

const BSname = path.basename("/users/images/photo/index.php");  
console.log(BSname); 

const myName = path.basename("/users/images/photo/index.php", ".php");   
console.log(myName);  

//  basename get the file name  index.js 

// we can give "extension" also to   find out only file name  index



