
const express = require('express'); 
const route = express.Router(); 
const StudentController = require('../controllers/studentControllers'); 

route.get("/home", StudentController.homepage); 
route.get("/about", StudentController.aboutpage);  
route.get("/service", StudentController.servicepage); 
route.get("/contact", StudentController.contactpage); 

route.post("/datasave", StudentController.datasave); 

module.exports = route; 


