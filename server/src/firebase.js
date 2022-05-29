import { initializeApp } from 'firebase/app';
import { getFirestore, setLogLevel, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnEJi2Pbk6xPvq6PEeaoPD67ye_Ro_GZc",
  authDomain: "reservations-required.firebaseapp.com",
  projectId: "reservations-required",
  storageBucket: "reservations-required.appspot.com",
  messagingSenderId: "140008611320",
  appId: "1:140008611320:web:d5dc1a41f3f99388fa8a0d",
  measurementId: "G-3HPWK4MV7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(db);

setLogLevel("debug");

async function test () {
  const snapshot = await getDocs(collection(db, "Buildings"));
  snapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

test()

export { db };