const express = require('express');
core = require('underscore')

const router = express.Router();

//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]     4 is missing
// Your route code will look like this
router.get("/sol1", function (req, res) {
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
let arr= [1,2,4,5,6,7]
let missingNumber
///LOGIC WILL GO HERE
let n = arr.length + 1
let total = (n*(n+1))/2
let sum = arr.reduce((a, b) => (a + b))
missingNumber = total - sum

res.send( { data: missingNumber } );
});

module.exports = router;