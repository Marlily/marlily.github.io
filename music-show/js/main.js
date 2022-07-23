//preloader 
setTimeout(function(){
    let overlayItems = document.querySelectorAll(".overlay-item");
    document.querySelector("img.overflow-logo").style.opacity = "0";

    let counter = 0;
    
    let i = setInterval(function(){
    
        if(counter%2 == 0) {
            overlayItems[counter].classList.add("hide-right");
        } else {
            overlayItems[counter].classList.add("hide-left");
        }
    
        counter++;
    
        if(counter === 10) {
            clearInterval(i);

            setTimeout(function(){
                document.querySelector("body").classList.remove("show-overlay");
            }, 700)
        }
    }, 110);
}, 1100);

// mobile menu
document.querySelector('.menu-btn').addEventListener('click', (e) => {
    document.querySelector('.menu-btn').classList.toggle('open');
    document.querySelector('ul.menu-list').classList.toggle('collapsed');

    if(document.querySelector('.menu-btn').classList.contains("open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
});

let itemsMenu = document.querySelectorAll("li.menu-item");

let delay = 0;
console.log(itemsMenu);
for(let i of itemsMenu) {
    console.log(i);
    i.style.animationDelay = delay + 'ms';
    delay+= 100;
}
    
// sliders 
var slider = tns({
    container: '.ticets-slider-container',
    items: 3,
    slideBy: 1,
    autoplay: true,
    nav: false,
    controls: false,
    touch: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    speed: 100,
    gutter: 15,
    mouseDrag: true,
    responsive: {
        "992": {
            gutter: 30
        }
    }
});

var slider = tns({
    container: '.slider-text--slider',
    items: 1,
    slideBy: 1,
    autoplay: true,
    nav: false,
    controls: true,
    touch: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 4000,
    speed: 500,
    controlsContainer: '.slider-text--arrows',

});

var slider = tns({
    container: '.team-slider',
    items: 1,
    slideBy: 1,
    autoplay: true,
    nav: false,
    controls: true,
    touch: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    speed: 500,
    controlsContainer: '.team--arrows',
    rewind: false,
    loop: false,
    startIndex: 0
});