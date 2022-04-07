// Import the functions you need from the SDKs you need

import "firebase/firestore";
import 'firebase/storage';

import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoxfTk4Rvr_jba45ax1ZpdD69XzRaUkbs",
  authDomain: "eathub-85998.firebaseapp.com",
  projectId: "eathub-85998",
  storageBucket: "eathub-85998.appspot.com",
  messagingSenderId: "1092687470729",
  appId: "1:1092687470729:web:ed99972dd39ca9604ea658",
  measurementId: "G-1JR1YY6MV6"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

const fireDB = app.firestore();

 export { auth, fireDB };

// export {auth};
