// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQRDp2UTZFKBCY73yTU0ZVABk3nVDjNJU",
    authDomain: "invoice-management-102d4.firebaseapp.com",
    projectId: "invoice-management-102d4",
    storageBucket: "invoice-management-102d4.appspot.com",
    messagingSenderId: "597121273379",
    appId: "1:597121273379:web:85658d6bcefca73c602b96",
    measurementId: "G-105QR5QT8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//let analytics;
//if (typeof window !== 'undefined') { analytics = getAnalytics(app); };


export const auth = getAuth();
export const firestore = getFirestore(app)
export default app;
