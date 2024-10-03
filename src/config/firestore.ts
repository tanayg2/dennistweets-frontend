import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)

// Initialize Firestore and Storage
const db = getFirestore(app)
// const storage = getStorage(app, "/messages")

// // Initialize Firebase Auth and GoogleAuthProvider
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// // Function to initiate sign-in with Google
// const signInWithGoogle = async () => {
//   await setPersistence(auth, browserLocalPersistence)
//     .then(async () => {
//       return signInWithPopup(auth, provider)
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       console.error(`Error during sign-in: ${errorCode}, ${errorMessage}`)
//     })
// }

export { app, db }
