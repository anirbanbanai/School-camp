// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.DB_apiKey);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKeyss,
  authDomain: import.meta.env.VITE_authDomainss,
  projectId: import.meta.env.VITE_projectIdss,
  storageBucket: import.meta.env.VITE_storageBucketss,
  messagingSenderId: import.meta.env.VITE_messagingSenderIdss,
  appId: import.meta.env.VITE_appIdss,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}