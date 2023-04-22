// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVkuBnGWYIzDulpbd4E80ba8rHZhR8aVg",
  authDomain: "react-course-f738f.firebaseapp.com",
  projectId: "react-course-f738f",
  storageBucket: "react-course-f738f.appspot.com",
  messagingSenderId: "864892105724",
  appId: "1:864892105724:web:5a406535020d7bc7743879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db =getFirestore(app);