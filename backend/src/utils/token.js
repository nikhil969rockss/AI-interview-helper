const { response } = require("express");
const jwt = require("jsonwebtoken");
/**
 * @name generateToken
 * @description To generate token and save it to cookies
 * @param {response} res - response object
 * @param {string} token_name - name of token
 * @param {object} token_data - object to be saved in token
 */
function generateToken(res, token_name, token_data) {
  const token = jwt.sign(token_data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie(token_name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "development" ? false : true,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000, // 1D cookie
  });
}
module.exports = generateToken;
