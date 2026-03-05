const { request, response, next } = require("express");
const UserModel = require("../models/user.model");
const BlackListTokenModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");
/**
 * @name autheticateUser
 * @description - Checks whether a user is logged in or not
 * @param {request} res - response object
 * @param {response} res - response object
 * @param {next} next - next function
 */
async function autheticateUser(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized, Please Login First" });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        //check if token is present int the blacklist
        const isTokenBlacklisted = await BlackListTokenModel.findOne({ token });
        if (isTokenBlacklisted) {
            return res
                .status(401)
                .json({ message: "Unauthorized, Please Login First" });
        }

        const loggedInUser = await UserModel.findOne({
            $or: [{ _id: decodedToken.id }, { username: decodedToken.username }],
        });

        req.user = loggedInUser;
        next();
    } catch (error) {
        if (error.message === "invalid token") {
            return res.status(401).json({ message: "Unauthorized, Invalid token" });
        }
        if (error.message === "jwt expired") {
            return res
                .status(401)
                .json({ message: "Unauthorized, Token expired, Please login again" });
        }
        console.log("authenticateUser error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = autheticateUser;
