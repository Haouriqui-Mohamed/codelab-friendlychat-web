/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCU7fdhm9y_YRSuQxvATwzfwZPmqBCrHOg",
  authDomain: "friendlychat-5f6c8.firebaseapp.com",
  projectId: "friendlychat-5f6c8",
  storageBucket: "friendlychat-5f6c8.appspot.com",
  messagingSenderId: "470904809599",
  appId: "1:470904809599:web:886f8598119f81cfc5774a"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}