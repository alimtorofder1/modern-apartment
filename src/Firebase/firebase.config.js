// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfGW_6ZdU9w8LK-sGh6x7j3-ylcifzM0s",
  authDomain: "modern-apartment-edfbd.firebaseapp.com",
  projectId: "modern-apartment-edfbd",
  storageBucket: "modern-apartment-edfbd.appspot.com",
  messagingSenderId: "729293876464",
  appId: "1:729293876464:web:1744c4e45c8652ab1e6635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;