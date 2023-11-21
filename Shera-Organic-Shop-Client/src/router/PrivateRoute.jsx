import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import LoadingProgress from "../components/LoadingProgress/LoadingProgress";

function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <LoadingProgress/>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoute;
