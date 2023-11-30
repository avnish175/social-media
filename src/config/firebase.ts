// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";  // data from collection
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE2V4OT-k9SGp14Tc5Ww_WyCfWTZ5ufYc",
  authDomain: "react-course-89500.firebaseapp.com",
  projectId: "react-course-89500",
  storageBucket: "react-course-89500.appspot.com",
  messagingSenderId: "110540940305",
  appId: "1:110540940305:web:9bc90ecfa12aff5b5e7db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);