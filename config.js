import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBWmv7XVFucpWV058c-MzjPW8VhNOSO3h0",
  authDomain: "appp-cdd72.firebaseapp.com",
  projectId: "appp-cdd72",
  storageBucket: "appp-cdd72.appspot.com",
  messagingSenderId: "886543014471",
  appId: "1:886543014471:web:1691791f01e0b142beaf62"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
