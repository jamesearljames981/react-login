import firebase from 'firebase/app';
import "firebase/auth"

//Adding these environment values to env.local and creating functions here
//Before add DB function check for inheritance in env.local
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// *Todo - database_url  INFO Missing currently 
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  })
  export const auth = app.auth()
  export default app