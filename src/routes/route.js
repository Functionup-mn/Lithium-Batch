const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const intro = require('../logger')
const abc = require('../util/helper')
const string = require('../validator/formatter')
const tryNew = require('lodash')
//importing external package
const underscore = require('underscore')

router.get('/test-me1', function(req, res){
    console.log("welcome to my world ", intro.Welcome())
    console.log("My batch name at functionUp is ", intro.batchName)

    res.send('My second ever api')
})

router.get('/test-me2', function(req, res){
      console.log("current date is: ", abc.currentDate())
      console.log("current month is: ", abc.currentMonth())
      console.log("My batch information is: ", abc.getBatchinfo())

      res.send('My third ever api')
})

router.get('/test-me3', function(req, res){
    console.log("remove extra space through trim function is:",string.trim()) // it removes the extra space at starting and end of the string.
    console.log("changing the case normal to lower:", string.changetoLowerCase())  // here calling the name of the function not function. for example - cahngetoLowercase is name of the function.
    console.log("changing the case normal to uppre:", string.changetoUpperCase())

    res.send('My fourth ever api')
})

router.get('/test-me4', function(req, res){
     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     let result = tryNew.chunk(months,4) // chunk function is divided into the subarr which number do you want.
     console.log(result)

     let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
     let result2 = tryNew.tail(oddNumbers) // tail function remove the 1st element of the arr.
     console.log(result2)

     let arr = [1,2,3,2,5]
     let result3 = tryNew.union(arr) // union function remove repeatative element of the arr.
     console.log(result3)

     let arr2 = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     let result4 = tryNew.fromPairs(arr2) // fromPairs function is to convert in to the key Vlaue pairs.
     console.log(result4)

     res.send('My fifth ever api')

})

// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
//     //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
//     res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
// });



module.exports = router;

