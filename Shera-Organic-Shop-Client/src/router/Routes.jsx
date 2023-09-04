import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/signup/Signup";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "signup",
          element: <Signup/>,
        },
      ],
    },
  ]);