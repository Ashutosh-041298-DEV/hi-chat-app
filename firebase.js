import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import environment from "./environments/environment";

const firebaseConfig = {
    apiKey: "AIzaSyBaZnLzBMpjdFBNF5tRkyvpX_B5FLc5CPQ",
    authDomain: "whatsapp-chat-34c92.firebaseapp.com",
    projectId: "whatsapp-chat-34c92",
    storageBucket: "whatsapp-chat-34c92.appspot.com",
    messagingSenderId: "425947269159",
    appId: "1:425947269159:web:cd91d05d7fbcb1843c2602",
    measurementId: "G-986KJWV7SP"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
