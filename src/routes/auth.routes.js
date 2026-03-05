const express = require("express");
const { regiseterUserController } = require("../controllers/auth.controller");

const authRoter = express.Router();
const controller = require("../controllers/auth.controller");
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

module.exports = authRoter;
