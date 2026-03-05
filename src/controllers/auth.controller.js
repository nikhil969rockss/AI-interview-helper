const UserModel = require("../models/user.model");
const { response, request } = require("express");
const generateToken = require("../utils/token");

/**
 * @name regiseterUserController
 * @description register a new user, expects username, email and password in the request body
 * @access Public
 * @param {request}  req
 * @param {response}  res
 *
 */
async function regiseterUserController(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username, email and password" });
    }
    const isUserAlreadyExists = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExists) {
      if (isUserAlreadyExists.username === username) {
        return res.status(400).json({ message: "username is already taken" });
      } else
        return res
          .status(400)
          .json({ message: "This email is already registered" });
    }
    // password will hash on save time 'pre' method already defined in the model

    const user = await UserModel.create({
      username,
      email,
      password,
    });

    // generate 1d token and save it to cookies
    generateToken(res, "token", { id: user._id, username: user.username });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("registerUserController Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

/**
 * @name loginUserController
 * @description login user, via [username or email] and password
 * @access Public
 * @param {request}  req
 * @param {response}  res
 *
 */
async function loginUserController(req, res) {
  try {
    const { username, email, password } = req.body;

    if ((!username && !email) || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username or email and password" });
    }

    const userExist = await UserModel.findOne({
      $or: [{ username }, { email }],
    }).select("+password");

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }

    const isPasswordMatch = await userExist.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }

    generateToken(res, "token", {
      id: userExist._id,
      username: userExist.username,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: userExist._id,
        username: userExist.username,
        email: userExist.email,
      },
    });
  } catch (error) {
    console.log("loginUserController Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  regiseterUserController,
  loginUserController,
};
