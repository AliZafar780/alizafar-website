/* ============================================
   Ali Zafar — Portfolio Website
   JavaScript: Menu, Animations, Counters, Forms, Cursor
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  'use strict';

  // ==========================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================
  // 2. SMOOTH SCROLLING for nav links
  // ==========================================
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, '', targetId);
        }
      }
    });
  });

  // ==========================================
  // 3. ACTIVE NAV LINK HIGHLIGHTING
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  window.addEventListener('load', updateActiveNavLink);

  // ==========================================
  // 4. ANIMATED COUNTERS
  // ==========================================
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'), 10);
    if (isNaN(target) || target <= 0) return;

    const suffix = element.textContent.replace(/[\d,]/g, '').trim();
    const duration = 2000; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * target);

      element.textContent = currentValue.toLocaleString() + (suffix ? ' ' + suffix : '');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString() + (suffix ? ' ' + suffix : '');
      }
    }

    requestAnimationFrame(update);
  }

  // Intersection Observer for counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ==========================================
  // 5. SCROLL-BASED FADE-IN ANIMATIONS
  // ==========================================
  const animateElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .fade-in-up'
  );

  if (animateElements.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(el => scrollObserver.observe(el));
  }

  // ==========================================
  // 6. FORM SUBMISSION HANDLING
  // ==========================================

  // Contact form
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#e74c3c';
          valid = false;
        } else {
          input.style.borderColor = '';
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            input.style.borderColor = '#e74c3c';
            valid = false;
          }
        }
      });

      if (!valid) {
        // Show error briefly
        const firstInvalid = contactForm.querySelector('[style*="border-color: #e74c3c"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulate submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        if (formSuccess) {
          formSuccess.classList.add('show');
          contactForm.reset();
        }
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Hide success after 5 seconds
        setTimeout(() => {
          if (formSuccess) formSuccess.classList.remove('show');
        }, 5000);
      }, 1200);
    });

    // Clear error styling on input
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
      input.addEventListener('change', () => {
        input.style.borderColor = '';
      });
    });
  }

  // Free download form
  const freeForm = document.querySelector('.free-form');
  if (freeForm) {
    freeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = freeForm.querySelector('input');
      const btn = freeForm.querySelector('button');

      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        input.style.borderColor = '#e74c3c';
        return;
      }

      input.style.borderColor = '';
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Sent! Check your inbox';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
        freeForm.reset();
      }, 1200);
    });

    freeForm.querySelector('input').addEventListener('input', function () {
      this.style.borderColor = '';
    });
  }

  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const btn = newsletterForm.querySelector('button');

      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        input.style.borderColor = '#e74c3c';
        return;
      }

      input.style.borderColor = '';
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
      newsletterForm.reset();
    });

    newsletterForm.querySelector('input').addEventListener('input', function () {
      this.style.borderColor = '';
    });
  }

  // ==========================================
  // 7. CUSTOM CURSOR DOT
  // ==========================================
  const cursorDot = document.querySelector('.cursor-dot');

  if (cursorDot) {
    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      let mouseX = 0;
      let mouseY = 0;
      let dotX = 0;
      let dotY = 0;

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      // Smooth cursor with requestAnimationFrame
      function animateCursor() {
        dotX += (mouseX - dotX) * 0.15;
        dotY += (mouseY - dotY) * 0.15;

        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
      }

      animateCursor();

      // Hide cursor on window blur
      document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
      });

      document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
      });

      // Enlarge on interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, .service-card, .product-card, .article-card, .testimonial-card, .value-card, .pricing-tier'
      );

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorDot.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorDot.classList.remove('hovering'));
      });

    } else {
      cursorDot.style.display = 'none';
    }
  }

  // ==========================================
  // 8. NAVBAR SCROLL EFFECT
  // ==========================================
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Hide/show navbar on scroll direction
      if (scrollY > lastScrollY && scrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
    }, { passive: true });
  }

  // ==========================================
  // 9. RESPONSIVE GRID FIX for uneven cards
  // ==========================================
  function equalizeCardHeights() {
    // Optional: keep for future enhancement
  }

  window.addEventListener('resize', equalizeCardHeights);

  console.log('Ali Zafar — Portfolio loaded successfully');
  console.log('Built with AI · Islamabad, Pakistan 🇵🇰');
});
