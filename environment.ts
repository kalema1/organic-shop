// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACos05xZntOnC7Nnz1-WP94-fXyKbGRh8',
  authDomain: 'oshop-dea0d.firebaseapp.com',
  projectId: 'oshop-dea0d',
  storageBucket: 'oshop-dea0d.firebasestorage.app',
  messagingSenderId: '163055397205',
  appId: '1:163055397205:web:00fe34fecd4041df1767dc',
  measurementId: 'G-24FSBHQ3YQ',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
