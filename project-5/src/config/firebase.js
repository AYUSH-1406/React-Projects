// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq2in6h7CzkwpjxY7ScheXRs6gGWgaPDs",
  authDomain: "vite-contact-1925b.firebaseapp.com",
  projectId: "vite-contact-1925b",
  storageBucket: "vite-contact-1925b.appspot.com",
  messagingSenderId: "1020061942150",
  appId: "1:1020061942150:web:b67377f490d5fdc563ec07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);