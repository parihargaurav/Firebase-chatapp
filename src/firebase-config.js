// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBwRPwnENVup7blKme-_pGi39UPLBWyahw",
  authDomain: "chatapp-ee56c.firebaseapp.com",
  projectId: "chatapp-ee56c",
  storageBucket: "chatapp-ee56c.appspot.com",
  messagingSenderId: "656627389451",
  appId: "1:656627389451:web:e3583208b3a9d5e80ee30e",
  measurementId: "G-5J0Z8SSDTT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();