import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
 
export  const AuthContext =createContext(null)

const Authprovider = ({children}) => {
    const [user , setuser] = useState(null)

    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signin = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe  = onAuthStateChanged(auth , currentUser =>{
            console.log('user in the state changed',currentUser)
            setuser(currentUser)
        });
        return()=>{
            unSubscribe
        }
   
    },[])

    const auth = getAuth(app);

    const authinfo ={
        user ,
        createUser,
        signin,
        logOut
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;