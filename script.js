

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const links = Array.from(navbar.getElementsByTagName('a'));
  links.forEach(link => link.classList.toggle('show'));
}

/*const togglebutton = document.getElementById('togglebutton');
const navlinks = document.getElementById('navLinks');

togglebutton.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});*/

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  