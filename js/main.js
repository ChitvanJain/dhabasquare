/* ========================================
   DHABA SQUARE — Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hero Video Fallback ---------- */
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', () => {
      heroVideo.style.display = 'none';
    });
    // Pause video when out of viewport to save resources
    const heroSection = document.getElementById('hero');
    if (heroSection && 'IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heroVideo.play().catch(() => {});
          } else {
            heroVideo.pause();
          }
        });
      }, { threshold: 0.1 });
      videoObserver.observe(heroSection);
    }
  }

  /* ---------- Top Bar Scroll Hide ---------- */
  const topBar = document.getElementById('topBar');
  const header = document.getElementById('siteHeader');
  let lastScrollY = 0;

  /* ---------- Header Scroll Effect ---------- */
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Hide top bar on scroll down, show on scroll up
    if (scrollY > 120) {
      topBar.classList.add('hidden');
      header.classList.add('top-bar-hidden');
    } else {
      topBar.classList.remove('hidden');
      header.classList.remove('top-bar-hidden');
    }

    // Header background on scroll
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
  }, { passive: true });

  /* ---------- Mobile Nav ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  mobileNavClose.addEventListener('click', closeMobileNav);

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------- Active Nav Link on Scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 160;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  /* ---------- Scroll Reveal Animations ---------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ---------- Menu System ---------- */
  const menuGrid = document.getElementById('menuGrid');
  const menuTabs = document.querySelectorAll('.tab-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentTab = 'starters';
  let currentFilter = 'all';

  function renderMenu() {
    const items = MENU_DATA[currentTab] || [];
    menuGrid.innerHTML = '';

    items.forEach((item, i) => {
      // Apply filter
      if (currentFilter === 'veg' && item.type !== 'veg') return;
      if (currentFilter === 'nonveg' && item.type !== 'nonveg') return;
      if (currentFilter === 'musttry' && !item.mustTry) return;

      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${i * 0.05}s`;

      const indicator = item.type === 'veg'
        ? '<span class="veg-indicator"></span>'
        : '<span class="nonveg-indicator"></span>';

      const mustTryBadge = item.mustTry
        ? '<span class="must-try-badge">Must Try</span>'
        : '';

      card.innerHTML = `
        <div class="menu-card-left">
          <div class="menu-card-name">
            ${indicator}
            ${item.name}
            ${mustTryBadge}
          </div>
          <div class="menu-card-desc">${item.desc}</div>
        </div>
        <div class="menu-card-right">
          <span class="menu-card-price">${item.price}</span>
        </div>
      `;

      menuGrid.appendChild(card);
    });

    // Show empty state if no items match filter
    if (menuGrid.children.length === 0) {
      menuGrid.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:rgba(245,237,216,0.4);font-family:var(--font-accent);padding:40px 0;">No items match this filter in this category.</p>';
    }
  }

  // Tab clicks
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      renderMenu();
    });
  });

  // Filter clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderMenu();
    });
  });

  // Initial render
  renderMenu();

  /* ---------- Reviews Carousel ---------- */
  const reviewCards = document.querySelectorAll('.review-card');
  const dots = document.querySelectorAll('.dot');
  let currentReview = 0;
  let reviewInterval;

  function showReview(index) {
    reviewCards.forEach((card, i) => {
      card.classList.remove('active');
      card.style.transform = i < index ? 'translateX(-40px)' : 'translateX(40px)';
    });
    dots.forEach(d => d.classList.remove('active'));

    reviewCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentReview = index;
  }

  function nextReview() {
    const next = (currentReview + 1) % reviewCards.length;
    showReview(next);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(reviewInterval);
      showReview(parseInt(dot.dataset.index));
      reviewInterval = setInterval(nextReview, 6000);
    });
  });

  // Auto-rotate reviews
  reviewInterval = setInterval(nextReview, 6000);

  /* ---------- Video Lazy Load ---------- */
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');

  videoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
      const wrapper = placeholder.closest('.video-wrapper');
      const iframe = wrapper.querySelector('iframe');
      const realSrc = iframe.getAttribute('data-src');

      if (realSrc && realSrc !== 'about:blank') {
        // Add autoplay to the src
        const separator = realSrc.includes('?') ? '&' : '?';
        iframe.src = realSrc + separator + 'autoplay=1';
        placeholder.classList.add('loaded');
      }
    });
  });

  // Also lazy-load videos when they scroll into view (without autoplay)
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;
        const iframe = wrapper.querySelector('iframe');
        const realSrc = iframe.getAttribute('data-src');

        // Don't auto-load, but preconnect
        if (realSrc && realSrc.includes('youtube.com')) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = 'https://www.youtube.com';
          document.head.appendChild(link);
        }

        videoObserver.unobserve(wrapper);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.video-wrapper').forEach(w => videoObserver.observe(w));

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Lightbox (for gallery when real images are added) ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---------- Hero Parallax Effect (Video) ---------- */
  const heroVideoParallax = document.querySelector('.hero-video');
  if (heroVideoParallax) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;
      if (scrollY < heroHeight) {
        heroVideoParallax.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

});
