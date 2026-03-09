const express = require("express");

const autheticateUser = require("../middlewares/auth.middleware");
const controllers = require("../controllers/interview.controllers");
const upload = require("../middlewares/multer.middleware");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview/
 * @description- Generate an interview report based on self description or resume pdf and job description
 * @access Private
 */
interviewRouter.post(
  "/",
  autheticateUser,
  upload.single("resume"),
  controllers.generateInterviewReportController,
);

module.exports = interviewRouter;
