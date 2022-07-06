//  counter - statictic section
let statisticPositionY = document.getElementById('statistic').offsetTop;

window.addEventListener('scroll', function() {

    if(statisticPositionY -150 < this.scrollY) {
        const counters = document.querySelectorAll('.statistic--num');
        const speed = 2000;

        counters.forEach( counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-number');
            const data = +counter.innerText;
            
            const time = value / speed;
            if(data < value) {
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

//  mobile menu
document.querySelector(".header--menuBtn").addEventListener('click', function() {
    document.querySelector("body").classList.toggle("active");
})

document.querySelectorAll("ul.header--menu li a").forEach(function(e){
    e.addEventListener('click', function() {
        document.querySelector("body").classList.toggle("active");
    })
 })


//  reveal on scroll
let itemsToReveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', function() {
    for(let item of itemsToReveal) {
        let windowH = window.innerHeight;
        let revealTop = item.getBoundingClientRect().top;
        let revealStart = 100;

        if (revealTop < windowH - revealStart) {
            item.classList.add('revealShow');
        } else {
            item.classList.remove('revealShow');
        }
    }
})