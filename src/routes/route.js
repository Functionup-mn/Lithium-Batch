const express = require('express');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 router.post('/votingStatus', function(req, res){
    let votingAge = req.query.votingAge
    let newPersons = []
    for(let i=0; i<persons.length; i++){
        if(persons[i].age >= votingAge){
            persons[i].votingStatus = true
            newPersons.push(persons[i])
        }
    }
    console.log(newPersons)
    res.send({data: newPersons, msg:true})
 })


module.exports = router;