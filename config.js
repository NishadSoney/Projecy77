import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyBPjSZqepFx67cQ3JYEX8txD0K9EUgtofI",
  authDomain: "project77-30ec1.firebaseapp.com",
  projectId: "project77-30ec1",
  storageBucket: "project77-30ec1.appspot.com",
  messagingSenderId: "498395922886",
  appId: "1:498395922886:web:d9008f7c93a4ec8b6c72c7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();