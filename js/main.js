/* ============================================
   MAIN JAVASCRIPT — QA Portfolio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  feather.replace();

  initNav();
  initFadeIn();
  initTyped();
  initBugFilter();
  initCaseTabs();
  initSkillBars();
});

/* -------- NAV -------- */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');
  const nav    = document.getElementById('nav');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Scroll shadow
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.style.background = window.scrollY > 20
        ? 'rgba(13,17,23,0.97)'
        : 'rgba(13,17,23,0.85)';
    }
  }, { passive: true });

  // Active link highlight based on scroll position
  highlightNavOnScroll();
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${entry.target.id}`) {
            a.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* -------- FADE IN -------- */
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* -------- TYPED TEXT HERO -------- */
function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const lines = [
    'running regression tests...',
    'found 1 critical bug 🐛',
    'writing test plan...',
    'automating with Cypress...',
    'all tests passed ✓',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = lines[lineIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(type, 300);
        return;
      }
    }

    setTimeout(type, deleting ? 35 : 65);
  }

  setTimeout(type, 600);
}

/* -------- BUG FILTER -------- */
function initBugFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const bugs    = document.querySelectorAll('.bug-card');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      bugs.forEach(bug => {
        if (filter === 'all' || bug.dataset.severity === filter) {
          bug.classList.remove('hidden');
        } else {
          bug.classList.add('hidden');
        }
      });
    });
  });
}

/* -------- CASE STUDY TABS -------- */
function initCaseTabs() {
  const tabGroups = document.querySelectorAll('.case-tabs');
  if (!tabGroups.length) return;

  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const panels  = group.querySelectorAll('.tab-panel');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  });
}


/* -------- SKILL BARS ANIMATION -------- */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  // Reset widths to 0 initially for animation
  bars.forEach(bar => {
    const pct = getComputedStyle(bar).getPropertyValue('--pct').trim();
    bar.style.setProperty('--pct', '0%');
    bar._targetPct = pct;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          setTimeout(() => {
            bar.style.setProperty('--pct', bar._targetPct);
          }, 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-category').forEach(cat => observer.observe(cat));
}
