let http = require('http');
let fs = require('fs');


fs.appendFile('appended.txt', ">> hello I am new file appended in Node. with append method every time when terminal runs new whole text adds further ok.       ", (err) => {
    if (err) throw err;
    console.log("file is appended");
})
// create new file and write text,  each time run  new text adds further


fs.open("kaju.txt", 'w', (err, file) => {
    if (err) throw err;
    console.log("new file created with oPEn method.")
})
// if file then open to write  OR   create new


fs.writeFile("writefileone.txt", "hello I am write file it create new file  OR    replace old one.", (err)=> {
    if (err) throw err; 
    console.log("write file sucess"); 
})
// create new  OR   replace old 1


fs.unlink("honey.pdf", (err)=> {
    if (err) throw err; 
    console.log("file is deleted honey.pdf!"); 
})
// to delete file


fs.rename( "sugar.txt", "honeyrename.txt" ,(err)=> {
    if(err) throw err; 
    console.log("rename success..."); 
})
// to rename a file   OR   it's extension. 



