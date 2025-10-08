const stuModel = require('../models/stuModel');

const homePg = (req, res) => {
    res.send("hello node")
}

const savePg = async (req, res) => {
    console.log(req.body);
    const { name, city, rollno, fees } = req.body
    const stu = await stuModel.create({
        name: name,
        rollno: rollno,
        city: city,
        fees: fees,
    });
    res.send("Data saved successfully...");
}

const displayPg = async (req, res) => {
    const myData = await stuModel.find();
    res.send(myData);
}

module.exports = {
    homePg,
    savePg,
    displayPg,
}

