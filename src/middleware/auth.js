const jwt = require('jsonwebtoken')

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
   

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise