import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADIwH6-mQ_bblAt00YkbCO9Nh62D7pdcs",
    authDomain: "react-kurz-3-db2.firebaseapp.com",
    projectId: "react-kurz-3-db2",
    storageBucket: "react-kurz-3-db2.appspot.com",
    messagingSenderId: "815217172150",
    appId: "1:815217172150:web:7479c12d97200c09899017"
  };

 firebase.initializeApp(firebaseConfig)

 const dbFirestore = firebase.firestore()

 export {dbFirestore}