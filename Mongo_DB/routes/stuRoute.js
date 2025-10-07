
const express = require('express'); 
const route = express.Router(); 

const stuController = require('../controllers/stuController');      

route.get("/", stuController.homePage); 
route.get("/insert", stuController.insertPage); 
route.post("/data", stuController.dataPage)


route.get("/display", stuController.displayPage);  

route.get("/search", stuController.searchPage);
route.post("/search", stuController.stuSearch);

route.get("/update", stuController.updatePage);
route.get("/datadelete", stuController.dataDelete); 

route.get("/dataedit", stuController.dataEdit);  
route.post("/editsave", stuController.editSave); 

module.exports = route;  


