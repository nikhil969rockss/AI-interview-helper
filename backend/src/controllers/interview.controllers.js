const { request, response } = require("express");
const generateInterviewReport = require("../services/ai.service");
const InterviewReportModel = require("../models/interviewReport.model");
const parseResume = require("../services/pareResume.service");

/**
 * @description Generate an interview report, by taking ```resume pdf``` or ```self description``` and ```job description```
 * @param {request} req - request object
 * @param {response} res - response object
 */
async function generateInterviewReportController(req, res) {
  try {
    const resumeFile = req.file;
    const { selfDescription, jobDescription } = req.body;
    if (!resumeFile || !selfDescription || !jobDescription) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const resumeContent = await parseResume(resumeFile.buffer);

    const aiResponse = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    const interviewReport = await InterviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      jobDescription,
      selfDescription,
      ...aiResponse,
    });

    if (aiResponse?.status == 503) {
      return res.status(503).json({
        message: "Service Unavailable, model is in high demand",
      });
    } else if (aiResponse?.status === 429) {
      return res.status(429).json({
        message: "Model is exhausted, Please try again tomorrow",
      });
    }

    return res.status(200).json({
      message: "Interview Report Generated Successfully",
      interviewReport,
    });
  } catch (error) {
    console.log("generateInterviewReportController error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

/**
 * @description Get interview report by interview id
 * @param {request} req - request object
 * @param {response} res - response object
 */
async function getInterviewReportByIdController(req, res) {
  const { interviewId } = req.params;
  if (!interviewId) {
    return res.status(400).json({
      message: "Interview Id is required",
    });
  }
  try {
    const interviewReport = await InterviewReportModel.findOne({
      _id: interviewId,
      user: req.user._id,
    });
    if (!interviewReport) {
      return res.status(404).json({
        message: "Interview Report not found",
      });
    }
    return res.status(200).json({
      message: "Interview Report fetched successfully",
      interviewReport,
    });
  } catch (error) {
    console.log("getInterviewReportByIdController Error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

/**
 * @description Get all the interviews report of the user
 * @param {request} req - request object
 * @param {response} res - response object
 */
async function getInterviewReportsController(req, res) {
  try {
    //fetching only userid _id and role
    const interviewReports = await InterviewReportModel.find({
      user: req.user._id,
    })
      .sort({ createdAt: -1 })
      .select(
        "-jobDescription -resume -selfDescription -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan",
      );

    return res.status(200).json({
      message: "Interview Reports fetched successfully",
      interviewReports,
    });
  } catch (error) {
    console.log("getInterviewReportsController Error", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getInterviewReportsController,
};
