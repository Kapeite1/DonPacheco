import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCCdpTiymfQS4HvMwxjXZv2cjDt28Xwjf4",
    authDomain: "cardpiodonpacheco.firebaseapp.com",
    databaseURL: "https://cardpiodonpacheco.firebaseio.com",
    projectId: "cardpiodonpacheco",
    storageBucket: "cardpiodonpacheco.appspot.com",
    messagingSenderId: "851767270114",
    appId: "1:851767270114:web:20bf4b87c8bf07ec1a9cbb",
    measurementId: "G-6THX6QQYGK"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;