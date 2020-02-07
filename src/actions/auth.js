import {firebase, googleAuthProvider} from '../firebase/firebase'

export const signIn = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const signOut = () => {
    return () => {
        firebase.auth().signOut()
    }
}

export const login = (uid) => ({
    type: "LOGIN",
    uid
})

export const logout = () => ({
    type: "LOGOUT"
})
