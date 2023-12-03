import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Routes";
import ScrollToTop from "./utilities/ScrollToTop";
import AuthProvider from "./provider/AuthProvider";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ToastProvider } from "./provider/ToastContext";
import CheckoutProvider from "./provider/CheckoutProvider";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CheckoutProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <RouterProvider router={router}>
              <ScrollToTop /> 
            </RouterProvider>
          </ToastProvider>
        </QueryClientProvider>
      </CheckoutProvider>
    </AuthProvider>
  </React.StrictMode>
);
