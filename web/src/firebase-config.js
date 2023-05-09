/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEt0YRc_5tPmZybhB0jZvMnnrJB01TH_4",
    authDomain: "friendlychat-f1d1e.firebaseapp.com",
    projectId: "friendlychat-f1d1e",
    storageBucket: "friendlychat-f1d1e.appspot.com",
    messagingSenderId: "357551729811",
    appId: "1:357551729811:web:49a2b66a205e1751e0b166"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}