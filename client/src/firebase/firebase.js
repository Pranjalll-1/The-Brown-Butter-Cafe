import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCecoaK_1AQrIZ918X09uUIkF8NXLrArhQ",
  authDomain: "the-brown-butter-cafe.firebaseapp.com",
  projectId: "the-brown-butter-cafe",
  storageBucket: "the-brown-butter-cafe.firebasestorage.app",
  messagingSenderId: "999483265399",
  appId: "1:999483265399:web:06ff81a123545c72dc9172",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Force logout on page load / refresh
auth.signOut();

// Login with Google (session-only)
export const loginWithGoogle = async () => {
  await setPersistence(auth, browserSessionPersistence);
  await signInWithPopup(auth, provider);
};
