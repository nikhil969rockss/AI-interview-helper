const express = require("express");

const authRoter = express.Router();
const controller = require("../controllers/auth.controller");
const autheticateUser = require("../middlewares/auth.middleware");

/**
 * @route POST /api/auth/resgister
 * @desc Register a new user
 * @access Public
 */
authRoter.post("/register", controller.regiseterUserController);

/**
 * @route POST /api/auth/login
 * @desc Login the registered user
 * @access Public
 */
authRoter.post("/login", controller.loginUserController);

/**
 * @route GET /api/auth/login
 * @desc Logout the User, clear the cookie and  blacklisting the token
 * @access Public
 */
authRoter.get("/logout", controller.logoutUserController);

/**
 * @route GET /api/auth/get-me
 * @desc Get details of the logged in user
 * @access Private
 */

authRoter.get(
  "/get-me",
  autheticateUser,
  controller.loggedInUserDetailsController,
);

module.exports = authRoter;
