// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdf5OECY_It71qeLDa_M4P11I5bshhFAg",
  authDomain: "gestion-condominio.firebaseapp.com",
  projectId: "gestion-condominio",
  storageBucket: "gestion-condominio.firebasestorage.app",
  messagingSenderId: "499884633370",
  appId: "1:499884633370:web:a298f8401021f0db7210a3",
  measurementId: "G-BR0NJER4S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };