import { useState, createContext } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [interviewReport, setInterviewReport] = useState(null);
  const [interviewReports, setInterviewReports] = useState([]);
  return (
    <InterviewContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
        interviewReport,
        setInterviewReport,
        interviewReports,
        setInterviewReports,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
