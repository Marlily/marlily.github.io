//slider
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // lightbox
    document.querySelectorAll('.slider-wrapper > img').forEach( (item) => {
    item.addEventListener('click', (e) => {
      document.querySelector('.lightbox .modal > img').src = e.target.src;
      document.querySelector('.lightbox').classList.add('show');
    })
  } )

  document.querySelector('.lightbox .modal > button').addEventListener('click', () => {
    document.querySelector('.lightbox').classList.remove('show')
  })

  document.querySelector('.lightbox').addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-img') || e.target.classList.contains('modal')) {
      console.log('modal-img')
    } else {
      document.querySelector('.lightbox').classList.remove('show')
    }
  })

  //mobile menu
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('ul.menu').classList.toggle('open');
    document.querySelector('.menu-btn').classList.toggle('open');
  })