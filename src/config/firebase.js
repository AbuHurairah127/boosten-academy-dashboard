// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAaW4YWAIy15X7_gDQNPplnrCtjVVLJaps",
  authDomain: "gulbergbostonacademy.firebaseapp.com",
  projectId: "gulbergbostonacademy",
  storageBucket: "gulbergbostonacademy.appspot.com",
  messagingSenderId: "702618912183",
  appId: "1:702618912183:web:6e23b86b4176061fd99432",
  measurementId: "G-T7PQPLTR1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
