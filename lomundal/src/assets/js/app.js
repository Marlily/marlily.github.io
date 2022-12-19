import { tns } from "tiny-slider"
import Masonry from "masonry-layout"
import Shuffle from 'shufflejs'
//ES6 modules
import Accordion from './modules/accordion'
import Faq from './modules/faq'


$(() => {
    Accordion.init();
    Faq.init();
});

document.addEventListener('DOMContentLoaded', () => {

    // navigation fixed
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.navigation').classList.add('fixed');
        } else {
            document.querySelector('.navigation').classList.remove('fixed');
        }
    });

    //mavigation toggle btn
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        this.classList.toggle('open');
        document.querySelector('.primary-menu').classList.toggle('open');
    })

    if (window.innerWidth < 1024) {
        document.querySelectorAll('.dropdown').forEach(function (e) {
            e.addEventListener('click', (event) => {
                e.classList.toggle('open');
                if (e.classList.contains('open')) {
                    e.querySelector('ul').style.maxHeight = '0';
                }
                e.querySelector('ul').style.maxHeight = e.querySelector('ul').scrollHeight + 'px';
            });
        })
    }





    // slider 
    if (document.querySelector('#header-slider')) {
        var slider = tns({
            container: '#header-slider',
            items: 1.186,
            slideBy: 'page',
            autoplay: false,
            controls: false,
            prevButton: false,
            nextButton: false,
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: '25',
            preventScrollOnTouch: 'auto',
            mouseDrag: true,
            responsive: {
                1200: {
                    items: 3,
                    slideBy: 'page',
                    gutter: '40'
                },
                992: {
                    items: 3,
                    slideBy: 'page',
                    gutter: '30'
                }
            }
        });
    }

    if (document.querySelector('.tjenester-cards ul')) {
        var slider = tns({
            container: '.tjenester-cards ul',
            items: 1.186,
            slideBy: 1,
            autoplay: false,
            controls: false,
            prevButton: false,
            nextButton: false,
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: '25',
            loop: false,
            mouseDrag: true,
            preventScrollOnTouch: 'auto',
            responsive: {
                767: {
                    items: 2,
                    slideBy: 'page',
                    gutter: '40'
                },
                1200: {
                    items: 4,
                    slideBy: 1,
                    gutter: '40',
                    loop: false
                }
            }
        });
    }


    //homepage and referenser - masonry desktop, slider mobile
    if (document.querySelector('#prosjekter-slider')) {
        //init slider 
        var sliderMasonry = tns({
            container: '#prosjekter-slider',
            items: 1.186,
            slideBy: 1,
            autoplay: false,
            controls: false,
            prevButton: false,
            nextButton: false,
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: '25',
            loop: false,
            preventScrollOnTouch: 'auto',
            mouseDrag: true
        });
    }

    if (document.querySelector('#prosjekter-masonry')) {
        //init masonry
        const shuffleContainer = document.getElementById('prosjekter-masonry');

        const shuffleInstance = new Shuffle(shuffleContainer, {
            itemSelector: '.filtr-item',
            gutterWidth: 40
        });

        shuffleInstance.filter(document.querySelector('.prosjekter-desktop .tabs-filter:first-of-type').dataset.target);

        document.querySelectorAll('.prosjekter-desktop .tabs-filter').forEach(function (el) {
            el.addEventListener('click', function () {
                let elementsToShow = el.dataset.target;
                shuffleInstance.filter(elementsToShow);
            })
        })

        // save elements for filters
        let allLi = [];
        document.querySelectorAll('.prosjekter-mobile .filtr-item').forEach(function (li) {
            allLi.push(li);
        })

        document.querySelectorAll('.prosjekter-mobile .tabs-filter').forEach(function (el) {
            el.addEventListener('click', function () {
                sliderMasonry.destroy();
                let elementsToShow = el.dataset.target;

                document.querySelectorAll('.prosjekter-mobile .filtr-item').forEach(function (li) {
                    li.remove();

                    allLi.forEach(function (allLLiElem) {
                        allLLiElem.style.opacity = "0";
                        allLLiElem.style.transition = "all 0.5s";
                        if (allLLiElem.dataset.groups.includes(elementsToShow)) {
                            document.querySelector('.prosjekter-mobile .prosjekter-grid').appendChild(allLLiElem);
                            allLLiElem.style.opacity = "1";
                        }
                    });

                })

                sliderMasonry = sliderMasonry.rebuild();
            })
        })





        if (document.querySelector('.js-shuffle-search')) {
            document.querySelector('.js-shuffle-search').addEventListener('keyup', handleSearchKeyup);

            function handleSearchKeyup(event) {
                const searchText = event.target.value.toLowerCase();

                shuffleInstance.filter((element, shuffle) => {
                    const searchElement = element.dataset.search;
                    const titleText = searchElement.toLowerCase().trim();

                    return titleText.includes(searchText);
                });
            }
        }


    }

    //tabs
    if (document.querySelector('.tabs')) {
        let allItems = document.querySelectorAll('.tabs ul li');
        allItems.forEach(function (e) {
            e.addEventListener('click', function () {
                allItems.forEach(function (f) {
                    f.classList.remove('active');
                })

                e.classList.add('active')
            })
        })
    }

    //univers slider
    if (document.querySelector('.univers-slider')) {
        var sliderProsjekter = tns({
            container: '.univers-slider',
            items: 1.186,
            slideBy: 'page',
            autoplay: false,
            controls: true,
            controlsText: ['', ''],
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: '24',
            preventScrollOnTouch: 'auto',
            loop: false,
            mouseDrag: true,
            responsive: {
                767: {
                    items: 2,
                    slideBy: 'page',
                    gutter: '40'
                },
                1200: {
                    items: 4.2,
                    slideBy: 1,
                    gutter: '40'
                }
            }
        });
    }

    //custom sliders - universal use
    if (document.querySelectorAll('.custom-slider').length > 0) {

        document.querySelectorAll('.custom-slider').forEach(slider => {

            tns({
                container: slider,
                items: 1.186,
                slideBy: 'page',
                autoplay: false,
                controls: true,
                controlsText: ['', ''],
                nav: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                gutter: '24',
                preventScrollOnTouch: 'auto',
                loop: false,
                mouseDrag: true,
                responsive: {
                    767: {
                        items: 2,
                        slideBy: 'page',
                        gutter: '40'
                    },
                    1200: {
                        items: 3.5,
                        slideBy: 1,
                        gutter: '32'
                    }
                }
            });
        });
    }



    if (document.querySelectorAll('.custom-slider-podcasts').length > 0) {

        document.querySelectorAll('.custom-slider-podcasts').forEach(slider => {

            tns({
                container: slider,
                items: 1.186,
                slideBy: 'page',
                autoplay: false,
                controls: true,
                controlsText: ['', ''],
                nav: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                gutter: '24',
                preventScrollOnTouch: 'auto',
                loop: false,
                mouseDrag: true,
                responsive: {
                    767: {
                        items: 2,
                        slideBy: 'page',
                        gutter: '40'
                    },
                    1200: {
                        items: 2.4,
                        slideBy: 1,
                        gutter: '40'
                    }
                }
            });
        });
    }

    //testimonials
    if (document.querySelector('.testimonials-slider')) {
        var slider = tns({
            container: '.testimonials-slider',
            items: 1,
            slideBy: 1,
            autoplay: false,
            controls: true,
            controlsText: ['', ''],
            nav: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            gutter: '25',
            loop: false,
            preventScrollOnTouch: 'auto'
        });
    }



    //play video
    if (document.querySelector('.section-video')) {
        document.querySelector(".btn-play").addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        })
    }

    if (document.querySelector('#scroll-up')) {

        document.querySelector("#scroll-up").addEventListener('click', function (e) {
            e.preventDefault();
            console.log('dasda');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })

    }
})
