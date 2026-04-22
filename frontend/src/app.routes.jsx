import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./features/interview-report/pages/Home";
import Interview from "./features/interview-report/pages/Interview";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";
import { ToastContainer } from "react-toastify";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
        <ToastContainer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
        <ToastContainer />
      </>
    ),
  },
  {
    path: "/interview/:interviewId",
    element: (
      <ProtectedRoute>
        <Interview />
        <ToastContainer />
      </ProtectedRoute>
    ),
  },
]);
