const jwt = require("jsonwebtoken")
const newUserModel = require("../models/newUserModel")

const createNewUser = async function(req, res){
   let data = req.body
   let savedData = await newUserModel.create(data)
   res.send({result: savedData, msg: true})
}

const loginNewUser = async function(req, res){
   let userName = req.body.emailId
   let password = req.body.password

   let newUser = await newUserModel.findOne({emailId: userName, password: password})
   if(!newUser){
    return res.send({msg: "emailId or password is not correct"})
   }

   let token = jwt.sign(
    {
        fullName: "Mohammad Nadeem",
        batch: "Lithium",
        organization: "functionUp"
    },
    "functionUp-lithium-very-very-secret-key"
   )

   res.setHeader("x-auth-token", token)
   res.send({msg: true, result: token})
}

const getNewUserDetail = async function(req, res){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send({msg: "token must be present in the req heahers"})
    }

    console.log(token)

    let decodedToken = jwt.verify(token, "functionUp-lithium-very-very-secret-key")
    if(!decodedToken){
        return res.send({msg: "token is invalid"})
    }

    let userId = req.params.userId
    let userDetails = await newUserModel.findById(userId)
    if(!userDetails){
        return res.send({msg: "no such user exist"})
    }
    res.send({msg: true, result: userDetails})
}

// const updatedUser = async function(req, res){
//     let token = req.headers["x-auth-token"]
//     if(!token){
//         return res.send({msg: "token must be present in the headers"})
//     }

//     let userId = req.params.userId
//     let user = await newUserModel.findById(userId)
//     if(!user){
//         return res.send({msg: "user is invalid"})

//     }
//     let userData = req.body
//     let updateUser = await newUserModel.findOneAndUpdate({ _id: userId }, userData) 
//     res.send({msg: true, result: updateUser})
// }

const deletedUser = async function(req, res){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send({msg: "token must be present in the headers"})
    }
    let userId = req.params.userId
    let user = await newUserModel.findById(userId)
    if(!user){
        return res.send({msg: "user is invalid"})
    }

    let deleteUser = await newUserModel.findOneAndUpdate(
        {_id: userId},
        {$set: {isDeleted: true}},
        {new: true}
        )

        res.send({msg: true, result: deleteUser})
  }


module.exports.createNewUser = createNewUser
module.exports.loginNewUser = loginNewUser
module.exports.getNewUserDetail = getNewUserDetail
// module.exports.updatedUser = updatedUser
module.exports.deletedUser = deletedUser