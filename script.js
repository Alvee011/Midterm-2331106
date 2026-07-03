function showWelcome() {
    alert("Welcome to Alvee's Game Shop! Browse our products and enjoy gaming!");
}

function sendMessage() {
    var name = document.getElementById("nameBox").value;
    var email = document.getElementById("emailBox").value;
    var msg = document.getElementById("msgBox").value;

    if (name == "" || email == "" || msg == "") {
        alert("Please fill in all fields before sending.");
    }
    else {
        alert("Thank you " + name + "! Your message has been sent. We will reply to " + email + " soon.");
        document.getElementById("nameBox").value = "";
        document.getElementById("emailBox").value = "";
        document.getElementById("msgBox").value = "";
    }
}