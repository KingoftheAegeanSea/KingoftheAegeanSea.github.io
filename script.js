// ============================================
// Nav: solid/blurred background once scrolled
// ============================================
const nav = document.getElementById('nav');

function updateNav() {
  if (window.scrollY > 24) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ============================================
// Scroll reveal with motion blur
// ============================================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealEls = document.querySelectorAll('.reveal');

// Stagger lab cards slightly so they don't all blur-in at once
document.querySelectorAll('.lab-card.reveal').forEach((el, i) => {
  el.style.setProperty('--reveal-delay', `${Math.min(i * 0.05, 0.3)}s`);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach((el) => revealObserver.observe(el));

// If motion is reduced, just show everything immediately rather than
// waiting on scroll thresholds tuned for the blur effect.
if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ============================================
// Rail / node activation per section
// ============================================
const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((el) => sectionObserver.observe(el));
