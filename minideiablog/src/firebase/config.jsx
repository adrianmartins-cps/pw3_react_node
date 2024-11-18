import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDG36ATwDx0Uu3UEqz0LBWXNHjj2cAOUqw",
  authDomain: "miniblog-adriana.firebaseapp.com",
  projectId: "miniblog-adriana",
  storageBucket: "miniblog-adriana.firebasestorage.app",
  messagingSenderId: "412338052677",
  appId: "1:412338052677:web:3693a78b06220dd8094d2c",
  measurementId: "G-9Z2ZBENVSQ"
};
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db};