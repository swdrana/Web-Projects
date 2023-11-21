import { Navigate, useLocation } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import LoadingProgress from "../components/LoadingProgress/LoadingProgress";

function AdminRoute({ children }) {
  const { isLoading, isError, userInfo, error, refetch } = useCurrentUser();
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
