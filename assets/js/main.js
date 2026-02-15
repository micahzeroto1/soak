/* ============================================
   SOAK Bathhouse — Main JS
   ============================================ */

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var burger = document.getElementById('nav-burger');
  var overlay = document.getElementById('nav-overlay');
  var overlayLinks = overlay.querySelectorAll('.nav__overlay-link');

  /* --- Mobile menu toggle --- */
  burger.addEventListener('click', function () {
    var isOpen = overlay.classList.toggle('open');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  /* Close overlay when a link is tapped */
  overlayLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      overlay.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    });
  });

  /* --- Nav shadow on scroll --- */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
})();
