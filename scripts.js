/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const enteredEmail = emailInput.value;

        if (enteredEmail) {
            // Display a thank you message with the entered email
            messageDiv.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list.`;
        } else {
            // Display an error message for empty email input
            messageDiv.textContent = "Please enter a valid email address.";
        }
    });
});
