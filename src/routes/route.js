const express = require('express');
const router = express.Router();


const AuthorController = require("../controllers/newAuthorController")
const PublisherController = require("../controllers/newPublisherController")
const BookController = require("../controllers/newBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", AuthorController.createAuthor)

router.post("/createPublisher", PublisherController.createPublisher)

router.post("/createBook", BookController.createBook)

router.get("/getBookWithAuthorAndPublisherDetails", BookController.getBookWithAuthorAndPublisherDetails)

router.put("/updateBooks", BookController.updateBooks)

module.exports = router;