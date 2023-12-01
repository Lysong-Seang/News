// src/firebaseConfig.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const config = {

//     apiKey: "AIzaSyApbWBRFs9mfTp8-W5T1CgmTjW1MWzauQg",
//     authDomain: "fir-basic-e897a.firebaseapp.com",
//     projectId: "fir-basic-e897a",
//     storageBucket: "fir-basic-e897a.appspot.com",
//     messagingSenderId: "290586402093",
//     appId: "1:290586402093:web:951ec07637791cb06c47a4",
//     measurementId: "G-RCV646J6F9",
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const db = firebase.firestore();
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyApbWBRFs9mfTp8-W5T1CgmTjW1MWzauQg",
    authDomain: "fir-basic-e897a.firebaseapp.com",
    projectId: "fir-basic-e897a",
    storageBucket: "fir-basic-e897a.appspot.com",
    messagingSenderId: "290586402093",
    appId: "1:290586402093:web:951ec07637791cb06c47a4",
    measurementId: "G-RCV646J6F9",
    
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);
