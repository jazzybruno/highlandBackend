const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true,
        maxlength: 10
    },

    subject: {
        type: String,
        required: true,
        maxlength: 80
    },

    message: {
        type: String,
        required: true,
        maxlength: 500
    }

})

const Contact = mongoose.model('Contact', contactSchema);

module.exports.Contact = Contact