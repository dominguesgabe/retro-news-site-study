const menu = document.querySelector('#menu-toggle');
const navbar = document.querySelector('.nav');
let showing = true;

menu.addEventListener('click', () => {
    navbar.classList.toggle('mobile');
    document.body.style.overflow = showing ? "hidden" : "initial";

    showing = !showing;
})