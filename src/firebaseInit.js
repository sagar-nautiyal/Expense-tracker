// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Note: In production, these should be environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBNjW6f_-LxrEWc2WbxWFKRG_wY_nQaS5o",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "expense-tracker-589d0.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "expense-tracker-589d0",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "expense-tracker-589d0.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "1079008367306",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:1079008367306:web:2ee91ecfc724bf46921a33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
