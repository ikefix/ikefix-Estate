// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEe4Jw-hQy2vjziStujx3E31LIxK_PB0I",
  authDomain: "ikefix-realtor.firebaseapp.com",
  projectId: "ikefix-realtor",
  storageBucket: "ikefix-realtor.appspot.com",
  messagingSenderId: "809999886611",
  appId: "1:809999886611:web:e2172e88999e57dee8d2e6",
  measurementId: "G-F6N3GJSD6M"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 

 export const db = getFirestore()