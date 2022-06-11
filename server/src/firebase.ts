import admin from 'firebase-admin';

var serviceAccount = require("../serviceAccount.json");

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db }