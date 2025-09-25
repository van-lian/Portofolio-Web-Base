// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling and active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ===== PROJECT CARDS ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for project cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// ===== SECTION REVEAL ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced section animation with fade-out
    const sections = document.querySelectorAll('section');
    let currentVisibleSection = null;
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = entry.target;
            const isIntersecting = entry.isIntersecting;
            const intersectionRatio = entry.intersectionRatio;
            
            if (isIntersecting && intersectionRatio > 0.3) {
                // Section is entering view
                if (currentVisibleSection && currentVisibleSection !== section) {
                    currentVisibleSection.classList.remove('visible');
                    currentVisibleSection.classList.add('fade-out');
                }
                
                section.classList.remove('fade-out');
                section.classList.add('visible');
                currentVisibleSection = section;
            } else if (!isIntersecting && currentVisibleSection === section) {
                // Section is leaving view
                section.classList.remove('visible');
                section.classList.add('fade-out');
            }
        });
    }, { 
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '0px 0px -20% 0px'
    });

    // Initialize sections
    sections.forEach((section, index) => {
        section.classList.add('reveal');
        
        // First section should be visible immediately
        if (index === 0) {
            section.classList.add('visible');
            currentVisibleSection = section;
        }
        
        sectionObserver.observe(section);
    });

    // Handle scroll to bottom - prevent fade-out on last section
    window.addEventListener('scroll', () => {
        const lastSection = sections[sections.length - 1];
        const rect = lastSection.getBoundingClientRect();
        const isAtBottom = rect.bottom <= window.innerHeight + 100;
        
        if (isAtBottom && currentVisibleSection !== lastSection) {
            // Fade out current section and show last section
            if (currentVisibleSection) {
                currentVisibleSection.classList.remove('visible');
                currentVisibleSection.classList.add('fade-out');
            }
            lastSection.classList.remove('fade-out');
            lastSection.classList.add('visible');
            currentVisibleSection = lastSection;
        }
    });
});

// ===== SKILL TAGS HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== PARALLAX BACKGROUND EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.bg-animation');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });
});

// ===== BUTTON RIPPLE EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ===== UTILITY FUNCTIONS =====
// Add any utility functions here if needed in the future

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-based animations can be added here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);
