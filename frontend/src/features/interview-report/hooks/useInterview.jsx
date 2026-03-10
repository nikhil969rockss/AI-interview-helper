import { useContext } from "react";
import { InterviewContext } from "../Interview.context";

const useInterview = () => {
  const { error, setError } = useContext(InterviewContext);
  return {
    error,
    setError,
  };
};

export default useInterview;
