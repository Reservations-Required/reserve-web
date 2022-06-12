import firebaseConfig from './firebase.json';
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";

const SERVER_URL = "http://localhost:8080/api";
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// only allow emails from Cornell domain
googleProvider.setCustomParameters({
  'hd': 'cornell.edu'
});

export const signInWithGoogle = async () => {
  async function addUser(id: string, name: string, email: string) {
    await fetch(`${SERVER_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        uid: id,
        name: name,
        authProvider: "google",
        email: email
      })
    });
  }

  try {
    // check is user is in database
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    // error if non-cornell domain
    if (!user.email!.endsWith("@cornell.edu")) {
      throw "Please sign in with your Cornell email.";
    }
    // otherwise, add the new user to database
    if (docs.docs.length === 0) {
      addUser(user.uid, user.displayName!, user.email!);
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
