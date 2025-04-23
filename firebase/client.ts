// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBanvUEn3ao6wlpKqFSC1o6jAdYw540AZk",
  authDomain: "ainterview-c5dce.firebaseapp.com",
  projectId: "ainterview-c5dce",
  storageBucket: "ainterview-c5dce.firebasestorage.app",
  messagingSenderId: "302731060142",
  appId: "1:302731060142:web:017df0b57fdbd772fb5e3f",
  measurementId: "G-B9LBT5ZT6C",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
