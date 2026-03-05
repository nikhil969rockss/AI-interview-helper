const UserModel = require('../models/user.model')
const { response, request } = require("express");
const jwt = require("jsonwebtoken");

/**
 * @name regiseterUserController
 * @desc register a new user, expects username, email and password in the request body
 * @access Public
 * @param {request}  req
 * @param {response}  res
 *
 */
async function regiseterUserController(req, res) {
    const { username,email, password } = req.body;
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
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? "false" : "true",
        maxAge: 60 * 60 * 24 * 1000, // 1d cookie
    });

    return res.status(201).json({ message: "User registered successfully", user:{
        id : user._id,
        username : user.username,
        email : user.email
    } });
}

module.exports = {
    regiseterUserController,
};
