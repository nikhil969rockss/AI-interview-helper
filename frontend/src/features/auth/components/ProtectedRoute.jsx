import { Navigate, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useEffect } from "react";

import { useAuthStore } from "../../store/auth.store";
import Footer from "./Footer";

export const ProtectedRoute = ({ children }) => {
  const { user, isCheckingAuth, loading, checkAuthUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthUser();
  }, [checkAuthUser]);

  useEffect(() => {
    if (!user && !isCheckingAuth) {
      navigate("/login", { replace: true });
      return;
    }
  }, [user, isCheckingAuth, navigate]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-between">
      {children}
      <Footer />
    </div>
  );
};
