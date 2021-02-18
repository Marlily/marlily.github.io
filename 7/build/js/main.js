//sliders
const slider1 = tns({ 
    "container": ".specialization-slider",
    "items": 1,
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "nav": false,
	preventScrollOnTouch: 'force',
    gutter: 40,
    loop: false,
    prevButton: "#specialization-prev",
    nextButton: "#specialization-next",
    "responsive": {
        "992": {
          "items": 3,
          "controls": true
        },
      },
});

const slider2 = tns({ 
  "container": ".services-slider",
  "items": 1,
  "mouseDrag": true,
  "swipeAngle": false,
  "speed": 400,
  "nav": false,
  'gutter': 40,
  preventScrollOnTouch: 'force',
  loop: false,
  prevButton: "#services-prev",
  nextButton: "#services-next",
  "responsive": {
      "992": {
        "items": 3,
        "controls": true
      },
    },
});

//scroll to top
$('.scroll').click( function() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
})



 