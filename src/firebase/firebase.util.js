import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyDunR62C4CAjlryhETMdco5ej5qsI7df9g",
    authDomain: "reactstore-deb92.firebaseapp.com",
    projectId: "reactstore-deb92",
    storageBucket: "reactstore-deb92.appspot.com",
    messagingSenderId: "773721724437",
    appId: "1:773721724437:web:8c7e8538682715d91ee01c",
    measurementId: "G-NZ8YBLHRRK"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
