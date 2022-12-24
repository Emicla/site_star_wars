// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXpoJzjHFL1MG2DXLLA_ZI1Fm9TxxSH8",
  authDomain: "star-wars-276d0.firebaseapp.com",
  projectId: "star-wars-276d0",
  storageBucket: "star-wars-276d0.appspot.com",
  messagingSenderId: "821500452818",
  appId: "1:821500452818:web:1225a28b6eb829d06ab20b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);