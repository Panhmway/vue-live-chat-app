import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyARUjvYgVRl-5JscXMk7lmkrZxVM5P5j8w",
    authDomain: "vue-blog-system-2fb09.firebaseapp.com",
    projectId: "vue-blog-system-2fb09",
    storageBucket: "vue-blog-system-2fb09.appspot.com",
    messagingSenderId: "453517006043",
    appId: "1:453517006043:web:02c60d291e023b8da328fe"
  };
firebase.initializeApp(firebaseConfig);
let auth=firebase.auth();
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}