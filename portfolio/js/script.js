// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('main section, .hero');
const navItems = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id') || 'about';
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Animate hero code icon on load
window.addEventListener('DOMContentLoaded', () => {
  const codeIcon = document.querySelector('.code-icon');
  if (codeIcon) {
    codeIcon.animate([
      { transform: 'scale(0.7) rotate(-10deg)', opacity: 0 },
      { transform: 'scale(1.1) rotate(5deg)', opacity: 1 },
      { transform: 'scale(1) rotate(0deg)', opacity: 1 }
    ], {
      duration: 900,
      easing: 'ease-out',
      fill: 'forwards'
    });
  }

  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = mobileNav.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    // Accessibility
    hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('open'));
    mobileNav.setAttribute('aria-hidden', !mobileNav.classList.contains('open'));
  });

  // Close mobile nav when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });
}); 