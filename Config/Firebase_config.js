// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc} from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID } from '@env';


const updateProfileImage = async (imageUrl) => {
  if (!auth.currentUser) return;

  // Update in Firebase Authentication
  await updateProfile(auth.currentUser, {
    photoURL: imageUrl
  });

  // Save the URL in Firestore
  const userRef = doc(db, "users", auth.currentUser.uid);
  await setDoc(userRef, { photoURL: imageUrl }, { merge: true });
};


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const  db = getFirestore(app);