import firebase from 'firebase/app';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyC61ppb8qOKkJB-5mBWDeIlUFxtjFfpdDs",
    authDomain: "vasanam-pesto.firebaseapp.com",
    projectId: "vasanam-pesto",
    storageBucket: "vasanam-pesto.appspot.com",
    messagingSenderId: "832728043601",
    appId: "1:832728043601:web:6e7b32ceeb95b2884a6870",
    measurementId: "G-NPCJHKE3C3"
};
// const config = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASE_URL,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// 	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
var app;
if (!firebase.apps.length) {
	 app=firebase.initializeApp(firebaseConfig);
 }else {
	 app=firebase.app() // if already initialized, use that one
 }


export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
