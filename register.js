document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        handleRegister();
    });

    // Add input validation and visual feedback
    emailInput.addEventListener('input', function() {
        validateEmail(this);
    });

    passwordInput.addEventListener('input', function() {
        validatePassword(this);
        validatePasswordMatch();
    });

    confirmPasswordInput.addEventListener('input', function() {
        validatePasswordMatch();
    });

    phoneInput.addEventListener('input', function() {
        validatePhone(this);
    });
});

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input.value)) {
        input.style.borderColor = '#28a745';
        return true;
    } else {
        input.style.borderColor = '#dc3545';
        return false;
    }
}

function validatePassword(input) {
    // Password must be at least 6 characters
    if (input.value.length >= 6) {
        input.style.borderColor = '#28a745';
        return true;
    } else {
        input.style.borderColor = '#dc3545';
        return false;
    }
}

function validatePasswordMatch() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (confirmPassword.value === password.value && password.value.length >= 6) {
        confirmPassword.style.borderColor = '#28a745';
        return true;
    } else {
        confirmPassword.style.borderColor = '#dc3545';
        return false;
    }
}

function validatePhone(input) {
    const phoneRegex = /^[0-9+\-\s()]{6,20}$/;
    if (phoneRegex.test(input.value)) {
        input.style.borderColor = '#28a745';
        return true;
    } else {
        input.style.borderColor = '#dc3545';
        return false;
    }
}

function handleRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;

    // Validate all fields
    if (!name || !email || !password || !confirmPassword || !phone) {
        alert('Molimo popunite sva polja');
        return;
    }

    // Validate email format
    if (!validateEmail(document.getElementById('email'))) {
        alert('Molimo unesite ispravnu email adresu');
        return;
    }

    // Validate password
    if (!validatePassword(document.getElementById('password'))) {
        alert('Lozinka mora imati najmanje 6 znakova');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert('Lozinke se ne podudaraju');
        return;
    }

    // Validate phone
    if (!validatePhone(document.getElementById('phone'))) {
        alert('Molimo unesite ispravan broj telefona');
        return;
    }

    // Store user data and redirect immediately
    localStorage.setItem('wtm_user', JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        registrationTime: new Date().getTime()
    }));
    
    // Directly redirect to dashboard without showing success message
    window.location.href = 'dashboard.html';
}
