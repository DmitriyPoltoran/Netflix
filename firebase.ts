// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1jCut1VTTCY0SO-z9MoZhv4v8DmwBY-M",
    authDomain: "netflix-6d884.firebaseapp.com",
    projectId: "netflix-6d884",
    storageBucket: "netflix-6d884.appspot.com",
    messagingSenderId: "927085405008",
    appId: "1:927085405008:web:2402ed0f480d2c7685c255"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
