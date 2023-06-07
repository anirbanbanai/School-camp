import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

const googleAuth =new GoogleAuthProvider()
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

const signUp = (email, pasword)=>{
    return createUserWithEmailAndPassword(auth,email,pasword);
}

const loginUser =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
} 

const logOut = ()=>{
    return signOut(auth)
}

const googleSignIn= ()=>{
    return signInWithPopup(auth, googleAuth)
}

useEffect(()=>{
    const unsubcriber = onAuthStateChanged(auth, currentuser=>{
        setUser(currentuser)
    });
    return ()=>{
       return unsubcriber()
    }
})

    const authInfo = {
        user,
        signUp,
        loginUser,
        logOut,
        googleSignIn,
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;