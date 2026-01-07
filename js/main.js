// TermIDE Landing Page - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initCopyButtons();
    initLightbox();
    initSmoothScroll();
    initScrollAnimations();
});

// Copy to Clipboard
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const textToCopy = btn.dataset.copy;

            try {
                await navigator.clipboard.writeText(textToCopy);
                showCopyFeedback(btn);
            } catch (err) {
                // Fallback for older browsers
                fallbackCopy(textToCopy);
                showCopyFeedback(btn);
            }
        });
    });
}

function showCopyFeedback(btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="copy-icon" style="color: var(--primary);">[ok]</span>';
    btn.classList.add('copied');

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('copied');
    }, 1500);
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

// Lightbox for Screenshots
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-frame:not(.placeholder .gallery-frame)');

    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            item.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    // Observe install cards
    document.querySelectorAll('.install-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add animate-in styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Glitch effect on scroll for section titles
const glitchTitles = document.querySelectorAll('.section-title');
let glitchTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(glitchTimeout);
    glitchTimeout = setTimeout(() => {
        glitchTitles.forEach(title => {
            const rect = title.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible) {
                title.classList.add('glitch-active');
                setTimeout(() => {
                    title.classList.remove('glitch-active');
                }, 200);
            }
        });
    }, 100);
});

// Random glitch effect style
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .glitch-active {
            animation: glitch 0.2s infinite;
            text-shadow: -2px 0 var(--secondary), 2px 0 var(--tertiary);
        }
    </style>
`);

// Console Easter Egg
console.log('%c TermIDE ', 'background: #40ff40; color: #0a0a0f; font-size: 24px; font-weight: bold; font-family: monospace;');
console.log('%c Terminal-native IDE for hackers ', 'color: #40ff40; font-size: 14px; font-family: monospace;');
console.log('%c https://github.com/termide/termide ', 'color: #888; font-size: 12px; font-family: monospace;');
