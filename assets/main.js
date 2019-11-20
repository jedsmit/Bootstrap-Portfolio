
//$(document).ready(function () {


var firebaseConfig = {
    apiKey: "AIzaSyDF102_p55fHzx8CalsFYJoBYQzUsmDrSA",
    authDomain: "portfolio-56c29.firebaseapp.com",
    databaseURL: "https://portfolio-56c29.firebaseio.com",
    projectId: "portfolio-56c29",
    storageBucket: "portfolio-56c29.appspot.com",
    messagingSenderId: "729206397885",
    appId: "1:729206397885:web:3fa49dd56ad0e5598a10d4"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref("messages");

$("#submit").on("click", function (event) {
    event.preventDefault();
    //get form data
    var nameInput = $("#name-input").val().trim();
    var emailInput = $("#email-input").val().trim();
    var messageInput = $("#message-input").val().trim();

    console.log(nameInput);
    //temporary new contact object
    var newMessage = {
        name: nameInput,
        email: emailInput,
        message: messageInput
    };
    console.log(newMessage);

    database.push().set(newMessage);

    //clears the form
    $("#name-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");



});//end of sumbit click function
//});