import React from "react";
import { useContext } from "react";
import { InterviewContext } from "../Interview.context";

const useInterview = () => {
  const {
    jobDescription,
    selfDescription,
    resume,
    errorMsg,
    setJobDescription,
    setResume,
    setSelfDescription,
    setErrorMsg,
  } = useContext(InterviewContext);
  return {
    jobDescription,
    selfDescription,
    resume,
    errorMsg,
    setJobDescription,
    setResume,
    setSelfDescription,
    setErrorMsg,
  };
};

export default useInterview;
