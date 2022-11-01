const publisherModel = require("../models/newPublisherModel")

const createPublisher = async function (req, res) {
    let newAuthor = req.body
    let newAuthorCreated = await publisherModel.create(newAuthor)
    res.send({ result: newAuthorCreated, msg: true })
}

module.exports.createPublisher = createPublisher