const newAuthorModel = require("../models/newAuthorModel")
const newBookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")

const createBook = async function (req, res) {
    let newBook = req.body
    if(newBook.author && newBook.publisher){
        let validAuthor = await newAuthorModel.findById(newBook.author)
        let validPublisher = await newPublisherModel.findById(newBook.publisher)
       if(validAuthor){
        if(validPublisher){
    let newBookCreated = await newBookModel.create(newBook)
    res.send({ result: newBookCreated, msg: true })
    }else{
        return res.send({msg: "plz enter a valid publisherId"})
    }
}else{
    return res.send({msg: "plz enter a valid authorId"})
}
}else{
    return res.send({msg:"author and publisher is mandatory"})
}
}

const getBookWithAuthorAndPublisherDetails = async function(req, res){
    let saveData = await newBookModel.find().populate(['author', 'publisher'])
    res.send({result: saveData, msg: true})
}

const updateBooks = async function(req, res){
    let updatData = await newPublisherModel.updateMany(
        {name: 'Penguin'},
        {$set: {isHardCover: true}},
        {new: true}
    )
    res.send({result: updatData, msg: true})
}

module.exports.createBook = createBook
module.exports.getBookWithAuthorAndPublisherDetails = getBookWithAuthorAndPublisherDetails
module.exports.updateBooks = updateBooks