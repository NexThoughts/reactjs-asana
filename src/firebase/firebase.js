import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAULXt-wozTX96wfx7KePg5mx-I6Apb278",
    authDomain: "todo-e0f0a.firebaseapp.com",
    databaseURL: "https://todo-e0f0a.firebaseio.com",
    projectId: "todo-e0f0a",
    storageBucket: "todo-e0f0a.appspot.com",
    messagingSenderId: "619532363739",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    auth,db,
};