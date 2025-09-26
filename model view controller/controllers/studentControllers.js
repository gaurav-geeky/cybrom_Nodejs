

const stuModel = require("../models/studentModel");  

const homepage = (req, res)=> {
    res.render("home"); 
} 
const aboutpage = (req, res)=> {
   res.render("about"); 
} 
const servicepage = (req, res)=> {
    res.render("service");
} 
const contactpage = (req, res)=> {
    res.render("contact"); 
}  
const datasave = (req, res)=> {
    console.log(req.body); 
    res.send("okk data is saved now..");  
}  



module.exports = {
    homepage, 
    aboutpage, 
    servicepage, 
    contactpage, 
    datasave, 
}
