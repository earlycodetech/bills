// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bills-in.firebaseapp.com",
  projectId: "bills-in",
  storageBucket: "bills-in.appspot.com",
  messagingSenderId: "660309325768",
  appId: "1:660309325768:web:f1fea5c8f1c09ad97a32fd"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }