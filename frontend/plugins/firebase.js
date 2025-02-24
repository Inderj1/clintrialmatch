import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ-aEYuz05JUeHBn7sQViEQxmOrdDR3hU",
  authDomain: "merix-app.firebaseapp.com",
  projectId: "merix-app",
  storageBucket: "merix-app.appspot.com",
  messagingSenderId: "898126982970",
  appId: "1:898126982970:web:YOUR_APP_ID",
  measurementId: "G-YOUR_MEASUREMENT_ID"
};

export default defineNuxtPlugin(async (nuxtApp) => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let analytics = null;

  // Only initialize analytics on client side and if supported
  if (process.client) {
    try {
      const isAnalyticsSupported = await isSupported();
      if (isAnalyticsSupported) {
        analytics = getAnalytics(app);
      }
    } catch (error) {
      console.warn('Firebase Analytics not initialized:', error);
    }
  }

  // Initialize Auth
  const auth = getAuth(app);

  return {
    provide: {
      firebase: app,
      analytics: analytics,
      auth: auth
    }
  }
});
