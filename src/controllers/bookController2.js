const bookModel = require('../models/bookModel2')

// prblm 1: createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook2 = async function(req, res){
    let body = req.body

    let result = await bookModel.create(body)
    res.send({data:result, status: true})
}

const getBooks2Data = async function(req, res){

//    prblm 2: bookList : gives all the books- their bookName and authorName only 

    // let getData = await bookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    // res.send({data: getData, status: true})

//   prblm 3: getBooksInYear: takes year as input in post request and gives list of all books published that year

//     let data = req.query
//     let getBooksInYear = await bookModel.find(data)
//     res.send({data: getBooksInYear, status: true})

//    prblm 4: getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you input in the request body

 
//        let getParticularBooks = await bookModel.find()
//        if(getParticularBooks.bookName === "intro to programming 2"){
//         res.send({data:getParticularBooks, status: true})
//        }else if(getParticularBooks.year === "2020"){
//         res.send({data:getParticularBooks, status: true})
//        }else{
//         res.send({data:"book does not exist", status: false})
//        }
       
//     prblm 5:getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

//           let getXINRBooks = await bookModel.find({ indianPrice: {$gt:"200INR", $lt:"100INR"} })
//           res.send({data:getXINRBooks, status: true})

//     prblm 6: getRandomBooks - returns books that are available in stock or have more than 500 pages 

        let getRandomBooks = await bookModel.find({ totalPages: {$gt: 300} })
        res.send({data: getRandomBooks, status: true})
}

module.exports.createBook2 = createBook2
module.exports.getBooks2Data = getBooks2Data
