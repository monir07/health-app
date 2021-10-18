import { getAuth, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { useHistory } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signUpUsingEmail = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(user);
                console.log(name);
                setUserName(name);
            })
            .finally(() => setIsLoading(false));
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                history.push("/");
            })
            .finally(() => setIsLoading(false));
    }
    const history = useHistory();
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //const user = result.user;
                //console.log(user);
                history.push("/");
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signUpUsingEmail,
        logOut,
        error,
        processLogin

    }
}

export default useFirebase;