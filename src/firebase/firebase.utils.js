import firebase, { initializeApp } from 'firebase/compat/app';

import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCfkOCnBjlVmUtdWuiDOWfDeHTREzDhQkI",
    authDomain: "crwn-db-c4215.firebaseapp.com",
    projectId: "crwn-db-c4215",
    storageBucket: "crwn-db-c4215.appspot.com",
    messagingSenderId: "732084596788",
    appId: "1:732084596788:web:06b34103ba9e5ac55d1a61"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;