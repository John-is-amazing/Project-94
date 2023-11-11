var firebaseConfig = {
    apiKey: "AIzaSyDpkMHAIw8UefGZGSt7T1Wf4vqMWcGdTX4",
    authDomain: "lets-chat-web-app-30763.firebaseapp.com",
    projectId: "lets-chat-web-app-30763",
    storageBucket: "lets-chat-web-app-30763.appspot.com",
    messagingSenderId: "389675528750",
    appId: "1:389675528750:web:674bc62790566bc42225bf"
};
  
firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
}