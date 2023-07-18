import { initializeApp } from "firebase/app";
import { GoodsAPI, GoodsItem } from "./types";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export const initializeAPI = () => {
  initializeApp({
    apiKey: "AIzaSyCWDDasjKyXJV1FqtuwIyg3sYikxtMm8t0",
    authDomain: "karpov-frontend-homework.firebaseapp.com",
    projectId: "karpov-frontend-homework",
    storageBucket: "karpov-frontend-homework.appspot.com",
    messagingSenderId: "169428170688",
    appId: "1:169428170688:web:bfddea098b66071710fa25"
  });

  getFirestore();
};