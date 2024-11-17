function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    // Email pattern to check for valid format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all required fields are filled
    if (!name) {
        alert("Name is required.");
        return false;
    }

    if (!email) {
        alert("Email is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!subject) {
        alert("Subject is required.");
        return false;
    }

    if (!message) {
        alert("Message is required.");
        return false;
    }

    // If all fields are valid, submit the form
    alert("Form submitted successfully!");
    return true;
}
