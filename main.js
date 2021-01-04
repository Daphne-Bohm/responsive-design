const menu = document.querySelector("[rel='menu']");
const nav = document.querySelector('.nav__list');

console.log(nav);

menu.addEventListener('click', () =>{
    nav.classList.toggle('visible-js-toggle');
})