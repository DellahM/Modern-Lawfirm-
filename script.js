// Sticky Header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Hamburger Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Animated Text and Form
document.addEventListener('DOMContentLoaded', function() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    const heroForm = document.querySelector('.hero-form');

    // Animate text
    animatedTexts.forEach(text => {
        setTimeout(() => {
            text.classList.add('visible');
        }, 500);
    });

    // Animate form
    if (heroForm) {
        setTimeout(() => {
            heroForm.classList.add('visible');
        }, 1000);
    }
});

// Animate Elements on Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Animate elements on scroll
    function animateOnScroll() {
        // Animate services section headings
        const headings = document.querySelectorAll('.animate-on-scroll');
        headings.forEach(heading => {
            if (isInViewport(heading)) {
                heading.classList.add('visible');
            } else {
                heading.classList.remove('visible');
            }
        });

        // Animate service cards with staggered delay
        const servicesSection = document.querySelector('.services');
        if (servicesSection && isInViewport(servicesSection)) {
            const cards = document.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, 300 * index);
            });
        }

        // Animate "How We Stay Winning" section
        const winningSection = document.querySelector('.winning');
        if (winningSection && isInViewport(winningSection)) {
            winningSection.classList.add('animate');
        }
    }

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});

// Footer Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const footerForm = document.querySelector('.footer-form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form input values
            const nameInput = footerForm.querySelector('input[type="text"]');
            const emailInput = footerForm.querySelector('input[type="email"]');
            const messageInput = footerForm.querySelector('textarea');
            
            // Simple validation
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create data object (for when you implement server-side processing)
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            };
            
            // For demonstration purposes only - replace with actual form submission
            console.log('Form submission data:', formData);
            
            // Show confirmation message
            const submitBtn = footerForm.querySelector('.submit-btn');
            submitBtn.textContent = 'Message Sent!';
            submitBtn.disabled = true;
            
            // Reset form
            setTimeout(function() {
                footerForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});

// WhatsApp Link Functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.querySelector('.whatsapp-contact');
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function() {
            const phoneNumber = '1234567890'; // Replace with your actual WhatsApp number
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
        });
        whatsappLink.style.cursor = 'pointer';
    }
});

// Podcast Functionality
document.addEventListener('DOMContentLoaded', function() {
    const podcastCards = document.querySelectorAll('.podcast-card');
    const popup = document.getElementById('videoPopup');
    const closeBtn = document.getElementById('closePopup');
    const videoFrame = document.getElementById('youtubeFrame');
    
    // Open popup when a podcast card is clicked
    podcastCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            popup.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close popup when close button is clicked
    closeBtn.addEventListener('click', function() {
        closePopup();
    });
    
    // Close popup when clicking outside the content
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // Close popup when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
    
    // Function to close popup
    function closePopup() {
        popup.classList.remove('active');
        videoFrame.src = ''; // Stop video playback
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// Make CTA buttons visible
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    // Add visible class with slight delay for animation effect
    ctaButtons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add('visible');
        }, 800 + (index * 200)); // Staggered delay for multiple buttons
    });
});