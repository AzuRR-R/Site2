// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('wtm_user') !== null;
}

// Function to handle WTM Challenge button click
function handleChallengeClick(event) {
    event.preventDefault();
    if (isLoggedIn()) {
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'login.html';
    }
}

// Initialize challenge buttons when document loads
document.addEventListener('DOMContentLoaded', function() {
    // Get all challenge buttons
    const challengeButtons = document.querySelectorAll('a.box:not(.transparent-box)');
    
    // Add click handler to each challenge button
    challengeButtons.forEach(button => {
        button.addEventListener('click', handleChallengeClick);
    });
});
