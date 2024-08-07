// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG36ATwDx0Uu3UEqz0LBWXNHjj2cAOUqw",
  authDomain: "miniblog-adriana.firebaseapp.com",
  projectId: "miniblog-adriana",
  storageBucket: "miniblog-adriana.appspot.com",
  messagingSenderId: "412338052677",
  appId: "1:412338052677:web:3693a78b06220dd8094d2c",
  measurementId: "G-9Z2ZBENVSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);