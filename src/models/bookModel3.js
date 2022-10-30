const mongoose = require('mongoose')

const bookSchema3 = new mongoose.Schema({
   
    name: String,
    author_id: { 
        type: Number,
        required: true    // we are writing required here not require
    },
    price: Number,
    rating: Number

},{timestamps: true})


module.exports = mongoose.model('new3Book', bookSchema3)
