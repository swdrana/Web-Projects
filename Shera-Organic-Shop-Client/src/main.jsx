import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Routes";
import ScrollToTop from "./utilities/ScrollToTop";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
