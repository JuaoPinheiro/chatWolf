import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyA-y7WV8GQGlAB_AWhVnuc2l5fozjOBSF8",
  authDomain: "chattest-24c96.firebaseapp.com",
  projectId: "chattest-24c96",
  storageBucket: "chattest-24c96.appspot.com",
  messagingSenderId: "566455172546",
  appId: "1:566455172546:web:e5bc9c7fa319effa98aa5b",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
