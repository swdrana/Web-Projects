import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const { user, googleSignIn } = useContext(AuthContext);
  if (user) {
    console.log('from signup page '+user+' :user and uid: '+user.uid);
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        className="btn btn-secondary "
        onClick={() => {
          googleSignIn()
            .then((result) => console.log(result.user))
            .then((error) => console.log(error));
        }}
      >
        SignUp with Google
      </button>
    </div>
  );
};

export default Signup;
