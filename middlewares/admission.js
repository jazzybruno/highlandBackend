const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/admission');
    },

    filename: (req, file, cb) => {
        console.log(file);
        cb( null , Date.now() + path.extname(file.originalname));
    }
})


const student = multer({storage: storage});  

module.exports = student;