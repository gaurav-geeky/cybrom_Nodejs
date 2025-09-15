//  parse method : gives us whole path info with each key object form 
// mainly  start  &  end 

const path = require('path'); 

const pathname = path.parse("/drive A/Rashan/list/sugar.txt"); 
console.log("pathname parse : " ,pathname); 
console.log("base : ", pathname.base); 

console.log(" "); 

