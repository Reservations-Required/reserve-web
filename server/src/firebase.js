// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEJi2Pbk6xPvq6PEeaoPD67ye_Ro_GZc",
  authDomain: "reservations-required.firebaseapp.com",
  projectId: "reservations-required",
  storageBucket: "reservations-required.appspot.com",
  messagingSenderId: "140008611320",
  appId: "1:140008611320:web:d5dc1a41f3f99388fa8a0d",
  measurementId: "G-3HPWK4MV7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);