const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.status(201).send({ status: true, message: savedData });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
}

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Lithium",
        organisation: "FunctionUp",
      },
      "functionup-Lithium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, token: token });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.status(400).send({ status: false, msg: "token must be present in headers" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: user });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.status(400).send({ status: false, msg: "token must be present in headers" });

    console.log(token);

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }


    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: { isDeleted: true } },
      { new: true }
    );
    res.status(200).send({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
