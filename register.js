document.addEventListener("DOMContentLoaded", function() {
    // Initially, show only the login form
    document.getElementById('register').style.display = 'none';

    // Function to show the registration form
    window.showRegisterForm = function() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'block';
    };

    // Function to show the login form
    window.showLoginForm = function() {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'none';
    };
});
