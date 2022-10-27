const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController2 = require("../controllers/bookController2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook2", BookController2.createBook2)

router.get("/getBooks2Data", BookController2.getBooks2Data)

module.exports = router;