import firebase from "firebase/app";
require('firebase/auth');
require('firebase/database');



const firebaseConfig = {
    apiKey: "AIzaSyAiviUceF8EjBwL25MtpYuQJUVCC1fUzTU",
    authDomain: "warehouse-50c38.firebaseapp.com",
    databaseURL: "https://warehouse-50c38-default-rtdb.firebaseio.com",
    projectId: "warehouse-50c38",
    storageBucket: "warehouse-50c38.appspot.com",
    messagingSenderId: "247992344060",
    appId: "1:247992344060:web:556d65712e26dd41642679",
    measurementId: "G-MBFEZ2QSXM"
  };
  
  firebase.initializeApp(firebaseConfig);