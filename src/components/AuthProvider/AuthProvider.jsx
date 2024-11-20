import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup ,signOut, onAuthStateChanged,updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const handleSignUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleGoogleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const handleSignOut = ()=>{
        return signOut (auth)
    }
    const handleUpdateProfile = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


    const authInfo = {
        handleSignUp,
        handleLogin,
        handleGoogleSignIn,
        handleSignOut,
        user,
        setUser,
        handleUpdateProfile
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged (auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            return ()=>{
                unSubscribe()
            }
        })
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;