import { useContext } from "react";
import { InterviewContext } from "../Interview.context";
import {
  generateInterviewReport,
  getInterviewReportById,
  getInterviewReports,
  generateResumePdf,
} from "../services/interview.api";

const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within a InterviewProvider");
  }
  const {
    error,
    setError,
    interviewLoading,
    setInterviewLoading,
    interviewReport,
    setInterviewReport,
    interviewReports,
    setInterviewReports,
    pdfLoading,
    setPdfLoading,
  } = context;

  const createInterviewReport = async ({
    resumePdf,
    jobDescription,
    selfDescription,
  }) => {
    setInterviewLoading(true);
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
        return response.interviewReport;
      }
    } catch (error) {
      console.log(error);
      setError("Failed to generate report");
    } finally {
      setInterviewLoading(false);
    }
  };

  const interviewReportById = async (id) => {
    setInterviewLoading(true);
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
      setInterviewLoading(false);
    }
  };

  const interviewReportsByUser = async () => {
    setError("");
    try {
      const response = await getInterviewReports();
      if (response.interviewReports) {
        setInterviewReports(response.interviewReports);
      }
    } catch (error) {
      setError("Failed to get all Interview Reports");
    } finally {
    }
  };

  const getPdf = async (interviewId) => {
    setPdfLoading(true);
    try {
      const response = await generateResumePdf({ interviewId });
      const url = window.URL.createObjectURL(
        new Blob([response], { type: "application/pdf" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${interviewId.slice(0, 6)}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    } finally {
      setPdfLoading(false);
    }
  };

  return {
    createInterviewReport,
    interviewReportsByUser,
    interviewReportById,
    error,
    setError,
    interviewLoading,
    setInterviewLoading,
    interviewReport,
    setInterviewReport,
    interviewReports,
    setInterviewReports,
    getPdf,
    pdfLoading,
  };
};

export default useInterview;
