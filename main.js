/* ===========================
   MATTHEW PORTFOLIO — MAIN.JS
   Uses jQuery (loaded via CDN)
   =========================== */

$(function () {

  /* Mark body as js-ready so reveal animations activate safely */
  document.body.classList.add('js-ready');

  /* ── Hamburger toggle ── */
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });

  /* ── Close mobile menu on link click ── */
  $('.mobile-menu a').on('click', function () {
    $('.hamburger').removeClass('open');
    $('.mobile-menu').removeClass('open');
  });

  /* ── Active nav link (match filename) ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';
  $('.nav-links a, .mobile-menu a').each(function () {
    if ($(this).attr('href') === page) $(this).addClass('active');
  });

  /* ── Reveal on scroll ── */
  function revealOnScroll() {
    $('.reveal').each(function () {
      var top = this.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', revealOnScroll);
  revealOnScroll(); // trigger immediately for above-fold

});
