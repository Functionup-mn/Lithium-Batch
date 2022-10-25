const bookModel = require('../models/bookModel')

const createBook = async function(req, res){
    let data = req.body
    let result = await bookModel.create(data)
    res.send({msg: result, status: true})
}

const getBookData = async function(req,res){
    let allBooks = await bookModel.find()
    res.send({msg: allBooks, status:true})
}

module.exports.createBook = createBook   // you can write anything at export.creatingBook(like that), 
module.exports.getBookData = getBookData