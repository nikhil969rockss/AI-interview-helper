import { create } from "zustand";
import {
  generateInterviewReport,
  generateResumePdf,
  getInterviewReportById,
  getInterviewReports,
} from "../interview-report/services/interview.api";
import { toast } from "react-toastify";

export const useInterviewStore = create((set) => ({
  interviewLoading: false,
  pdfLoading: false,
  interviewReport: null,
  interviewReports: [],
  testUserDemo: false,

  setTestUserDemo: (value) => {
    set({ testUserDemo: value });
  },

  //functions
  createInterviewReport: async ({
    resumePdf,
    jobDescription,
    selfDescription,
  }) => {
    set({ interviewLoading: true });

    try {
      const formData = new FormData();
      formData.append("resume", resumePdf);
      formData.append("jobDescription", jobDescription);
      formData.append("selfDescription", selfDescription);

      const response = await generateInterviewReport(formData);

      if (response?.interviewReport) {
        set({ interviewReport: response.interviewReport });
        return response.interviewReport;
      }
    } catch (error) {
      console.log("error creating interview report", error);
      toast.error("Failed to generate report");
      return null;
    } finally {
      set({ interviewLoading: false });
    }
  },

  interviewReportById: async (id) => {
    set({ interviewLoading: true });

    try {
      const response = await getInterviewReportById({ interviewId: id });
      if (response?.interviewReport) {
        set({ interviewReport: response.interviewReport });
      }
    } catch (error) {
      console.log("error getting interview report", error);
      toast.error("Failed to get Interview Report");
      return null;
    } finally {
      set({ interviewLoading: false });
    }
  },

  interviewReportsByUser: async () => {
    try {
      const response = await getInterviewReports();
      if (response?.interviewReports) {
        set({ interviewReports: response.interviewReports });
      }
    } catch (error) {
      console.log("error getting interview reports of user", error);
      return null;
    }
  },

  getPdf: async (interviewId) => {
    set({ pdfLoading: true });
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
      set({ pdfLoading: false });
    }
  },
}));
