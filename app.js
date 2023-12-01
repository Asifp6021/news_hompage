const navOpenBtn = document.querySelector('.header__content--open');
const navCloseBtn = document.querySelector('.header__content--nav-close')

const navBar = document.querySelector('.header__content--nav ');

const bodyEl = document.querySelector('body');

navOpenBtn.addEventListener('click', function() {
    navBar.classList.toggle('display-nav');
    bodyEl.classList.add('overlay')
});

navCloseBtn.addEventListener('click', function() {
    navBar.classList.toggle('display-nav');
    bodyEl.classList.remove('overlay')
})