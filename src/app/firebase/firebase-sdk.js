import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: "healinglineimg.firebaseapp.com",
    projectId: "healinglineimg",
    storageBucket: "healinglineimg.appspot.com",
    messagingSenderId: "279670227337",
    appId: process.env.NEXT_PUBLIC_APPID,
    measurementId: "G-G2RCJN4HJD"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);