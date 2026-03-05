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

module.exports = authRoter;
