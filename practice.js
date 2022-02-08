const firebaseConfig = {
    apiKey: "AIzaSyB3dUTPeKwwG6aPlsTbU9aahzCPtKcJ2sU",
    authDomain: "chat-website-496d4.firebaseapp.com",
    databaseURL: "https://chat-website-496d4-default-rtdb.firebaseio.com",
    projectId: "chat-website-496d4",
    storageBucket: "chat-website-496d4.appspot.com",
    messagingSenderId: "505403305780",
    appId: "1:505403305780:web:1201107d7affcb8f3fff61",
    measurementId: "G-GPP9M9TSF0"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}