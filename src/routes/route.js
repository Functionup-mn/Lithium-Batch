const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let missingNumber
    ///LOGIC WILL GO HERE
    let n = arr.length + 1
    let first = arr[0]
    let last = arr[arr.length - 1]
    let result = (n * (first + last)) / 2
    let sum = arr.reduce((a, b) => (a + b))
    missingNumber = result - sum
    res.send({ data: missingNumber });
});

module.exports = router;