const newUserModel = require("../models/newUserModel")

const createUser = async function(req, res){
   let data = req.body
   let userCreated = await newUserModel.create(data)
    res.send({result: userCreated, msg: true})
} 

module.exports.createUser = createUser