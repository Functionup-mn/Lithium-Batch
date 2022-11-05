const orderModel = require("../models/orderModel")

const createOrder = async function(req, res){
    let data = req.body
    let savedData = await orderModel.create(data)
    res.send({result: savedData, msg: true})
}

module.exports.createOrder = createOrder