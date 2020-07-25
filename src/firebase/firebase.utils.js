import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBgZBiLU8gWm5N3nNJUG2yipsKNmlyO-w',
  authDomain: 'master-d53d2.firebaseapp.com',
  databaseURL: 'https://master-d53d2.firebaseio.com',
  projectId: 'master-d53d2',
  storageBucket: 'master-d53d2.appspot.com',
  messagingSenderId: '312070331564',
  appId: '1:312070331564:web:8faf2c6aac8bff191e5309',
  measurementId: 'G-M4QLMF92KD',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userData, additionalData) => {
  if (!userData) return;

  const userRef = firestore.doc(`users/${userData.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {displayName, email} = {
      displayName: 'sriram',
      email: 'sriram@test.com',
    };
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user`, error.message);
    }
  }

  return userRef;
};

export default firebase;
