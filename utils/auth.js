import firebase from 'firebase/app';
import 'firebase/auth';
import { clientCredentials } from './client';

// Function to check user using their UID
const checkUser = (uid) => new Promise((resolve, reject) => {
  // Make a POST request to the checkuser endpoint with the provided UID
  fetch(`${clientCredentials.databaseURL}/checkuser`, {
    method: 'POST',
    body: JSON.stringify({
      uid, // The UID parameter from the function
    }),
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      Accept: 'application/json', // Set the accepted content type to JSON
    },
  })
    .then((resp) => resolve(resp.json())) // Parse the response as JSON and resolve the promise with the parsed data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to register a user with provided user information
const registerUser = (userInfo) => new Promise((resolve, reject) => {
  // Make a POST request to the register endpoint with the provided user information
  fetch(`${clientCredentials.databaseURL}/register`, {
    method: 'POST',
    body: JSON.stringify(userInfo), // Convert the user information to JSON and set it as the request body
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      Accept: 'application/json', // Set the accepted content type to JSON
    },
  })
    .then((resp) => resolve(resp.json())) // Parse the response as JSON and resolve the promise with the parsed data
    .catch(reject); // Reject the promise if an error occurs
});

// Function to sign in using Google authentication provider
const signIn = (router) => {
  // Create a new instance of the GoogleAuthProvider
  const provider = new firebase.auth.GoogleAuthProvider();
  // Use the Google authentication provider to sign in with a popup window
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      // After successful sign-in, navigate to the index page using the provided 'router'
      router.push('/');
    });
};

// Function to sign out the current user
const signOut = () => {
  // Use the Firebase authentication object to sign out the user
  firebase.auth().signOut();
};

export {
  signIn, //
  signOut,
  checkUser,
  registerUser,
};
