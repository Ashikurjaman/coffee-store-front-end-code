import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';
export const AuthProvider = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            console.log('User is Login');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }

    },[])

    const Logout = ()=>{
        return signOut(auth)
    }

    const userInfo ={
        user,
        loading,
        signinUser,
        createUser,
        Logout,

    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;