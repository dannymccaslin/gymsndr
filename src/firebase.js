import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyC1f_pFsjEMdMfGJDUqmy8ueZRlbvoXXs8",
  authDomain: "gymsendr.firebaseapp.com",
  databaseURL: "https://gymsendr.firebaseio.com",
  projectId: "gymsendr",
  storageBucket: "gymsendr.appspot.com",
  messagingSenderId: "751394939859",
  appId: "1:751394939859:web:9e4b218cf38b19278e0526",
  measurementId: "G-4XKGVWVFQQ",
};

firebase.initializeApp(firebaseConfig);

//Default for Firebase Authentication
export const auth = firebase.auth();
//Initializes Firestore
export const firestore = firebase.firestore();
//Sign In With Google
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
//Create a user document in Firestore
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document ", error);
    }
  }
  return getUserDocument(user.uid);
};

//Get an existing user document
export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user ", error);
  }
};
