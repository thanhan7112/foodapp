// import {getApp, getApps, initializeApp} from 'firebase/app'
// import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyASd3OVYwBTX1ekfkqc-TQ5mBJeK17IsNw",
//     authDomain: "foodapp-645c6.firebaseapp.com",
//     databaseURL: "https://foodapp-645c6-default-rtdb.firebaseio.com",
//     projectId: "foodapp-645c6",
//     storageBucket: "foodapp-645c6.appspot.com",
//     messagingSenderId: "130757729367",
//     appId: "1:130757729367:web:dde59cdebb70fca1209712"
// };

// const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)
// const firestore = getFirestore(app)
// const storage = getStorage(app)

// export {app, firestore, storage}


import {getApp, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpyVSTmGiv_OxiBVjCdsCcyzBDaXl4R54",
  authDomain: "nhangvip-8710c.firebaseapp.com",
  projectId: "nhangvip-8710c",
  storageBucket: "nhangvip-8710c.appspot.com",
  messagingSenderId: "175709508199",
  appId: "1:175709508199:web:13385e9022a80f2c2f3ac2",
  measurementId: "G-8EV7DFKF65"
};

// Initialize Firebase
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}