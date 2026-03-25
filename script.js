// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Trial Button Interaction
const trialBtn = document.getElementById('trial-btn');

if (trialBtn) {
    trialBtn.addEventListener('click', () => {
        // In the future, this could open a modal or redirect to a signup form
        alert("Thanks for your interest! Call us at (555) 123-4567 or visit us in Calhoun to start your free week of training.");
    });
}

// Basic Mobile Menu Toggle Logging (Foundation for future expanding menu)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        // Toggles display on mobile
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.right = '5%';
        navLinks.style.backgroundColor = '#0b1115';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '8px';
    });
}
