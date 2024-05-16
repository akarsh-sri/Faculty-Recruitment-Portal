// import "dotenv/config";
import { initializeApp } from "firebase/app";
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });
const app = initializeApp({
  apiKey: "AIzaSyDXFvuj-ISIokKVNaVhYTbjYNDQNbOsLWU",
  authDomain: "database-form-607d8.firebaseapp.com",
  projectId: "database-form-607d8",
  storageBucket: "database-form-607d8.appspot.com",
  messagingSenderId: "115433192349",
  appId: "1:115433192349:web:23ce37fba7eeac14048d74",
  measurementId: "G-52VGE7LWLW",
});

export default app;
