$(document).ready(function(){
  $('.services-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    },
    navText: ['<span class="nav-prev">&#x2190;</span>', '<span class="nav-next">&#x2192;</span>']
  });

  // Hacer flip en cualquier parte de la tarjeta
  $('.service-card').click(function(){
    $(this).toggleClass('expanded');
  });
});
