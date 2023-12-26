const hamburger = document.getElementById('hamburger');
const links = document.getElementById('links');
const closeHamburgerMenu = document.getElementById('close-hamburger-menu');

hamburger.addEventListener('click', () => {
    links.classList.add('move-left');
});

closeHamburgerMenu.addEventListener('click', () => {
    links.classList.remove('move-left');
});
