import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const { user, googleSignIn, loading, adminLoginError } =
    useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    // console.log("from signup page " + user + " :user and uid: " + user.uid);
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen -my-[30%] md:-my-[15%] lg:-my-[8%] flex-col gap-4">
        <p className="text-red-500">{adminLoginError}</p>
        <button
          className="btn btn-secondary "
          onClick={() => {
            googleSignIn()
              .then((result) => console.log(result.user))
              .then((error) => console.log(error));
          }}
        >
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Signup;
