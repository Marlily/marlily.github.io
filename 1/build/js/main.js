// menu
const buttonMenu = document.getElementsByClassName("button-menu")[0];
const menu = document.querySelector(".header .menu");

menu.classList.remove("open");

buttonMenu.addEventListener("click", () => {
    menu.classList.toggle("open");
})

// scroll btn
document.querySelector(".header .btn-scroll").addEventListener("click", () => {
    window.scroll({
        top: document.body.scrollHeight, 
        left: 0, 
        behavior: 'smooth' 
      });
}); 
