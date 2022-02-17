import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdYmqjKeR2jvGfELWcRf6MFzn9lOMIGnY",
  authDomain: "frutusy.firebaseapp.com",
  databaseURL: "https://frutusy-default-rtdb.firebaseio.com",
  projectId: "frutusy",
  storageBucket: "frutusy.appspot.com",
  messagingSenderId: "810190941583",
  appId: "1:810190941583:web:def0aae8dc194cdb1deffa"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };