import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdLwVnekepjIXR5BqrR7tI3fIsiO4yEDc",
  authDomain: "miniblog-79202.firebaseapp.com",
  projectId: "miniblog-79202",
  storageBucket: "miniblog-79202.appspot.com",
  messagingSenderId: "220134335618",
  appId: "1:220134335618:web:23ccd981adb59da1b3c09b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
