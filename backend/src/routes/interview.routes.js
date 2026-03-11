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

/**
 * @route GET /api/interview/report/:interviewId
 * @description- Get an interview report by interviewId
 * @access Private
 */
interviewRouter.get(
  "/report/:interviewId",
  autheticateUser,
  controllers.getInterviewReportByIdController,
);

/**
 * @route GET /api/interview/reports
 * @description- Get all interview reports of the user
 * @access Private
 */
interviewRouter.get(
  "/reports",
  autheticateUser,
  controllers.getInterviewReportsController,
);

/**
 * @route POST /api/interview/resume/pdf/:interviewId
 * @description- Generate a Resume pdf according to the job description and self description
 */
interviewRouter.post(
  "/resume/pdf/:interviewId",
  autheticateUser,
  controllers.generateResumePdfController,
);

module.exports = interviewRouter;
