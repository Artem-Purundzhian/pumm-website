const burgerButton = document.querySelector('.navabar__burger');
const navbarList = document.querySelector('.navbar__links');
burgerButton.addEventListener('click', event => {
    navbarList.classList.toggle('_active');
});