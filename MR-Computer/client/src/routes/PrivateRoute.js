import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading, setAdminLoginError, logOut} = useContext(AuthContext);
    if (loading) {
        return <Loading/>
    }
    if(user && user.uid && user.email === process.env.REACT_APP_ceoEmail){
        setAdminLoginError(``);
        return children;
    }else if(user && user.uid && user.email !== process.env.REACT_APP_ceoEmail ){
        setAdminLoginError(`Hi, ${user?.displayName}! Sorry, you'r not admin.`);
        logOut()
            .then(() => {
              return <Navigate to={'/signup'}></Navigate>
            })
            .catch((err) => console.log(err));
        // return <Navigate to={'/login'}></Navigate>;
    }
    return <Navigate to={'/signup'}></Navigate>
};

export default PrivateRoute;