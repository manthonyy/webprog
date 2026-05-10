$(function () {

 
  document.body.classList.add('js-ready');

  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('open');
  });


  $('.mobile-menu a').on('click', function () {
    $('.hamburger').removeClass('open');
    $('.mobile-menu').removeClass('open');
  });

 
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';
  $('.nav-links a, .mobile-menu a').each(function () {
    if ($(this).attr('href') === page) $(this).addClass('active');
  });


    $('.reveal').each(function () {
      var top = this.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll', revealOnScroll);
  revealOnScroll(); 

});
