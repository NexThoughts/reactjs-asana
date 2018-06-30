import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCM4_PbfOnrMEtExtsz7UfUP_A680_QLVw",
    authDomain: "asana-react-hackathon.firebaseapp.com",
    databaseURL: "https://asana-react-hackathon.firebaseio.com",
    projectId: "asana-react-hackathon",
    storageBucket: "asana-react-hackathon.appspot.com",
    messagingSenderId: "417426213739"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();
  export{
      auth,
  };

  