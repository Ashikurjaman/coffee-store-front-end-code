// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmKGzWMY-lAb-PmalEZnbfwAUO7P4pmc",
  authDomain: "coffee-store-bbcda.firebaseapp.com",
  projectId: "coffee-store-bbcda",
  storageBucket: "coffee-store-bbcda.appspot.com",
  messagingSenderId: "621680582685",
  appId: "1:621680582685:web:6d217e99fb404f4b9de6f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;