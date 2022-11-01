const authorModel = require("../models/newAuthorModel")

const createAuthor = async function (req, res) {
    let newAuthor = req.body
    let newAuthorCreated = await authorModel.create(newAuthor)
    res.send({ result: newAuthorCreated, msg: true })
}

module.exports.createAuthor = createAuthor