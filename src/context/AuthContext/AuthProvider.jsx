import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(null)
   const provider = new GoogleAuthProvider();
   const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
   }
   const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
   }

   const signOutUser = ()=>{
    setLoading(true)
        return signOut(auth)
   }
   const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
   }

   
   useEffect(()=>{

    const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('state captured ,',{currentUser})
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }

        },
    [])

    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signOutUser,
      googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;