const productModel = require("../models/productModel")

const createProduct = async function(req, res){
    let data = req.body
    let savedData = await productModel.create(data)
    res.send({result: savedData, msg: true})
}

module.exports.createProduct = createProduct