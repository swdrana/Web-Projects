import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app)

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const updateUserName = (name)=>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName:name
    }).then(()=>{
      console.log('User Name Updated: ',auth.currentUser);
    }).catch(e=>{
      console.log(e)
    });
  }
  const sendPasswordReset = (email)=>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('Password reset email sent!')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ': ', errorMessage);
    });
  }
  const signIn = (email, password) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUserName,
    signIn,
    logOut,
    sendPasswordReset
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log('current user: ', currentUser)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe();
    }
  },[])
  return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
  );
}
export default AuthProvider;