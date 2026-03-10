import { useState } from "react";
import { createContext } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  return (
    <InterviewContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};
