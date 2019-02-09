import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from '../firebase/firebase.js';

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginFacebook = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

export const startLoginTwitter = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const startCreateLoginEmail = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
};

export const startLoginWithEmail = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
};
