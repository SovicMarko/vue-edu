import firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyDnSSrS6qDqwBnRTyOWnZOs_Bt6p8m2xfM",
    authDomain: "webeducentar.firebaseapp.com",
    databaseURL: "https://webeducentar.firebaseio.com",
    projectId: "webeducentar",
    storageBucket: "webeducentar.appspot.com",
    messagingSenderId: "1061577359336",
    appId: "1:1061577359336:web:1e73621b1b2c3e68deae5d",
    measurementId: "G-XBXQJ8EKV0"
  })

// window.console.log(app)

// export const db = app.database();
// export const data = db.ref('lekcije');