// MOBILE MENU

document.querySelector(".menu-mobile-bg").classList.remove("menu-open");
Array.from(document.querySelectorAll(".menu-item")).forEach( (e) => {
    e.classList.remove("menu-item-show");
})


document.querySelector(".menu-bars").addEventListener("click", () => {
    document.querySelector(".menu-mobile-bg").classList.toggle("menu-open");

    Array.from(document.querySelectorAll(".menu-item")).forEach( (e) => {
        e.classList.toggle("menu-item-show");
    })
})


// FAQ
let items = Array.from(document.getElementsByClassName("faq-item"));
let questions = Array.from(document.getElementsByClassName("faq-question"));
let answears = Array.from(document.getElementsByClassName("faq-answear"));
let containers = Array.from(document.getElementsByClassName("faq-text-container"));


containers.forEach( (g) => {
    g.classList.remove("faq-text-container-anim");
});

questions.forEach( (e) => {
    e.addEventListener( "click", (e) => {
        
        containers.forEach( (g) => {
            g.classList.remove("faq-text-container-anim");
        });

        answears.forEach( (d) => {
            d.style.display = "none";
        })

        questions.forEach( (f) => {
            f.style.fontWeight = 400;
        })


        for (let i=0; i<questions.length; i++) {
            containers[i].style.opacity = 0;

            if(e.target == questions[i] ) {
                
                
                questions[i].style.fontWeight = 600;
                answears[i].style.display = "inline";
                //containers[i].style.opacity = 1;
                containers[i].classList.add("faq-text-container-anim")
                
            }
        }

        });

    })


    //SCROLL TO TOP

document.querySelector(".footer-line").addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// SHOW SECTIONS - HOME


//home
let header = document.getElementById("header");
let footer = document.getElementById("footer");

//header show
window.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => {
        header.style.opacity = 1;
    }, 500);
    
})

//common elements show on scroll
window.addEventListener("scroll", () => {
    let actualScroll = window.pageYOffset;

    if (actualScroll > footer.offsetTop - 600 ) { 
        footer.style.opacity = 1;
    }
    
})


