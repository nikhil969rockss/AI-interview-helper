import { useState, createContext } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [interviewLoading, setInterviewLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [error, setError] = useState("");
  const [interviewReport, setInterviewReport] = useState(null);
  const [interviewReports, setInterviewReports] = useState([]);

  return (
    <InterviewContext.Provider
      value={{
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
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
