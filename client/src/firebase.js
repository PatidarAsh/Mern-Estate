// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDi0qiVwWqK6JfGPGZlJHK4LDrUWMOFTUs",
  authDomain: "mern-estate-21d67.firebaseapp.com",
  projectId: "mern-estate-21d67",
  storageBucket: "mern-estate-21d67.appspot.com",
  messagingSenderId: "743648465837",
  appId: "1:743648465837:web:00c7727db426245a844724"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);