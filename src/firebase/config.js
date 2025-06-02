import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNH1NSsXoAdrEvbglhqeF5c8aVT22pHH4",
  authDomain: "byhijar-web.firebaseapp.com",
  projectId: "byhijar-web",
  storageBucket: "byhijar-web.appspot.com", // ← corregido aquí
  messagingSenderId: "511333116145",
  appId: "1:511333116145:web:6e54325fe7f871b2d4e150",
  measurementId: "G-9JWNYQVPB4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
