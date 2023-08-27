import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/signup/Signup";


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