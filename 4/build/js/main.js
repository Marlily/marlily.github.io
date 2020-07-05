const menu = document.querySelector(".menu-open");
console.log(menu);
const buttonClose = document.querySelector(".menu-button-close");
const buttonOpen = document.querySelector(".menu-button");

buttonOpen.addEventListener("click", function() {
    menu.style.display = "flex";
});

buttonClose.addEventListener("click", function() {
    menu.style.display = "none";
});


//scroll buttons
const buttonDown = document.getElementById("block-arrow-down");
const buttonUp = document.getElementById("block-arrow-up");
let footerTop = document.querySelector("#footer").offsetTop;
let navTop = document.querySelector("#nav").offsetTop;

buttonDown.addEventListener("click", function() {

    window.scroll({
        top: footerTop, 
        behavior: 'smooth'
      });
});

buttonUp.addEventListener("click", function() {
    window.scroll({
        top: navTop, 
        behavior: 'smooth'
      });
});