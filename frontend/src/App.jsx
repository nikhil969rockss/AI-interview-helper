import {  RouterProvider } from "react-router-dom";
import { router } from "./app.routes.jsx";
import { AuthContextProvider } from "./features/auth/auth.context.jsx";

function App() {
  <AuthContextProvider>
    return <RouterProvider router={router} />
  </AuthContextProvider>;
}
export default App;
