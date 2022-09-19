const mongoose = require('mongoose')
const schema = mongoose.Schema

const achievementSchema = new schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const Achievement = mongoose.model('Achievement' , achievementSchema)

module.exports.Achievement = Achievement