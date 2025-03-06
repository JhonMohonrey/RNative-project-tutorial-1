// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, setPersistence, getReactNativePersistence } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_-LCu6iWr7ntqUbHxAl6FgtPccYGGGxM",
  authDomain: "project2025-7eb84.firebaseapp.com",
  projectId: "project2025-7eb84",
  storageBucket: "project2025-7eb84.firebasestorage.app",
  messagingSenderId: "147565766972",
  appId: "1:147565766972:web:51809393932d14c5301639",
  measurementId: "G-3FMS1R4PS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    setPersistence:getReactNativePersistence(ReactNativeAsyncStorage)
});
// const analytics = getAnalytics(app);