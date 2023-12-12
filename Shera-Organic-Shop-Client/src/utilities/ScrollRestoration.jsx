import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/Routes";
import useScrollToTop from "./ScrollToTop";

const ScrollRestoration = ({children}) => {
  useScrollToTop();

  return <RouterProvider router={router}></RouterProvider>
};
export default ScrollRestoration;