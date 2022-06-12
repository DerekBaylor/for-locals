import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {addLocal} from './LocalData';

const _apiUrl = "https://localhost:7058/api/Local/";

const _doesUserExist = (firebaseKey) => {
    return getToken().then((token) =>
        fetch(`${_apiUrl}DoesUserExist/${firebaseKey}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(resp => resp.ok));
};

export const getToken = () => {
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
        throw new Error("Cannot get current user. Did you forget to login?");
    }
    return currentUser.getIdToken();
};

export const LoginLocal = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((signInResponse) => _doesUserExist(signInResponse.user.uid))
        .then((doesUserExist) => {
            if (!doesUserExist) {
                logout();

                throw new Error("The user exists in firebase, but not in the application database.");
            } else {
                _onLoginStatusChangedHandler(true);
            }
        }).catch(err => {
            console.error(err);
            throw err;
        });
};

export const logout = () => {
    firebase.auth().signOut()
};

export const register = (users, password) => {
    return firebase.auth().createUserWithEmailAndPassword(users.email, password)
        .then((createResponse) => addLocal({
            ...users,
            firebaseUserId: createResponse.user.uid
        }).then(() => _onLoginStatusChangedHandler(true)));
};

let _onLoginStatusChangedHandler = () => {
    throw new Error("There's no login status change handler. Did you forget to call 'onLoginStatusChange()'?")
};

export const onLoginStatusChange = (onLoginStatusChangedHandler) => {

    const unsubscribeFromInitialLoginCheck =
        firebase.auth().onAuthStateChanged(function initialLoadLoginCheck(user) {
            unsubscribeFromInitialLoginCheck();
            onLoginStatusChangedHandler(!!user);

            firebase.auth().onAuthStateChanged(function logoutCheck(user) {
                if (!user) {
                    onLoginStatusChangedHandler(false);
                }
            });
        });

    _onLoginStatusChangedHandler = onLoginStatusChangedHandler;
};