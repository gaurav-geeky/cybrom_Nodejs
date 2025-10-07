const express = require('express');  
const route = express.Router(); 
const stuController = require('../controllers/stuController')

route.get('/home', stuController.homePg)
route.post('/save', stuController.savePg)

module.exports = route; 


