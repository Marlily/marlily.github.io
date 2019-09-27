const menuButton = document.querySelector(".menu-btn");
const menuList = document.querySelector("nav ul");


/* --- MENU --- */
menuButton.addEventListener("click", function () {
    menuList.classList.toggle("clicked-button");
})


/* ---- PORTFOLIO --- */
const commercial = document.getElementsByClassName("commercial");

const residental = document.getElementsByClassName("residental");

const office = document.getElementsByClassName("office");

const projects = document.getElementsByClassName("project-bg");

const buttonAll = document.getElementById("button-all");

const buttonResidental = document.getElementById("button-residental");

const buttonCommercial = document.getElementById("button-commercial");

const buttonOffice = document.getElementById("button-office");


buttonResidental.addEventListener("click", function () {

    for (let i = 0; i < projects.length; i++) {
        
        if (projects[i].classList[2] == "residential") {
            
            projects[i].style.display = "block";
            
        } else {
            projects[i].style.display = "none";
        }
    };
});


buttonCommercial.addEventListener("click", function () {
    
    
    for (let i = 0; i < projects.length; i++) {
        
        if (projects[i].classList[2] == "commercial") {
            
            projects[i].style.display = "block";
            
        } else {
            projects[i].style.display = "none";
        }
    };
});


buttonOffice.addEventListener("click", function () {

    for (let i = 0; i < projects.length; i++) {
        
        if (projects[i].classList[2] == "office") {
            
            projects[i].style.display = "block";
            
        } else {
            projects[i].style.display = "none";
        }
    };
});

            
            
buttonAll.addEventListener("click", function () {
    
    for (let i = 0; i < projects.length; i++) {
        
            projects[i].style.display = "block";
            
    };
});