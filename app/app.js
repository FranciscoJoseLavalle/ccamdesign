const navbtn = document.querySelector('.navbtn');
const nav = document.querySelector('.nav');
const navBig = document.querySelector('.header__nav-ul')

navbtn.addEventListener('click', () => {
    nav.classList.toggle('ocultar');
})