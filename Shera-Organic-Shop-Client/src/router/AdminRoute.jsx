import { Navigate, useLocation } from "react-router-dom";
import LoadingProgress from "../components/LoadingProgress/LoadingProgress";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

function AdminRoute({ children }) {
  const { isLoading,userInfo, } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <LoadingProgress/>
  }

  // Check if the user exists and has admin role
  if (userInfo && userInfo.role === 'admin' && userInfo.email) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
}

export default AdminRoute;
