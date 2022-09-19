const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const statsSchema = new Schema({
    teachers : {
        type: Number,
        required: true
    },
    graduates : {
        type: Number,
        required: true
    },
    buildings : {
        type: Number,
        required: true
    },
    OfficeLocation : {
        type: Number,
        required: true
    },
    students:{
        type: Number,
        required: true
    }
})

const Stats = mongoose.model('Statistics' , statsSchema)

module.exports.Stats = Stats