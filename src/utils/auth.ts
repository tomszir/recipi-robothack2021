import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "@/firebase";

export const loginWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

export const logout = () => {
  return signOut(auth);
};
