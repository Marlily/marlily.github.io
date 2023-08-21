
// header slider 
let myCarousel = document.querySelector('#header-carousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 0
})

//search button
document.querySelector('.btn-search').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.navbar-search').classList.toggle('open');
})

// masonry
var portoflioMacy = Macy({
  container: '.portfolio-masonry',
  columns: 3,
  trueOrder: true,
  margin: {
    x: 43,
    y: 42  
  },
  breakAt: {
    768: {
      margin: {
        x: 10,
        y: 10  
      },
      columns: 2
    }
  }
});

window.addEventListener('resize', () => {
  portoflioMacy.recalculate(true);
})

//portfolio show more
const btnShowMore = document.querySelector('#portfolio-btn');

btnShowMore.addEventListener('click', () => {
  const amount = 9;

  
  let itemsHide = document.querySelectorAll('.portfolio-item.hide');
  let itemsAll = document.querySelectorAll('.portfolio-item');

  if (itemsHide.length>0) {
    for (let i = 0; i < amount; i++) {
      itemsHide[i].classList.remove('hide');
      portoflioMacy.recalculate(true);
    }

    if(!document.querySelector('.portfolio-item.hide')) {
      document.querySelector('#portfolio-btn span.more').style.display = 'none';
      document.querySelector('#portfolio-btn span.less').style.display = 'inline';
      document.querySelector('#portfolio-btn svg').style.rotate = '180deg';
    }
  } else {
    
    for (let j = amount; j < itemsAll.length; j++) {
      itemsAll[j].classList.add('hide');
      
    }
    portoflioMacy.recalculate(true);
    document.querySelector('#portfolio-btn span.more').style.display = 'inline';
    document.querySelector('#portfolio-btn span.less').style.display = 'none';
    document.querySelector('#portfolio-btn svg').style.rotate = '0deg';
  }

})


// animations
function animateElem() {
  const items = document.querySelectorAll('[class*="animation"]')

  for (let i = 0; i < items.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = items[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", animateElem);