import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyABChrtPU5oMwjB94eTIKZiTOTz5Jqv9WQ",
  authDomain: "the-dojo-site-ccb15.firebaseapp.com",
  projectId: "the-dojo-site-ccb15",
  storageBucket: "the-dojo-site-ccb15.appspot.com",
  messagingSenderId: "848089495266",
  appId: "1:848089495266:web:ead0b6c05d53e3d22210bb"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp, projectStorage }