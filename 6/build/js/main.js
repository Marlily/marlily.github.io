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
$('.case-studies-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });

// change overflow of slick slider - image fit 
$('.case-studies-slider .slick-list').css('overflow', 'visible');


// slides case studies number pagination
$(".case-studies .slide-number-all").text($('.case-studies .slick-slide').length);

let changeNumberOfSlide = () => {

    $('.case-studies .slick-slide').each(function( index ) {

        if ( $( this ).is('.slick-active') ) {
            let actualSlide = index +1;
            $(".case-studies .slide-number-actual").text( actualSlide );          
        }  

      });
}

$('.case-studies .slick-prev').click(changeNumberOfSlide);
$('.case-studies .slick-next').click(changeNumberOfSlide);


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
let numbersSlidesOpinions = $('.slick-slide').length;

$(".opinions-slider-all").text($('.slick-dots li').length);

let changeNumberOfSlideOpinions = () => {

    $('.slick-dots li').each(function( index ) {

        if ( $( this ).is('.slick-active') ) {
            let actualSlide = index +1;
            $(".opinions-slider-current").text( actualSlide );          
        }  

      });
}

$('.opinions-slider').click(changeNumberOfSlideOpinions);
$('.opinions-slider-arrow-right').click(changeNumberOfSlideOpinions);
$('.opinions-slider-dots ul.slick-dots').click(changeNumberOfSlideOpinions);


// brands carousel 
$('.brands-items-wrapper').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
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
      scrollTop: $($(this).attr('href')).offset().top,
    },
    600,
    'linear'
  )
})

//language change
$('.change-lang-menu .lang-en').click( () => {
  $('.btn-lang-img').attr('src', 'build/images/norden-digital-uk.svg');
})

$('.change-lang-menu .lang-pl').click( () => {
  $('.btn-lang-img').attr('src', 'build/images/norden-digital-pl.svg');
})

$('.btn-lang').click( () => {
  $('.change-lang-menu').toggleClass('open');
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