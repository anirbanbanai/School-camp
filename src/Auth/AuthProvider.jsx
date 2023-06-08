import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

const googleAuth = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [, setLoadng] = useState(true);
    const signUp = (email, pasword) => {
        return createUserWithEmailAndPassword(auth, email, pasword);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuth)
    }

    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser);
            if(currentuser?.email){
                setUser(currentuser);
                fetch('http://localhost:5000/jwt',{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify({email: currentuser?.email})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("access-token", data?.token)
                    setLoadng(false)
                })
            }
            localStorage.removeItem("access-token")
            setLoadng(false)
        });
        return () => {
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