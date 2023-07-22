// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLldmpQnH1V2fJ83nNvCpF_D2rwXgQk94",
  authDomain: "dragon-news-5f116.firebaseapp.com",
  projectId: "dragon-news-5f116",
  storageBucket: "dragon-news-5f116.appspot.com",
  messagingSenderId: "590173117638",
  appId: "1:590173117638:web:3f4e101ac5e8c3a9288bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app