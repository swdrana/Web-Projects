import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(app);
export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserNamePhone = async (name, phoneNumber, photoFile) => {
    try {
      setLoading(true);
  
      // Upload the photo to Firebase Storage
      const storageRef = ref(storage, `user-profile-photos/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, photoFile);
  
      // Get the download URL of the uploaded photo
      const photoURL = await getDownloadURL(storageRef);
  
      // Update the user profile with the new information
      await updateProfile(auth.currentUser, {
        displayName: name,
        phoneNumber: phoneNumber,
        photoURL: photoURL,
      });
  
      console.log("User Name and Photo Updated: ", auth.currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const sendPasswordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ": ", errorMessage);
      });
  };
  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUserNamePhone,
    signIn,
    logOut,
    sendPasswordReset,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user: ", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
export default AuthProvider;
