// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId=1,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

// VITE_apiKey=AIzaSyB-nRX5cEsRkcKZ4i-p_SmLtL1TdK7D4Q8
// VITE_authDomain=job-portal-b2e59.firebaseapp.com
// VITE_projectId=job-portal-b2e59
// VITE_storageBucket=job-portal-b2e59.appspot.com
// VITE_messagingSenderId=706385705260
// VITE_appId=1:706385705260:web:bd6dae129d19d30375d489