import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn =(email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false);
    });
    return () =>{
        return unSubScribe()
    }
  }, []);

  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    handleUpdateProfile,
    googleLogin

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
