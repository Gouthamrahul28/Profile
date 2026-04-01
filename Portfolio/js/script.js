// Set active navbar link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Close navbar when link is clicked on mobile
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks2 = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks2.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate inputs
            let errors = [];
            
            if (!fullName) {
                errors.push('Full Name is required');
            }
            
            if (!email) {
                errors.push('Email is required');
            } else if (!isValidEmail(email)) {
                errors.push('Email format is invalid');
            }
            
            if (!phone) {
                errors.push('Phone Number is required');
            } else if (!isValidPhone(phone)) {
                errors.push('Phone Number must be 10 digits');
            }
            
            if (!subject) {
                errors.push('Subject is required');
            }
            
            if (!message) {
                errors.push('Message is required');
            }
            
            // Display errors or success
            const alertDiv = document.getElementById('formAlert');
            
            if (errors.length > 0) {
                displayAlert(alertDiv, 'danger', 'Please fix the following errors:', errors);
                return false;
            } else {
                displayAlert(alertDiv, 'success', 'Success!', ['Your message has been sent successfully. We will contact you soon.']);
                form.reset();
                
                // Hide alert after 5 seconds
                setTimeout(() => {
                    alertDiv.innerHTML = '';
                }, 5000);
                
                return false;
            }
        });
    }
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone Validation
function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Display Alert
function displayAlert(alertDiv, type, title, messages) {
    let alertHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`;
    alertHTML += `<strong>${title}</strong><br>`;
    alertHTML += messages.join('<br>');
    alertHTML += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertHTML += `</div>`;
    
    alertDiv.innerHTML = alertHTML;
}

// Initialize tooltips and popovers
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Call validation function
validateForm();

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});
