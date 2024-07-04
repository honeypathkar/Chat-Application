import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_REACT_APP_CHAT_APPLICATION_API ||
    "AIzaSyAFEwVcNeabCnFDrVMNo69DsNDrcoKJ2Fk",
  authDomain: "chat-1f088.firebaseapp.com",
  projectId: "chat-1f088",
  storageBucket: "chat-1f088.appspot.com",
  messagingSenderId: "778887104872",
  appId:
    import.meta.env.VITE_REACT_APP_CHAT_APPLICATION_APP_ID ||
    "1:778887104872:web:5ff29d1cfcec5096f52edd",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
