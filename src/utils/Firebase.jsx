// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWaxdfvo-ZCEIVmJGa4nCIGpbalK_2lzw",
  authDomain: "netflix-gpt-f91e8.firebaseapp.com",
  databaseURL: "https://netflix-gpt-f91e8-default-rtdb.firebaseio.com",
  projectId: "netflix-gpt-f91e8",
  storageBucket: "netflix-gpt-f91e8.appspot.com",
  messagingSenderId: "426176920128",
  appId: "1:426176920128:web:fa9c8219de6834ce7bbda5",
  measurementId: "G-71QZFHM30E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();