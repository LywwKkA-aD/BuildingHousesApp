// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVooDZpWN8T6cg-cG79Jz_QLb-XX8iXC0",
  authDomain: "sk-kaskad72ru.firebaseapp.com",
  projectId: "sk-kaskad72ru",
  storageBucket: "sk-kaskad72ru.appspot.com",
  messagingSenderId: "1073929633728",
  appId: "1:1073929633728:web:ddeaf5249e205403f8d225",
  measurementId: "G-0NHH80RHXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;