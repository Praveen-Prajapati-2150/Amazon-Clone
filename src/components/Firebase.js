import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWebc8YEACRh3QufGkkMQ-R5m2TJANsEI",
    authDomain: "clone-8b9b1.firebaseapp.com",
    projectId: "clone-8b9b1",
    storageBucket: "clone-8b9b1.appspot.com",
    messagingSenderId: "291574648536",
    appId: "1:291574648536:web:e3edc0b893aeb2736fd1ad",
    measurementId: "G-98FVLZD0DF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
