// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrSmU_4-mRwpgweh1w94db41zS-5COiZo",
  authDomain: "landingpagedmn.firebaseapp.com",
  projectId: "landingpagedmn",
  storageBucket: "landingpagedmn.firebasestorage.app",
  messagingSenderId: "1672970286",
  appId: "1:1672970286:web:8b65ab9e8a83aa55a3dfbf",
  measurementId: "G-KRG92EM6N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);