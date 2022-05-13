import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIMtW_yK9OuqUMOe8UKVlrgQqGmvuJbg8",
  authDomain: "fire-docs-8cc34.firebaseapp.com",
  projectId: "fire-docs-8cc34",
  storageBucket: "fire-docs-8cc34.appspot.com",
  messagingSenderId: "247159649532",
  appId: "1:247159649532:web:07684ad970082d09d19379",
  measurementId: "G-9C7QPGHE7K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)