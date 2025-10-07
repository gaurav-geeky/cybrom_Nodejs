const stuModel = require('../models/stuModel'); 

const homePg = (req, res)=> {
    res.send("hello node")
}

const savePg = (req, res)=> {
    console.log(req.body); 
    res.send("okkk"); 
}

module.exports = {
    homePg, 
    savePg
} 

