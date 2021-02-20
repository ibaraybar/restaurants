import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAs1H1icSVjCVDMEw7f0nuc7TE7LZY4l9k",
    authDomain: "restaurants-4f6c8.firebaseapp.com",
    projectId: "restaurants-4f6c8",
    storageBucket: "restaurants-4f6c8.appspot.com",
    messagingSenderId: "905381465210",
    appId: "1:905381465210:web:c059ef63c2a3133cc47fc3"
}

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)