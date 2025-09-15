 // path  basenam

const path = require('path'); 

const bsname = path.basename("/users/gallery/images/river.jpg"); 
console.log( "basename : ",bsname); 

const bsnameext = path.basename("/users/gallery/images/river.jpg", ".jpg"); 
console.log( "basename ext : ",bsnameext); 
console.log(" "); 

//  returns the last portion of a path.

