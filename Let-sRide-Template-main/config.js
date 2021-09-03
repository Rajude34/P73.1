import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyAJjsDbVNh1ijGZ5_yM-_ke73mn1ghbmK0",
    authDomain: "lets-ride-c7db4.firebaseapp.com",
    projectId: "lets-ride-c7db4",
    storageBucket: "lets-ride-c7db4.appspot.com",
    messagingSenderId: "348482172496",
    appId: "1:348482172496:web:8850ec0a80e0efa3488355"
  };
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

