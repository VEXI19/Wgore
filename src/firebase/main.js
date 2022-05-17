import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVujcJjO9fJLgammxwMcdL0oe8ohAVHQc",
  authDomain: "wgore-ace44.firebaseapp.com",
  projectId: "wgore-ace44",
  storageBucket: "wgore-ace44.appspot.com",
  messagingSenderId: "982371676172",
  appId: "1:982371676172:web:a5f5820accb9cc007e3e29",
  measurementId: "G-7FEFVTT44P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
