import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCecoaK_1AQrIZ918X09uUIkF8NXLrArhQ",
  authDomain: "the-brown-butter-cafe.firebaseapp.com",
  projectId: "the-brown-butter-cafe",
  storageBucket: "the-brown-butter-cafe.firebasestorage.app",
  messagingSenderId: "999483265399",
  appId: "1:999483265399:web:06ff81a123545c72dc9172",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { signInWithPopup, signOut };
