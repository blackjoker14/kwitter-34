const firebaseConfig = {
      apiKey: "AIzaSyBSMcjtpZebwnPNq93Bb5Q4lmzP4BoES-E",
      authDomain: "database-of-kwitter-app.firebaseapp.com",
      databaseURL: "https://database-of-kwitter-app-default-rtdb.firebaseio.com",
      projectId: "database-of-kwitter-app",
      storageBucket: "database-of-kwitter-app.appspot.com",
      messagingSenderId: "829237162866",
      appId: "1:829237162866:web:f0878b7c777b6a1eda63eb",
      measurementId: "G-ESM2XTSYYT"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" +Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
