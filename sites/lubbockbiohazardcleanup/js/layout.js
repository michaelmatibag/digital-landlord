// ── PHONE NUMBER ──
const PHONE_DISPLAY = '(806) 545-8406';
const PHONE_HREF = 'tel:+18065458406';
const PHONE_LABEL = 'Available 24 hours, 7 days a week';

// ── BUSINESS INFO ──
const BUSINESS_NAME = 'Lubbock Biohazard Cleanup';
const BUSINESS_TAGLINE = 'Professional Crime Scene & Biohazard Cleanup';
const BUSINESS_CITY = 'Lubbock, TX';
const BUSINESS_ADDRESS = 'Lubbock, TX 79401';
const BUSINESS_EMAIL = 'info@lubbockbiohazardcleanup.com';

function renderEmergencyBar() {
  return `
  <div class="emergency-bar">
    Available 24/7 for emergency response &mdash;
    <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a>
    &mdash; We work directly with insurance carriers
  </div>`;
}

function renderHeader(activePage = '') {
  const nav = [
    { href: 'index.html', label: 'Home' },
    { href: 'services.html', label: 'Services' },
    { href: 'service-area.html', label: 'Service Area' },
    { href: 'insurance.html', label: 'Insurance' },
    { href: 'about.html', label: 'About' },
  ];
  const navLinks = nav
    .map((n) => {
      const active = n.label.toLowerCase() === activePage.toLowerCase() ? ' active' : '';
      return `<a href="${n.href}" class="${active}">${n.label}</a>`;
    })
    .join('');

  return `
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo">
        ${BUSINESS_NAME}
        <span>${BUSINESS_TAGLINE}</span>
      </a>
      <nav>
        ${navLinks}
        <a href="contact.html" class="nav-cta">Free Consultation</a>
      </nav>
      <div class="header-phone">
        <span class="label">Call Anytime</span>
        <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a>
      </div>
    </div>
  </header>
  <div class="mobile-cta">
    <a href="${PHONE_HREF}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      Call Now &mdash; ${PHONE_DISPLAY}
    </a>
  </div>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">${BUSINESS_NAME}<span>${BUSINESS_CITY}</span></div>
          <p>Professional, discreet, and compassionate biohazard and crime scene cleanup services for Lubbock and surrounding West Texas communities. Available 24 hours a day, 7 days a week.</p>
          <p style="margin-top:0.75rem; font-size:0.8rem;">${BUSINESS_ADDRESS}<br>${BUSINESS_EMAIL}</p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#homicide">Homicide Cleanup</a></li>
            <li><a href="services.html#suicide">Suicide Cleanup</a></li>
            <li><a href="services.html#unattended">Unattended Death</a></li>
            <li><a href="services.html#biohazard">Biohazard Removal</a></li>
            <li><a href="services.html#hoarding">Hoarding Cleanup</a></li>
            <li><a href="services.html#trauma">Trauma Scene</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="insurance.html">Insurance Coverage</a></li>
            <li><a href="service-area.html">Service Area</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="${PHONE_HREF}">Call: ${PHONE_DISPLAY}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${BUSINESS_NAME}. All rights reserved.</span>
        <span>Serving Lubbock County, TX &mdash; Available 24/7</span>
      </div>
    </div>
  </footer>`;
}

function renderSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    description:
      'Professional crime scene cleanup, biohazard remediation, and trauma scene cleaning services in Lubbock, Texas. Available 24/7.',
    url: 'https://www.lubbockbiohazardcleanup.com',
    telephone: '+18065458406',
    email: BUSINESS_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Lubbock',
      addressRegion: 'TX',
      postalCode: '79401',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5779,
      longitude: -101.8552,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      'Lubbock, TX',
      'Wolfforth, TX',
      'Shallowater, TX',
      'Slaton, TX',
      'Levelland, TX',
      'Brownfield, TX',
      'Lamesa, TX',
      'Post, TX',
    ],
    priceRange: '$$',
    paymentAccepted: 'Insurance, Cash, Credit Card',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Biohazard Cleanup Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Crime Scene Cleanup Lubbock TX' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Biohazard Cleanup Lubbock TX' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Suicide Cleanup Lubbock TX' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Unattended Death Cleanup Lubbock TX' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Trauma Scene Cleanup Lubbock TX' },
        },
      ],
    },
  };
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}<\/script>`;
}

function renderContactCard(title = 'Request Immediate Help') {
  return `
  <div class="contact-card">
    <h3>${title}</h3>
    <p class="sub">Available 24 hours a day &mdash; Discreet, compassionate response</p>
    <a href="${PHONE_HREF}" class="big-phone">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      ${PHONE_DISPLAY}
    </a>
    <form action="https://formspree.io/f/xzdonzkp" method="POST">
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Full name" required>
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="(806) 000-0000" required>
      </div>
      <div class="form-group">
        <label>Type of Situation</label>
        <select name="situation">
          <option value="">Select one...</option>
          <option>Unattended Death / Decomposition</option>
          <option>Homicide / Crime Scene</option>
          <option>Suicide</option>
          <option>Trauma / Accident Scene</option>
          <option>Biohazard / Blood Cleanup</option>
          <option>Hoarding Cleanup</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Brief Description (optional)</label>
        <textarea name="message" placeholder="Location, timing, any relevant details..."></textarea>
      </div>
      <button type="submit" class="form-submit">Request Callback</button>
      <p class="form-note">Completely confidential &mdash; We respond within 30 minutes</p>
    </form>
  </div>`;
}

// FAQ accordion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
});
