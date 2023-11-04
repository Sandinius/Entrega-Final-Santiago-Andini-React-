import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAGSmT3jJsFPRaKIfiRylXIlSyoawLlfmM",
  authDomain: "fb-ecommersreact.firebaseapp.com",
  projectId: "fb-ecommersreact",
  storageBucket: "fb-ecommersreact.appspot.com",
  messagingSenderId: "207758678794",
  appId: "1:207758678794:web:7502da96a6c17a8870f8f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
