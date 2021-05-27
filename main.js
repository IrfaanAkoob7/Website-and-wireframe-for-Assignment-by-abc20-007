const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.main-nav')

function openMenu() {
    menuIcon.classList.toggle('open')
    nav.classList.toggle('open')
}

menuIcon.addEventListener('click', openMenu)