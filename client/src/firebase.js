import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3d2fd.firebaseapp.com",
  projectId: "mern-blog-3d2fd",
  storageBucket: "mern-blog-3d2fd.appspot.com",
  messagingSenderId: "129856905503",
  appId: "1:129856905503:web:994b00161470564a67102a"
};

 export const app = initializeApp(firebaseConfig);


