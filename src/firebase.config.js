import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYVoEdwI9krD42dM2r58QcvXC7jUEDmB0',
  authDomain: 'house-marketplace-70715.firebaseapp.com',
  projectId: 'house-marketplace-70715',
  storageBucket: 'house-marketplace-70715.appspot.com',
  messagingSenderId: '290549338504',
  appId: '1:290549338504:web:1e32e3cf6fbe0a9761ea3d',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
