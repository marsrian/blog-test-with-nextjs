import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "blog-test-51412.firebaseapp.com",
  projectId: "blog-test-51412",
  storageBucket: "blog-test-51412.firebasestorage.app",
  messagingSenderId: "907927640637",
  appId: "1:907927640637:web:421a7a0c20c95cdbf2a854",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
