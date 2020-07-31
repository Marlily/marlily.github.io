
$(function() {
    
 

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
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    variableWidth: true,
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

$('.opinions-slider-arrow-left').click(changeNumberOfSlideOpinions);
$('.opinions-slider-arrow-right').click(changeNumberOfSlideOpinions);



//mobile menu 
$('.menu-list').removeClass('menu-open');

let menuMobile = () => {
    $('.menu-list').toggleClass('menu-open');
}

$('.mobile-btn').click( menuMobile );
$('.nav .menu .menu-list li a').click( menuMobile );



});