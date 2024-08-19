// open and close menu in header
function toggleEventClick() {
  const headerElement = document.querySelector('.header');
  const iconClick = headerElement.querySelector('.menu-mobile .menu-icon');
  const menuContentElement = headerElement.querySelector('.nav-bar-app.nav-mobile');

  document.body.classList.toggle('no-scroll');
  iconClick?.classList.toggle('active');
  menuContentElement?.classList.toggle('active');
  headerElement?.classList.toggle('bg-menu');
}
