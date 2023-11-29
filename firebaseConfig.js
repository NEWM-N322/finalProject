//firebase configurations
import { initializeApp, getApp } from "firebase/app";
import {initializeAuth, getAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
        apiKey: "AIzaSyD5yZc3yzbEnNZcsKCGfqXInUkecGaNTqo",
        authDomain: "n322-zdc.firebaseapp.com",
        projectId: "n322-zdc",
        storageBucket: "n322-zdc.appspot.com",
        messagingSenderId: "264773910311",
        appId: "1:264773910311:web:d86500bed706cfb0bb7302",
        measurementId: "G-XZQ34EZH8M"
      };

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


const auth = getAuth(app);

export {app, auth, getApp, getAuth};