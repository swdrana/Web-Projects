import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const showToast = (type, message) => {
    // call different toast functions based on type, e.g., toast.success, toast.error, etc.
    toast[type](message);
  };

  return (
    <ToastContext.Provider value={showToast}>
      <ToastContainer style={{ zIndex: 9999 }} />
      {children}
    </ToastContext.Provider>
  );
};
