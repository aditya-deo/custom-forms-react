import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
const firebaseConfig = {

  apiKey: "AIzaSyAo3MqOzuSoQdjYhLcst-Nul3kHATxBovA",

  authDomain: "customforms3.firebaseapp.com",

  databaseURL: "https://customforms3-default-rtdb.firebaseio.com",

  projectId: "customforms3",

  storageBucket: "customforms3.appspot.com",

  messagingSenderId: "146167462218",

  appId: "1:146167462218:web:a8a4f9a843d1e1055d69b3",

  measurementId: "${config.measurementId}"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.database();