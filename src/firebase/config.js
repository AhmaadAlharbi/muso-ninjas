import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpYfoD9iuHWmIbvofWVAbyf35XQ0amMTw",
  authDomain: "muso-ninjas-f236a.firebaseapp.com",
  projectId: "muso-ninjas-f236a",
  storageBucket: "muso-ninjas-f236a.appspot.com",
  messagingSenderId: "824757482955",
  appId: "1:824757482955:web:467819f3ab594a829b324e",
};

//init firebase
firebase.initializeApp(firebaseConfig);
//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFirestore, projectAuth, projectStorage, timestamp };
