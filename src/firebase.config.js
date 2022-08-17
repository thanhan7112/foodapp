import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyASd3OVYwBTX1ekfkqc-TQ5mBJeK17IsNw",
    authDomain: "foodapp-645c6.firebaseapp.com",
    databaseURL: "https://foodapp-645c6-default-rtdb.firebaseio.com",
    projectId: "foodapp-645c6",
    storageBucket: "foodapp-645c6.appspot.com",
    messagingSenderId: "130757729367",
    appId: "1:130757729367:web:dde59cdebb70fca1209712"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}