// Shared layout engine. Do not edit per-site — update this file only.
// Each site provides a SITE config object via js/site.js loaded before this script.
(function () {
  if (typeof SITE === 'undefined') {
    console.error(
      'layout.js: SITE is not defined. Ensure js/site.js is loaded before js/layout.js.',
    );
    return;
  }

  function renderTopBar() {
    return `<div class="top-bar">
      Available 24/7 for emergencies &mdash;
      <a href="${SITE.phone.href}">Call ${SITE.phone.display}</a>
      &mdash; Insurance accepted &amp; billed directly
    </div>`;
  }

  function renderHeader(activePage) {
    const navItems = SITE.nav
      .map(({ href, label }) => {
        const isActive = label.toLowerCase() === activePage.toLowerCase();
        return `<li><a href="${href}"${isActive ? ' class="active"' : ''}>${label}</a></li>`;
      })
      .join('\n            ');

    const mobileNavItems = SITE.nav
      .map(({ href, label }) => `<a href="${href}">${label}</a>`)
      .join('\n        ');

    return `<header class="site-header">
      <div class="header-inner">
        <a href="/" class="logo">
          <div class="logo-name">${SITE.name}</div>
          <div class="logo-tag">${SITE.tagline}</div>
        </a>
        <nav>
          <ul class="nav-links">
            ${navItems}
          </ul>
        </nav>
        <a href="${SITE.phone.href}" class="nav-phone">${SITE.phone.display}</a>
        <button class="hamburger" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="mobile-nav">
        ${mobileNavItems}
        <a href="${SITE.phone.href}" style="color: #d4a843; font-weight: 700; font-size: 20px; margin-top: 8px">
          ${SITE.phone.display}
        </a>
      </nav>
    </header>`;
  }

  function renderFooter() {
    const serviceLinks = SITE.footerServices
      .map(({ href, label }) => `<li><a href="${href}">${label}</a></li>`)
      .join('\n              ');

    return `<footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo-name" style="color: white">${SITE.name}</div>
            <div class="logo-tag">${SITE.tagline}</div>
            <p>${SITE.footerDesc}</p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              ${serviceLinks}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="insurance.html">Insurance Info</a></li>
              <li><a href="service-area.html">Service Area</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="${SITE.phone.href}">${SITE.phone.display}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} ${SITE.name} &bull; ${SITE.address}</span>
          <span>${SITE.footerNote}</span>
        </div>
      </div>
    </footer>`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var topBarMount = document.getElementById('top-bar-mount');
    var headerMount = document.getElementById('header-mount');
    var footerMount = document.getElementById('footer-mount');

    if (topBarMount) topBarMount.outerHTML = renderTopBar();
    if (headerMount) {
      var page = headerMount.getAttribute('data-page') || '';
      headerMount.outerHTML = renderHeader(page);
    }
    if (footerMount) footerMount.outerHTML = renderFooter();

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('open');
        });
        if (!isOpen) item.classList.add('open');
      });
    });
  });
})();
