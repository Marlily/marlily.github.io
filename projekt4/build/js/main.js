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

questions.forEach( (e) => {
    e.addEventListener( "click", (e) => {

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
                containers[i].style.opacity = 1;
                
            }
        }

        });

    })


    //SCROLL TO TOP

document.querySelector(".footer-line").addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

    







