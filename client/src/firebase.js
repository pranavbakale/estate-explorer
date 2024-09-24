// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-explorer-a3e38.firebaseapp.com",
  projectId: "estate-explorer-a3e38",
  storageBucket: "estate-explorer-a3e38.appspot.com",
  messagingSenderId: "8522207160",
  appId: "1:8522207160:web:952b3f53f32a294205894d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);