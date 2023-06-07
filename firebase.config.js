// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL9DQNryqUWS4x8SaYr17PIXHoTYYbjOM",
  authDomain: "assign-12-d95ce.firebaseapp.com",
  projectId: "assign-12-d95ce",
  storageBucket: "assign-12-d95ce.appspot.com",
  messagingSenderId: "217317758641",
  appId: "1:217317758641:web:4034847735caa4444a7490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}