const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    creator: { type: String, required:true },
    title: { type: String, required:true },
    file: { type: String, required:true },
    description:String,
    dateOn:{
        type: Date,
        default: Date.now(),
        required:true
    }
})

const cardModel = mongoose.model('cardModel', cardSchema)

module.exports = cardModel