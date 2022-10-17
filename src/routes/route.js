const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
// problem 1:-
router.get('/movies', function(req, res){
    let movies = ["3Idiot", "Lagan", "Bajrangi Bhaijan", "KGF", "Aarakshan"]
    console.log('I think best movies here: ', movies)
    res.send(movies)
})
// problem 2 & 3:-
router.get('/movies/:indexNumber', function(req, res){
    let movies = ["3Idiot", "Lagan", "Bajrangi Bhaijan", "KGF", "Aarakshan"]
    let requestParams = req.params
    let moviesFromIndex = requestParams.indexNumber
    if(moviesFromIndex < (movies.length)){
    console.log('Name of the movie is ', movies[moviesFromIndex])
    console.log(requestParams)
    res.send(movies[moviesFromIndex])
    }else{
        console.log('invalid input')
        res.send('invalid input')
    }
})
// problem 4:-
router.get('/films', function(req, res){
    let films = [ {
        "id": 1,
        "name": "3Idiot"
       }, {
        "id": 2,
        "name": "Lagan"
       }, {
        "id": 3,
        "name": "Bajrangi Bhaijan"
       }, {
        "id": 4,
        "name": "KGF"
       }, {
        "id": 5,
        "name": "Aarakshan"
       }]

    res.send(films)    
})
// problem 4 & 5:-
router.get('/films/:filmId', function(req, res){
    let films = [ {
        "id": 1,
        "name": "3Idiot"
       }, {
        "id": 2,
        "name": "Lagan"
       }, {
        "id": 3,
        "name": "Bajrangi Bhaijan"
       }, {
        "id": 4,
        "name": "KGF"
       }, {
        "id": 5,
        "name": "Aarakshan"
       }]
    let reqParams = req.params 
    let filmsFromId = reqParams.filmId
    if(filmsFromId < films.id){
        res.send(films[filmsFromId])
    }else{
        res.send('invalid input here')
    }  
})



module.exports = router;