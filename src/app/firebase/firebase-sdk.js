import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDwjI1QqBUPo2EmFRXcY1vcULcV3UcMf4",
    authDomain: "healinglineimg.firebaseapp.com",
    projectId: "healinglineimg",
    storageBucket: "healinglineimg.appspot.com",
    messagingSenderId: "279670227337",
    appId: "1:279670227337:web:bf33a0f49a3de2d5c6e158",
    measurementId: "G-G2RCJN4HJD"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);