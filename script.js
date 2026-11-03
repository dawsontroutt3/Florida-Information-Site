document.getElementById("contact-form").addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
        alert("The email addresses do not match. Please try again.");
    }

    // This form isn't meant to send data to a server,
    // so stop the page from reloading
    event.preventDefault();
});