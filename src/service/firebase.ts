import firebase from "firebase";
// import msg from 'firebase/messaging'


const firebaseConfig = {
    apiKey: "AIzaSyDvMIRcYzO1xgyxo6ROOxKptNDxZDL4Do0",
    authDomain: "expensenotification-b6bed.firebaseapp.com",
    projectId: "expensenotification-b6bed",
    storageBucket: "expensenotification-b6bed.appspot.com",
    messagingSenderId: "916695406529",
    appId: "1:916695406529:web:d23dea9c22f17198f40140",
    measurementId: "G-TY8Y1EMWQG"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase