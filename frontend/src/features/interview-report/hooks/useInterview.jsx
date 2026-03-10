import { useContext } from "react";
import { InterviewContext } from "../Interview.context";
import {
  generateInterviewReport,
  getInterviewReportById,
  getInterviewReports,
} from "../services/interview.api";

const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within a InterviewProvider");
  }
  const {
    error,
    setError,
    loading,
    setLoading,
    interviewReport,
    setInterviewReport,
    interviewReports,
    setInterviewReports,
  } = context;

  const createInterviewReport = async ({
    resumePdf,
    jobDescription,
    selfDescription,
  }) => {
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("resume", resumePdf);
      formData.append("jobDescription", jobDescription);
      formData.append("selfDescription", selfDescription);

      //console.log([...formData.entries()])

      const response = await generateInterviewReport(formData);

      if (response.interviewReport) {
        setInterviewReport(response.interviewReport);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to generate report");
    } finally {
      setLoading(false);
    }
  };

  const interviewReportById = async (id) => {
    setLoading(true);
    setError("");
    try {
      const response = await getInterviewReportById({ interviewId: id });
      if (response.interviewReport) {
        setInterviewReport(response.interviewReport);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to get Interview Report");
    } finally {
      setLoading(false);
    }
  };

  const interviewReportsByUser = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await getInterviewReports();
      if (response.interviewReports) {
        setInterviewReports(response.interviewReports);
      }
    } catch (error) {
      setError("Failed to get all Interview Reports");
    } finally {
      setLoading(false);
    }
  };

  return {
    createInterviewReport,
    interviewReportsByUser,
    interviewReportById,
    error,
    setError,
    loading,
    setLoading,
    interviewReport,
    setInterviewReport,
    interviewReports,
    setInterviewReports,
  };
};

export default useInterview;
