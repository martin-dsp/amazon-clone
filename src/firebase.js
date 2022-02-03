import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLqULq-LKgkd0JkIf9v8crfnkJ1eotGE0",
  authDomain: "clone-666f8.firebaseapp.com",
  databaseURL: "https://clone-666f8.firebaseio.com",
  projectId: "clone-666f8",
  storageBucket: "clone-666f8.appspot.com",
  messagingSenderId: "521114899522",
  appId: "1:521114899522:web:acee224e5c928a324549db",
  measurementId: "G-WH2T2GQQ9J",
});

const auth = firebase.auth();

export { auth };
