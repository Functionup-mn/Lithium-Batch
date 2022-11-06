const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const newUserController = require("../controllers/newUserController");
const { Router } = require('express');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)


router.post("/new-users", newUserController.createNewUser)

router.post("/login-new-user", newUserController.loginNewUser)

router.get("/new-user/:userId", newUserController.getNewUserDetail)

Router.put("/new-user/:userId", newUserController.updatedUser)

router.delete("/new-user/:userId", newUserController.deletedUser)

module.exports = router;