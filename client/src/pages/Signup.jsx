import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const { googleSignIn } = useContext(AuthContext);
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
