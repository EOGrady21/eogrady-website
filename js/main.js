/**
 * Main JavaScript Module
 * 
 * Handles common functionality across all pages including:
 * - Mobile navigation menu toggle
 * - Project carousel interactions
 * - Touch and mouse event handling
 */

/* =============================================================================
   Navigation Menu Functions
   ============================================================================= */

/**
 * Initializes the hamburger menu toggle functionality
 * Used across all pages for mobile navigation
 */
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

/* =============================================================================
   Project Carousel Functions
   ============================================================================= */

/**
 * Initializes the project carousel functionality
 * Handles both mouse navigation and touch scrolling
 */
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!track) return; // Exit if carousel doesn't exist on this page
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.project-slide');
    const totalSlides = slides.length;
    
    /**
     * Updates the carousel position based on current slide index
     */
    function updateCarouselPosition() {
        if (window.innerWidth <= 700) {
            // On mobile, let native scrolling handle positioning
            return;
        }
        
        const slideWidth = slides[0].offsetWidth + 20; // Include gap
        const offset = currentSlide * slideWidth;
        track.style.transform = `translateX(-${offset}px)`;
    }
    
    /**
     * Moves to the next slide in the carousel
     */
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateCarouselPosition();
        }
    }
    
    /**
     * Moves to the previous slide in the carousel
     */
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarouselPosition();
        }
    }
    
    // Add event listeners for carousel buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Update carousel position on window resize
    window.addEventListener('resize', function() {
        updateCarouselPosition();
    });
    
    // Initialize carousel position
    updateCarouselPosition();
}

/* =============================================================================
   Accessibility Enhancements
   ============================================================================= */

/**
 * Adds keyboard navigation support for interactive elements
 */
function initializeAccessibility() {
    // Add keyboard support for carousel navigation
    const carouselBtns = document.querySelectorAll('.carousel-btn');
    carouselBtns.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
    
    // Add keyboard support for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = btn.href;
            }
        });
    });
}

/* =============================================================================
   Smooth Scrolling Enhancement
   ============================================================================= */

/**
 * Adds smooth scrolling behavior for anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =============================================================================
   Page Load Performance
   ============================================================================= */

/**
 * Optimizes image loading for better performance
 */
function initializeLazyLoading() {
    // Add lazy loading to images that aren't immediately visible
    const images = document.querySelectorAll('img:not([loading])');
    
    images.forEach(img => {
        // Skip hero images and profile pictures that should load immediately
        if (!img.closest('#hero') && !img.classList.contains('profile-pic')) {
            img.loading = 'lazy';
        }
    });
}

/* =============================================================================
   Module Initialization
   ============================================================================= */

/**
 * Main initialization function called when DOM is ready
 * Initializes all interactive components and enhancements
 */
function initializeWebsite() {
    initializeNavigation();
    initializeCarousel();
    initializeAccessibility();
    initializeSmoothScrolling();
    initializeLazyLoading();
}

/* =============================================================================
   Event Listeners
   ============================================================================= */

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Handle browser back/forward navigation
window.addEventListener('popstate', function() {
    // Refresh carousel state if returning to a page with carousel
    if (document.querySelector('.carousel-track')) {
        initializeCarousel();
    }
});