const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLink.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
//slider
const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

    slides[index].classList.remove("active");

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");

}, 3000);
//menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const icon = document.querySelector(".hamburger i");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
/*const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    alert("Ça marche !");
});*/
/*const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');

    console.log(navLinks);

});*/
