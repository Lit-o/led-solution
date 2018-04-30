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

  // var timer;
  // $(window).on('resize', function(){
  //   if ( timer ) clearTimeout(timer);
  //   timer = setTimeout(function(){
  //     togglePromotionsSlider();
  //   }, 100);
  // });

  // togglePromotionsSlider();

  // function togglePromotionsSlider (){
  //   $('.about-company__foto-slider').slick({
  //     mobileFirst: true,
  //     infinite: true,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 0,
  //         settings: {
  //           slidesToShow: 1,
  //         }
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 3,
  //         }
  //       },
  //       {
  //         breakpoint: 1279,
  //         settings: 'unslick'
  //       },
  //     ]
  //   });
  // }

  // рабочий слайдер о компании
  $('.about-company__foto-slider').slick({
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    pauseOnDotsHover: true,
  });


  // делаю слайдер для мобильной версии

  checkMedia(); // запускаем чек окна при открытии страницы
  $(window).on('resize', function() { // запускаем чек при каждом ресайзе окна
    checkMedia();
  });

  function checkMedia() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('.stages-container').slick();
      $('.stages').find('ol').removeClass('stages-container--mobile').addClass('stages-container');
      $('.stages-container').slick('unslick');
      }

    if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {
      $('.stages').find('ol').removeClass('stages-container').addClass('stages-container--mobile');
      $('.stages-container--mobile').slick({
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        // centerMode: true,
        // centerPadding: '0px',
        dots: false,
        // pauseOnDotsHover: true,
      });
      }
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
