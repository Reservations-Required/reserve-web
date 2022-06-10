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
  addDoc,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEJi2Pbk6xPvq6PEeaoPD67ye_Ro_GZc",
  authDomain: "reservations-required.firebaseapp.com",
  projectId: "reservations-required",
  storageBucket: "reservations-required.appspot.com",
  messagingSenderId: "140008611320",
  appId: "1:140008611320:web:d5dc1a41f3f99388fa8a0d",
  measurementId: "G-3HPWK4MV7H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
// only allow emails from Cornell domain
googleProvider.setCustomParameters({
  'hd': 'cornell.edu'
});
const signInWithGoogle = async () => {
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
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
};