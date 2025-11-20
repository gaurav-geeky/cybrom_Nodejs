
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../Cloudinary"); 
const multiModel = require("../models/Multermodel");
//

///  multer file upload multiple 

// Set up Cloudinary storage for multer 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "myMulti_images", // Cloudinary folder name
        format: async (req, file) => "jpg", // convert to JPG
        public_id: (req, file) => Date.now() + "-" + file.originalname,
    },
});

const upload = multer({ storage: storage }).array('imagefile', 10);






// MultipleFile in cloudanary,  text will be in DB 

const MultipleFile = (req, res) => {

    upload(req, res, async (err) => {

        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        console.log(req.body); 
    });
};



module.exports = {

    MultipleFile,

}
