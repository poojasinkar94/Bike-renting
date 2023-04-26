
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
  
const firebaseConfig = {
    apiKey: "AIzaSyA3IB02frxyio_t37TiD8TyqY46m283fjw",
    authDomain: "bike-rent-bcd51.firebaseapp.com",
    projectId: "bike-rent-bcd51",
    storageBucket: "bike-rent-bcd51.appspot.com",
    messagingSenderId: "910148522530",
    appId: "1:910148522530:web:42b100e0b2a93d8994307b",
    measurementId: "G-8KQSQNCBYK"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};