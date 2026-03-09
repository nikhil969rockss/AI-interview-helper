import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  useEffect(() => {
    const getAndSetUser = async () => {
      const data = await getMe();
      setUser(data?.user);
      setLoading(false);
    };
    getAndSetUser();
  }, []);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
