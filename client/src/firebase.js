import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyA9Myg1MhxpzfzRAlQsN1unTpFPVXAxTRY",
  authDomain: "hrs-mpr.firebaseapp.com",
  projectId: "hrs-mpr",
  storageBucket: "hrs-mpr.appspot.com",
  messagingSenderId: "698690157465",
  appId: "1:698690157465:web:b161ee6ee2bd7d3ad2f108",
  measurementId: "G-0GZW1Y5XVZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export {auth};

