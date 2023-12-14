import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { router } from "./router/Routes";
import AuthProvider from "./provider/AuthProvider";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ToastProvider } from "./provider/ToastContext";
import CheckoutProvider from "./provider/CheckoutProvider";
import AllRoutes from "./router/AllRoutes";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <CheckoutProvider>
        <QueryClientProvider client={queryClient}>
    <AuthProvider>
          <ToastProvider>
            {/* <RouterProvider router={router}/> Object Format */}
            <AllRoutes/>
          </ToastProvider>
    </AuthProvider>
        </QueryClientProvider>
      </CheckoutProvider>
  </React.StrictMode>
);
