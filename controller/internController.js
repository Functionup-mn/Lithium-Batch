const internModel = require("../models/internModel")

const createIntern = async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")  // for front-end deployment
    try{

        let data = req.body
        
        let saveData= await internModel.create(data)
        res.status(201).send({status:true, data:saveData})
    }
    catch(err){
        res.status(500).send({status:false, message:err.message})
    }
}

module.exports.createIntern= createIntern