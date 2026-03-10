import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./features/interview-report/pages/Home";
import Interview from "./features/interview-report/pages/Interview";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";
import { InterviewProvider } from "./features/interview-report/Interview.context";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <InterviewProvider>
          <Home />
        </InterviewProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/interview/:interviewId",
    element: (
      <ProtectedRoute>
        <Interview />
      </ProtectedRoute>
    ),
  },
]);
