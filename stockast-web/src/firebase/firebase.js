"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleProvider = exports.auth = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.googleProvider = new auth_1.GoogleAuthProvider();
