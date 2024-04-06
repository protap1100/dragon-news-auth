// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmWhgkSgJWJL5cJltmmlpAL0Qmkks1CSQ",
  authDomain: "dragon-news-auth-89695.firebaseapp.com",
  projectId: "dragon-news-auth-89695",
  storageBucket: "dragon-news-auth-89695.appspot.com",
  messagingSenderId: "639867443919",
  appId: "1:639867443919:web:c5084b4f29c68ff933f5ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;