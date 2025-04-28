// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBERBYnftoJFhT9l7wOcsN1II7HecbPdD0",
  authDomain: "prepwise-73cc0.firebaseapp.com",
  projectId: "prepwise-73cc0",
  storageBucket: "prepwise-73cc0.firebasestorage.app",
  messagingSenderId: "501996647176",
  appId: "1:501996647176:web:f58547985e35bac20332bd",
  measurementId: "G-4V13B4WBFT"
};

// Initialize Firebase
const app =  !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
