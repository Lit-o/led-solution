$( document ).ready(function() {

  // подключаю мобильное меню

  $( ".header-cross" ).hide();
  $( ".burger-menu" ).hide();
  $( ".header-burger" ).click(function() {
    $( ".burger-menu" ).slideToggle( "middle", function() {
      $( ".header-burger" ).hide();
      $( ".header-cross" ).show();
    });
  });

  $( ".header-cross" ).click(function() {
    $( ".burger-menu" ).slideToggle( "middle", function() {
      $( ".header-cross" ).hide();
      $( ".header-burger" ).show();
    });
  });

  // подключаю карусель

  var timer;
  $(window).on('resize', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      togglePromotionsSlider();
    }, 100);
  });

  togglePromotionsSlider();

  function togglePromotionsSlider (){
    $('#slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1279,
          settings: 'unslick'
        },
      ]
    });
  }

});

// скролл к контактам

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menu__mob").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});
// скролл наверх

$(document).ready(function(){

  $('#scroll-top-btn').on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({'scrollTop':0},1000);
  });

  var timer;
  $(window).on('scroll', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      showScrollTopBtn();
    }, 100);
  });

  showScrollTopBtn();

  function showScrollTopBtn() {
    if( $(document).scrollTop() > 500 ) {
      $('#scroll-top-btn').fadeIn();
    }
    else {
      $('#scroll-top-btn').fadeOut();
    }
  }

});
