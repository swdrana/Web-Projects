import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { router } from "./router/Routes";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./provider/AuthProvider";
import CheckoutProvider from "./provider/CheckoutProvider";
import { ToastProvider } from "./provider/ToastContext";
import AllRoutes from "./router/AllRoutes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CheckoutProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ToastProvider>
              {/* <RouterProvider router={router}/> Object Format */}
              <AllRoutes />
            </ToastProvider>
          </AuthProvider>
        </QueryClientProvider>
    </CheckoutProvider>
  </React.StrictMode>
);
