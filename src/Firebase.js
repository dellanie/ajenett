import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyBbzOyo24SKfrbtBf7Z7rxFB2ijm0sn870",
  authDomain: "ajeweb-10de5.firebaseapp.com",
  projectId: "ajeweb-10de5",
  storageBucket: "ajeweb-10de5.appspot.com",
  messagingSenderId: "149882226597",
  appId: "1:149882226597:web:f38ec1f23e5ee9eb728a4c",
  measurementId: "G-HCHYPTRH25" 
  });

const db = firebaseApp.firestore();

export default db;
