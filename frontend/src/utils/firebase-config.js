import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDADJCjBr9Ufs6owkmwWnr7f7dagZe3VBQ",
  authDomain: "react-movie-app-fdbd6.firebaseapp.com",
  projectId: "react-movie-app-fdbd6",
  storageBucket: "react-movie-app-fdbd6.appspot.com",
  messagingSenderId: "983043747546",
  appId: "1:983043747546:web:ee3bf3ed31b635d7537fe3",
  measurementId: "G-Q0DS3LJBST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);