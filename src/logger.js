const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c,d")
    return "done"
}


const batchName = "Lithium cohort"

let Welcome = function(){
    console.log("Welcome to my application. I am Mohammad Nadeem and a part of FunctionUp", batchName)
    return "friends"
}

module.exports.batchName = batchName     // you can write anything rather than the .batchName
module.exports.Welcome = Welcome         // you can write anything rather than the .welcome

// module.exports.myUrl = url
// module.exports.myFunction = printSomething
