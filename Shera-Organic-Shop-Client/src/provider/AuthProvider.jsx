import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import instance from "./axios";
import { useQuery } from "react-query";

const storage = getStorage(app);
export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  // console.log('DB: ',userInfo)
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const {
    isLoading,
    isError,
    data,
    error,
    refetch,
  } = useQuery(["currentUser", user?.email], async () => {
    try {
      if (!user) {
        return {}
      }
      const response = await instance.get(`/users/${user.email}`);

      // Assuming your API returns an error status code for unsuccessful requests
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setUserInfo(response.data)
      // return response.data; // Assuming your API response has a 'data' field
    } catch (error) {
      throw new Error("Error fetching user data: " + error.message);
    }
  });
  const sendUserInfoToServer = (user) => {
    const minifyUserData = {
      email : user.email,
      displayName : user.displayName,
      phoneNumber : user.phoneNumber,
      role : user.role,
      photoURL : user.photoURL,
    }
    instance.post("/users", minifyUserData).then((response) => {
        console.log("User information sent to the server:", response.data);
        setUserInfo(response.data)
      }).catch((error) => {
        console.error("Error sending user information:", error);
      });
  };
  const getCurrentUserFromServer = async (user) => {
    await instance.get(`/users/${user?.email}`).then((response) => {
        // console.log("User information get from server:", response.data);
        setUserInfo(response.data);
      }).catch((error) => {
        sendUserInfoToServer(user)
        console.error("Error getting user information:", error);
      });
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const facebookLogin = ()=>{
    setLoading(true);
    return signInWithPopup(auth, facebookProvider)
  }
  const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
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
    setUserInfo({})
    return signOut(auth);
  };
  const authInfo = {
    user,
    userInfo,
    refetch,
    isLoading,
    isError,
    data,
    error,
    setUser,
    loading,
    createUser,
    updateUserNamePhone,
    signIn,
    logOut,
    sendPasswordReset,
    facebookLogin,
    googleLogin
  };
  // console.log('ggg',user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('eee', currentUser)
      // console.log('fff',user)
      getCurrentUserFromServer(currentUser)
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
