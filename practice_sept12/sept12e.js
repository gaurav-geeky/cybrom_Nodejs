//  extension method :  find out extension of file

const path = require('path'); 

const ext1 = path.extname("study.pdf")
console.log("ext1 : ", ext1); 

const ext2 = path.extname("study.md")
console.log("ext2 : ", ext2); 

const ext3 = path.extname("study")
console.log("ext3 without : ", ext3); 

const ext4 = path.extname("study.pdf.txt")
console.log("ext4  2 mix : ", ext4); 

console.log(" "); 

