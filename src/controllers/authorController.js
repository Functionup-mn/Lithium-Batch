const authorModel = require("../models/authorModel")

const createAuthorDetails = async function(req, res){
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({result: savedData, msg: true})
}

module.exports.createAuthorDetails = createAuthorDetails