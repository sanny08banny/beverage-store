import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdZZ9gTP_1X-tfLLDWM_pJy0HHVw_2akE",
  authDomain: "naturaw-fcde8.firebaseapp.com",
  databaseURL: "https://naturaw-fcde8-default-rtdb.firebaseio.com",
  projectId: "naturaw-fcde8",
  storageBucket: "naturaw-fcde8.firebasestorage.app",
  messagingSenderId: "414714648432",
  appId: "1:414714648432:web:f2a87ddefe4b17163fa1b5",
  measurementId: "G-JLEQF80WTP"
};

let app: FirebaseApp;
let realtimeDB: Database;
let firestore: Firestore;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

realtimeDB = getDatabase(app);
firestore = getFirestore(app);

export { app, realtimeDB, firestore };
