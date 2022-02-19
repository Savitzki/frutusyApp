// import * as firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuracoes do app firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdYmqjKeR2jvGfELWcRf6MFzn9lOMIGnY",
  authDomain: "frutusy.firebaseapp.com",
  databaseURL: "https://frutusy-default-rtdb.firebaseio.com",
  projectId: "frutusy",
  storageBucket: "frutusy.appspot.com",
  messagingSenderId: "810190941583",
  appId: "1:810190941583:web:def0aae8dc194cdb1deffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getFirestore(app);
export default db;