import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes.jsx";
import { AuthContextProvider } from "./features/auth/auth.context.jsx";
import { InterviewProvider } from "./features/interview-report/Interview.context.jsx";

function App() {
  return (
    <AuthContextProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthContextProvider>
  );
}
export default App;
