// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwxuPk0sN4rthPydUttDQ2Jfu_j4ke4GE",
  authDomain: "assignment-15-react.firebaseapp.com",
  projectId: "assignment-15-react",
  storageBucket: "assignment-15-react.appspot.com",
  messagingSenderId: "417644389866",
  appId: "1:417644389866:web:bbdbdc24caaa721d317e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}