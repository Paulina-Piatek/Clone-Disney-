import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// in firebase -> firestore database -> rules -> 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read;
//       allow write: if false;
//     }
//   }
// }

 const firebaseConfig = {
    apiKey: "####",
    authDomain: "####",
    projectId: "####",
    storageBucket: "####",
    messagingSenderId: "####",
    appId: "####",
    measurementId: "####"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = firebase.storage();

 export { auth, provider, storage };
 export default db;

 