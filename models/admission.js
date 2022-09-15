const mongoose = require('mongoose')
const Schema = mongoose.Schema

const admissionSchema = new Schema({
    level:{
        type: String,
        required: true
    },
    studentYear: {
        type: String,
        required: true
    },
    studentClass:{
        type: String,
        required: true
    },
    studentPrevSchool:{
        type: String,
        required: true
    },
    studentPhoto:{
       type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    district:{
        type:String,
        required: true
    },
    sector:{
        type:String,
        required: true
    },
    cell:{
        type:String,
        required: true
    },
    village:{
        type:String,
        required: true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required: true
    },
    BirthPlace:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    disablity:{
        type:Boolean,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    sponsor:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true
    },
    insurance:{
        type:String,
        required: true
    },
    nationality:{
        type:String,
        required: true
    },
    religion:{
        type:String,
        required: true
    },
    fatherName:{
        type: String,
        required: true
    },
    fatherId:{
        type: String,
        required: true
    },
    fatherPhone:{
        type: String,
        required: true
    },
    fatherEmail:{
        type: String,
        required: true
    },
    motherName:{
        type: String,
        required: true
    },
    motherId:{
        type: String,
        required: true
    },
    motherPhone:{
        type: String,
        required: true
    },
    motherEmail:{
        type: String,
        required: true
    }
})

const Admission = mongoose.model('Admission', admissionSchema)

module.exports.Admission = Admission;