// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC97Nt0ZlSk9l7RLSqfv5lv7Fa1zZpp6X0",
  authDomain: "ema-john-simple-main-67384.firebaseapp.com",
  projectId: "ema-john-simple-main-67384",
  storageBucket: "ema-john-simple-main-67384.appspot.com",
  messagingSenderId: "1058634951070",
  appId: "1:1058634951070:web:d34d0daf060cd440f18e8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;