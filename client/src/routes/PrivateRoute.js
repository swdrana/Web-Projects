import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading, logOut} = useContext(AuthContext);
    if (loading) {
        return <>Loading...</>
    }
    if(user && user.uid && user.email === process.env.REACT_APP_ceoEmail){
        return children;
    }else if(user && user.uid && user.email !== process.env.REACT_APP_ceoEmail ){
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