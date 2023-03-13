import  firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBnj5jQt6SVXyQmkgq7xEksOWFpyXMUWJw",
    authDomain: "react-kurz-3-movies.firebaseapp.com",
    projectId: "react-kurz-3-movies",
    storageBucket: "react-kurz-3-movies.appspot.com",
    messagingSenderId: "660870626211",
    appId: "1:660870626211:web:e1c92c207069c79e42b816"
  };

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()

export { projectFireStore }