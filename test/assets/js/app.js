//ES6 modules
import ScrollDown from './modules/scrollDown'
import Accordion from './modules/accordion'

$(() => {
    ScrollDown.init()
    Accordion.init()
});

document.addEventListener('DOMContentLoaded', () => {
    

    // navigation fixed
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            document.querySelector('.navigation').classList.add('fixed');
        } else {
            document.querySelector('.navigation').classList.remove('fixed');
        }
    });

    //mavigation toggle btn
    document.querySelector('.btn-menu').addEventListener('click', function() {
        this.classList.toggle('btn-menu-open');
        document.body.classList.toggle('menu-open');
        document.body.classList.toggle('hidden-ov');
    })

    document.querySelector('.menu-overlay').addEventListener('click', function() {
        document.querySelector('.btn-menu').classList.toggle('btn-menu-open');
        document.body.classList.toggle('menu-open');
        document.body.classList.toggle('hidden-ov');
    })

    //plus animation 
    for(let i of document.querySelectorAll('.has-plus')) {
        i.addEventListener('click', function() {
            this.classList.toggle('open');
        })
    }

    //video play
    document.getElementById("play-btn").addEventListener('click', function() {

        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    })
    
    
})