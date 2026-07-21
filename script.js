// =============================================
// SCROLL REVEAL
// Adds .visible to any element with class .reveal
// when it enters the viewport
// =============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});


// =============================================
// ACTIVE NAV LINK HIGHLIGHTING
// Highlights the nav link for whichever section
// is currently in view
// =============================================
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Reset all links
        navLinks.forEach((a) => (a.style.color = ''));

        // Highlight the matching link
        const active = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (active) active.style.color = 'var(--accent2)';
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => navObserver.observe(s));
