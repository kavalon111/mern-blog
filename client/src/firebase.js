// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-89569.firebaseapp.com",
  projectId: "mern-blog-89569",
  storageBucket: "mern-blog-89569.appspot.com",
  messagingSenderId: "483690528542",
  appId: "1:483690528542:web:fc17070406974c158d130f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
