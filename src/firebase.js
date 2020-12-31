import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhuaVFWFj9jj8OT1ZuvTTYXQ1jMN4QOdE",
    authDomain: "ecommersesite-69ae6.firebaseapp.com",
    projectId: "ecommersesite-69ae6",
    storageBucket: "ecommersesite-69ae6.appspot.com",
    messagingSenderId: "557768222925",
    appId: "1:557768222925:web:b4134670bc86ba367fe184",
    measurementId: "G-BD8KXRKX28"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};