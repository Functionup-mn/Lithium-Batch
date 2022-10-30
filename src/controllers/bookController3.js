const bookModel3 = require("../models/bookModel3")
const authorModel = require("../models/authorModel")

const createBook3 = async function(req, res){
    let data = req.body
    let savedData = await bookModel3.create(data)
    res.send({result: savedData, msg: true})
}

const getBooks3Data = async function(req, res){
    let author = await authorModel.findOne({author_name: "Chetan Bhagat"})
    let authorId = author.author_id
    let bookList = await bookModel3.find({author_id: authorId})
    res.send({result: bookList, msg: true})
}

const getUpdatedBook = async function(req, res){
    let bookDetails = await bookModel3.findOneAndUpdate(
        {name: "Two states"},
        {$set: {price: 100}},
        {$new: true})
    let authorId = bookDetails.author_id
    let author = await authorModel.find({author_id: authorId})
    res.send({authorName: author.author_name, price: bookDetails.price, msg: true})
}

const getBooks = async function(req, res){
    let bookList = await bookModel3.find({price:{$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    let authorIdList = bookList.map(book => book.author_id)
    let authorList = await authorModel.find({author_id: {$in: authorIdList}})
    res.send({result:authorList, msg: true})

} 

module.exports.createBook3 = createBook3
module.exports.getBooks3Data = getBooks3Data
module.exports.getUpdatedBook = getUpdatedBook
module.exports.getBooks = getBooks
