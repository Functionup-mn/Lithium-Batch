const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
const blogModel = require('../Models/blogModel')
const objectId=mongoose.Types.ObjectId

const authenticate = function (req, res, next) {
  try {
      const token = req.headers["x-api-key"]

      if (!token) {
          res.status(400).send({ msg: "Please set x-api-key header" })
      }

      jwt.verify(token, "Project1-key",(err,decoded) =>{ 
      if(err){
          return res.status(401).send({status: false, message: err.message}) 
      }else{ 
      req.decoded = decoded
      return next()
      } 
      })
  }
  catch (error) {
      res.status(500).send({ msg: "Authentication failure", msg2: error.message })
  }
}

const authorization = async function (req, res, next) {
   const blogId = req.params.blogId
   if(!blogId) return res.status(400).send({status: false, message: "please enter blogId in params"})
   checkData = await blogModel.findById(blogId)
   if(!checkData){
    return res.status(400).send({status: false, message: "blog is not found of this blogId"})
   }
   console.log(checkData.authorId)
   let checkAuthorId = req.decoded.authorId
   if(checkData.authorId.toString() !== checkAuthorId){
    return res.status(403).send({status: false, message: "user is not authorized"})
   }

   next()
  }





module.exports.authenticate = authenticate
module.exports.authorization = authorization




























//.............................. auth with auther id from query params and path params ..................................
/*
const authorization = async function (req, res, next) {
    try {
        const token = req.headers["x-api-key"]

        const blogId = req.params.blogId
        const inputfromQuery = req.query
       
        if(!blogId){ res.status(404).send({msg: "enter blog id to be deleted"})}

            // //alternative to get blogs author id
            //  if(!blogId){
            //     const {tags, authorId, category, subcategory} = inputfromQuery
            //     const result = await blogModel.find({tags:tags} || {authorId:authorId} || {category:category} || {subcategory:subcategory})

            //     if(!result){res.send("not found")}

            //     if (decodedToken.authorId !== result.authorId.toString()) {
            //         res.status(401).send({ msg: "User Not authorised 2.." })
            //     }
            //     else {
            //         next()
            //     }
            //  }

        if (!token) {
            res.status(400).send({ msg: "Please set x-api-key header" })
        }
        let decodedToken = jwt.verify(token, "Project1-key")     //token validity pending. how to??         
        if (!decodedToken) {
            res.status(400).send({ msg: "Enter valid token" })
        }

        let result = await blogModel.findById(blogId)
        // let result = await blogModel.findById({ _id:blogId, _id: inputfromQuery._id })

        if(!result){ res.status(404).send( {msg: "nothing found.."})}

        // console.log(decodedToken.authorId)
        // console.log(result.authorId.toString())

        if (decodedToken.authorId !== result.authorId.toString()) {
            res.status(401).send({ msg: "User Not authorised" })
        }
        else {
            next()
        }
    }
    catch (error) {
        res.status(500).send({ msg: "Authentication failure", msg2: error.message })
    }
}




*/