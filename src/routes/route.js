const express = require('express');
const router = express.Router();


// Assignment 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       let obj = req.body.element
    for(let i=0; i<players.length; i++){
        if(obj.name === players.name){
            return res.send("person is already exist")
        }
    }
     players.push(obj)
     console.log(players)
       res.send(  { data: players , status: true }  )
   })

module.exports = router;