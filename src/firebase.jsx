import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyA4ZT662VG_DZEla1DhfZ_c9Wg9vXsFoks",
    authDomain: "cases-56f05.firebaseapp.com",
    projectId: "cases-56f05",
    storageBucket: "cases-56f05.firebasestorage.app",
    messagingSenderId: "756128699115",
    appId: "1:756128699115:web:7cefd3934ee750facf64ae",
    databaseURL: "https://cases-56f05-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
