import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

const googleAuth = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadng] = useState(true);
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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
      }

    useEffect(() => {
        const unsubcriber = onAuthStateChanged(auth, currentuser => {
            // console.log(currentuser);
            setUser(currentuser);
            if(currentuser?.email){
                fetch('https://assign-12-server-tan.vercel.app/jwt',{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify({email: currentuser?.email})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("access-token", data?.token)
                })
            }
            else{

                localStorage.removeItem("access-token")
            }
            setLoadng(false)
        });
        return () => {
            return unsubcriber()
        }
    })

    const authInfo = {
        loading,
        user,
        signUp,
        loginUser,
        logOut,
        googleSignIn,
        updateUserProfile,
        auth,
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;