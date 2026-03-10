import { useState } from "react";
import { createContext } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <InterviewContext.Provider
      value={{
        jobDescription,
        selfDescription,
        resume,
        errorMsg,
        setJobDescription,
        setResume,
        setSelfDescription,
        setErrorMsg,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
