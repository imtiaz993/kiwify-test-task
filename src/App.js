import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
