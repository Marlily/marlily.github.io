$(function() {
    
//preloader 
setTimeout( () => {
    $( ".preloader" ).animate({
        opacity: 0
      }, 1000, function() {
        $( ".preloader" ).css('display', 'none');
      });
}, 500);

//slider case studies 
$('.case-studies-slide-text').slick({
    infinite: true,
    speed: 500,
    swipe: false,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    asNavFor: '.case-studies-slide-img',
  });

$('.case-studies-slide-img').slick({
    infinite: true,
    speed: 500,
    fade: false,
    autoplay: true,
    swipe: false,
    asNavFor: '.case-studies-slide-text',
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    autoplaySpeed: 5000,

});


// slides case studies number pagination
$(".case-studies .slide-number-all").text($('.case-studies-slide-text .slick-slide').length);

let changeNumberOfSlide = () => {

    $('.case-studies-slide-text .slick-slide').each(function( index ) {

        if ( $( this ).is('.slick-active') ) {
            let actualSlide = index +1;
            $(".case-studies .slide-number-actual").text( actualSlide );     
        }  

      });
}

$('.case-studies-slide-text').on('afterChange', function(event, slick, currentSlide) {
  let actualSlide = currentSlide +1;
  $(".case-studies .slide-number-actual").text( actualSlide );

});


//slider opinions
$('.opinions-slider').slick({
    centerMode: true,
    initialSlide: 0,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
    swipe: false,
    appendDots: $('.opinions-slider-dots' ),
    prevArrow: $('.opinions-slider-arrow-left'),
    nextArrow: $('.opinions-slider-arrow-right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

 
// slides opinions number pagination
$(".opinions-slider-all").text($('.slick-dots li').length);

$('.opinions-slider').on('afterChange', function(event, slick, currentSlide) {
  let actualSlide = currentSlide +1;
  $(".opinions-slider-current").text( actualSlide );

});



//opinions - fix bug with active slide
$(window).on('resize', function(){
  setTimeout( () => {
    $('.opinions-slider').slick('setPosition');
  }, 500);
  
});

// brands carousel 
$('.brands-items-wrapper').slick({
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  mobileFirst: true,
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        autoplay: false,
        slidesToShow: 6,
        centerMode: true,
        
      
      }
    }
  ]
});


//mobile menu 
$('.menu-list').removeClass('menu-open');

let menuMobile = () => {
    $('.menu-list').toggleClass('menu-open');
}

$('.mobile-btn').click( menuMobile );
$('.nav .menu .menu-list li a').click( menuMobile );


//smooth scroll
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: ($($(this).attr('href')).offset().top) - 70,
    },
    500
  )
})


//nav on scroll
$( window).scroll( () => {

    $( this ).scrollTop() > 0 ? $('.nav').addClass('nav-scrolled') : $('.nav').removeClass('nav-scrolled')
})


//typing h1
let typing = () => {
  $('.main-heading span').text('');

  let typed = new Typed('.main-heading span', {
    strings: [
      "We listen", 
      "We plan",
      "We deliver"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    
  });
}

typing();





});