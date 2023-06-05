import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZFTaK73_Lu85yLMDt-ZXTsoEJ_QTReK0",
  authDomain: "chat-d9170.firebaseapp.com",
  projectId: "chat-d9170",
  storageBucket: "chat-d9170.appspot.com",
  messagingSenderId: "823245245688",
  appId: "1:823245245688:web:dc54ac3eab7a474c36ff0d",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const storage = app.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
