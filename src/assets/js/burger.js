const burgerButton = document.querySelector('.navabar__burger');
const navbarList = document.querySelector('.navbar__links');
burgerButton.addEventListener('click', event => {
    event.preventDefault();
    navbarList.classList.toggle('_active');
    burgerButton.classList.toggle('burger__active');
});