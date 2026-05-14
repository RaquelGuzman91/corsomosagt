//abre la ventana de los enlaces y los filtra
const openButton = document.getElementById('open-filter');
const closeButton = document.getElementById('close-filter');
const sideNav = document.getElementById('main');
const navLinks = sideNav.querySelectorAll('a');
const filterOverlay = document.getElementById('overlay-filter')

function openNav() {
  sideNav.classList.add('open');
  filterOverlay.classList.add('active');
}

function closeNav() {
  sideNav.classList.remove('open');
  filterOverlay.classList.remove('active');
}

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
filterOverlay.addEventListener('click', closeNav)

// cerrar al dar clic en cualquier enlace dentro del nav
navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

