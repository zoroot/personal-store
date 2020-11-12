import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwViPvb7wzQWTkwYNU5eokvzslmQvegf4",
    authDomain: "personal-store-db.firebaseapp.com",
    databaseURL: "https://personal-store-db.firebaseio.com",
    projectId: "personal-store-db",
    storageBucket: "personal-store-db.appspot.com",
    messagingSenderId: "92497219988",
    appId: "1:92497219988:web:7827781903f7ef5deb3f81"
  };

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);