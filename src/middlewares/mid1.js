const midd1 = function(req, res, next){
    console.log("reached to midd1, passing handle to next function/handler")
    const isLogin = true

    if(!isLogin){
        return res.send("not login, please login first")
    }
    next()
}

const isValidRequestBody = function(req, res, next){
    if(req.body || Object.keys(req.body).length > 0){
        return res.send("body is required")
    }
    next()
}

const loggingData = function(req, res,next){
    const currentTimeStamps = Date.now()
    const currentDate = new Date()
    const ipAddress = req.ip
    const path = req.originalUrl

    console.log(currentTimeStamps, currentDate, ipAddress, path)

    next()
}

module.exports = {midd1, isValidRequestBody, loggingData}