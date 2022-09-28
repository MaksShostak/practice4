// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRFz6WQw_qFHjgIAF0J5Am-AGDYCgRSv0',
  authDomain: 'practice4-5862d.firebaseapp.com',
  projectId: 'practice4-5862d',
  storageBucket: 'practice4-5862d.appspot.com',
  messagingSenderId: '658390773940',
  appId: '1:658390773940:web:d41cca18d8d6447e5927e1',
  databaseURL:
    'https://practice4-5862d-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
