import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDOx7mzL6Pd_8X2zrx3h81yzg3YztPjkfY",
    authDomain: "racio-9811e.firebaseapp.com",
    databaseURL: "https://racio-9811e.firebaseio.com",
    projectId: "racio-9811e",
    storageBucket: "racio-9811e.appspot.com",
    messagingSenderId: "522043858691"
});
const auth = firebase.auth;
export {app, auth};