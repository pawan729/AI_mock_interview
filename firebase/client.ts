// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps} from "firebase/app";
// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";
// ✅ Use this instead of firebase-admin
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_yEVOZWwIWubAEdLXh71orTeK3yS_58s",
  authDomain: "prepwise2-664e7.firebaseapp.com",
  projectId: "prepwise2-664e7",
  storageBucket: "prepwise2-664e7.firebasestorage.app",
  messagingSenderId: "1031954567646",
  appId: "1:1031954567646:web:ce029e12b105927ac80d4f",
  measurementId: "G-H7ETVC5932"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

