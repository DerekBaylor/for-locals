import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { auth } from './apiKeys';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const dbUrl = "https://localhost:7058/api/Local";

export const doesLocalExist = async () => {
  const idToken = sessionStorage.getItem("token");
  await axios.get(`${dbUrl}/auth`, { headers: { Authorization: "Bearer " + idToken, idToken: idToken}})
};

export const signInUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  export const signOutUser = () => new Promise((resolve, reject) => {
    getAuth()
    .signOut()
    .then(resolve)
    .catch(reject);
  });

export const getToken = () => {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
        throw new Error("Cannot get current user. Did you forget to login?");
    }
    return currentUser.getIdToken();
};
