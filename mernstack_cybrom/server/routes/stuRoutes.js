
const express = require('express');  
const route = express.Router(); 
const stuController = require('../controllers/stuController')

route.get('/home', stuController.homePg)
route.post('/save', stuController.savePg)
route.get('/display', stuController.displayPg)

module.exports = route; 

