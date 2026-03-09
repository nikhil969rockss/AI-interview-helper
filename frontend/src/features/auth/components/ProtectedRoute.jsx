import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <main className="flex-center min-h-screen w-full">
        <h1 className="text-4xl">Loading...</h1>
      </main>
    );

  if (!user) return <Navigate to={"/login"} />;
  return children;
};
