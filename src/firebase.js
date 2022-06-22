import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyDT0KhtQKm1KvtjbJNAcok9JLQKHbj3ZXY",
    authDomain: "rdh-2022.firebaseapp.com",
    databaseURL: "https://rdh-2022-default-rtdb.firebaseio.com",
    projectId: "rdh-2022",
    storageBucket: "rdh-2022.appspot.com",
    messagingSenderId: "928918459572",
    appId: "1:928918459572:web:9a2fc65dc4c02a0aa933e1"
};

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

initFirebase();

export { firebase }
