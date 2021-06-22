  import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDPACBYasUrJmCOIsYK_fYDG2pPl7zW92Y",
    authDomain: "vue-shop-f25ca.firebaseapp.com",
    projectId: "vue-shop-f25ca",
    storageBucket: "vue-shop-f25ca.appspot.com",
    messagingSenderId: "813171770641",
    appId: "1:813171770641:web:4471022f9952c0570b78b0",
    measurementId: "G-1VWJKZ61EZ"
  };
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
