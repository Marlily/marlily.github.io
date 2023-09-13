import Shuffle from 'shufflejs';
import { tns } from "tiny-slider";
import Accordion from './accordion';
import './dots';
import './dots-small';


$(() => {
    Accordion.init();
});

document.addEventListener('DOMContentLoaded', () => {

    // navigation fixed
    /* window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.navigation').classList.add('fixed');
        } else {
            document.querySelector('.navigation').classList.remove('fixed');
        }
    }); */

    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('open');
        document.querySelector('.menu-btn').classList.toggle('open');
    })




    // counter up

    if (document.querySelector('.big-data')) {
        window.addEventListener('scroll', function () {
            let statisticPositionY = document.querySelector('.big-data').offsetTop;
            const counters = document.querySelectorAll('.big-data .num span');
            const speed = 6000;

            if (statisticPositionY - 400 < this.scrollY) {

                counters.forEach(counter => {
                    const animate = () => {
                        const value = +counter.getAttribute('data-target');
                        const data = +counter.innerText;

                        const time = value / speed;
                        if (data < value) {
                            counter.innerText = Math.ceil(data + time);
                            setTimeout(animate, 1);
                        } else {
                            counter.innerText = value;
                        }

                    }

                    animate();
                });
            };

        })
    }

    // position detail - popup
    if (document.querySelector('.popup-open')) {
        document.querySelectorAll('.popup-open').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector('.popup-form').classList.add('open');
            });
        });

        document.querySelector('.popup-form .btn-close').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup-form').classList.remove('open');
        });

        document.querySelectorAll('.popup-form .btn-next').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.popup-form fieldset').forEach((item) => {
                    item.classList.remove('active');
                });

                let itemToShow = e.target.getAttribute('data-next');

                document.querySelector(itemToShow).classList.add('active');
                
            });
        });

        document.querySelectorAll('.popup-form .btn-prev').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.popup-form fieldset').forEach((item) => {
                    item.classList.remove('active');
                });

                let itemToShow = e.target.getAttribute('data-prev');

                document.querySelector(itemToShow).classList.add('active');
            });
        });
    }

    // shuffle
    if (document.querySelector('.shuffle-container')) {
        const element = document.querySelector('.shuffle-container');

        const shuffleInstance = new Shuffle(element, {
            itemSelector: '.shuffle-container > li',
            gutterWidth: 84
    
        });
    
    
        document.querySelectorAll('.shuffle-filters li button').forEach(function (el) {
            el.addEventListener('click', function () {
    
                let elementsToShow = el.dataset.target;
                shuffleInstance.filter(elementsToShow);
    
    
            })
        })
    }

    //slider - team filters
    if(document.querySelector('.team nav ul')) {
        var slider = tns({
            container: '.team nav ul',
            items: 3.5,
            slideBy: 1,
            center: false,
            controls: false,
            nav: false,
            autoplay: false,
            autoplayButtonOutput: false,
            loop: false,
            gutter: 40,
            mouseDrag: true,
            responsive: {
                "768": {
                   disable: true
                }
            }
          });

          const buttons = document.querySelectorAll('.team nav ul button');

          buttons.forEach((btn) => {
            btn.addEventListener('click', (e) => {

                buttons.forEach((i)=>{i.classList.remove('active')})
                e.target.classList.add('active');
            })
          });
    }

    if(document.querySelector('.team .shuffle-container')) {
        var slider = tns({
            container: '.team .shuffle-container',
            items: 1.4,
            slideBy: "page",
            center: false,
            controls: false,
            nav: false,
            autoplay: false,
            autoplayButtonOutput: false,
            loop: false,
            swipeAngle: false,
            autoHeight: true,
            gutter: 0,
            mouseDrag: true,
            responsive: {
                "768": {
                   disable: true
                }
            }
          });
    }

    // slider - offers
    if(document.querySelector('.offers-slider')) {
        var slider = tns({
            container: '.offers-slider',
            items: 1.2,
            slideBy: 1,
            center: false,
            controls: false,
            nav: false,
            autoplay: false,
            autoplayButtonOutput: false,
            loop: false,
            swipeAngle: false,
            autoHeight: true,
            gutter: 30,
            mouseDrag: true,
            nextButton: '.offers-arrows .next',
            prevButton: '.offers-arrows .prev',
            responsive: {
                "768": {
                    items: 2.2,
                    controls: true
                }
            }
          });
    }

    // employees 
    if(document.querySelector('.employees-ul')) {

        const emploeyees = document.querySelectorAll('.employees-ul li');

        emploeyees.forEach((li) => {
            li.addEventListener('click', function() {

                const target = this.dataset.target;

                emploeyees.forEach((i) => {
                    i.classList.remove('active');
                })

                this.classList.add('active');

                document.querySelector(target).classList.add('active');

                document.querySelectorAll('.employee').forEach((j) => {
                    j.classList.remove('active');
                })

                document.querySelector(target).classList.add('active');


            })
        });
    }




})