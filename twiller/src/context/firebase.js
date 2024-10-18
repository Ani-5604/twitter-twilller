
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAToYCELZsjHSIN11-e2jIs2smYMTN9Iag",
    authDomain: "twitter-41825.firebaseapp.com",
    projectId: "twitter-41825",
    storageBucket: "twitter-41825.appspot.com",
    messagingSenderId: "387968284211",
    appId: "1:387968284211:web:035a0d1163a9b7d60a5546"
  };

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);