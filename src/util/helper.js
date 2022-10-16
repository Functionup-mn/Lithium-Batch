const date = new Date()

let currentDate = function(){
    return date
}

let currentMonth = function(){
    let month = date.getMonth()
    return month
}

let getBatchinfo = function(){
    return 'Lithium, W3D5, the topic for today is Nodejs module system’'
}

module.exports.currentDate = currentDate
module.exports.currentMonth = currentMonth
module.exports.getBatchinfo = getBatchinfo