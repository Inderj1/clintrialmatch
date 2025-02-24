// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
  ],
  plugins: ["~/plugins/firebase.js"],
  nitro: {
    compatibilityDate: '2025-02-17',
    devProxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:8000',
      firebaseApiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.VUE_APP_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
    }
  },
  app: {
    head: {
      title: "Merix",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "favicon.png" },
        { 
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        }
      ],
    },
  },
});
