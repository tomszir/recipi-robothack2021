import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

import firebaseConfig from "./config.json";

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const firestore = getFirestore(firebase);

export const functions = getFunctions(firebase, "europe-west3");
// connectFunctionsEmulator(functions, "localhost", 5001);
