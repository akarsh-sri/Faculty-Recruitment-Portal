// export async function sendPostReq(data) {
//     const res = await fetch("http://localhost:3000", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     })
// }

import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import app from "./firebase.js";
  
  const auth = getAuth(app);
  
  export function forgetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.alert(`password reset link has been sent to ${email}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  
  export function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        console.log(credential.user.uid);
        sessionStorage.setItem("uid", credential.user.uid);
        sessionStorage.setItem("email", email);
        window.location.href = "/page1";
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  
  export function registerUser(email, password, fname, lname) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        const user = credential.user;
        // console.log(user.uid);
      //   sessionStorage.setItem("uid", user.uid);
      //   sessionStorage.setItem("email", email);
      window.alert('Registered Successfully')
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  