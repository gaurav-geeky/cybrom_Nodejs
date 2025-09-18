const express = require('express'); 
const route = express.Router(); 

const TeacherController = require('../controllers/teacherControllers'); 

route.get("/home", TeacherController.homepage); 

route.get("/about", TeacherController.aboutpage);  

route.get("/service", TeacherController.servicepage); 

route.get("/contact", TeacherController.contactpage); 


module.exports = route; 


