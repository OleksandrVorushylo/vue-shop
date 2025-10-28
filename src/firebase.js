import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

/*const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;*/

const API_KEY = 'AIzaSyDnvi0Yeq21mV2JcHcYLwtk5uoelcnZbaM';
const AUTH_DOMAIN = 'vue-shop-7e297.firebaseapp.com';
const PROJECT_ID = 'vue-shop-7e297';
const STORAGE_BUCKET = 'vue-shop-7e297.firebasestorage.app';
const MESSAGING_SENDER_ID = '770413457706';
const APP_ID = '1:770413457706:web:9804def9b931f1e581ae53';
const MEASUREMENT_ID = 'G-1EL24L41BV';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
