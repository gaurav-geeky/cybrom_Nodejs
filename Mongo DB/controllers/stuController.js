
const stuModel = require("../models/stuModel");
const { search } = require("../routes/stuRoute");

const homePage = (req, res) => {
    res.render("home");
}
const insertPage = (req, res) => {
    res.render("insert");
}

// here when we fill form then data will be saved in mongo DB. using destructure then render on insert page. 

const dataPage = (req, res) => {
    // res.send("data is saved now...."); 
    console.log(req.body);

    const { rn, nm, city, fs } = req.body;
    stuModel.create({
        rollno: rn,
        name: nm,
        city: city,
        fees: fs,
    })
    res.render("home");
}

const displayPage = async (req, res) => {
    const Student = await stuModel.find();
    res.render("display", { Stu: Student });
}

const searchPage = (req, res) => {
    res.render("search", { Stu: [] });
}

const stuSearch = async (req, res) => {
    const { rno } = req.body;
    const Student = await stuModel.find({ rollno: rno });
    console.log(Student);
    res.render("search", { Stu: Student });
}


const updatePage = async (req, res) => {
    const Student = await stuModel.find();  // find data
    res.render("update", { Stu: Student }); // get all data here
}
const dataDelete = async (req, res) => {
    const { id } = req.query;             // now let id 
    await stuModel.findByIdAndDelete(id);   // delete id 

    const Student = await stuModel.find();  // find remaining data
    res.render("update", { Stu: Student }); // to stay on same pg with rest data..
}


const dataEdit = async (req, res) => {
    const { id } = req.query
    const stuData = await stuModel.findById(id);
    res.render("edit", { Data: stuData });
}
const editSave = async (req, res) => {
    const { id, rollno, name, city, fees } = req.body
    await stuModel.findByIdAndUpdate(id, {
        rollno: rollno,
        name: name,
        city: city,
        fees: fees,
    });
    const Student = await stuModel.find();
    res.render("update", { Stu: Student });  
}

module.exports = {
    homePage,
    insertPage,
    dataPage,
    displayPage,
    searchPage,
    stuSearch,
    updatePage,
    dataDelete,
    dataEdit,
    editSave
}


// await stuModel.find();        DISPLAY PAGE

// This uses Mongoose to fetch all student documents from your MongoDB collection 

/* 

displayPage: shows all student records.

stuSearch: shows specific student(s) based on roll number entered in the search form. 

*/