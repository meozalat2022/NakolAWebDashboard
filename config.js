// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzBwSJCjiDCkBHVuEmc0cY8PIZdOJTyQw",
  authDomain: "nakola-d9f7f.firebaseapp.com",
  projectId: "nakola-d9f7f",
  storageBucket: "nakola-d9f7f.appspot.com",
  messagingSenderId: "202625894358",
  appId: "1:202625894358:web:9261d082a3bb3336e80677",
  measurementId: "G-054GQMP15L",
};
// "expo": "~45.0.0",

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
