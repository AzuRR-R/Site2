document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin();
    });

    // Add input validation and visual feedback
    emailInput.addEventListener('input', function() {
        validateEmail(this);
    });

    passwordInput.addEventListener('input', function() {
        validatePassword(this);
    });
});

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input.value)) {
        input.style.borderColor = '#28a745';
    } else {
        input.style.borderColor = '#dc3545';
    }
}

function validatePassword(input) {
    if (input.value.length >= 6) {
        input.style.borderColor = '#28a745';
    } else {
        input.style.borderColor = '#dc3545';
    }
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        alert('Molimo unesite email i lozinku');
        return;
    }

    // Here you would typically make an API call to verify credentials
    // For demo purposes, we'll just store a simple login state
    if (email && password) {
        // Store login state
        localStorage.setItem('wtm_user', JSON.stringify({
            email: email,
            loginTime: new Date().getTime()
        }));
        
        // Get the redirect URL from localStorage if it exists
        const redirectUrl = localStorage.getItem('wtm_redirect') || 'dashboard.html';
        localStorage.removeItem('wtm_redirect'); // Clear the redirect URL
        
        // Redirect to the appropriate page
        window.location.href = redirectUrl;
    }
}
