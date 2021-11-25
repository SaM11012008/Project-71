import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  //Add configuration here
  apiKey: "AIzaSyBjJPPo8fZD5vW_WVP-s6sOE5iCfTuLaNI",
  authDomain: "complaintforum-966a3.firebaseapp.com",
  databaseURL: "https://complaintforum-966a3-default-rtdb.firebaseio.com",
  projectId: "complaintforum-966a3",
  storageBucket: "complaintforum-966a3.appspot.com",
  messagingSenderId: "757426588148",
  appId: "1:757426588148:web:9f9a176a9c665c312c11a1"

};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

