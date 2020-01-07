import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOOLex973p90GwR02Gj0TxL_U0Sy9mEmU",
    authDomain: "techshop-40d44.firebaseapp.com",
    databaseURL: "https://techshop-40d44.firebaseio.com",
    projectId: "techshop-40d44",
    storageBucket: "techshop-40d44.appspot.com",
    messagingSenderId: "2053780483",
    appId: "1:2053780483:web:e798f47befec9993d8ca36"
};

firebase.initializeApp(config);

//userAuth is coming from data that firebase stores.
//additionalData is for other data we would need
export const createUserProfileDocument = async(userAuth, additionalData) => {
    //if theres no userAuth, exit from statement
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snapshot will check if user exists
    const snapShot = await userRef.get();

    //this will create a new user in the database
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;