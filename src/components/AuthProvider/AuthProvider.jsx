import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [myEmail, setMyEmail] = useState('')
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const handleUpdateProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleResetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const authInfo = {
        handleSignUp,
        handleLogin,
        handleGoogleSignIn,
        handleSignOut,
        user,
        setUser,
        handleUpdateProfile,
        loading,
        setLoading,
        myEmail,
        setMyEmail,
        handleResetPassword
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log(currentUser);
                setUser(currentUser);
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        });

        return () => unSubscribe(); // Cleanup the observer
    }, []);
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;