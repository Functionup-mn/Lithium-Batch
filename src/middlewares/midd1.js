const newUserModel = require("../models/newUserModel")
const productModel = require("../models/productModel")

const headerValidation = function(req, res, next){
    let isFreeAppUser = req.headers.isfreeappuser // isFreeAppUser write in lower case beacuse header is case sensitive
   if(!isFreeAppUser){
       return res.send({msg: "isFreeAppUser is mandatory in headers"})
   }else{
    next()
   }
}

const userAndProductValidation = async function(req, res, next){
    let order = req.body
    if(order.userId && order.productId){
    const validUserId = await newUserModel.findById(order.userId)
    const validProductId = await productModel.findById(order.productId)
    if(validUserId){
        if(validProductId){
            next()
        }else{
            return res.send({msg: "plz enter valid product id"})
        }
        next()
    }else{
        return res.send({msg: "plz enter valid user id"})
    }
    next()
}else{
    return res.send({msg: "userId and productId are mandatory"})
}
}

module.exports.headerValidation = headerValidation
module.exports.userAndProductValidation = userAndProductValidation
