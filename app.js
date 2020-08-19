const burgerMenu = document.querySelector('.burger-menu');
const linkItems = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () =>
  linkItems.classList.toggle('toggle')
);

document.addEventListener('click', (e) => {});
