const str = '     FunctionUp Lithium Batch      '

let trim = function(){
    let x = str.trim()
    return x
}

let changetoLowerCase = function(){
    let y = str.toLowerCase()
    return y
}

let changetoUpperCase = function(){
    let z = str.toUpperCase()
    return z
}


module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase