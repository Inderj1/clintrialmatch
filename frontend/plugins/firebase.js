import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ-aEYuz05JUeHBn7sQViEQxmOrdDR3hU",
  authDomain: "cropmatrix-app.firebaseapp.com",
  projectId: "cropmatrix-app",
  storageBucket: "cropmatrix-app.appspot.com",
  messagingSenderId: "898126982970",
  appId: "1:898126982970:web:7c0cf2ed8da026935d2a03",
  measurementId: "G-YM7DVP8GK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default defineNuxtPlugin(() => {});

export { app, auth, googleProvider };
